"use client";
import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Activity, ArrowLeft, Eye, EyeOff, LockKeyhole, Mail, ShieldCheck } from "lucide-react";

export default function FinanceAuthPage({mode}:{mode:"login"|"setup"}) {
 const router=useRouter(); const [busy,setBusy]=useState(false); const [error,setError]=useState(""); const [show,setShow]=useState(false);
 async function submit(e:FormEvent<HTMLFormElement>){
  e.preventDefault();setBusy(true);setError("");
  const form=new FormData(e.currentTarget);
  const body=mode==="setup"?{email:form.get("email"),name:form.get("name"),password:form.get("password"),setupToken:form.get("setupToken")}:{email:form.get("email"),password:form.get("password")};
  try{const response=await fetch(mode==="setup"?"/api/finance/auth/setup":"/api/finance/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});
   const data=await response.json();if(!response.ok)throw new Error(data.error||"Unable to continue.");router.replace("/accounts");router.refresh();
  }catch(err){setError(err instanceof Error?err.message:"Something went wrong.");}finally{setBusy(false);}
 }
 return <main className="finance-auth-page -mt-[68px] min-h-screen bg-[#07111f] text-slate-100">
  <div className="absolute inset-0 opacity-30" style={{backgroundImage:"radial-gradient(circle at 80% 15%,#1e5a88 0,transparent 35%),linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",backgroundSize:"auto,40px 40px,40px 40px"}}/>
  <div className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center px-5 py-12">
   <div className="grid w-full overflow-hidden rounded-3xl border border-white/10 bg-[#0c1b2c]/90 shadow-2xl shadow-black/40 md:grid-cols-[1fr_1fr]">
    <section className="hidden flex-col justify-between bg-gradient-to-br from-[#0d2945] via-[#0b1d32] to-[#07111f] p-12 md:flex">
     <Link href="/" className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-400/10 text-cyan-300"><Activity/></span><span className="font-semibold tracking-[.22em]">SENSCORE</span></Link>
     <div><div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3 py-1 text-xs uppercase tracking-[.2em] text-cyan-200"><ShieldCheck size={14}/> Private finance workspace</div><h1 className="text-4xl font-semibold leading-tight">Clarity behind every business decision.</h1><p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">Financial performance, cash position and evidence-based forecasts in one secure workspace.</p></div>
     <p className="text-xs tracking-widest text-slate-500">SENSCORE · FINANCIAL INTELLIGENCE</p>
    </section>
    <section className="p-7 sm:p-11 md:p-12">
     <Link href="/" className="mb-9 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white"><ArrowLeft size={15}/> Back to SensCore</Link>
     <div className="mb-8"><p className="text-xs font-semibold uppercase tracking-[.22em] text-cyan-300">Finance intelligence</p><h2 className="mt-3 text-3xl font-semibold">{mode==="setup"?"Set up administrator":"Welcome back"}</h2><p className="mt-2 text-sm text-slate-400">{mode==="setup"?"Create the first administrator account for the approved company email.":"Sign in to access company financial information."}</p></div>
     <form onSubmit={submit} className="space-y-5">
      {mode==="setup"&&<div><label className="mb-2 block text-sm text-slate-300">Full name</label><input name="name" required autoComplete="name" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-cyan-400" placeholder="Finance administrator"/></div>}
      <div><label className="mb-2 block text-sm text-slate-300">Company email</label><div className="relative"><Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={17}/><input name="email" type="email" required defaultValue={mode==="setup"?"info@senscoretech.com":""} autoComplete="email" className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 outline-none focus:border-cyan-400" placeholder="name@company.com"/></div></div>
      {mode==="setup"&&<div><label className="mb-2 block text-sm text-slate-300">One-time setup key</label><input name="setupToken" required autoComplete="off" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-mono text-sm outline-none focus:border-cyan-400" placeholder="Paste the setup key"/></div>}
      <div><label className="mb-2 block text-sm text-slate-300">Password</label><div className="relative"><LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={17}/><input name="password" type={show?"text":"password"} required minLength={mode==="setup"?12:1} autoComplete={mode==="setup"?"new-password":"current-password"} className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-11 pr-12 outline-none focus:border-cyan-400" placeholder={mode==="setup"?"At least 12 characters":"Your password"}/><button type="button" onClick={()=>setShow(!show)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500" aria-label={show?"Hide password":"Show password"}>{show?<EyeOff size={17}/>:<Eye size={17}/>}</button></div></div>
      {error&&<p role="alert" className="rounded-xl border border-rose-400/20 bg-rose-400/10 px-4 py-3 text-sm text-rose-200">{error}</p>}
      <button disabled={busy} className="w-full rounded-xl bg-cyan-300 px-4 py-3.5 font-semibold text-[#07111f] transition hover:bg-cyan-200 disabled:opacity-50">{busy?"Please wait…":mode==="setup"?"Create secure administrator":"Sign in securely"}</button>
     </form>
     <p className="mt-7 text-center text-xs leading-6 text-slate-500">{mode==="setup"?"First-time setup is limited to the authorized administrator.":"Access is restricted to invited finance users."}</p>
     {mode==="login"&&<p className="mt-4 text-center text-sm text-slate-500">First time here? <Link href="/accounts/setup" className="text-cyan-300 hover:underline">Set up administrator</Link></p>}
    </section>
   </div>
  </div>
 </main>;
}
