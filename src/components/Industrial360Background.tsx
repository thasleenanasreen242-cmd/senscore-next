"use client";

import { useEffect, useRef } from "react";

type Point = { x: number; y: number };
type Equipment = { x: number; y: number; scale: number; type: "tank" | "pump" | "meter" | "valve" | "panel" };

/**
 * Lightweight, dependency-free industrial panoramic background.
 * The scene is rendered wider than the viewport and the camera follows the
 * cursor with smooth inertia, creating a continuous 360-style industrial orbit.
 */
export default function Industrial360Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let time = 0;
    let targetX = 0.5;
    let targetY = 0.5;
    let cameraX = 0.5;
    let cameraY = 0.5;
    let pointerActive = false;

    const worldWidthFactor = 3.2;
    const equipment: Equipment[] = [
      { x: 0.08, y: 0.56, scale: 1.05, type: "tank" },
      { x: 0.19, y: 0.64, scale: 0.78, type: "pump" },
      { x: 0.30, y: 0.53, scale: 0.62, type: "meter" },
      { x: 0.41, y: 0.62, scale: 0.88, type: "valve" },
      { x: 0.52, y: 0.51, scale: 0.98, type: "tank" },
      { x: 0.64, y: 0.63, scale: 0.74, type: "pump" },
      { x: 0.74, y: 0.54, scale: 0.62, type: "meter" },
      { x: 0.84, y: 0.63, scale: 0.9, type: "valve" },
      { x: 0.94, y: 0.51, scale: 1.0, type: "tank" },
    ];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onPointerMove = (event: PointerEvent) => {
      targetX = Math.max(0, Math.min(1, event.clientX / Math.max(window.innerWidth, 1)));
      targetY = Math.max(0, Math.min(1, event.clientY / Math.max(window.innerHeight, 1)));
      pointerActive = true;
    };

    const onPointerLeave = () => {
      pointerActive = false;
    };

    const roundedRect = (x: number, y: number, w: number, h: number, r: number) => {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
    };

    const drawPipe = (points: Point[], lineWidth: number) => {
      ctx.beginPath();
      points.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
      ctx.strokeStyle = "rgba(118, 132, 145, .72)";
      ctx.lineWidth = lineWidth + 4;
      ctx.stroke();
      ctx.strokeStyle = "rgba(24, 31, 39, .95)";
      ctx.lineWidth = lineWidth;
      ctx.stroke();
      ctx.strokeStyle = "rgba(90, 130, 168, .28)";
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    const drawTank = (x: number, y: number, s: number) => {
      const w = 120 * s;
      const h = 180 * s;
      const top = y - h;
      const gradient = ctx.createLinearGradient(x, top, x + w, top);
      gradient.addColorStop(0, "#171e26");
      gradient.addColorStop(0.45, "#4a5661");
      gradient.addColorStop(0.7, "#202831");
      gradient.addColorStop(1, "#0d1218");
      ctx.fillStyle = gradient;
      roundedRect(x, top + 16 * s, w, h - 32 * s, 12 * s);
      ctx.fill();
      ctx.strokeStyle = "rgba(160, 174, 185, .35)";
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(x + w / 2, top + 16 * s, w / 2, 18 * s, 0, 0, Math.PI * 2);
      ctx.fillStyle = "#303b45";
      ctx.fill();
      ctx.stroke();
      drawPipe([{ x: x + w * .5, y: top }, { x: x + w * .5, y: top - 54 * s }, { x: x + w * .8, y: top - 54 * s }], 7 * s);
      drawPipe([{ x: x + w, y: y - h * .48 }, { x: x + w + 45 * s, y: y - h * .48 }], 9 * s);
      ctx.fillStyle = "rgba(90,130,168,.12)";
      ctx.fillRect(x + 12 * s, top + 30 * s, 5 * s, h - 60 * s);
    };

    const drawPump = (x: number, y: number, s: number) => {
      const r = 38 * s;
      const cx = x + 48 * s;
      const cy = y - 48 * s;
      ctx.fillStyle = "#242e38";
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "rgba(164,177,188,.35)";
      ctx.stroke();
      ctx.fillStyle = "#11171d";
      ctx.beginPath();
      ctx.arc(cx, cy, r * .46, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "rgba(90,130,168,.5)";
      ctx.lineWidth = 3 * s;
      ctx.beginPath();
      ctx.arc(cx, cy, r * .65, -0.7, 1.7);
      ctx.stroke();
      drawPipe([{ x: x, y: cy }, { x: x + 28 * s, y: cy }], 8 * s);
      drawPipe([{ x: cx, y: cy + r }, { x: cx, y: y }], 8 * s);
    };

    const drawMeter = (x: number, y: number, s: number) => {
      const w = 64 * s;
      const h = 76 * s;
      const top = y - h;
      ctx.fillStyle = "#12191f";
      roundedRect(x, top, w, h, 7 * s);
      ctx.fill();
      ctx.strokeStyle = "rgba(130,150,165,.4)";
      ctx.stroke();
      ctx.fillStyle = "#0a0f14";
      ctx.beginPath();
      ctx.arc(x + w / 2, top + h * .48, 22 * s, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "rgba(90,180,205,.65)";
      ctx.lineWidth = 2 * s;
      ctx.beginPath();
      ctx.arc(x + w / 2, top + h * .48, 18 * s, -2.6, .3);
      ctx.stroke();
      ctx.strokeStyle = "#c2cbd3";
      ctx.lineWidth = 2 * s;
      ctx.beginPath();
      ctx.moveTo(x + w / 2, top + h * .48);
      ctx.lineTo(x + w * .64, top + h * .35);
      ctx.stroke();
    };

    const drawValve = (x: number, y: number, s: number) => {
      drawPipe([{ x, y: y - 48 * s }, { x: x + 100 * s, y: y - 48 * s }], 10 * s);
      const cx = x + 50 * s;
      const cy = y - 48 * s;
      ctx.strokeStyle = "#76838e";
      ctx.lineWidth = 7 * s;
      ctx.beginPath();
      ctx.moveTo(cx - 24 * s, cy - 24 * s);
      ctx.lineTo(cx + 24 * s, cy + 24 * s);
      ctx.moveTo(cx + 24 * s, cy - 24 * s);
      ctx.lineTo(cx - 24 * s, cy + 24 * s);
      ctx.stroke();
      ctx.strokeStyle = "rgba(90,130,168,.7)";
      ctx.lineWidth = 4 * s;
      ctx.beginPath();
      ctx.moveTo(cx, cy - 24 * s);
      ctx.lineTo(cx, cy - 58 * s);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx, cy - 63 * s, 12 * s, 0, Math.PI * 2);
      ctx.stroke();
    };

    const drawPanel = (x: number, y: number, s: number) => {
      const w = 110 * s;
      const h = 150 * s;
      ctx.fillStyle = "#111820";
      roundedRect(x, y - h, w, h, 5 * s);
      ctx.fill();
      ctx.strokeStyle = "rgba(150,165,178,.35)";
      ctx.stroke();
      for (let i = 0; i < 4; i++) {
        ctx.fillStyle = i === 1 ? "rgba(78,196,192,.8)" : "rgba(120,140,155,.55)";
        ctx.beginPath();
        ctx.arc(x + 20 * s, y - h + (30 + i * 25) * s, 4 * s, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = "rgba(90,130,168,.12)";
      ctx.fillRect(x + 42 * s, y - h + 18 * s, 52 * s, 45 * s);
    };

    const drawEquipment = (item: Equipment, worldW: number, ground: number) => {
      const x = item.x * worldW;
      const y = ground - item.y * height * .04;
      switch (item.type) {
        case "tank": drawTank(x, y, item.scale); break;
        case "pump": drawPump(x, y, item.scale); break;
        case "meter": drawMeter(x, y, item.scale); break;
        case "valve": drawValve(x, y, item.scale); break;
        case "panel": drawPanel(x, y, item.scale); break;
      }
    };

    const render = () => {
      if (!reduceMotion && !pointerActive) {
        targetX = 0.5 + Math.sin(time * 0.09) * 0.08;
        targetY = 0.5 + Math.sin(time * 0.07) * 0.025;
      }
      cameraX += (targetX - cameraX) * 0.045;
      cameraY += (targetY - cameraY) * 0.045;

      const worldW = width * worldWidthFactor;
      const maxOffset = Math.max(0, worldW - width);
      const offsetX = cameraX * maxOffset;
      const verticalShift = (cameraY - 0.5) * 24;

      ctx.clearRect(0, 0, width, height);
      const sky = ctx.createLinearGradient(0, 0, 0, height);
      sky.addColorStop(0, "#05080c");
      sky.addColorStop(.48, "#0b1117");
      sky.addColorStop(1, "#030507");
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, width, height);

      ctx.save();
      ctx.translate(-offsetX, verticalShift);

      const horizon = height * .49;
      const ground = height * .93;
      const floor = ctx.createLinearGradient(0, horizon, 0, height);
      floor.addColorStop(0, "#151c22");
      floor.addColorStop(1, "#050709");
      ctx.fillStyle = floor;
      ctx.fillRect(0, horizon, worldW, height);

      ctx.strokeStyle = "rgba(90,130,168,.11)";
      ctx.lineWidth = 1;
      for (let i = 0; i < 24; i++) {
        const x = i * (worldW / 18);
        ctx.beginPath();
        ctx.moveTo(x, horizon);
        ctx.lineTo(x + (x - worldW / 2) * .2, height);
        ctx.stroke();
      }
      for (let i = 0; i < 7; i++) {
        const y = horizon + Math.pow(i / 7, 1.8) * (height - horizon);
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(worldW, y);
        ctx.stroke();
      }

      // Overhead pipe rack.
      drawPipe([{ x: 0, y: height * .26 }, { x: worldW, y: height * .26 }], 12);
      drawPipe([{ x: 0, y: height * .34 }, { x: worldW, y: height * .34 }], 7);
      for (let i = 0; i < 18; i++) {
        const x = i * (worldW / 17);
        drawPipe([{ x, y: height * .2 }, { x, y: height * .91 }], 5);
      }

      // Long process pipeline across the scene.
      drawPipe([{ x: 0, y: height * .73 }, { x: worldW * .28, y: height * .73 }, { x: worldW * .36, y: height * .67 }, { x: worldW * .62, y: height * .67 }, { x: worldW * .7, y: height * .73 }, { x: worldW, y: height * .73 }], 12);

      equipment.forEach((item) => drawEquipment(item, worldW, ground));
      drawPanel(worldW * .58, ground, .82);
      drawMeter(worldW * .69, ground - 18, .78);

      // Restrained industrial light sources.
      for (let i = 0; i < 8; i++) {
        const x = (i + .5) * worldW / 8;
        const glow = ctx.createRadialGradient(x, height * .31, 0, x, height * .31, 180);
        glow.addColorStop(0, "rgba(90,130,168,.12)");
        glow.addColorStop(1, "rgba(90,130,168,0)");
        ctx.fillStyle = glow;
        ctx.fillRect(x - 180, height * .12, 360, 360);
      }

      ctx.restore();

      // Cinematic vignette keeps the center readable without hiding the scene.
      const vignette = ctx.createRadialGradient(width * .5, height * .48, height * .12, width * .5, height * .48, Math.max(width, height) * .78);
      vignette.addColorStop(0, "rgba(0,0,0,.02)");
      vignette.addColorStop(.55, "rgba(0,0,0,.12)");
      vignette.addColorStop(1, "rgba(0,0,0,.62)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      const centerShade = ctx.createLinearGradient(width * .2, 0, width * .8, 0);
      centerShade.addColorStop(0, "rgba(0,0,0,.16)");
      centerShade.addColorStop(.5, "rgba(0,0,0,.28)");
      centerShade.addColorStop(1, "rgba(0,0,0,.16)");
      ctx.fillStyle = centerShade;
      ctx.fillRect(0, 0, width, height);

      time += 0.016;
      raf = requestAnimationFrame(render);
    };

    resize();
    render();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-black" aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
