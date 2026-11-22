import {NextRequest,NextResponse} from "next/server";
import {getFinanceUser} from "@/lib/finance-auth";
import {withFinanceDb} from "@/lib/finance-db";
export const runtime="nodejs";export const dynamic="force-dynamic";
export async function GET(request:NextRequest){
 const user=await getFinanceUser(request);if(!user)return NextResponse.json({error:"Unauthorized"},{status:401});
 try{
  const rows=await withFinanceDb(user,async c=>(await c.query(`
   SELECT a.id,a.name,a.account_type,a.currency,a.opening_balance,a.is_active,
    a.opening_balance+COALESCE(SUM(CASE WHEN t.transaction_type='income' THEN t.amount WHEN t.transaction_type='expense' THEN -t.amount ELSE 0 END),0) AS current_balance
   FROM finance_accounts a LEFT JOIN finance_transactions t ON t.account_id=a.id AND t.status='posted'
   WHERE a.is_active=true GROUP BY a.id ORDER BY a.created_at DESC
  `)).rows);
  return NextResponse.json({accounts:rows.map(r=>({...r,opening_balance:Number(r.opening_balance),current_balance:Number(r.current_balance)}))});
 }catch(e){console.error(e);return NextResponse.json({error:"Unable to load accounts."},{status:500});}
}
export async function POST(request:NextRequest){
 const user=await getFinanceUser(request);if(!user)return NextResponse.json({error:"Unauthorized"},{status:401});
 if(user.role!=="admin")return NextResponse.json({error:"Only administrators can add bank or cash accounts."},{status:403});
 try{
  const b=await request.json();const name=String(b.name??"").trim().slice(0,120),type=String(b.type??""),currency=String(b.currency??"AED").toUpperCase(),opening=Number(b.openingBalance);
  if(!name||!["bank","cash","other"].includes(type)||currency!=="AED"||!Number.isFinite(opening)||Math.abs(opening)>999999999999999)return NextResponse.json({error:"Enter valid account details."},{status:400});
  const row=await withFinanceDb(user,async c=>{
   const r=await c.query("INSERT INTO finance_accounts(name,account_type,currency,opening_balance) VALUES($1,$2,$3,$4) RETURNING id,name,account_type,currency,opening_balance,is_active",[name,type,currency,opening]);
   await c.query("INSERT INTO financial_audit_logs(actor_id,action,entity_type,entity_id,details) VALUES($1,'create','account',$2,$3)",[user.id,r.rows[0].id,JSON.stringify({name,type,currency,openingBalance:opening})]);
   return r.rows[0];
  });
  return NextResponse.json({account:{...row,opening_balance:Number(row.opening_balance),current_balance:Number(row.opening_balance)}},{status:201});
 }catch(e){console.error(e);return NextResponse.json({error:"Unable to save account."},{status:500});}
}
