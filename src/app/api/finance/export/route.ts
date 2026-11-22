import { NextRequest, NextResponse } from "next/server";
import { getFinanceUser } from "@/lib/finance-auth";
import { withFinanceDb } from "@/lib/finance-db";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const csv=(value:any)=>{const s=String(value??"");return /[",\n]/.test(s)?'"'+s.replace(/"/g,'""')+'"':s;};
export async function GET(request:NextRequest){
 const user=await getFinanceUser(request); if(!user)return NextResponse.json({error:"Unauthorized"},{status:401});
 const days=Number(request.nextUrl.searchParams.get("days")??90); const valid=[30,90,180,365].includes(days)?days:90;
 const rows=await withFinanceDb(user,async c=>(await c.query("SELECT transaction_date,transaction_type,category,description,amount,currency,reference,status FROM finance_transactions WHERE transaction_date >= CURRENT_DATE - ($1::int * INTERVAL '1 day') ORDER BY transaction_date DESC",[valid])).rows);
 const header=["Date","Type","Category","Description","Amount","Currency","Reference","Status"];
 const body=rows.map(r=>[r.transaction_date,r.transaction_type,r.category,r.description,r.amount,r.currency,r.reference,r.status].map(csv).join(","));
 return new Response([header.join(","),...body].join("\r\n"),{headers:{"Content-Type":"text/csv; charset=utf-8","Content-Disposition":'attachment; filename="senscore-financial-transactions.csv"',"Cache-Control":"no-store"}});
}
