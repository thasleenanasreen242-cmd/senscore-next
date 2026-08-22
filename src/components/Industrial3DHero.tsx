"use client";

import { useEffect, useRef } from "react";

type V = { x: number; y: number; z: number };
type Obj = { type: "tank" | "pump" | "valve" | "meter"; x: number; y: number; z: number; s: number };

export default function Industrial3DHero() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    let w = 0, h = 0, dpr = 1, raf = 0, t = 0;
    let tx = 0, ty = 0, cx = 0, cy = 0;
    const objects: Obj[] = [
      { type: "tank", x: -8, y: 1.5, z: 3.5, s: 1.35 },
      { type: "pump", x: -5.5, y: 0, z: 1.8, s: 1.1 },
      { type: "meter", x: -3.5, y: 1.2, z: .8, s: .9 },
      { type: "valve", x: -1, y: .4, z: 2.4, s: 1 },
      { type: "pump", x: 2.8, y: 0, z: 3.4, s: 1.15 },
      { type: "tank", x: 5.8, y: 1.4, z: 2.7, s: 1.45 },
      { type: "meter", x: 8.2, y: 1.1, z: 1, s: .85 },
      { type: "valve", x: 10.5, y: .4, z: 3, s: .9 },
    ];
    const resize = () => { const r = canvas.getBoundingClientRect(); w=r.width; h=r.height; dpr=Math.min(devicePixelRatio||1,2); canvas.width=w*dpr; canvas.height=h*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); };
    const move = (e: PointerEvent) => { tx=(e.clientX/innerWidth-.5)*2; ty=(e.clientY/innerHeight-.5)*2; };
    const p = (v: V, focal: number): {x:number;y:number;z:number} => {
      const ry=cx*.12, rx=cy*.035, sy=Math.sin(ry), co=Math.cos(ry), sx=Math.sin(rx), xo=Math.cos(rx);
      const x=v.x*co-v.z*sy, z0=v.x*sy+v.z*co, y=v.y*xo-z0*sx, z=v.y*sx+z0*xo+18, q=focal/Math.max(3,z);
      return {x:w/2+x*q,y:h*.58-y*q,z};
    };
    const line=(a:V,b:V,r:number,f:number)=>{const A=p(a,f),B=p(b,f);ctx.lineCap="round";ctx.strokeStyle="rgba(155,170,180,.45)";ctx.lineWidth=r*3;ctx.beginPath();ctx.moveTo(A.x,A.y);ctx.lineTo(B.x,B.y);ctx.stroke();ctx.strokeStyle="#151d24";ctx.lineWidth=r*2;ctx.beginPath();ctx.moveTo(A.x,A.y);ctx.lineTo(B.x,B.y);ctx.stroke();ctx.strokeStyle="rgba(80,150,190,.35)";ctx.lineWidth=1;ctx.stroke();};
    const box=(c:V,s:V,f:number)=>{const q=[[-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]].map(a=>p({x:c.x+a[0]*s.x/2,y:c.y+a[1]*s.y/2,z:c.z+a[2]*s.z/2},f));[[0,1,2,3],[0,4,5,1],[3,2,6,7],[1,5,6,2],[0,3,7,4]].forEach((ids,i)=>{const v=38+i*6;ctx.beginPath();ids.forEach((id,j)=>j?ctx.lineTo(q[id].x,q[id].y):ctx.moveTo(q[id].x,q[id].y));ctx.closePath();ctx.fillStyle=`rgb(${v},${v+9},${v+15})`;ctx.fill();ctx.strokeStyle="rgba(180,195,205,.18)";ctx.stroke();});};
    const cyl=(x:number,y:number,z:number,r:number,hh:number,f:number)=>{const n=16,top=[],bot=[];for(let i=0;i<n;i++){const a=i/n*Math.PI*2;top.push(p({x:x+Math.cos(a)*r,y:y+hh/2,z:z+Math.sin(a)*r},f));bot.push(p({x:x+Math.cos(a)*r,y:y-hh/2,z:z+Math.sin(a)*r},f));}for(let i=0;i<n;i++){const j=(i+1)%n;ctx.beginPath();ctx.moveTo(bot[i].x,bot[i].y);ctx.lineTo(bot[j].x,bot[j].y);ctx.lineTo(top[j].x,top[j].y);ctx.lineTo(top[i].x,top[i].y);ctx.closePath();ctx.fillStyle=`rgb(${42+i%5*5},${51+i%5*5},${59+i%5*5})`;ctx.fill();ctx.strokeStyle="rgba(190,205,215,.18)";ctx.stroke();}ctx.beginPath();top.forEach((v,i)=>i?ctx.lineTo(v.x,v.y):ctx.moveTo(v.x,v.y));ctx.closePath();ctx.fillStyle="#4a5863";ctx.fill();};
    const draw=(o:Obj,f:number)=>{if(o.type==="tank"){cyl(o.x,o.y+1.5*o.s,o.z,1.05*o.s,3*o.s,f);line({x:o.x,y:o.y+3*o.s,z:o.z},{x:o.x,y:o.y+4.2*o.s,z:o.z},.12*o.s,f);line({x:o.x,y:o.y+4.2*o.s,z:o.z},{x:o.x+1.2*o.s,y:o.y+4.2*o.s,z:o.z},.12*o.s,f);}else if(o.type==="pump"){box({x:o.x,y:o.y+.55*o.s,z:o.z},{x:1.7*o.s,y:.9*o.s,z:1.1*o.s},f);cyl(o.x-.25*o.s,o.y+.55*o.s,o.z+.58*o.s,.5*o.s,.3*o.s,f);line({x:o.x-1.3*o.s,y:o.y+.55*o.s,z:o.z},{x:o.x-.8*o.s,y:o.y+.55*o.s,z:o.z},.13*o.s,f);line({x:o.x+.8*o.s,y:o.y+.55*o.s,z:o.z},{x:o.x+1.4*o.s,y:o.y+.55*o.s,z:o.z},.13*o.s,f);}else if(o.type==="meter"){box({x:o.x,y:o.y+.65*o.s,z:o.z},{x:.55*o.s,y:1.25*o.s,z:.5*o.s},f);cyl(o.x,o.y+.65*o.s,o.z-.27*o.s,.23*o.s,.08*o.s,f);}else{line({x:o.x-1.1*o.s,y:o.y+.5*o.s,z:o.z},{x:o.x+1.1*o.s,y:o.y+.5*o.s,z:o.z},.15*o.s,f);box({x:o.x,y:o.y+.5*o.s,z:o.z},{x:.65*o.s,y:.8*o.s,z:.65*o.s},f);box({x:o.x,y:o.y+1.35*o.s,z:o.z},{x:.2*o.s,y:.65*o.s,z:.2*o.s},f);cyl(o.x,o.y+1.75*o.s,o.z,.4*o.s,.15*o.s,f);}};
    const render=()=>{t+=.016;tx+=Math.sin(t*.12)*.0008;ty+=Math.sin(t*.08)*.00025;cx+=(tx-cx)*.055;cy+=(ty-cy)*.055;ctx.clearRect(0,0,w,h);const bg=ctx.createLinearGradient(0,0,0,h);bg.addColorStop(0,"#020509");bg.addColorStop(.5,"#0a1118");bg.addColorStop(1,"#020405");ctx.fillStyle=bg;ctx.fillRect(0,0,w,h);const f=Math.min(w,h)*1.25;
      for(let z=0;z<26;z+=2){line({x:-18,y:0,z},{x:18,y:0,z},.012,f);}for(let x=-18;x<=18;x+=2){line({x,y:0,z:0},{x,y:0,z:25},.012,f);}for(let z=1;z<23;z+=5){line({x:-16,y:5.8,z},{x:16,y:5.8,z},.1,f);line({x:-16,y:6.6,z},{x:16,y:6.6,z},.07,f);}for(let x=-15;x<=15;x+=3)line({x,y:0,z:2},{x,y:6.7,z:2},.055,f);line({x:-15,y:2.2,z:4},{x:15,y:2.2,z:4},.16,f);objects.slice().sort((a,b)=>b.z-a.z).forEach(o=>draw(o,f));
      const glow=ctx.createRadialGradient(w*.5,h*.35,0,w*.5,h*.35,Math.max(w,h)*.6);glow.addColorStop(0,"rgba(70,160,205,.16)");glow.addColorStop(1,"rgba(0,0,0,0)");ctx.fillStyle=glow;ctx.fillRect(0,0,w,h);const vg=ctx.createRadialGradient(w*.5,h*.48,h*.1,w*.5,h*.48,Math.max(w,h)*.8);vg.addColorStop(0,"rgba(0,0,0,0)");vg.addColorStop(1,"rgba(0,0,0,.68)");ctx.fillStyle=vg;ctx.fillRect(0,0,w,h);raf=requestAnimationFrame(render);};
    resize(); addEventListener("resize",resize); addEventListener("pointermove",move,{passive:true}); render(); return()=>{cancelAnimationFrame(raf);removeEventListener("resize",resize);removeEventListener("pointermove",move);};
  },[]);
  return <canvas ref={ref} aria-hidden="true" className="absolute inset-0 h-full w-full" />;
}
