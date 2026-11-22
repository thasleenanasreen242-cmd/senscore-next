import { NextRequest, NextResponse } from "next/server";
import { getFinanceUser } from "@/lib/finance-auth";
import { withFinanceDb } from "@/lib/finance-db";
export const runtime="nodejs";
export const dynamic="force-dynamic";
export async function GET(request:NextRequest){
 const user=await getFinanceUser(request);if(!user)return NextResponse.json({error:"Unauthorized"},{status:401});
 try{
  const rows=await withFinanceDb(user,async c=>(await c.query(`
   SELECT i.id,i.invoice_number,i.invoice_type,i.issue_date,i.due_date,i.amount,i.amount_paid,i.currency,
    CASE WHEN i.status IN ('unpaid','partially_paid','overdue') AND i.due_date<CURRENT_DATE THEN 'overdue' ELSE i.status END AS status,
    i.description,c.name AS customer_name
   FROM finance_invoices i LEFT JOIN finance_customers c ON c.id=i.customer_id
   WHERE i.status <> 'void' ORDER BY i.due_date ASC,i.created_at DESC LIMIT 250
  `)).rows);
  return NextResponse.json({invoices:rows.map(r=>({...r,amount:Number(r.amount),amount_paid:Number(r.amount_paid)}))});
 }catch(e){console.error("Invoice list failed",e);return NextResponse.json({error:"Unable to load invoices."},{status:500});}
}
export async function POST(request:NextRequest){
 const user=await getFinanceUser(request);if(!user)return NextResponse.json({error:"Unauthorized"},{status:401});
 if(user.role==="viewer")return NextResponse.json({error:"View-only access."},{status:403});
 try{
  const b=await request.json();const number=String(b.invoiceNumber??"").trim().slice(0,60);const type=String(b.type??"");const customer=String(b.customer??"").trim().slice(0,160);const description=String(b.description??"").trim().slice(0,240);const amount=Number(b.amount);const issue=String(b.issueDate??"");const due=String(b.dueDate??"");
  if(!number||!["receivable","payable"].includes(type)||!customer||!Number.isFinite(amount)||amount<=0||amount>999999999999999||!/^\\d{4}-\\d{2}-\\d{2}$/.test(issue)||!/^\\d{4}-\\d{2}-\\d{2}$/.test(due)||due<issue)return NextResponse.json({error:"Check invoice number, type, customer, amount and dates."},{status:400});
  const row=await withFinanceDb(user,async c=>{
   const found=await c.query("SELECT id FROM finance_customers WHERE lower(name)=lower($1) LIMIT 1",[customer]);
   const customerId=found.rows[0]?.id??(await c.query("INSERT INTO finance_customers(name) VALUES($1) RETURNING id",[customer])).rows[0].id;
   const r=await c.query(`INSERT INTO finance_invoices(invoice_number,customer_id,invoice_type,issue_date,due_date,amount,amount_paid,currency,status,description)
    VALUES($1,$2,$3,$4,$5,$6,0,'AED',$7,$8)
    RETURNING id,invoice_number,invoice_type,issue_date,due_date,amount,amount_paid,currency,status,description`,
    [number,customerId,type,issue,due,amount,due<new Date().toISOString().slice(0,10)?"overdue":"unpaid",description]);
   await c.query("INSERT INTO financial_audit_logs(actor_id,action,entity_type,entity_id,details) VALUES($1,'create','invoice',$2,$3)",[user.id,r.rows[0].id,JSON.stringify({invoiceNumber:number,type,amount})]);
   return r.rows[0];
  });
  return NextResponse.json({invoice:{...row,amount:Number(row.amount),amount_paid:Number(row.amount_paid)}},{status:201});
 }catch(e){console.error("Invoice create failed",e);return NextResponse.json({error:"Unable to create invoice. Check that the invoice number is unique."},{status:500});}
}
export async function PATCH(request:NextRequest){
 const user=await getFinanceUser(request);if(!user)return NextResponse.json({error:"Unauthorized"},{status:401});
 if(user.role==="viewer")return NextResponse.json({error:"View-only access."},{status:403});
 try{
  const b=await request.json();const id=String(b.id??"");const paid=Number(b.amountPaid);
  if(!/^[0-9a-f-]{36}$/i.test(id)||!Number.isFinite(paid)||paid<0)return NextResponse.json({error:"Enter a valid invoice and paid amount."},{status:400});
  const row=await withFinanceDb(user,async c=>{
   const current=await c.query("SELECT amount,invoice_number FROM finance_invoices WHERE id=$1 AND status<>'void'",[id]);
   if(!current.rows[0])throw new Error("Invoice not found.");
   if(paid>Number(current.rows[0].amount))throw new Error("Paid amount cannot exceed invoice total.");
   const status=paid===Number(current.rows[0].amount)?"paid":paid>0?"partially_paid":"unpaid";
   const updated=await c.query("UPDATE finance_invoices SET amount_paid=$2,status=$3,updated_at=now() WHERE id=$1 RETURNING id,invoice_number,amount,amount_paid,status",[id,paid,status]);
   await c.query("INSERT INTO financial_audit_logs(actor_id,action,entity_type,entity_id,details) VALUES($1,'payment_update','invoice',$2,$3)",[user.id,id,JSON.stringify({amountPaid:paid,status})]);
   return updated.rows[0];
  });
  return NextResponse.json({invoice:{...row,amount:Number(row.amount),amount_paid:Number(row.amount_paid)}});
 }catch(e){const message=e instanceof Error?e.message:"Unable to update invoice.";return NextResponse.json({error:message},{status:400});}
}
