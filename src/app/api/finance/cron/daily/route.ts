import {NextRequest,NextResponse} from "next/server";
import {timingSafeEqual} from "node:crypto";
import {pool} from "@/lib/finance-db";
export const runtime="nodejs";
export const dynamic="force-dynamic";
export async function GET(request:NextRequest){
 const secret=process.env.FINANCE_CRON_SECRET??"";
 const auth=request.headers.get("authorization")??"";
 const supplied=Buffer.from(auth.replace(/^Bearer\\s+/i,""));
 const expected=Buffer.from(secret);
 if(!secret||supplied.length!==expected.length||!timingSafeEqual(supplied,expected))return NextResponse.json({error:"Unauthorized"},{status:401});
 const client=await pool.connect();
 try{
  await client.query("BEGIN");
  await client.query("SELECT set_config('app.finance_role','admin',true),set_config('app.finance_user_id','system-cron',true)");
  const overdue=await client.query("UPDATE finance_invoices SET status='overdue',updated_at=now() WHERE invoice_type='receivable' AND status IN ('unpaid','partially_paid') AND due_date<CURRENT_DATE RETURNING id");
  const snapshot=await client.query(`
   WITH daily AS (
    SELECT COALESCE(SUM(amount) FILTER(WHERE transaction_type='income'),0)::numeric AS revenue,
     COALESCE(SUM(amount) FILTER(WHERE transaction_type='expense'),0)::numeric AS expenses
    FROM finance_transactions WHERE status='posted' AND transaction_date=CURRENT_DATE
   ), cash AS (
    SELECT COALESCE(SUM(a.opening_balance+COALESCE(t.net,0)),0)::numeric AS balance
    FROM finance_accounts a LEFT JOIN (
     SELECT account_id,SUM(CASE WHEN transaction_type='income' THEN amount WHEN transaction_type='expense' THEN -amount ELSE 0 END) AS net
     FROM finance_transactions WHERE status='posted' GROUP BY account_id
    ) t ON t.account_id=a.id WHERE a.is_active=true
   ), invoices AS (
    SELECT COALESCE(SUM(amount-amount_paid) FILTER(WHERE invoice_type='receivable' AND status NOT IN ('paid','void','draft')),0)::numeric AS receivables,
     COALESCE(SUM(amount-amount_paid) FILTER(WHERE invoice_type='payable' AND status NOT IN ('paid','void','draft')),0)::numeric AS payables
    FROM finance_invoices
   )
   INSERT INTO financial_snapshots(snapshot_date,currency,revenue,expenses,profit,cash_balance,receivables,payables,source)
   SELECT CURRENT_DATE,'AED',daily.revenue,daily.expenses,daily.revenue-daily.expenses,cash.balance,invoices.receivables,invoices.payables,'daily_cron'
   FROM daily,cash,invoices
   ON CONFLICT(snapshot_date,currency) DO UPDATE SET revenue=EXCLUDED.revenue,expenses=EXCLUDED.expenses,profit=EXCLUDED.profit,cash_balance=EXCLUDED.cash_balance,receivables=EXCLUDED.receivables,payables=EXCLUDED.payables,source='daily_cron'
   RETURNING id,snapshot_date
  `);
  const overdueTotal=await client.query("SELECT COUNT(*)::int AS count,COALESCE(SUM(amount-amount_paid),0)::numeric AS total FROM finance_invoices WHERE invoice_type='receivable' AND status='overdue'");
  if(overdueTotal.rows[0].count>0){
   await client.query(`INSERT INTO financial_alerts(alert_type,severity,title,message)
    SELECT 'overdue','warning',$1,$2
    WHERE NOT EXISTS(SELECT 1 FROM financial_alerts WHERE alert_type='overdue' AND title=$1 AND created_at::date=CURRENT_DATE)`,
    [`${overdueTotal.rows[0].count} overdue customer invoice(s)`,`AED ${Number(overdueTotal.rows[0].total).toLocaleString("en-AE")} in customer receivables are overdue.`]);
  }
  await client.query("COMMIT");
  return NextResponse.json({ok:true,invoicesMarkedOverdue:overdue.rowCount,snapshotDate:snapshot.rows[0]?.snapshot_date});
 }catch(e){await client.query("ROLLBACK");console.error("Finance daily job failed",e);return NextResponse.json({error:"Daily finance job failed."},{status:500});}
 finally{client.release();}
}
