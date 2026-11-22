import { NextRequest, NextResponse } from "next/server";
import { getFinanceUser } from "@/lib/finance-auth";
import { withFinanceDb } from "@/lib/finance-db";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const user = await getFinanceUser(request);
  if (!user) return NextResponse.json({ error:"Unauthorized" }, { status:401 });
  const daysRaw = Number(request.nextUrl.searchParams.get("days") ?? 90);
  const days = [30,90,180,365].includes(daysRaw) ? daysRaw : 90;
  const bucket = days <= 30 ? "day" : days <= 90 ? "week" : "month";
  try {
    const data = await withFinanceDb(user, async client => {
      const [totals, cash, invoices, series, recent, customers] = await Promise.all([
        client.query(`SELECT
          COALESCE(SUM(amount) FILTER (WHERE transaction_type='income'),0)::numeric(18,2) AS revenue,
          COALESCE(SUM(amount) FILTER (WHERE transaction_type='expense'),0)::numeric(18,2) AS expenses,
          COALESCE(SUM(amount) FILTER (WHERE transaction_type='income'),0) - COALESCE(SUM(amount) FILTER (WHERE transaction_type='expense'),0) AS net_cash_flow
          FROM finance_transactions WHERE status='posted' AND transaction_date >= CURRENT_DATE - ($1::int * INTERVAL '1 day')`,[days]),
        client.query(`SELECT COALESCE(SUM(a.opening_balance),0) + COALESCE(SUM(t.net),0) AS balance FROM finance_accounts a LEFT JOIN (SELECT account_id,SUM(CASE WHEN transaction_type='income' THEN amount WHEN transaction_type='expense' THEN -amount ELSE 0 END) AS net FROM finance_transactions WHERE status='posted' GROUP BY account_id) t ON t.account_id=a.id WHERE a.is_active=true`),
        client.query(`SELECT
          COALESCE(SUM(amount-amount_paid) FILTER (WHERE invoice_type='receivable' AND status NOT IN ('paid','void','draft')),0) AS receivables,
          COALESCE(SUM(amount-amount_paid) FILTER (WHERE invoice_type='payable' AND status NOT IN ('paid','void','draft')),0) AS payables,
          COALESCE(SUM(amount-amount_paid) FILTER (WHERE invoice_type='receivable' AND due_date < CURRENT_DATE AND status NOT IN ('paid','void','draft')),0) AS overdue_receivables,
          COUNT(*) FILTER (WHERE due_date < CURRENT_DATE AND status NOT IN ('paid','void','draft'))::int AS overdue_count
          FROM finance_invoices`),
        client.query(`SELECT to_char(date_trunc('${bucket}',transaction_date),'YYYY-MM-DD') AS period,
          COALESCE(SUM(amount) FILTER (WHERE transaction_type='income'),0)::numeric(18,2) AS revenue,
          COALESCE(SUM(amount) FILTER (WHERE transaction_type='expense'),0)::numeric(18,2) AS expenses
          FROM finance_transactions WHERE status='posted' AND transaction_date >= CURRENT_DATE - ($1::int * INTERVAL '1 day')
          GROUP BY 1 ORDER BY 1`,[days]),
        client.query(`SELECT t.id,t.transaction_type,t.category,t.description,t.amount,t.currency,t.transaction_date,t.reference,c.name AS customer
          FROM finance_transactions t LEFT JOIN finance_customers c ON c.id=t.customer_id
          ORDER BY t.transaction_date DESC,t.created_at DESC LIMIT 8`),
        client.query("SELECT COUNT(*)::int AS total FROM finance_customers")
      ]);
      const revenue = Number(totals.rows[0].revenue);
      const expenses = Number(totals.rows[0].expenses);
      const profit = revenue - expenses;
      const margin = revenue > 0 ? profit / revenue * 100 : null;
      const alerts = [];
      const overdue = Number(invoices.rows[0].overdue_count);
      if (overdue > 0) alerts.push({type:"overdue",severity:"warning",title:`${overdue} overdue invoice${overdue===1?"":"s"}`,message:`AED ${Number(invoices.rows[0].overdue_receivables).toLocaleString("en-AE")} in receivables are past due.`});
      if (margin !== null && margin < 10) alerts.push({type:"margin",severity:"warning",title:"Low net margin",message:`Net margin for the selected period is ${margin.toFixed(1)}%.`});
      if (revenue === 0 && expenses > 0) alerts.push({type:"cash",severity:"critical",title:"Expenses without recorded revenue",message:"Expenses are recorded in this period, but no revenue transactions were found."});
      return {
        periodDays:days,currency:"AED",
        metrics:{revenue,expenses,profit,margin,netCashFlow:Number(totals.rows[0].net_cash_flow),cashBalance:Number(cash.rows[0].balance),receivables:Number(invoices.rows[0].receivables),payables:Number(invoices.rows[0].payables),overdueReceivables:Number(invoices.rows[0].overdue_receivables),overdueCount:overdue,customerCount:Number(customers.rows[0].total)},
        series:series.rows.map(r=>({period:r.period,revenue:Number(r.revenue),expenses:Number(r.expenses),profit:Number(r.revenue)-Number(r.expenses)})),
        recentTransactions:recent.rows.map(r=>({...r,amount:Number(r.amount)})),alerts
      };
    });
    return NextResponse.json(data);
  } catch (error) {
    console.error("Finance overview failed",error);
    return NextResponse.json({error:"Unable to load financial records."},{status:500});
  }
}
