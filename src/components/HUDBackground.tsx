"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseVx: number;
  baseVy: number;
  size: number;
  phase: number;
  pulse: number;
};

const BLUE = "74, 144, 255";
const CYAN = "0, 229, 199";
const WHITE = "226, 236, 250";

function createNodes(width: number, height: number, density: number): Node[] {
  const count = Math.max(18, Math.min(42, Math.round(density * 4.2)));

  return Array.from({ length: count }, (_, index) => {
    const edge = index % 5 === 0;
    const baseVx = (Math.random() - 0.5) * (edge ? 0.12 : 0.18);
    const baseVy = (Math.random() - 0.5) * (edge ? 0.09 : 0.14);

    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: baseVx,
      vy: baseVy,
      baseVx,
      baseVy,
      size: 1.1 + Math.random() * 1.5,
      phase: Math.random() * Math.PI * 2,
      pulse: 0.7 + Math.random() * 0.8,
    };
  });
}

export default function HUDBackground({ density = 7 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const connectionDistance = 190;
    const maxConnections = 3;
    const pointerRadius = 155;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    let raf = 0;
    let time = 0;
    let pointerX = -1000;
    let pointerY = -1000;
    let pointerActive = false;

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas!.width = Math.round(width * dpr);
      canvas!.height = Math.round(height * dpr);
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      nodes = createNodes(width, height, density);
    }

    function onPointerMove(event: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      pointerX = event.clientX - rect.left;
      pointerY = event.clientY - rect.top;
      pointerActive =
        pointerX >= -20 &&
        pointerX <= width + 20 &&
        pointerY >= -20 &&
        pointerY <= height + 20;
    }

    function onPointerLeave() {
      pointerActive = false;
    }

    function updateNodes() {
      nodes.forEach((node) => {
        if (!reduceMotion && pointerActive) {
          const dx = node.x - pointerX;
          const dy = node.y - pointerY;
          const distance = Math.hypot(dx, dy);

          if (distance < pointerRadius && distance > 0.001) {
            const strength = 1 - distance / pointerRadius;
            const force = strength * strength * 0.95;
            node.vx += (dx / distance) * force;
            node.vy += (dy / distance) * force;
          }
        }

        // Gently return to the natural drifting velocity after the cursor passes.
        node.vx += (node.baseVx - node.vx) * 0.035;
        node.vy += (node.baseVy - node.vy) * 0.035;

        // Keep the interaction smooth instead of letting a fast pointer launch nodes away.
        const speed = Math.hypot(node.vx, node.vy);
        if (speed > 1.8) {
          node.vx = (node.vx / speed) * 1.8;
          node.vy = (node.vy / speed) * 1.8;
        }

        node.x += node.vx;
        node.y += node.vy;

        if (node.x < -20) node.x = width + 20;
        if (node.x > width + 20) node.x = -20;
        if (node.y < -20) node.y = height + 20;
        if (node.y > height + 20) node.y = -20;
      });
    }

    function drawConnections() {
      for (let i = 0; i < nodes.length; i++) {
        const nearby: { index: number; distance: number }[] = [];
        const a = nodes[i];

        for (let j = 0; j < nodes.length; j++) {
          if (i === j) continue;
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.hypot(dx, dy);
          if (distance < connectionDistance) nearby.push({ index: j, distance });
        }

        nearby
          .sort((left, right) => left.distance - right.distance)
          .slice(0, maxConnections)
          .forEach(({ index, distance }) => {
            if (index < i) return;
            const b = nodes[index];
            const strength = 1 - distance / connectionDistance;
            const alpha = 0.025 + strength * 0.09;

            const gradient = ctx!.createLinearGradient(a.x, a.y, b.x, b.y);
            gradient.addColorStop(0, `rgba(${BLUE}, ${alpha})`);
            gradient.addColorStop(0.5, `rgba(${CYAN}, ${alpha * 1.35})`);
            gradient.addColorStop(1, `rgba(${BLUE}, ${alpha})`);

            ctx!.strokeStyle = gradient;
            ctx!.lineWidth = 0.7 + strength * 0.45;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          });
      }
    }

    function drawNodes() {
      nodes.forEach((node, index) => {
        const pulse = reduceMotion
          ? 1
          : 1 + Math.sin(time * node.pulse + node.phase) * 0.18;
        const radius = node.size * pulse;
        const color = index % 5 === 0 ? CYAN : BLUE;

        const glow = ctx!.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          radius * 8
        );
        glow.addColorStop(0, `rgba(${color}, 0.28)`);
        glow.addColorStop(0.35, `rgba(${color}, 0.08)`);
        glow.addColorStop(1, `rgba(${color}, 0)`);

        ctx!.fillStyle = glow;
        ctx!.beginPath();
        ctx!.arc(node.x, node.y, radius * 8, 0, Math.PI * 2);
        ctx!.fill();

        ctx!.fillStyle = `rgba(${WHITE}, 0.9)`;
        ctx!.beginPath();
        ctx!.arc(node.x, node.y, radius * 0.7, 0, Math.PI * 2);
        ctx!.fill();

        ctx!.fillStyle = `rgba(${color}, 0.95)`;
        ctx!.beginPath();
        ctx!.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx!.fill();
      });
    }

    function drawPointerField() {
      if (reduceMotion || !pointerActive) return;

      const field = ctx!.createRadialGradient(
        pointerX,
        pointerY,
        0,
        pointerX,
        pointerY,
        pointerRadius
      );
      field.addColorStop(0, `rgba(${BLUE}, 0.075)`);
      field.addColorStop(0.38, `rgba(${CYAN}, 0.025)`);
      field.addColorStop(1, `rgba(${BLUE}, 0)`);

      ctx!.fillStyle = field;
      ctx!.beginPath();
      ctx!.arc(pointerX, pointerY, pointerRadius, 0, Math.PI * 2);
      ctx!.fill();

      ctx!.strokeStyle = `rgba(${BLUE}, 0.18)`;
      ctx!.lineWidth = 0.8;
      ctx!.beginPath();
      ctx!.arc(pointerX, pointerY, 22, 0, Math.PI * 2);
      ctx!.stroke();
    }

    function drawSignal() {
      if (reduceMotion || nodes.length === 0) return;

      const signalIndex = Math.floor(time * 0.18) % nodes.length;
      const node = nodes[signalIndex];
      const radius = 16 + Math.sin(time * 2) * 4;

      ctx!.strokeStyle = `rgba(${CYAN}, 0.12)`;
      ctx!.lineWidth = 0.8;
      ctx!.beginPath();
      ctx!.arc(node.x, node.y, radius, 0, Math.PI * 2);
      ctx!.stroke();
    }

    function render() {
      ctx!.clearRect(0, 0, width, height);
      updateNodes();
      drawConnections();
      drawPointerField();
      drawNodes();
      drawSignal();
      time += 0.016;
      raf = requestAnimationFrame(render);
    }

    resize();
    render();

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave, { passive: true });

    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
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
