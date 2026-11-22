import { NextRequest, NextResponse } from "next/server";
import { getFinanceUser } from "@/lib/finance-auth";
export const runtime = "nodejs";
export async function GET(request: NextRequest) {
  const user = await getFinanceUser(request);
  if (!user) return NextResponse.json({ user: null }, { status: 401 });
  return NextResponse.json({ user: { id:user.id,email:user.email,name:user.display_name,role:user.role } });
}
