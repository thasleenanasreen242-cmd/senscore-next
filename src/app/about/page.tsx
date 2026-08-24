import { ShieldCheck, Gem, Users, ListChecks } from "lucide-react";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionEyebrow from "@/components/SectionEyebrow";
import { PARTNERS } from "@/lib/data";

export const metadata: Metadata = {
  title: "SensCore | Industrial Automation and Instrumentation",
  description: "Learn about SensCore, a UAE-based industrial solutions company specializing in instrumentation, automation, flow control and engineered process solutions.",
  alternates: { canonical: "https://www.senscoretech.com/about" },
};

const PARTNER_WEBSITES: Record<string, string> = {
  Feejoy: "https://en.feejoy.com/",
  "ODOT Automation": "https://www.odotautomation.com/",
  Artema: "https://www.artemagaskets.it/en/",
  Comate: "https://www.comate-instruments.com/",
  "DJ Pumps": "https://www.pumpfromchina.com/",
  Probest: "https://probesti.com/",
  "ABC Wearstar": "https://www.abcvalve.com/product/pro_49.html",
};

const DISPLAY_PARTNERS = [...PARTNERS];

const VALUES = [
  { icon: ShieldCheck, title: "Engineering First", text: "Application-driven decisions, not catalogue-based selling. We specify for the process, not the price list." },
  { icon: Gem, title: "Precision & Quality", text: "Accuracy, consistency, and reliability in every solution, from the instrument selected to the documentation that comes with it." },
  { icon: Users, title: "Customer Focus", text: "Solutions built around real operational needs, with support that continues long after commissioning." },
  { icon: ListChecks, title: "Execution Discipline", text: "Structured processes and accountable delivery. What we commit to is what arrives." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About SensCore" title="Engineering the Future of Industrial Automation" subheading="Engineering first. Always." description="SensCore is a UAE-based industrial solutions company specializing in instrumentation, automation, flow control and engineered process solutions." />

      <section className="relative overflow-hidden border-b border-line py-24 sm:py-32">
        <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-teal/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <SectionEyebrow index="01" label="Our Mission" />
            <div className="mt-8 grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <h2 className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">Smarter Processes.<br />Better Decisions.</h2>
              <p className="max-w-xl text-base leading-relaxed text-mute sm:text-lg">We deliver forward-thinking industrial solutions that help our clients succeed every time. Rooted in trust and built on engineering judgment, we partner with global manufacturers to bring proven technologies that enhance performance, drive efficiency, and reduce operational cost.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-line bg-surface py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.08),transparent_65%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <SectionEyebrow index="02" label="Our Story" />
            <div className="mt-8 grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
              <div><h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">Engineering Solutions<br />Built for Industry</h2><div className="mt-8 h-px w-24 bg-teal/70" /></div>
              <div className="max-w-3xl text-base leading-relaxed text-mute sm:text-lg">
                <p>SensCore began by supplying high-quality industrial instrumentation across the UAE. With a deep industry focus and a commitment to long-term impact, we grew into something clients relied on beyond the delivery note.</p>
                <p className="mt-6">We are not just a supplier. We are a strategic ally in navigating industrial challenges and unlocking future-ready solutions. That means reading the specification properly, selecting for the application rather than the price list, and staying accountable for the outcome.</p>
                <p className="mt-6">Today we combine trusted industrial equipment with automation and analytics, so the speed behind every proposal matches the engineering standard behind every selection.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <SectionEyebrow index="03" label="Our Values" />
            <div className="mt-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">Principles Behind Every Solution</h2><p className="max-w-md text-sm leading-relaxed text-mute sm:text-base">The standards that shape how we engineer, select and deliver industrial solutions.</p></div>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value, index) => {
              const Icon = value.icon;
              return <Reveal key={value.title} delay={index * 0.05}><div className="group h-full bg-void p-7 transition-colors hover:bg-surface sm:p-8"><span className="flex h-11 w-11 items-center justify-center rounded-lg border border-teal/30 bg-teal/5 text-teal transition-transform duration-300 group-hover:scale-105"><Icon size={20} strokeWidth={1.75} /></span><div className="mt-8 font-mono text-[10px] tracking-[0.25em] text-teal/60">0{index + 1}</div><h3 className="mt-2 font-display text-lg font-semibold text-ink">{value.title}</h3><p className="mt-3 text-sm leading-relaxed text-mute">{value.text}</p></div></Reveal>;
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-line bg-surface py-24 sm:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10"><Reveal><SectionEyebrow index="04" label="Represented Brands" /><h2 className="mt-6 font-display text-3xl font-semibold text-ink sm:text-4xl">Authorised Manufacturers</h2></Reveal><div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">{DISPLAY_PARTNERS.map((partner, index) => { const website = PARTNER_WEBSITES[partner.name] || partner.href; return <Reveal key={partner.name} delay={index * 0.06}><a href={website} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${partner.name} official website`} className="group relative flex min-h-28 items-center justify-center overflow-hidden rounded-xl border border-line bg-black/10 px-4 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-teal/50 hover:bg-teal/5 hover:shadow-[0_0_30px_rgba(45,212,191,0.10)]"><span className="pointer-events-none absolute -left-8 top-0 h-px w-20 bg-teal/60 opacity-0 transition-all duration-500 group-hover:left-full group-hover:opacity-100" /><span className="pointer-events-none absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-teal/50 opacity-40 transition-all duration-300 group-hover:scale-150 group-hover:opacity-100" /><span className="font-display text-base font-medium text-ink transition-colors duration-300 group-hover:text-teal sm:text-lg">{partner.name}</span></a></Reveal>; })}</div></div>
      </section>
    </>
  );
}
