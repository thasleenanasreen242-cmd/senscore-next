import { NextRequest, NextResponse } from "next/server";
import { getFinanceUser } from "@/lib/finance-auth";
import { withFinanceDb } from "@/lib/finance-db";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const user = await getFinanceUser(request);
  if (!user) return NextResponse.json({error:"Unauthorized"},{status:401});
  if (user.role === "viewer") return NextResponse.json({error:"Your account has view-only access."},{status:403});
  try {
    const body = await request.json();
    const type = String(body.type ?? "");
    const category = String(body.category ?? "").trim().slice(0,80);
    const description = String(body.description ?? "").trim().slice(0,240);
    const amount = Number(body.amount);
    const date = String(body.date ?? "");
    const accountId = body.accountId ? String(body.accountId) : null;
    if (!["income","expense"].includes(type) || !category || !description || !Number.isFinite(amount) || amount <= 0 || amount > 999999999999999 || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return NextResponse.json({error:"Enter a valid type, category, description, amount and date."},{status:400});
    }
    const result = await withFinanceDb(user, async client => {
      if(accountId){
        const account=await client.query("SELECT id FROM finance_accounts WHERE id=$1 AND is_active=true",[accountId]);
        if(!account.rows[0]) throw new Error("Selected account is unavailable.");
      }
      const inserted = await client.query(
        "INSERT INTO finance_transactions(account_id,transaction_type,category,description,amount,currency,transaction_date,status) VALUES($1,$2,$3,$4,$5,'AED',$6,'posted') RETURNING id,account_id,transaction_type,category,description,amount,currency,transaction_date",
        [accountId,type,category,description,amount,date]
      );
      await client.query("INSERT INTO financial_audit_logs(actor_id,action,entity_type,entity_id,details) VALUES($1,'create','transaction',$2,$3)",[user.id,inserted.rows[0].id,JSON.stringify({type,amount,currency:"AED"})]);
      return inserted.rows[0];
    });
    return NextResponse.json({transaction:{...result,amount:Number(result.amount)}},{status:201});
  } catch (error) {
    console.error("Create transaction failed",error);
    return NextResponse.json({error:"Unable to save this transaction."},{status:500});
  }
}
