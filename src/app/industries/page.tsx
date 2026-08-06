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
        title="Six sectors. One sensing standard."
        description="Every industry has a different failure mode. SensCore's platform adapts the same autonomous sensing core to the metrics that matter in each one."
      />

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col divide-y divide-line border-y border-line">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.id} delay={i * 0.04}>
                <div className="grid gap-6 py-10 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-10">
                  <span className="font-mono text-sm text-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-medium text-ink">
                      {ind.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-mute sm:text-base">
                      {ind.description}
                    </p>
                  </div>
                  <div className="flex items-baseline gap-2 sm:flex-col sm:items-end sm:gap-0">
                    <span className="font-display text-3xl font-semibold text-teal">
                      {ind.stat}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-faint">
                      {ind.statLabel}
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
            <SectionEyebrow index="00" label="Proof, not promises" />
            <h2 className="mt-6 max-w-xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Operators across every sector already run on SensCore data.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-4">
              {CLIENTS.map((c) => (
                <div
                  key={c}
                  className="flex h-24 items-center justify-center bg-surface px-4 text-center font-mono text-xs uppercase tracking-[0.1em] text-mute transition-colors hover:text-ink"
                >
                  {c}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 text-center">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo/10 blur-[120px]" />
        <div className="relative mx-auto max-w-2xl px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              Don&apos;t see your sector listed?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-base text-mute">
              If it involves flow, pressure, or process control, we&apos;ve
              probably already instrumented something like it.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-8">
              <GlowButton href="/contact">Tell us about your site</GlowButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
