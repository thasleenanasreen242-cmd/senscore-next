import { NextRequest, NextResponse } from "next/server";
import { timingSafeEqual } from "node:crypto";
import { pool, withFinanceDb } from "@/lib/finance-db";
import { createSessionToken, hashPassword, hashToken, sessionCookie, sessionExpiry } from "@/lib/finance-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = String(body.email ?? "").trim().toLowerCase();
    const name = String(body.name ?? "").trim();
    const password = String(body.password ?? "");
    const setupToken = String(body.setupToken ?? "");
    const expectedToken = process.env.FINANCE_ADMIN_SETUP_TOKEN ?? "";
    const adminEmail = (process.env.FINANCE_ADMIN_EMAIL ?? "").trim().toLowerCase();
    if (!expectedToken || !adminEmail) return NextResponse.json({ error: "Administrator setup is not configured." }, { status: 503 });
    const provided = Buffer.from(setupToken);
    const expected = Buffer.from(expectedToken);
    if (provided.length !== expected.length || !timingSafeEqual(provided, expected)) return NextResponse.json({ error: "Setup token is invalid." }, { status: 403 });
    if (email !== adminEmail) return NextResponse.json({ error: "This setup link is restricted to the approved administrator email." }, { status: 403 });
    if (!name || password.length < 12 || password.length > 200) return NextResponse.json({ error: "Enter your name and a password of at least 12 characters." }, { status: 400 });
    const client = await pool.connect();
    let user;
    try {
      await client.query("BEGIN");
      await client.query("SELECT pg_advisory_xact_lock(91477231)");
      const count = await client.query("SELECT count(*)::int AS count FROM finance_admin_users");
      if (count.rows[0].count > 0) {
        await client.query("ROLLBACK");
        return NextResponse.json({ error: "Administrator setup has already been completed. Please sign in." }, { status: 409 });
      }
      const passwordHash = await hashPassword(password);
      const created = await client.query(
        "INSERT INTO finance_admin_users(email,display_name,password_hash,role) VALUES($1,$2,$3,'admin') RETURNING id,email,display_name,role",
        [email,name,passwordHash]
      );
      user = created.rows[0];
      await client.query("COMMIT");
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    } finally { client.release(); }
    const token = createSessionToken();
    await pool.query("INSERT INTO finance_sessions(user_id,token_hash,expires_at) VALUES($1,$2,$3)", [user.id,hashToken(token),sessionExpiry()]);
    await withFinanceDb(user, async c => { await c.query("INSERT INTO financial_audit_logs(actor_id,action,entity_type,entity_id,details) VALUES($1::text,'admin_setup','user',$2::uuid,$3::jsonb)", [user.id,user.id,JSON.stringify({email})]); });
    return NextResponse.json({ user: { id:user.id,email:user.email,name:user.display_name,role:user.role } }, { headers: { "Set-Cookie": sessionCookie(token) } });
  } catch (error) {
    console.error("Finance setup failed", error);
    return NextResponse.json({ error: "Unable to complete setup. Please try again." }, { status: 500 });
  }
}
