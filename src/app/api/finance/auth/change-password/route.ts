import {NextRequest,NextResponse} from "next/server";
import {getFinanceUser,hashPassword,verifyPassword} from "@/lib/finance-auth";
import {pool,withFinanceDb} from "@/lib/finance-db";
export const runtime="nodejs";export const dynamic="force-dynamic";
export async function POST(request:NextRequest){
 const user=await getFinanceUser(request);if(!user)return NextResponse.json({error:"Unauthorized"},{status:401});
 try{
  const b=await request.json();const current=String(b.currentPassword??"");const next=String(b.newPassword??"");
  if(next.length<12||next.length>200)return NextResponse.json({error:"New password must be at least 12 characters."},{status:400});
  const row=await pool.query("SELECT password_hash FROM finance_admin_users WHERE id=$1 AND is_active=true",[user.id]);
  if(!row.rows[0]||!(await verifyPassword(current,row.rows[0].password_hash)))return NextResponse.json({error:"Current password is incorrect."},{status:403});
  const hash=await hashPassword(next);
  await pool.query("UPDATE finance_admin_users SET password_hash=$2,updated_at=now() WHERE id=$1",[user.id,hash]);
  await withFinanceDb(user,async c=>{await c.query("INSERT INTO financial_audit_logs(actor_id,action,entity_type,entity_id) VALUES($1,'change_password','finance_user',$1)",[user.id]);});
  return NextResponse.json({ok:true});
 }catch(e){console.error(e);return NextResponse.json({error:"Unable to update password."},{status:500});}
}
