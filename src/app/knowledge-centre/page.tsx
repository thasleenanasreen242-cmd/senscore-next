import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import GlowButton from "@/components/GlowButton";

export const metadata: Metadata = {
  title: "Industrial Engineering Knowledge Centre UAE | SensCore",
  description:
    "Practical engineering guidance on industrial measurement, automation, flow control, process analysis, energy efficiency and industrial applications across the UAE.",
  alternates: { canonical: "https://www.senscoretech.com/knowledge-centre" },
};

const topics = [
  ["flow-measurement", "Flow Measurement", "Understand how different flow measurement principles work, how to select the right technology, and what affects accuracy, installation and long-term performance."],
  ["level-measurement", "Level Measurement", "Explore practical guidance for measuring liquids, slurry and bulk solids, including technology selection, vessel conditions and common application challenges."],
  ["pressure-temperature", "Pressure and Temperature Measurement", "Learn how pressure and temperature instruments are selected, installed and applied across pipelines, vessels, utilities and industrial processes."],
  ["process-analysis", "Process Analysis", "Explore water quality and process monitoring principles including pH, conductivity, dissolved oxygen, turbidity, chlorine and other analytical parameters."],
  ["automation-connectivity", "Automation and Connectivity", "Understand how field instruments, PLCs, Remote IO, communication networks and control systems work together in modern industrial automation."],
  ["valves-flow-control", "Valves and Flow Control", "Learn how valve type, process conditions, control requirements, materials and actuation influence reliable flow control and isolation."],
  ["pumps-dosing", "Pumps and Dosing", "Explore pump selection, duty point considerations, fluid compatibility, dosing requirements, solids handling and common pumping challenges."],
  ["flange-protection", "Flange Protection and Sealing", "Understand how flange guards help reduce the consequences of hazardous spray releases and how protection should be selected around the process conditions."],
  ["compressed-air-energy-efficiency", "Compressed Air and Energy Efficiency", "Learn how flow measurement, compressor performance analysis, network monitoring and leakage assessment can help identify compressed air efficiency opportunities."],
  ["engineering-practice", "Engineering Practice and Industrial Applications", "Explore practical guidance on specification, equipment selection, installation, commissioning, verification, troubleshooting and application engineering."],
] as const;

const faqs = [
  ["What is the SensCore Knowledge Centre?", "It is a technical resource covering industrial measurement, automation, flow control, process analysis, fluid handling, plant protection, energy efficiency and practical application engineering."],
  ["Does SensCore provide engineering support across the UAE?", "Yes. SensCore supports industrial requirements across Abu Dhabi, Dubai, Sharjah, Ajman, Ras Al Khaimah, Fujairah and Umm Al Quwain."],
  ["Can SensCore review a specific industrial application?", "Yes. Application information can be reviewed to help determine appropriate measurement, automation, valve, pump, protection or industrial service requirements."],
  ["What information should I prepare before requesting technical support?", "Useful information can include the process medium, flow or capacity, pressure, temperature, pipe or vessel size, materials, required accuracy, connection details, control signals and operating conditions."],
  ["How do I choose the right instrument or equipment for an industrial application?", "Selection should begin with the process conditions, required function, operating range, materials, installation constraints and control requirements. The suitable technology depends on the application rather than on a single product specification."],
] as const;

export default function KnowledgeCentrePage() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge Centre"
        title="Practical Engineering Guidance for Industrial Applications"
        description="The SensCore Knowledge Centre brings together technical guidance, application insights and practical engineering considerations for industrial projects and operating facilities. Explore how different technologies work, where they are best applied, what to consider during selection and installation, and how to avoid common specification and application issues. Developed for industrial decision makers across the UAE and GCC."
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-teal">
                <BookOpen size={15} /> Explore by Engineering Topic
              </div>
              <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
                Engineering knowledge for real industrial applications.
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {topics.map(([slug, title, text], index) => (
              <Reveal key={slug} delay={index * 0.03}>
                <Link
                  href={`/knowledge-centre/${slug}`}
                  className="group block h-full rounded-2xl border border-line bg-surface p-7 transition-all hover:-translate-y-1 hover:border-teal/40 hover:bg-teal/[0.03]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-teal">
                      {String(index + 1).padStart(2, "0")} · Technical Guide
                    </span>
                    <ArrowRight size={17} className="text-faint transition-transform group-hover:translate-x-1 group-hover:text-teal" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-medium text-ink">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-mute">{text}</p>
                  <div className="mt-6 text-xs font-semibold text-teal">Read technical guide →</div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal>
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-teal">
              <BookOpen size={15} /> Frequently Asked Questions
            </div>
            <div className="mt-10 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-void/30">
              {faqs.map(([question, answer]) => (
                <div key={question} className="p-7 sm:p-8">
                  <h3 className="font-display text-lg font-medium text-ink">{question}</h3>
                  <p className="mt-3 text-sm leading-7 text-mute">{answer}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_0.8fr] lg:px-10">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-ink">Engineering guidance for better decisions.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-mute">
              SensCore approaches industrial requirements around the application. Process medium, flow or capacity, pressure, temperature, pipe or vessel size, materials, required accuracy, connections, control signals and operating conditions can all influence the right technology.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-line bg-surface p-7">
              <div className="space-y-4 text-sm text-mute">
                {["Application-based equipment selection", "Specification and installation considerations", "Commissioning, verification and troubleshooting guidance", "Industrial applications across the UAE"].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-teal" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-7">
                <GlowButton href="/contact">Talk to an Engineer</GlowButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
