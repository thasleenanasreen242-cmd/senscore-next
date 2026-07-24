"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ReactNode, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function GlowButton({
  href,
  children,
  variant = "primary",
  icon = true,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  icon?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.5 });

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.35);
    y.set(relY * 0.35);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const baseClass =
    variant === "primary"
      ? "group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-teal px-6 py-3 font-medium text-void transition-transform duration-300 active:scale-[0.98]"
      : "group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-medium text-ink transition-colors duration-300 hover:border-teal/50 hover:text-teal";

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={baseClass}
    >
      <span className="relative z-10">{children}</span>
      {icon && (
        <ArrowUpRight
          size={16}
          strokeWidth={2.5}
          className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
      {variant === "primary" && (
        <span className="absolute inset-0 -z-0 bg-gradient-to-r from-teal via-white to-teal bg-[length:200%_100%] opacity-0 transition-opacity duration-300 group-hover:opacity-30" />
      )}
    </motion.a>
  );
}
