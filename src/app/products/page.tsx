import type { Metadata } from "next";
import { Gauge, Cpu, Sliders, TestTube, Waves, Wrench } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionEyebrow from "@/components/SectionEyebrow";
import GlowButton from "@/components/GlowButton";
import MutableVideo from "@/components/MutableVideo";
import { PRODUCT_CATEGORIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Industrial Instrumentation, Automation & Process Solutions | SensCore",
  description: "Industrial instrumentation, automation, flow control and process solutions across the UAE, selected around real applications and operating requirements.",
  alternates: { canonical: "https://www.senscoretech.com/products" },
};

const ICONS: Record<string, any> = { instrumentation: Gauge, automation: Cpu, valves: Sliders, analysers: TestTube, pumps: Waves, services: Wrench };
const VIDEOS: Record<string, string> = { instrumentation: "/instrumentation.mp4", automation: "/automation.mp4", valves: "/valves.mp4", pumps: "/pumps.mp4" };
const DISPLAY_TITLES: Record<string, string> = {
  instrumentation: "Industrial Instrumentation",
  automation: "Industrial Automation & Connectivity",
  valves: "Industrial Valves",
  analysers: "Process Analysers & Gas Detection",
  pumps: "Industrial Pumps",
  services: "Industrial Engineering Services",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero eyebrow="Products & Services" title="Industrial Instrumentation, Automation & Process Solutions" description="Every layer of the process, engineered. From field measurement and process analysis to automation, valves, pumps and critical piping solutions, SensCore specifies, supplies and supports industrial technologies for applications across the UAE, backed by established global manufacturers and application-driven engineering." />
      <section className="py-24 sm:py-32">
        <div className="mx-auto flex max-w-7xl flex-col gap-24 px-6 lg:px-10">
          {PRODUCT_CATEGORIES.slice(0, 6).map((cat, i) => {
            const Icon = ICONS[cat.id] ?? Gauge;
            const videoSrc = VIDEOS[cat.id];
            const reversed = i % 2 === 1;
            return <div key={cat.id} className={`grid items-start gap-12 lg:grid-cols-2 lg:gap-20 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <Reveal>
                <SectionEyebrow index={String(i + 1).padStart(2, "0")} label={cat.tag} />
                <h2 className="mt-6 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">{DISPLAY_TITLES[cat.id] ?? cat.title}</h2>
                <p className="mt-5 text-base leading-relaxed text-mute sm:text-lg">{cat.description}</p>
                <div className="mt-8 flex flex-col gap-5">{cat.groups.map((group) => <div key={group.heading} className="border-l-2 border-teal/30 pl-4"><h3 className="font-mono text-xs uppercase tracking-[0.15em] text-teal">{group.heading}</h3><p className="mt-1.5 text-sm leading-relaxed text-mute">{group.items}</p></div>)}</div>
              </Reveal>
              <Reveal delay={0.1}><div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-line bg-surface hud-grid-fine lg:sticky lg:top-28">{videoSrc ? <MutableVideo src={videoSrc} className="absolute inset-0 h-full w-full object-cover" /> : <><div className="absolute inset-0 bg-gradient-to-br from-teal/[0.08] via-transparent to-indigo/[0.08]" /><span className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-teal/30 bg-void/60 text-teal"><Icon size={40} strokeWidth={1.5} /></span></>}<span className="absolute bottom-5 right-5 z-10 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">{cat.tag}</span></div></Reveal>
            </div>;
          })}
        </div>
      </section>
      <section className="relative overflow-hidden border-t border-line py-24 text-center"><div className="relative mx-auto max-w-2xl px-6"><Reveal><h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">Send us the specification. We&apos;ll send back an answer.</h2></Reveal><Reveal delay={0.1}><p className="mt-4 text-base text-mute">RFQ, datasheet, or a description of the application. Our engineers review it and respond with the right solution, the reasoning, and a price.</p></Reveal><Reveal delay={0.18}><div className="mt-8"><GlowButton href="/contact">Request a Spec Review*</GlowButton></div><p className="mt-3 font-mono text-[11px] uppercase tracking-[0.15em] text-faint">*Reviewed and answered within 24 hours</p></Reveal></div></section>
    </>
  );
}
