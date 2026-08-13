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
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About SensCore" title="Engineering the Future of Industrial Automation" subheading="Engineering first. Always." description="SensCore is a UAE-based industrial solutions company specializing in instrumentation, automation, flow control and engineered process solutions." />
      <section className="border-b border-line py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10"><Reveal><p className="text-base leading-relaxed text-mute sm:text-lg">We were built on a simple conviction: industrial supply should start with the application, not the catalogue. That means engineering-led selection, proven technologies from trusted manufacturers, and technical support that continues well beyond delivery.</p></Reveal></div>
      </section>
      <section className="relative overflow-hidden border-b border-line bg-surface py-24 sm:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10"><Reveal><SectionEyebrow index="04" label="Represented Brands" /><h2 className="mt-6 font-display text-3xl font-semibold text-ink sm:text-4xl">Authorised Manufacturers</h2></Reveal><div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">{PARTNERS.map((partner, index) => { const website = PARTNER_WEBSITES[partner.name]; return <Reveal key={partner.name} delay={index * 0.06}><a href={website} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${partner.name} official website`} className="group relative flex min-h-28 items-center justify-center overflow-hidden rounded-xl border border-line bg-black/10 px-4 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-teal/50 hover:bg-teal/5 hover:shadow-[0_0_30px_rgba(45,212,191,0.10)]"><span className="pointer-events-none absolute -left-8 top-0 h-px w-20 bg-teal/60 opacity-0 transition-all duration-500 group-hover:left-full group-hover:opacity-100" /><span className="pointer-events-none absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-teal/50 opacity-40 transition-all duration-300 group-hover:scale-150 group-hover:opacity-100" /><span className="font-display text-base font-medium text-ink transition-colors duration-300 group-hover:text-teal sm:text-lg">{partner.name}</span></a></Reveal>; })}</div></div>
      </section>
    </>
  );
}
