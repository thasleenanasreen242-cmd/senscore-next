"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ARTICLES = [
  ["flow-measurement", "Flow Measurement for Industrial Applications"],
  ["level-measurement", "Industrial Level Measurement"],
  ["pressure-temperature", "Pressure and Temperature Measurement"],
  ["process-analysis", "Process Analysis"],
  ["automation-connectivity", "Industrial Automation and Connectivity"],
  ["valves-flow-control", "Valves and Flow Control"],
  ["pumps-dosing", "Pumps and Dosing"],
  ["flange-protection", "Flange Protection and Sealing"],
  ["compressed-air-energy-efficiency", "Compressed Air and Energy Efficiency"],
  ["engineering-practice", "Engineering Practice and Industrial Applications"],
] as const;

export default function KnowledgeArticleNavigation() {
  const pathname = usePathname();
  const slug = pathname?.split("/").filter(Boolean).pop();
  if (!slug || slug === "knowledge-centre") return null;

  const index = ARTICLES.findIndex(([itemSlug]) => itemSlug === slug);
  if (index < 0) return null;

  const previous = ARTICLES[index - 1];
  const next = ARTICLES[index + 1];
  const card = "group min-h-[88px] rounded-xl border border-line bg-surface px-4 py-3.5 text-sm text-mute transition-colors hover:border-teal/40 hover:text-ink sm:px-5 sm:py-4";

  return (
    <div className="mx-auto max-w-5xl px-6 pb-20 lg:px-10">
      <nav aria-label="Knowledge Centre article navigation" className="mt-10 grid gap-3 sm:grid-cols-2">
        {previous ? (
          <Link href={`/knowledge-centre/${previous[0]}`} rel="prev" className={card}>
            <ArrowLeft size={14} className="mb-2.5 text-teal transition-transform group-hover:-translate-x-1" />
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-teal">Previous</span>
            <div className="mt-0.5 font-display text-sm leading-5 text-ink">{previous[1]}</div>
          </Link>
        ) : <div aria-hidden="true" className="min-h-[88px]" />}
        {next ? (
          <Link href={`/knowledge-centre/${next[0]}`} rel="next" className={`${card} sm:text-right`}>
            <ArrowRight size={14} className="mb-2.5 ml-auto text-teal transition-transform group-hover:translate-x-1" />
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-teal">Next</span>
            <div className="mt-0.5 font-display text-sm leading-5 text-ink">{next[1]}</div>
          </Link>
        ) : <div aria-hidden="true" className="min-h-[88px]" />}
      </nav>
    </div>
  );
}
