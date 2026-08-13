import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import GlowButton from "@/components/GlowButton";
import { Check } from "lucide-react";
import { INDUSTRIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Industrial Solutions for UAE Industries | SensCore",
  description: "Instrumentation, automation, flow control and engineered industrial solutions for key UAE sectors, selected around real process and operating requirements.",
  alternates: { canonical: "https://www.senscoretech.com/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero eyebrow="Industries" title="Industrial Engineering Solutions Across the UAE" description="Different sectors. Different demands. One engineering approach. From process measurement and automation to flow control and equipment solutions, SensCore supports industrial applications with technologies selected around operating conditions, process requirements and lifecycle performance." />
      <section className="py-24 sm:py-32">
        <div className="mx-auto flex max-w-7xl flex-col gap-24 px-6 lg:px-10">
          {INDUSTRIES.map((industry, index) => <Reveal key={industry.id} delay={index * 0.03}>
            <div className="border-t border-line pt-10">
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div className="max-w-2xl"><div className="flex items-center gap-3"><span className="font-mono text-sm text-faint">{String(index + 1).padStart(2, "0")}</span><h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">{industry.title}</h3></div><p className="mt-4 text-sm leading-relaxed text-mute sm:text-base">{industry.description}</p></div>
                <span className="inline-flex rounded-full border border-teal/30 bg-teal/5 px-4 py-2 font-display text-sm font-bold uppercase tracking-[0.1em] text-teal">{industry.badge}</span>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">{industry.supply.map((item) => <div key={item} className="flex items-start gap-3 text-sm text-ink"><Check size={16} className="mt-0.5 shrink-0 text-teal" />{item}</div>)}</div>
              <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">{industry.footerTag}</div>
            </div>
          </Reveal>)}
        </div>
      </section>
      <section className="relative overflow-hidden py-24"><div className="relative mx-auto max-w-2xl px-6 text-center"><Reveal><h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">Don&apos;t See Your Industry?</h2></Reveal><Reveal delay={0.1}><p className="mt-4 text-base text-mute">If your application involves measurement, automation, flow control, process analysis or industrial equipment, our engineers can review the requirement and help identify a technically suitable solution.</p></Reveal><Reveal delay={0.2}><div className="mt-8"><GlowButton href="/contact">Tell Us About Your Application</GlowButton></div></Reveal></div></section>
    </>
  );
}
