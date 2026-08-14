import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import GlowButton from "@/components/GlowButton";
import { KNOWLEDGE_ARTICLES } from "@/lib/knowledge-centre";

export const metadata: Metadata = {
  title: "Industrial Engineering Knowledge Centre UAE | SensCore",
  description: "Practical engineering guidance on industrial measurement, automation, flow control, process analysis, energy efficiency and industrial applications across the UAE.",
  alternates: { canonical: "https://www.senscoretech.com/knowledge-centre" },
};

const topics = [
  ["flow-measurement", "Flow Measurement", "Understand flow measurement principles, technology selection, accuracy, installation and industrial applications."],
  ["level-measurement", "Level Measurement", "Guidance for measuring liquids, slurry and bulk solids, including vessel conditions and application challenges."],
  ["pressure-temperature", "Pressure and Temperature Measurement", "Learn how pressure and temperature instruments are selected, installed and applied across industrial processes."],
  ["process-analysis", "Process Analysis", "Explore pH, conductivity, dissolved oxygen, turbidity, chlorine and other analytical parameters."],
  ["automation-connectivity", "Automation and Connectivity", "Understand field instruments, PLCs, Remote IO, communication networks and modern industrial automation."],
  ["valves-flow-control", "Valves and Flow Control", "Learn how valve type, process conditions, materials, actuation and control requirements influence flow control."],
  ["pumps-dosing", "Pumps and Dosing", "Explore pump selection, duty point considerations, fluid compatibility, dosing, solids handling and pumping challenges."],
  ["flange-protection", "Flange Protection and Sealing", "Understand flange guards, spray protection, leak containment and selection around process conditions."],
  ["compressed-air-energy-efficiency", "Compressed Air and Energy Efficiency", "Learn how flow measurement, compressor analysis, network monitoring and leakage assessment support efficiency."],
  ["engineering-practice", "Engineering Practice and Industrial Applications", "Explore specification, equipment selection, installation, commissioning, verification and application engineering."],
] as const;

export default function KnowledgeCentrePage() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge Centre"
        title="Practical Engineering Guidance for Industrial Applications"
        description="The SensCore Knowledge Centre brings together technical guidance, application insights and practical engineering considerations for industrial projects and operating facilities across the UAE and GCC."
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-teal"><BookOpen size={15} /> Explore by Engineering Topic</div>
              <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">Engineering knowledge, organised around real applications.</h2>
              <p className="mt-5 text-base leading-8 text-mute">Explore how technologies work, where they are best applied, what to consider during selection and installation, and how to avoid common specification and application issues.</p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {topics.map(([slug, title, text], index) => (
              <Reveal key={slug} delay={index * 0.03}>
                <Link href={`/knowledge-centre/${slug}`} className="group block h-full rounded-2xl border border-line bg-surface p-7 transition-all hover:-translate-y-1 hover:border-teal/40 hover:bg-teal/[0.03]">
                  <div className="flex items-center justify-between gap-4"><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-teal">{String(index + 1).padStart(2, "0")}</span><ArrowRight size={17} className="text-faint transition-transform group-hover:translate-x-1 group-hover:text-teal" /></div>
                  <h3 className="mt-7 font-display text-xl font-medium text-ink">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-mute">{text}</p>
                  <div className="mt-6 text-xs font-semibold text-teal">Read technical guide →</div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_0.8fr] lg:px-10">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-ink">Engineering guidance for better decisions.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-mute">SensCore approaches industrial solutions around the application. Process medium, operating range, pressure, temperature, pipe or vessel size, materials, accuracy, connections, control signals and operating conditions can all influence the right technology.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-line bg-void/40 p-7">
              <div className="space-y-4 text-sm text-mute">
                {["Application-based equipment selection", "Specification and installation considerations", "Commissioning and verification guidance", "Industrial applications across the UAE"].map((item) => <div key={item} className="flex gap-3"><CheckCircle2 size={17} className="mt-0.5 shrink-0 text-teal" />{item}</div>)}
              </div>
              <div className="mt-7"><GlowButton href="/contact">Talk to an Engineer</GlowButton></div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
