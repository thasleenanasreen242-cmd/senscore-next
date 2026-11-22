import { NextRequest, NextResponse } from "next/server";
import { getFinanceUser } from "@/lib/finance-auth";
import { withFinanceDb } from "@/lib/finance-db";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const user = await getFinanceUser(request);
  if (!user) return NextResponse.json({error:"Unauthorized"},{status:401});
  const horizon = Number(request.nextUrl.searchParams.get("horizon") ?? 90);
  const growth = Math.max(-80,Math.min(100,Number(request.nextUrl.searchParams.get("growth") ?? 0)));
  const expenseChange = Math.max(-80,Math.min(150,Number(request.nextUrl.searchParams.get("expenseChange") ?? 0)));
  if (![30,60,90,180].includes(horizon)) return NextResponse.json({error:"Invalid forecast horizon."},{status:400});
  try {
    const result = await withFinanceDb(user,async client=>{
      const history = await client.query(`
        WITH first_month AS (SELECT date_trunc('month',MIN(transaction_date)) AS month FROM finance_transactions WHERE status='posted')
        SELECT to_char(m.month,'YYYY-MM-01') AS month,
          COALESCE(SUM(t.amount) FILTER (WHERE t.transaction_type='income'),0)::numeric AS revenue,
          COALESCE(SUM(t.amount) FILTER (WHERE t.transaction_type='expense'),0)::numeric AS expenses
        FROM first_month f
        CROSS JOIN LATERAL generate_series(GREATEST(f.month,date_trunc('month',CURRENT_DATE - INTERVAL '12 months')),date_trunc('month',CURRENT_DATE),interval '1 month') m(month)
        LEFT JOIN finance_transactions t ON date_trunc('month',t.transaction_date)=m.month AND t.status='posted'
        WHERE f.month IS NOT NULL GROUP BY m.month ORDER BY m.month
      `);
      const rows=history.rows.map(r=>({month:r.month,revenue:Number(r.revenue),expenses:Number(r.expenses)}));
      const count=rows.length;
      if(count===0) return {available:false,message:"Forecasting will appear after real transaction history has been entered.",basedOnPeriods:0,method:"Insufficient history",confidence:"low",horizonDays:horizon,projection:[]};
      const tail=rows.slice(-3);
      const weighted=(key:string)=>tail.reduce((sum,row,i)=>sum+row[key as "revenue"|"expenses"]*[0.2,0.3,0.5][i+(3-tail.length)],0);
      const baseRevenue=weighted("revenue");
      const baseExpenses=weighted("expenses");
      const confidence=count>=9?"high":count>=6?"medium":"low";
      const projection=Array.from({length:Math.ceil(horizon/30)},(_,i)=>{
        const month=i+1;
        const revenue=baseRevenue*Math.pow(1+growth/100,month);
        const expenses=baseExpenses*Math.pow(1+expenseChange/100,month);
        const profit=revenue-expenses;
        const date=new Date(); date.setDate(1); date.setMonth(date.getMonth()+month);
        const row:any={month:date.toISOString().slice(0,7),revenue,expenses,profit,cashFlow:profit};
        if(count>=6){const spread=Math.abs(profit)*0.15;row.lowerBound=profit-spread;row.upperBound=profit+spread;}
        return row;
      });
      return {available:true,basedOnPeriods:count,method:"3-period weighted moving average with scenario growth",confidence,horizonDays:horizon,assumptions:{revenueGrowthPercent:growth,expenseChangePercent:expenseChange},baseline:{monthlyRevenue:baseRevenue,monthlyExpenses:baseExpenses},projection};
    });
    return NextResponse.json(result);
  }catch(error){console.error("Finance forecast failed",error);return NextResponse.json({error:"Unable to calculate a forecast."},{status:500});}
}
