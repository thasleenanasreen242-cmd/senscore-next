import { NextRequest, NextResponse } from "next/server";
import { getFinanceUser } from "@/lib/finance-auth";
import { withFinanceDb } from "@/lib/finance-db";
export const runtime="nodejs";export const dynamic="force-dynamic";
const csv=(value:any)=>{let s=String(value??"");if(/^[=+@\\-\\t\\r]/.test(s))s="'"+s;return /[",\\n\\r]/.test(s)?'"'+s.replace(/"/g,'""')+'"':s;};
export async function GET(request:NextRequest){
 const user=await getFinanceUser(request);if(!user)return NextResponse.json({error:"Unauthorized"},{status:401});
 const kind=request.nextUrl.searchParams.get("type")??"transactions";const days=Number(request.nextUrl.searchParams.get("days")??90);const valid=[30,90,180,365].includes(days)?days:90;
 try{
  const result=await withFinanceDb(user,async c=>{
   if(kind==="invoices")return {name:"senscore-invoices.csv",header:["Invoice","Type","Customer","Issue date","Due date","Amount AED","Paid AED","Outstanding AED","Status"],rows:(await c.query(`SELECT i.invoice_number,i.invoice_type,COALESCE(c.name,''),i.issue_date,i.due_date,i.amount,i.amount_paid,i.amount-i.amount_paid,CASE WHEN i.status IN ('unpaid','partially_paid','overdue') AND i.due_date<CURRENT_DATE THEN 'overdue' ELSE i.status END FROM finance_invoices i LEFT JOIN finance_customers c ON c.id=i.customer_id WHERE i.status<>'void' ORDER BY i.due_date DESC`)).rows};
   if(kind==="budgets")return {name:"senscore-budgets.csv",header:["Budget","Category","Start","End","Budget AED"],rows:(await c.query("SELECT name,category,period_start,period_end,budget_amount FROM financial_budgets ORDER BY period_start DESC")).rows};
   if(kind==="accounts")return {name:"senscore-account-balances.csv",header:["Account","Type","Currency","Opening balance","Current balance"],rows:(await c.query("SELECT a.name,a.account_type,a.currency,a.opening_balance,a.opening_balance+COALESCE(SUM(CASE WHEN t.transaction_type='income' THEN t.amount WHEN t.transaction_type='expense' THEN -t.amount ELSE 0 END),0) FROM finance_accounts a LEFT JOIN finance_transactions t ON t.account_id=a.id AND t.status='posted' WHERE a.is_active=true GROUP BY a.id ORDER BY a.name")).rows};
   if(kind==="scenarios")return {name:"senscore-forecast-scenarios.csv",header:["Scenario","Description","Horizon days","Assumptions","Created"],rows:(await c.query("SELECT name,description,horizon_days,assumptions::text,created_at FROM forecast_scenarios ORDER BY created_at DESC")).rows};
   return {name:"senscore-financial-transactions.csv",header:["Date","Type","Category","Description","Amount","Currency","Reference","Status"],rows:(await c.query("SELECT transaction_date,transaction_type,category,description,amount,currency,reference,status FROM finance_transactions WHERE transaction_date >= CURRENT_DATE - ($1::int * INTERVAL '1 day') ORDER BY transaction_date DESC",[valid])).rows};
  });
  const lines=result.rows.map((r:any)=>Object.values(r).map(csv).join(","));
  return new Response([result.header.map(csv).join(","),...lines].join("\r\n"),{headers:{"Content-Type":"text/csv; charset=utf-8","Content-Disposition":`attachment; filename="${result.name}"`,"Cache-Control":"no-store"}});
 }catch(e){console.error("Finance export failed",e);return NextResponse.json({error:"Unable to export finance data."},{status:500});}
}
