import {NextRequest,NextResponse} from "next/server";
import {getFinanceUser,hashPassword} from "@/lib/finance-auth";
import {pool,withFinanceDb} from "@/lib/finance-db";
export const runtime="nodejs";export const dynamic="force-dynamic";
export async function GET(request:NextRequest){
 const actor=await getFinanceUser(request);if(!actor)return NextResponse.json({error:"Unauthorized"},{status:401});
 if(actor.role!=="admin")return NextResponse.json({error:"Administrator access required."},{status:403});
 try{const users=await pool.query("SELECT id,email,display_name,role,is_active,created_at FROM finance_admin_users ORDER BY created_at DESC");return NextResponse.json({users:users.rows});}
 catch(e){console.error(e);return NextResponse.json({error:"Unable to load team access."},{status:500});}
}
export async function POST(request:NextRequest){
 const actor=await getFinanceUser(request);if(!actor)return NextResponse.json({error:"Unauthorized"},{status:401});
 if(actor.role!=="admin")return NextResponse.json({error:"Administrator access required."},{status:403});
 try{
  const b=await request.json();const email=String(b.email??"").trim().toLowerCase();const name=String(b.name??"").trim().slice(0,120);const password=String(b.password??"");const role=String(b.role??"");
  if(!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)||!name||password.length<12||password.length>200||!["finance_manager","viewer"].includes(role))return NextResponse.json({error:"Enter a valid email, name, 12+ character password and allowed role."},{status:400});
  const passwordHash=await hashPassword(password);
  const result=await pool.query("INSERT INTO finance_admin_users(email,display_name,password_hash,role) VALUES($1,$2,$3,$4) RETURNING id,email,display_name,role,is_active,created_at",[email,name,passwordHash,role]);
  await withFinanceDb(actor,async c=>{await c.query("INSERT INTO financial_audit_logs(actor_id,action,entity_type,entity_id,details) VALUES($1,'create','finance_user',$2,$3)",[actor.id,result.rows[0].id,JSON.stringify({email,role})]);});
  return NextResponse.json({user:result.rows[0]},{status:201});
 }catch(e){console.error(e);return NextResponse.json({error:"Unable to create team member. The email may already be registered."},{status:500});}
}
export async function PATCH(request:NextRequest){
 const actor=await getFinanceUser(request);if(!actor)return NextResponse.json({error:"Unauthorized"},{status:401});
 if(actor.role!=="admin")return NextResponse.json({error:"Administrator access required."},{status:403});
 try{
  const b=await request.json();const id=String(b.id??"");const active=Boolean(b.isActive);const role=String(b.role??"");
  if(!/^[0-9a-f-]{36}$/i.test(id)||!["admin","finance_manager","viewer"].includes(role))return NextResponse.json({error:"Invalid team member update."},{status:400});
  if(id===actor.id&&(!active||role!=="admin"))return NextResponse.json({error:"You cannot deactivate or demote your own active administrator account."},{status:400});
  const result=await pool.query("UPDATE finance_admin_users SET is_active=$2,role=$3,updated_at=now() WHERE id=$1 RETURNING id,email,display_name,role,is_active,created_at",[id,active,role]);
  if(!result.rows[0])return NextResponse.json({error:"Team member not found."},{status:404});
  await withFinanceDb(actor,async c=>{await c.query("INSERT INTO financial_audit_logs(actor_id,action,entity_type,entity_id,details) VALUES($1,'update','finance_user',$2,$3)",[actor.id,id,JSON.stringify({isActive:active,role})]);});
  return NextResponse.json({user:result.rows[0]});
 }catch(e){console.error(e);return NextResponse.json({error:"Unable to update team member."},{status:500});}
}
