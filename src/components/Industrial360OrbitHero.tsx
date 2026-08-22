"use client";

import { useEffect, useRef } from "react";

type Obj = { type: "tank" | "pump" | "meter" | "valve"; x: number; y: number; s: number };

const SCENE: Obj[] = [
  { type: "tank", x: 0.03, y: 0.54, s: 1.05 }, { type: "pump", x: 0.12, y: 0.68, s: .78 },
  { type: "meter", x: 0.20, y: 0.57, s: .7 }, { type: "valve", x: 0.29, y: 0.67, s: .82 },
  { type: "tank", x: 0.39, y: 0.52, s: 1.18 }, { type: "pump", x: 0.50, y: 0.68, s: .82 },
  { type: "meter", x: 0.59, y: 0.56, s: .7 }, { type: "valve", x: 0.68, y: 0.67, s: .84 },
  { type: "tank", x: 0.79, y: 0.53, s: 1.08 }, { type: "pump", x: 0.90, y: 0.68, s: .8 },
  { type: "meter", x: 0.98, y: 0.57, s: .68 },
];

export default function Industrial360OrbitHero() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current; const ctx = canvas?.getContext("2d"); if (!canvas || !ctx) return;
    let w=0,h=0,dpr=1,raf=0,time=0,auto=0,targetY=0,cameraY=0,pointerX=.5,pointerActive=false;
    const resize=()=>{const r=canvas.getBoundingClientRect();w=r.width;h=r.height;dpr=Math.min(devicePixelRatio||1,2);canvas.width=w*dpr;canvas.height=h*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);};
    const move=(e:PointerEvent)=>{pointerX=e.clientX/Math.max(innerWidth,1);targetY=(e.clientY/Math.max(innerHeight,1)-.5)*2;pointerActive=true;};
    const leave=()=>{pointerActive=false;};
    const round=(x:number,y:number,ww:number,hh:number,r:number)=>{ctx.beginPath();ctx.roundRect(x,y,ww,hh,r);ctx.closePath();};
    const pipe=(x1:number,y1:number,x2:number,y2:number,r:number)=>{ctx.lineCap="round";ctx.strokeStyle="rgba(150,165,175,.55)";ctx.lineWidth=r*3;ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke();ctx.strokeStyle="#121a21";ctx.lineWidth=r*2;ctx.stroke();ctx.strokeStyle="rgba(75,150,195,.3)";ctx.lineWidth=1;ctx.stroke();};
    const tank=(x:number,y:number,s:number)=>{const ww=105*s,hh=165*s,t=y-hh;const g=ctx.createLinearGradient(x,t,x+ww,t);g.addColorStop(0,"#101820");g.addColorStop(.42,"#65717a");g.addColorStop(.62,"#263039");g.addColorStop(1,"#090e13");ctx.fillStyle=g;round(x,t+14*s,ww,hh-28*s,12*s);ctx.fill();ctx.strokeStyle="rgba(190,205,215,.28)";ctx.stroke();ctx.beginPath();ctx.ellipse(x+ww/2,t+14*s,ww/2,15*s,0,0,Math.PI*2);ctx.fillStyle="#4a5660";ctx.fill();ctx.stroke();pipe(x+ww*.5,t,x+ww*.5,t-48*s,.08*s);pipe(x+ww*.5,t-48*s,x+ww*.78,t-48*s,.08*s);pipe(x+ww,y-hh*.48,x+ww+42*s,y-hh*.48,.1*s);};
    const pump=(x:number,y:number,s:number)=>{const r=31*s,cx=x+42*s,cy=y-38*s;ctx.fillStyle="#29343d";ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.fill();ctx.strokeStyle="rgba(180,195,205,.3)";ctx.stroke();ctx.fillStyle="#0b1116";ctx.beginPath();ctx.arc(cx,cy,r*.45,0,Math.PI*2);ctx.fill();ctx.strokeStyle="rgba(80,165,205,.65)";ctx.lineWidth=3*s;ctx.beginPath();ctx.arc(cx,cy,r*.68,-.8,1.8);ctx.stroke();pipe(x,cy,cx-r*.8,cy,.09*s);pipe(cx,cy+r*.9,cx,y,.09*s);};
    const meter=(x:number,y:number,s:number)=>{const ww=50*s,hh=62*s,t=y-hh;ctx.fillStyle="#10171e";round(x,t,ww,hh,6*s);ctx.fill();ctx.strokeStyle="rgba(165,185,200,.35)";ctx.stroke();ctx.fillStyle="#050a0e";ctx.beginPath();ctx.arc(x+ww/2,t+hh*.5,17*s,0,Math.PI*2);ctx.fill();ctx.strokeStyle="rgba(80,190,215,.7)";ctx.lineWidth=2*s;ctx.beginPath();ctx.arc(x+ww/2,t+hh*.5,14*s,-2.6,.25);ctx.stroke();ctx.strokeStyle="#d4dde3";ctx.beginPath();ctx.moveTo(x+ww/2,t+hh*.5);ctx.lineTo(x+ww*.66,t+hh*.34);ctx.stroke();};
    const valve=(x:number,y:number,s:number)=>{const cy=y-40*s,cx=x+45*s;pipe(x,cy,x+90*s,cy,.1*s);ctx.strokeStyle="#7b8994";ctx.lineWidth=6*s;ctx.beginPath();ctx.moveTo(cx-22*s,cy-22*s);ctx.lineTo(cx+22*s,cy+22*s);ctx.moveTo(cx+22*s,cy-22*s);ctx.lineTo(cx-22*s,cy+22*s);ctx.stroke();ctx.strokeStyle="rgba(80,165,205,.75)";ctx.lineWidth=3*s;ctx.beginPath();ctx.moveTo(cx,cy-22*s);ctx.lineTo(cx,cy-55*s);ctx.stroke();ctx.beginPath();ctx.arc(cx,cy-60*s,10*s,0,Math.PI*2);ctx.stroke();};
    const draw=(o:Obj,x:number,ground:number)=>{const y=ground-o.y*h*.04; if(o.type==="tank")tank(x,y,o.s); else if(o.type==="pump")pump(x,y,o.s); else if(o.type==="meter")meter(x,y,o.s); else valve(x,y,o.s);};
    const render=()=>{
      time+=.016;
      if(pointerActive) auto += (pointerX-.5)*.0025; else auto += .00042;
      auto=((auto%1)+1)%1; cameraY += ((pointerActive?targetY:Math.sin(time*.11)*.025)-cameraY)*.045;
      ctx.clearRect(0,0,w,h);
      const bg=ctx.createLinearGradient(0,0,0,h);bg.addColorStop(0,"#020509");bg.addColorStop(.48,"#0b1218");bg.addColorStop(1,"#020405");ctx.fillStyle=bg;ctx.fillRect(0,0,w,h);
      const worldW=w*3.4, horizon=h*.48, ground=h*.93, offset=auto*worldW;
      ctx.save();ctx.translate(0,cameraY*16);
      const floor=ctx.createLinearGradient(0,horizon,0,h);floor.addColorStop(0,"#151d24");floor.addColorStop(1,"#050709");ctx.fillStyle=floor;ctx.fillRect(0,horizon,w,h);
      ctx.strokeStyle="rgba(90,140,175,.10)";ctx.lineWidth=1;for(let i=0;i<24;i++){const x=i*worldW/18-offset;ctx.beginPath();ctx.moveTo(x,horizon);ctx.lineTo(x+(x-w/2)*.2,h);ctx.stroke();}for(let i=0;i<7;i++){const y=horizon+Math.pow(i/7,1.8)*(h-horizon);ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke();}
      const drawWrapped=(o:Obj)=>{let x=o.x*worldW-offset;while(x< -180)x+=worldW;while(x>w+180)x-=worldW;draw(o,x,ground);};
      for(let i=0;i<14;i++){const x=i*worldW/13-offset;pipe(x,h*.25,x+worldW,h*.25,.09);pipe(x,h*.34,x+worldW,h*.34,.06);}
      for(let i=0;i<18;i++){let x=i*worldW/17-offset;while(x<-100)x+=worldW;while(x>w+100)x-=worldW;pipe(x,h*.2,x,h*.9,.045);}
      pipe(-worldW-offset,h*.72,worldW*2-offset,h*.72,.13);SCENE.forEach(drawWrapped);
      const glow=ctx.createRadialGradient(w*.5,h*.35,0,w*.5,h*.35,Math.max(w,h)*.62);glow.addColorStop(0,"rgba(65,155,205,.15)");glow.addColorStop(1,"rgba(0,0,0,0)");ctx.fillStyle=glow;ctx.fillRect(0,0,w,h);ctx.restore();
      const vg=ctx.createRadialGradient(w*.5,h*.48,h*.08,w*.5,h*.48,Math.max(w,h)*.8);vg.addColorStop(0,"rgba(0,0,0,0)");vg.addColorStop(.7,"rgba(0,0,0,.1)");vg.addColorStop(1,"rgba(0,0,0,.72)");ctx.fillStyle=vg;ctx.fillRect(0,0,w,h);
      raf=requestAnimationFrame(render);
    };
    resize();window.addEventListener("resize",resize);window.addEventListener("pointermove",move,{passive:true});window.addEventListener("pointerleave",leave);render();return()=>{cancelAnimationFrame(raf);window.removeEventListener("resize",resize);window.removeEventListener("pointermove",move);window.removeEventListener("pointerleave",leave);};
  },[]);
  return <canvas ref={ref} aria-hidden="true" className="absolute inset-0 h-full w-full" />;
}
