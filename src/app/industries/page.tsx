import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionEyebrow from "@/components/SectionEyebrow";
import GlowButton from "@/components/GlowButton";
import { Check } from "lucide-react";
import { INDUSTRIES } from "@/lib/data";

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Six Sectors. One Sensing Standard."
        description="Every industry has different operational challenges. We bring the same engineering rigour to each, matching solutions to the conditions your process actually runs in."
      />

      <section className="py-24 sm:py-32">
        <div className="mx-auto flex max-w-7xl flex-col gap-24 px-6 lg:px-10">
          {INDUSTRIES.map((industry, index) => (
            <Reveal key={industry.id} delay={index * 0.03}>
              <div className="border-t border-line pt-10">
                <div className="flex flex-wrap items-start justify-between gap-6">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm text-faint">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                        {industry.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-mute sm:text-base">
                      {industry.description}
                    </p>
                    <div className="mt-4 inline-flex items-center rounded-full border border-teal/30 bg-teal/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-teal">
                      {industry.badge}
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <span className="font-display text-3xl font-bold text-teal">
                      {industry.stat}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-faint">
                      {industry.statLabel}
                    </span>
                  </div>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {industry.supply.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-ink">
                      <Check size={16} className="mt-0.5 shrink-0 text-teal" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo/10 blur-[120px]" />

        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              Don't See Your Industry?
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 text-base text-mute">
              If your operation involves monitoring, automation, process
              control, or industrial sensing, our team can design a solution
              tailored to your environment.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8">
              <GlowButton href="/contact">
                Tell Us About Your Project
              </GlowButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
