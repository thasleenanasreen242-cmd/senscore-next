import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/lib/finance-db";
import { clearSessionCookie, hashToken, SESSION_COOKIE } from "@/lib/finance-auth";
export const runtime = "nodejs";
export async function POST(request: NextRequest) {
  const token = request.cookies.get(SESSION_COOKIE)?.value;
  if (token) await pool.query("DELETE FROM finance_sessions WHERE token_hash=$1", [hashToken(token)]);
  return NextResponse.json({ ok:true }, { headers: { "Set-Cookie": clearSessionCookie() } });
}
