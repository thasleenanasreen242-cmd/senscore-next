"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function StatReadout({
  value,
  suffix = "",
  label,
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    let raf = 0;

    function tick(now: number) {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(value * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <div ref={ref} className="flex flex-col gap-1">
      <div className="font-display text-3xl font-semibold text-ink sm:text-4xl">
        {display.toFixed(decimals)}
        <span className="text-teal">{suffix}</span>
      </div>
      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute">
        {label}
      </div>
    </div>
  );
}
