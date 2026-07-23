"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ01#$%&";

export default function DecodeText({
  text,
  className,
  delay = 0,
  speed = 28,
}: {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}) {
  const [display, setDisplay] = useState(text.replace(/[^\s]/g, " "));
  const frame = useRef(0);
  const started = useRef(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setDisplay(text);
      return;
    }

    const startTimeout = setTimeout(() => {
      started.current = true;
      const totalFrames = text.length * 3;

      const interval = setInterval(() => {
        frame.current++;
        const progress = frame.current / totalFrames;
        const revealCount = Math.floor(progress * text.length);

        const next = text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < revealCount) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");

        setDisplay(next);

        if (revealCount >= text.length) {
          setDisplay(text);
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(startTimeout);
  }, [text, delay, speed]);

  return <span className={className}>{display}</span>;
}
