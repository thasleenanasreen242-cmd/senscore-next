import { NextRequest, NextResponse } from "next/server";
import { pool, withFinanceDb } from "@/lib/finance-db";
import { createSessionToken, hashToken, sessionCookie, sessionExpiry, verifyPassword } from "@/lib/finance-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = String(body.email ?? "").trim().toLowerCase();
    const password = String(body.password ?? "");
    const result = await pool.query("SELECT id,email,display_name,password_hash,role,is_active FROM finance_admin_users WHERE email=$1 LIMIT 1", [email]);
    const user = result.rows[0];
    if (!user || !user.is_active || !(await verifyPassword(password,user.password_hash))) {
      return NextResponse.json({ error: "Email or password is incorrect." }, { status: 401 });
    }
    const token = createSessionToken();
    await pool.query("INSERT INTO finance_sessions(user_id,token_hash,expires_at) VALUES($1,$2,$3)", [user.id,hashToken(token),sessionExpiry()]);
    await withFinanceDb(user, async c => { await c.query("INSERT INTO financial_audit_logs(actor_id,action,entity_type,entity_id) VALUES($1,'sign_in','user',$1)", [user.id]); });
    return NextResponse.json({ user: { id:user.id,email:user.email,name:user.display_name,role:user.role } }, { headers: { "Set-Cookie": sessionCookie(token) } });
  } catch (error) {
    console.error("Finance sign-in failed", error);
    return NextResponse.json({ error: "Unable to sign in right now." }, { status: 500 });
  }
}
