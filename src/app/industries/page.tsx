import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import GlowButton from "@/components/GlowButton";
import { ShieldCheck } from "lucide-react";
import { INDUSTRIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Industrial Solutions for UAE Industries | SensCore",
  description: "Instrumentation, automation, flow control and engineered industrial solutions for key UAE sectors, selected around real process and operating requirements.",
  alternates: { canonical: "https://www.senscoretech.com/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero eyebrow="Industries" title="Industrial Engineering Solutions Across the UAE" description="" />
      <section className="border-b border-line py-8 sm:py-10"><div className="mx-auto max-w-7xl px-6 lg:px-10"><Reveal><h2 className="font-display text-2xl font-bold leading-tight text-ink sm:text-3xl">Different sectors. Different demands. One engineering approach.</h2></Reveal><Reveal delay={0.1}><p className="mt-3 max-w-4xl text-base leading-relaxed text-mute sm:text-lg">From process measurement and automation to flow control and equipment solutions, SensCore provides industrial engineering solutions across the UAE, with technologies selected around operating conditions, process requirements and lifecycle performance.</p></Reveal></div></section>
      <section className="relative border-t border-line bg-surface py-24 sm:py-32"><div className="absolute inset-0 hud-grid-fine opacity-30" /><div className="relative mx-auto max-w-7xl px-6 lg:px-10"><div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">{INDUSTRIES.map((industry, index) => { const badgeParts = industry.badge.split(/\s+[—·]\s+/); if (badgeParts.length === 1) { const match = industry.badge.match(/^(\S+)\s+(.+)$/); if (match) { badgeParts[0] = match[1]; badgeParts[1] = match[2]; } } return (<Reveal key={industry.id} delay={index * 0.04} className="bg-surface"><div className="group flex h-full flex-col justify-between p-8 transition-colors duration-300 hover:bg-surface2/60"><div><div className="flex items-start justify-between gap-4"><h3 className="font-display text-lg font-medium text-ink">{industry.title}</h3><span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-teal/30 bg-teal/5 px-3 py-2"><span className="flex h-6 w-6 items-center justify-center rounded-full border border-teal/30 bg-void/60 text-teal"><ShieldCheck size={13} strokeWidth={1.8} /></span><span className="flex flex-col items-start gap-0.5 leading-tight"><span className="font-mono text-sm font-bold uppercase tracking-[0.12em] text-teal">{badgeParts[0]}</span>{badgeParts[1] && <span className="text-[9px] uppercase tracking-[0.1em] text-mute">{badgeParts[1]}</span>}</span></span></div><p className="mt-3 text-sm leading-relaxed text-mute">{industry.description}</p></div><div className="mt-8 flex items-baseline gap-2"><span className="font-display text-2xl font-semibold text-teal">{industry.stat}</span><span className="font-mono text-[10px] uppercase tracking-[0.15em] text-faint">{industry.statLabel}</span></div></div></Reveal>); })}</div><Reveal delay={0.15}><div className="mt-10"><GlowButton href="/industries" variant="ghost">See all industries</GlowButton></div></Reveal></div></section>
      <section className="relative overflow-hidden py-24"><div className="relative mx-auto max-w-2xl px-6 text-center"><Reveal><h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">Don&apos;t See Your Industry?</h2></Reveal><Reveal delay={0.1}><p className="mt-4 text-base text-mute">If your application involves measurement, automation, flow control, process analysis or industrial equipment, our engineers can review the requirement and help identify a technically suitable solution.</p></Reveal><Reveal delay={0.2}><div className="mt-8"><GlowButton href="/contact">Tell Us About Your Application</GlowButton></div></Reveal></div></section>
    </>
  );
}
