"use client";

import { useEffect, useRef } from "react";

type Segment = { x1: number; y1: number; x2: number; y2: number };
type Path = { segments: Segment[]; length: number; lengths: number[] };
type Particle = { pathIndex: number; distance: number; speed: number; size: number };

const TEAL = "0, 229, 199";
const INDIGO = "61, 90, 254";

function buildPaths(width: number, height: number, count: number): Path[] {
  const paths: Path[] = [];
  for (let i = 0; i < count; i++) {
    const y = (height / (count + 1)) * (i + 1) + (Math.random() - 0.5) * 40;
    const bends = 2 + Math.floor(Math.random() * 3);
    const segments: Segment[] = [];
    let x = -50;
    let cy = y;
    for (let b = 0; b < bends; b++) {
      const nx = (width / bends) * (b + 1) + Math.random() * 60;
      segments.push({ x1: x, y1: cy, x2: nx, y2: cy });
      const ny = cy + (Math.random() - 0.5) * 120;
      segments.push({ x1: nx, y1: cy, x2: nx, y2: ny });
      x = nx;
      cy = ny;
    }
    segments.push({ x1: x, y1: cy, x2: width + 50, y2: cy });

    const lengths = segments.map((s) => Math.hypot(s.x2 - s.x1, s.y2 - s.y1));
    const length = lengths.reduce((a, b) => a + b, 0);
    paths.push({ segments, length, lengths });
  }
  return paths;
}

function pointOnPath(path: Path, distance: number) {
  let d = distance % path.length;
  for (let i = 0; i < path.segments.length; i++) {
    const segLen = path.lengths[i];
    if (d <= segLen) {
      const seg = path.segments[i];
      const t = segLen === 0 ? 0 : d / segLen;
      return { x: seg.x1 + (seg.x2 - seg.x1) * t, y: seg.y1 + (seg.y2 - seg.y1) * t };
    }
    d -= segLen;
  }
  const last = path.segments[path.segments.length - 1];
  return { x: last.x2, y: last.y2 };
}

export default function HUDBackground({ density = 7 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let paths: Path[] = [];
    let particles: Particle[] = [];
    let frame = 0;
    let raf = 0;

    function resize() {
      const rect = canvas!.parentElement!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      paths = buildPaths(width, height, density);
      particles = paths.flatMap((_, pi) =>
        Array.from({ length: 2 + Math.floor(Math.random() * 2) }, () => ({
          pathIndex: pi,
          distance: Math.random() * 2000,
          speed: 0.35 + Math.random() * 0.55,
          size: 1.6 + Math.random() * 1.8,
        }))
      );
    }

    function drawPaths() {
      ctx!.lineWidth = 1;
      ctx!.strokeStyle = `rgba(${TEAL}, 0.10)`;
      paths.forEach((p) => {
        ctx!.beginPath();
        p.segments.forEach((s) => {
          ctx!.moveTo(s.x1, s.y1);
          ctx!.lineTo(s.x2, s.y2);
        });
        ctx!.stroke();
      });
    }

    function drawParticles() {
      particles.forEach((particle, idx) => {
        const path = paths[particle.pathIndex];
        if (!path) return;
        if (!reduceMotion) particle.distance += particle.speed * 2.2;
        const pos = pointOnPath(path, particle.distance);
        const color = idx % 3 === 0 ? INDIGO : TEAL;

        const grad = ctx!.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, particle.size * 6);
        grad.addColorStop(0, `rgba(${color}, 0.9)`);
        grad.addColorStop(1, `rgba(${color}, 0)`);
        ctx!.fillStyle = grad;
        ctx!.beginPath();
        ctx!.arc(pos.x, pos.y, particle.size * 6, 0, Math.PI * 2);
        ctx!.fill();

        ctx!.fillStyle = `rgba(${color}, 1)`;
        ctx!.beginPath();
        ctx!.arc(pos.x, pos.y, particle.size, 0, Math.PI * 2);
        ctx!.fill();
      });
    }

    function render() {
      ctx!.clearRect(0, 0, width, height);
      drawPaths();
      drawParticles();
      frame++;
      raf = requestAnimationFrame(render);
    }

    resize();
    render();

    const ro = new ResizeObserver(() => resize());
    ro.observe(canvas.parentElement!);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [density]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="absolute inset-0 hud-grid opacity-70" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-void to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-void to-transparent" />
      <div
        aria-hidden
        className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-teal/[0.06] to-transparent animate-scan"
      />
    </div>
  );
}
