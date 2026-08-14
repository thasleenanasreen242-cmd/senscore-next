"use client";

import { ArrowLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();

  if (!pathname || pathname === "/") return null;

  const goBack = () => {
    if (window.history.length > 1) router.back();
    else router.push("/");
  };

  return (
    <div className="pointer-events-none fixed left-6 top-[88px] z-[70] sm:left-8 sm:top-[98px]">
      <button
        type="button"
        onClick={goBack}
        aria-label="Go back to previous page"
        className="pointer-events-auto group inline-flex h-10 items-center gap-2 rounded-full border border-white/10 bg-[#071019]/90 px-4 font-mono text-[10px] uppercase tracking-[0.16em] text-mute shadow-[0_8px_30px_rgba(0,0,0,.28)] backdrop-blur-xl transition-all duration-200 hover:border-teal/40 hover:bg-teal/10 hover:text-ink"
      >
        <ArrowLeft size={14} className="transition-transform duration-200 group-hover:-translate-x-0.5 group-hover:text-teal" />
        <span>Back</span>
      </button>
    </div>
  );
}
