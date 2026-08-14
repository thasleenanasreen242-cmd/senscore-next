"use client";

import { useEffect, useRef } from "react";

type Node = { x:number; y:number; vx:number; vy:number; baseVx:number; baseVy:number; size:number; phase:number; pulse:number };

const BLUE = "74, 144, 255";
const CYAN = "0, 229, 199";
const WHITE = "226, 236, 250";

function createNodes(width:number,height:number,density:number):Node[] {
  const count = Math.max(26, Math.min(58, Math.round(density * 6)));
  return Array.from({length:count},(_,index)=>{
    const baseVx=(Math.random()-.5)*(index%5===0?.16:.24);
    const baseVy=(Math.random()-.5)*(index%5===0?.12:.18);
    return {x:Math.random()*width,y:Math.random()*height,vx:baseVx,vy:baseVy,baseVx,baseVy,size:2.2+Math.random()*2.1,phase:Math.random()*Math.PI*2,pulse:.7+Math.random()*.8};
  });
}

export default function HUDBackground({density=7}:{density?:number}) {
  const canvasRef=useRef<HTMLCanvasElement>(null);
  useEffect(()=>{
    const canvas=canvasRef.current;if(!canvas)return;
    const ctx=canvas.getContext("2d");if(!ctx)return;
    const reduceMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const connectionDistance=205,pointerRadius=190;
    let width=0,height=0,dpr=1,nodes:Node[]=[],raf=0,time=0,pointerX=-1000,pointerY=-1000,pointerActive=false;
    function resize(){const parent=canvas!.parentElement;if(!parent)return;const r=parent.getBoundingClientRect();width=r.width;height=r.height;dpr=Math.min(window.devicePixelRatio||1,2);canvas!.width=Math.round(width*dpr);canvas!.height=Math.round(height*dpr);canvas!.style.width=`${width}px`;canvas!.style.height=`${height}px`;ctx!.setTransform(dpr,0,0,dpr,0,0);nodes=createNodes(width,height,density);}
    function move(e:PointerEvent){const r=canvas!.getBoundingClientRect();pointerX=e.clientX-r.left;pointerY=e.clientY-r.top;pointerActive=pointerX>=-20&&pointerX<=width+20&&pointerY>=-20&&pointerY<=height+20;}
    function leave(){pointerActive=false;}
    function update(){nodes.forEach(n=>{
      if(!reduceMotion&&pointerActive){const dx=n.x-pointerX,dy=n.y-pointerY,d=Math.hypot(dx,dy);if(d<pointerRadius&&d>.001){const s=1-d/pointerRadius;const force=s*s*1.25;n.vx+=(dx/d)*force;n.vy+=(dy/d)*force;}}
      n.vx+=(n.baseVx-n.vx)*.035;n.vy+=(n.baseVy-n.vy)*.035;const speed=Math.hypot(n.vx,n.vy);if(speed>2.4){n.vx=n.vx/speed*2.4;n.vy=n.vy/speed*2.4;}n.x+=n.vx;n.y+=n.vy;if(n.x<-25)n.x=width+25;if(n.x>width+25)n.x=-25;if(n.y<-25)n.y=height+25;if(n.y>height+25)n.y=-25;
    });}
    function connections(){for(let i=0;i<nodes.length;i++){const a=nodes[i];const nearby:{index:number;distance:number}[]=[];for(let j=0;j<nodes.length;j++){if(i===j)continue;const b=nodes[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<connectionDistance)nearby.push({index:j,distance:d});}nearby.sort((a,b)=>a.distance-b.distance).slice(0,3).forEach(({index,distance})=>{if(index<i)return;const b=nodes[index],s=1-distance/connectionDistance,alpha=.035+s*.12,g=ctx!.createLinearGradient(a.x,a.y,b.x,b.y);g.addColorStop(0,`rgba(${BLUE},${alpha})`);g.addColorStop(.5,`rgba(${CYAN},${alpha*1.35})`);g.addColorStop(1,`rgba(${BLUE},${alpha})`);ctx!.strokeStyle=g;ctx!.lineWidth=.9+s*.7;ctx!.beginPath();ctx!.moveTo(a.x,a.y);ctx!.lineTo(b.x,b.y);ctx!.stroke();});}}
    function pointerField(){if(reduceMotion||!pointerActive)return;const g=ctx!.createRadialGradient(pointerX,pointerY,0,pointerX,pointerY,pointerRadius);g.addColorStop(0,`rgba(${BLUE},.12)`);g.addColorStop(.35,`rgba(${CYAN},.045)`);g.addColorStop(1,`rgba(${BLUE},0)`);ctx!.fillStyle=g;ctx!.beginPath();ctx!.arc(pointerX,pointerY,pointerRadius,0,Math.PI*2);ctx!.fill();ctx!.strokeStyle=`rgba(${CYAN},.3)`;ctx!.lineWidth=1;ctx!.beginPath();ctx!.arc(pointerX,pointerY,28+Math.sin(time*3)*3,0,Math.PI*2);ctx!.stroke();}
    function nodesDraw(){nodes.forEach((n,i)=>{const pulse=reduceMotion?1:1+Math.sin(time*n.pulse+n.phase)*.22,r=n.size*pulse,color=i%5===0?CYAN:BLUE;const glow=ctx!.createRadialGradient(n.x,n.y,0,n.x,n.y,r*10);glow.addColorStop(0,`rgba(${color},.42)`);glow.addColorStop(.28,`rgba(${color},.16)`);glow.addColorStop(1,`rgba(${color},0)`);ctx!.fillStyle=glow;ctx!.beginPath();ctx!.arc(n.x,n.y,r*10,0,Math.PI*2);ctx!.fill();ctx!.fillStyle=`rgba(${WHITE},.95)`;ctx!.beginPath();ctx!.arc(n.x,n.y,r*.8,0,Math.PI*2);ctx!.fill();ctx!.fillStyle=`rgba(${color},1)`;ctx!.beginPath();ctx!.arc(n.x,n.y,r,0,Math.PI*2);ctx!.fill();});}
    function render(){ctx!.clearRect(0,0,width,height);update();connections();pointerField();nodesDraw();time+=.016;raf=requestAnimationFrame(render);}
    resize();render();window.addEventListener("pointermove",move,{passive:true});window.addEventListener("pointerleave",leave,{passive:true});const ro=new ResizeObserver(resize);if(canvas.parentElement)ro.observe(canvas.parentElement);return()=>{cancelAnimationFrame(raf);window.removeEventListener("pointermove",move);window.removeEventListener("pointerleave",leave);ro.disconnect();};
  },[density]);
  return <div className="pointer-events-none absolute inset-0 overflow-hidden"><canvas ref={canvasRef} className="absolute inset-0"/><div className="absolute inset-0 hud-grid opacity-70"/><div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-void to-transparent"/><div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-void to-transparent"/><div aria-hidden className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-teal/[0.06] to-transparent animate-scan"/></div>;
}
