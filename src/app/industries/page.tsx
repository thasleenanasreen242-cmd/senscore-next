import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionEyebrow from "@/components/SectionEyebrow";
import GlowButton from "@/components/GlowButton";
import { INDUSTRIES, CLIENTS } from "@/lib/data";

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Six Sectors. One Sensing Standard."
        description="Every industry has different operational challenges. SensCore adapts the same intelligent sensing platform to monitor the metrics that matter most."
      />

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col divide-y divide-line border-y border-line">
            {INDUSTRIES.map((industry, index) => (
              <Reveal key={industry.id} delay={index * 0.05}>
                <div className="grid gap-6 py-10 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-10">
                  <span className="font-mono text-sm text-faint">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="font-display text-2xl font-semibold text-ink">
                      {industry.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-mute sm:text-base">
                      {industry.description}
                    </p>
                  </div>

                  <div className="flex items-baseline gap-2 sm:flex-col sm:items-end sm:gap-0">
                    <span className="font-display text-3xl font-bold text-teal">
                      {industry.stat}
                    </span>

                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-faint">
                      {industry.statLabel}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <SectionEyebrow
              index="00"
              label="Proof, Not Promises"
            />

            <h2 className="mt-6 max-w-xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Trusted by operators across multiple industries.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-4">
              {CLIENTS.map((client) => (
                <div
                  key={client}
                  className="flex h-24 items-center justify-center bg-surface px-4 text-center font-mono text-xs uppercase tracking-[0.1em] text-mute transition-colors hover:text-ink"
                >
                  {client}
                </div>
              ))}
            </div>
          </Reveal>
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
