import { Gauge, Cpu, Sliders, PipetteIcon, Waves, Wrench, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionEyebrow from "@/components/SectionEyebrow";
import GlowButton from "@/components/GlowButton";
import { PRODUCT_CATEGORIES } from "@/lib/data";

const ICONS: Record<string, any> = {
  instrumentation: Gauge,
  automation: Cpu,
  valves: Sliders,
  pipes: PipetteIcon,
  pumps: Waves,
  services: Wrench,
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products & Services"
        title="Every layer of the process, instrumented"
        description="From the sensor on the pipe to the model in the cloud — SensCore specs, supplies, and supports the full stack, backed by certified global manufacturers."
      />

      <section className="py-24 sm:py-32">
        <div className="mx-auto flex max-w-7xl flex-col gap-24 px-6 lg:px-10">
          {PRODUCT_CATEGORIES.map((cat, i) => {
            const Icon = ICONS[cat.id] ?? Gauge;
            const reversed = i % 2 === 1;
            return (
              <div
                key={cat.id}
                className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal>
                  <SectionEyebrow
                    index={String(i + 1).padStart(2, "0")}
                    label={cat.tag}
                  />
                  <h2 className="mt-6 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                    {cat.title}
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-mute sm:text-lg">
                    {cat.description}
                  </p>
                  <ul className="mt-7 flex flex-col gap-3">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-ink">
                        <Check size={16} className="mt-0.5 shrink-0 text-teal" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>

               <Reveal delay={0.1}>
                  <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-line bg-surface hud-grid-fine">
                   {cat.id === "instrumentation" ? (
                      <video
                        src="/instrumentation.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-teal/[0.08] via-transparent to-indigo/[0.08]" />
                        <span className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-teal/30 bg-void/60 text-teal shadow-[0_0_60px_-10px_rgba(0,229,199,0.4)]">
                          <Icon size={40} strokeWidth={1.5} />
                        </span>
                      </>
                    )}
                    <span className="absolute bottom-5 right-5 z-10 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                      {cat.tag} / MODULE.{String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-line py-24 text-center">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal/10 blur-[120px]" />
        <div className="relative mx-auto max-w-2xl px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              Not sure which module fits your process?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-base text-mute">
              Send us your P&amp;ID or spec sheet — we&apos;ll recommend the right stack.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-8">
              <GlowButton href="/contact">Request a spec review</GlowButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
