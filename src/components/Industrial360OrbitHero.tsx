"use client";

import { useEffect, useRef } from "react";

/** True WebGL 3D industrial hero: lit geometry, depth, orbit camera and cursor control. */
export default function Industrial360OrbitHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas?.getContext("webgl", { antialias: true, alpha: true });
    if (!canvas || !gl) return;

    const vs = `attribute vec3 p; attribute vec3 n; uniform mat4 mvp; uniform mat4 model; varying vec3 N; varying vec3 P; void main(){P=(model*vec4(p,1.0)).xyz;N=mat3(model)*n;gl_Position=mvp*vec4(p,1.0);}`;
    const fs = `precision mediump float; varying vec3 N; varying vec3 P; uniform vec3 color; uniform vec3 camera; void main(){vec3 nn=normalize(N);vec3 l=normalize(vec3(-2.0,4.0,5.0)-P);vec3 rim=normalize(vec3(3.0,1.5,-4.0)-P);float d=max(dot(nn,l),0.0);float r=pow(max(dot(reflect(-normalize(camera-P),nn),rim),0.0),18.0);float ambient=.20;vec3 c=color*(ambient+d*.68)+vec3(.03,.15,.20)*r;gl_FragColor=vec4(c,1.0);}`;
    const compile=(type:number,src:string)=>{const s=gl.createShader(type)!;gl.shaderSource(s,src);gl.compileShader(s);return s;};
    const program=gl.createProgram()!;gl.attachShader(program,compile(gl.VERTEX_SHADER,vs));gl.attachShader(program,compile(gl.FRAGMENT_SHADER,fs));gl.linkProgram(program);gl.useProgram(program);
    const locP=gl.getAttribLocation(program,"p"),locN=gl.getAttribLocation(program,"n"),locMvp=gl.getUniformLocation(program,"mvp"),locModel=gl.getUniformLocation(program,"model"),locColor=gl.getUniformLocation(program,"color"),locCam=gl.getUniformLocation(program,"camera");

    type Mesh={v:WebGLBuffer;n:WebGLBuffer;count:number;mode:number};
    const mesh=(verts:number[],normals:number[],mode=gl.TRIANGLES):Mesh=>{const v=gl.createBuffer()!;gl.bindBuffer(gl.ARRAY_BUFFER,v);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(verts),gl.STATIC_DRAW);const n=gl.createBuffer()!;gl.bindBuffer(gl.ARRAY_BUFFER,n);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(normals),gl.STATIC_DRAW);return{v,n,count:verts.length/3,mode};};
    const cube=()=>{const f:number[]=[];const n:number[]=[];const faces=[[[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]],[[-1,-1,-1],[-1,1,-1],[1,1,-1],[1,-1,-1]],[[-1,1,-1],[-1,1,1],[1,1,1],[1,1,-1]],[[-1,-1,-1],[1,-1,-1],[1,-1,1],[-1,-1,1]],[1,[-1,-1,-1],[-1,-1,1],[-1,1,1],[-1,1,-1]],[1,[1,-1,-1],[1,1,-1],[1,1,1],[1,-1,1]]];faces.forEach((q:any)=>{const a=q[0][0]!==undefined?q:q.slice(1), normal=q[0][0]!==undefined?([0,0,1]):q[0];const t=a as number[][];for(let i=1;i<3;i++){f.push(...t[0],...t[i],...t[i+1]);n.push(...normal,...normal,...normal);}});return mesh(f,n);};
    const cyl=(segments=24)=>{const v:number[]=[];const n:number[]=[];for(let i=0;i<segments;i++){const a=i/segments*Math.PI*2,b=(i+1)/segments*Math.PI*2;const A=[Math.cos(a),0,Math.sin(a)],B=[Math.cos(b),0,Math.sin(b)],C=[Math.cos(b),1,Math.sin(b)],D=[Math.cos(a),1,Math.sin(a)];v.push(...A,...B,...C,...A,...C,...D);n.push(...A,...B,...C,...A,...C,...D);v.push(0,1,0,...C,...D,0,1,0);n.push(0,1,0,0,1,0,0,1,0);v.push(0,0,0,...D,...C,0,0,0);n.push(0,-1,0,0,-1,0,0,-1,0);}return mesh(v,n);};
    const box=cube(), cylinder=cyl();

    const I=()=>[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];
    const mul=(a:number[],b:number[])=>{const o=new Array(16).fill(0);for(let r=0;r<4;r++)for(let c=0;c<4;c++)for(let k=0;k<4;k++)o[r*4+c]+=a[r*4+k]*b[k*4+c];return o;};
    const trans=(x:number,y:number,z:number)=>{const m=I();m[12]=x;m[13]=y;m[14]=z;return m;};
    const scale=(x:number,y:number,z:number)=>{const m=I();m[0]=x;m[5]=y;m[10]=z;return m;};
    const rotY=(a:number)=>{const c=Math.cos(a),s=Math.sin(a);return[c,0,-s,0,0,1,0,0,s,0,c,0,0,0,0,1];};
    const persp=(f:number,a:number,n:number,far:number)=>{const t=1/Math.tan(f/2),m=new Array(16).fill(0);m[0]=t/a;m[5]=t;m[10]=(far+n)/(n-far);m[11]=-1;m[14]=2*far*n/(n-far);return m;};
    const look=(eye:number[],center:number[])=>{const z=norm(sub(eye,center)),x=norm(cross([0,1,0],z)),y=cross(z,x);return[x[0],y[0],z[0],0,x[1],y[1],z[1],0,x[2],y[2],z[2],0,-dot(x,eye),-dot(y,eye),-dot(z,eye),1];};
    const sub=(a:number[],b:number[])=>a.map((v,i)=>v-b[i]); const dot=(a:number[],b:number[])=>a.reduce((s,v,i)=>s+v*b[i],0); const cross=(a:number[],b:number[])=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]]; const norm=(a:number[])=>{const l=Math.hypot(...a)||1;return a.map(v=>v/l);};

    const draw=(m:Mesh,model:number[],color:number[],vp:number[],cam:number[])=>{gl.bindBuffer(gl.ARRAY_BUFFER,m.v);gl.enableVertexAttribArray(locP);gl.vertexAttribPointer(locP,3,gl.FLOAT,false,0,0);gl.bindBuffer(gl.ARRAY_BUFFER,m.n);gl.enableVertexAttribArray(locN);gl.vertexAttribPointer(locN,3,gl.FLOAT,false,0,0);gl.uniformMatrix4fv(locModel,false,new Float32Array(model));gl.uniformMatrix4fv(locMvp,false,new Float32Array(mul(vp,model)));gl.uniform3fv(locColor,new Float32Array(color));gl.uniform3fv(locCam,new Float32Array(cam));gl.drawArrays(m.mode,0,m.count);};

    let raf=0,theta=0,targetX=0,targetY=0,cx=0,cy=0;let w=1,h=1;
    const resize=()=>{const r=canvas.getBoundingClientRect();w=r.width;h=r.height;const d=Math.min(devicePixelRatio||1,2);canvas.width=w*d;canvas.height=h*d;gl.viewport(0,0,canvas.width,canvas.height);};
    const move=(e:PointerEvent)=>{targetX=(e.clientX/innerWidth-.5)*1.2;targetY=(e.clientY/innerHeight-.5)*.45;};
    const render=()=>{theta+=.0018;cx+=(targetX-cx)*.035;cy+=(targetY-cy)*.035;gl.enable(gl.DEPTH_TEST);gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);const radius=12;const cam=[Math.sin(theta+cx)*radius,3.5+cy*3,Math.cos(theta+cx)*radius];const vp=mul(persp(Math.PI/4,w/h,.1,60),look(cam,[0,1.4,0]));
      const parts:[Mesh,number[],number[]][]=[];const add=(m:Mesh,x:number,y:number,z:number,sx:number,sy:number,sz:number,c:number[])=>parts.push([m,mul(trans(x,y,z),scale(sx,sy,sz)),c]);
      for(let i=-3;i<=3;i++){add(cylinder,i*3.8,.15,0,1.15,3.8,1.15,[.16,.21,.24]);add(box,i*3.8,4.1,0,1.5,.18,1.5,[.18,.24,.27]);add(cylinder,i*3.8,4.1,0,.12,1.7,.12,[.28,.48,.55]);}
      for(let i=-4;i<=4;i++){add(box(i*3.1,0,2.7,2.1,.35,.35,[.08,.13,.16] as any) as any,0,0,0,1,1,1,[.08,.13,.16]);}
      add(box,-4.5,1.1,0,1.8,1.2,1.3,[.18,.23,.26]);add(cylinder,-3.6,1.1,.75,.72,.42,.72,[.25,.31,.34]);
      add(box,0,1.05,0,2.0,.9,1.45,[.15,.2,.23]);add(cylinder,.35,1.05,.76,.5,.35,.5,[.27,.34,.37]);
      add(box,4.5,1.1,0,1.8,1.2,1.3,[.18,.23,.26]);add(cylinder(0) as Mesh,4.5,1.75,.75,.42,.18,.42,[.25,.32,.35]);
      add(box,0,.05,0,18,.08,10,[.035,.055,.065]);
      parts.sort((a,b)=>b[1][14]-a[1][14]).forEach(([m,model,c])=>draw(m,model,c,vp,cam));
      raf=requestAnimationFrame(render);};
    resize();window.addEventListener("resize",resize);window.addEventListener("pointermove",move,{passive:true});render();return()=>{cancelAnimationFrame(raf);window.removeEventListener("resize",resize);window.removeEventListener("pointermove",move);};
  },[]);

  return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 h-full w-full" />;
}
