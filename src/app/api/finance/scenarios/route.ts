import {NextRequest,NextResponse} from "next/server";
import {getFinanceUser} from "@/lib/finance-auth";
import {withFinanceDb} from "@/lib/finance-db";
export const runtime="nodejs";export const dynamic="force-dynamic";
export async function GET(request:NextRequest){
 const user=await getFinanceUser(request);if(!user)return NextResponse.json({error:"Unauthorized"},{status:401});
 try{
  const scenarios=await withFinanceDb(user,async c=>(await c.query("SELECT id,name,description,assumptions,horizon_days,created_at FROM forecast_scenarios ORDER BY created_at DESC LIMIT 100")).rows);
  return NextResponse.json({scenarios});
 }catch(e){console.error(e);return NextResponse.json({error:"Unable to load scenarios."},{status:500});}
}
export async function POST(request:NextRequest){
 const user=await getFinanceUser(request);if(!user)return NextResponse.json({error:"Unauthorized"},{status:401});
 if(user.role==="viewer")return NextResponse.json({error:"View-only access."},{status:403});
 try{
  const b=await request.json();const name=String(b.name??"").trim().slice(0,120),description=String(b.description??"").trim().slice(0,500),horizon=Number(b.horizonDays),growth=Number(b.revenueGrowthPercent),expense=Number(b.expenseChangePercent);
  if(!name||![30,60,90,180].includes(horizon)||!Number.isFinite(growth)||!Number.isFinite(expense)||growth < -80||growth>100||expense < -80||expense>150)return NextResponse.json({error:"Enter a scenario name and valid assumptions."},{status:400});
  const scenario=await withFinanceDb(user,async c=>{
   const created=await c.query("INSERT INTO forecast_scenarios(name,description,assumptions,horizon_days,created_by) VALUES($1,$2,$3,$4,$5) RETURNING id,name,description,assumptions,horizon_days,created_at",[name,description,JSON.stringify({revenueGrowthPercent:growth,expenseChangePercent:expense}),horizon,user.id]);
   const scenario=created.rows[0];
   const history=await c.query(`
    WITH first_month AS (SELECT date_trunc('month',MIN(transaction_date)) AS month FROM finance_transactions WHERE status='posted')
    SELECT to_char(m.month,'YYYY-MM-01') AS month,
     COALESCE(SUM(t.amount) FILTER(WHERE t.transaction_type='income'),0)::numeric AS revenue,
     COALESCE(SUM(t.amount) FILTER(WHERE t.transaction_type='expense'),0)::numeric AS expenses
    FROM first_month f
    CROSS JOIN LATERAL generate_series(f.month,date_trunc('month',CURRENT_DATE),interval '1 month') m(month)
    LEFT JOIN finance_transactions t ON date_trunc('month',t.transaction_date)=m.month AND t.status='posted'
    WHERE f.month IS NOT NULL GROUP BY m.month ORDER BY m.month
   `);
   const rows=history.rows.map(r=>({revenue:Number(r.revenue),expenses:Number(r.expenses)}));
   if(rows.length){
    const tail=rows.slice(-3);const weights=[0.2,0.3,0.5].slice(3-tail.length);
    const baseRevenue=tail.reduce((sum,r,i)=>sum+r.revenue*weights[i],0);
    const baseExpenses=tail.reduce((sum,r,i)=>sum+r.expenses*weights[i],0);
    const confidence=rows.length>=9?"high":rows.length>=6?"medium":"low";
    const count=Math.ceil(horizon/30);
    for(let i=1;i<=count;i++){
     const revenue=baseRevenue*Math.pow(1+growth/100,i),expenses=baseExpenses*Math.pow(1+expense/100,i),profit=revenue-expenses;
     const month=new Date();month.setDate(1);month.setMonth(month.getMonth()+i);
     const date=month.toISOString().slice(0,10);
     const metrics=[["revenue",revenue],["expenses",expenses],["profit",profit],["cash_flow",profit]];
     for(const [metric,value] of metrics){
      const spread=confidence==="low"?null:Math.abs(Number(value))*0.15;
      await c.query("INSERT INTO forecast_records(scenario_id,forecast_date,horizon_days,metric,forecast_value,lower_bound,upper_bound,method,confidence,based_on_periods) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)",
       [scenario.id,date,horizon,metric,value,spread===null?null:Number(value)-spread,spread===null?null:Number(value)+spread,"3-period weighted moving average",confidence,rows.length]);
     }
    }
   }
   await c.query("INSERT INTO financial_audit_logs(actor_id,action,entity_type,entity_id,details) VALUES($1,'create','forecast_scenario',$2,$3)",[user.id,scenario.id,JSON.stringify({horizon,growth,expense,historicalMonths:rows.length})]);
   return {...scenario,basedOnPeriods:rows.length};
  });
  return NextResponse.json({scenario},{status:201});
 }catch(e){console.error("Save forecast scenario failed",e);return NextResponse.json({error:"Unable to save forecast scenario."},{status:500});}
}
