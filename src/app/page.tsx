import Link from "next/link";
import {
  Gauge, Cpu, Sliders, PipetteIcon, Waves, Wrench, ArrowUpRight, Sparkles,
} from "lucide-react";
import HUDBackground from "@/components/HUDBackground";
import Reveal from "@/components/Reveal";
import SectionEyebrow from "@/components/SectionEyebrow";
import GlowButton from "@/components/GlowButton";
import StatReadout from "@/components/StatReadout";
import {
  PRODUCT_CATEGORIES, INDUSTRIES, PARTNERS, CLIENTS,
} from "@/lib/data";

const ICONS: Record<string, any> = {
  instrumentation: Gauge,
  automation: Cpu,
  valves: Sliders,
  pipes: PipetteIcon,
  pumps: Waves,
  services: Wrench,
};

export default function HomePage() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-24">
        <HUDBackground density={7} />

        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/5 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-teal">
              <Sparkles size={12} />
              UAE&apos;s First Autonomous AI Industrial Platform
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-7 max-w-4xl font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Industrial systems that{" "}
              <span className="text-teal text-glow-teal">sense, decide,</span>{" "}
              and act on their own.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-mute sm:text-lg">
              SensCore fuses AI with Industrial IoT to give UAE industries a
              self-optimizing process layer — instrumentation that doesn&apos;t
              just report data, but reasons over it in real time.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <GlowButton href="/products">Explore Solutions</GlowButton>
              <GlowButton href="/contact" variant="ghost">Contact Us</GlowButton>
            </div>
          </Reveal>

          <Reveal delay={0.34}>
            <div className="mt-16 grid grid-cols-2 gap-8 border-t border-line pt-8 sm:grid-cols-4">
              <StatReadout value={4200} suffix="+" label="Sensors deployed" />
              <StatReadout value={99.4} suffix="%" decimals={1} label="Platform uptime" />
              <StatReadout value={60} suffix="+" label="Represented brands" />
              <StatReadout value={20} suffix="+" label="Enterprise clients" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- ABOUT STRIP ---------------- */}
      <section className="relative border-t border-line bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal>
              <SectionEyebrow index="01" label="Who we are" />
              <h2 className="mt-6 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                More than a supplier.
                <br />
                An autonomous ally on the plant floor.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-mute sm:text-lg">
                We deliver forward-thinking industrial solutions rooted in trust
                and built on innovation, partnering with global leaders to bring
                proven technologies that enhance performance and reduce
                operational cost. Our AI layer turns every sensor into a
                decision-maker — flagging drift before it becomes downtime,
                and routing insight straight to the people who need it.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4 font-mono text-xs uppercase tracking-[0.15em] text-mute">
                {["Integrity", "Reliability", "Continuous improvement"].map((v) => (
                  <span key={v} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                    {v}
                  </span>
                ))}
              </div>
              <Link
                href="/about"
                className="group mt-9 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-teal"
              >
                Learn our story
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- PRODUCTS ---------------- */}
      <section className="relative border-t border-line py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <SectionEyebrow index="02" label="Products & services" />
            <h2 className="mt-6 max-w-2xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Six disciplines. One connected sensing layer.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCT_CATEGORIES.map((cat, i) => {
              const Icon = ICONS[cat.id] ?? Gauge;
              return (
                <Reveal key={cat.id} delay={i * 0.05}>
                  <Link
                    href="/products"
                    className="group relative flex h-full flex-col rounded-2xl border border-line bg-surface p-7 transition-all duration-300 hover:border-teal/40 hover:bg-surface2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-teal/30 bg-teal/5 text-teal">
                        <Icon size={20} strokeWidth={1.75} />
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                        {cat.tag}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-xl font-medium text-ink">
                      {cat.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-mute">
                      {cat.description}
                    </p>
                    <div className="mt-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-teal opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      View items
                      <ArrowUpRight size={13} />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- INDUSTRIES ---------------- */}
      <section className="relative border-t border-line bg-surface py-24 sm:py-32">
        <div className="absolute inset-0 hud-grid-fine opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <SectionEyebrow index="03" label="Industries" />
            <h2 className="mt-6 max-w-2xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Built for the sectors running the UAE.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.id} delay={i * 0.04} className="bg-surface">
                <div className="flex h-full flex-col justify-between p-8">
                  <div>
                    <h3 className="font-display text-lg font-medium text-ink">
                      {ind.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-mute">
                      {ind.description}
                    </p>
                  </div>
                  <div className="mt-8 flex items-baseline gap-2">
                    <span className="font-display text-2xl font-semibold text-teal">
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

          <Reveal delay={0.15}>
            <div className="mt-10">
              <GlowButton href="/industries" variant="ghost">
                See all industries
              </GlowButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- PARTNERS MARQUEE ---------------- */}
      <section className="relative overflow-hidden border-t border-line py-16">
        <div className="mx-auto mb-10 max-w-7xl px-6 lg:px-10">
          <SectionEyebrow index="04" label="Trusted global partners" />
        </div>
        <div className="mask-fade-x">
          <div className="flex w-max animate-marquee gap-16">
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <span
                key={`${p.name}-${i}`}
                className="whitespace-nowrap font-display text-2xl font-medium text-faint transition-colors hover:text-ink"
              >
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CLIENTS ---------------- */}
      <section className="relative border-t border-line bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <SectionEyebrow index="05" label="Few of our clients" />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-4">
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

      {/* ---------------- CTA ---------------- */}
      <section className="relative overflow-hidden border-t border-line py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal/10 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-5xl">
              Ready to make your plant think for itself?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-mute sm:text-lg">
              Talk to our engineers about deploying SensCore&apos;s autonomous
              sensing layer across your site.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <GlowButton href="/contact">Contact Us</GlowButton>
              <GlowButton href="/products" variant="ghost">View Products</GlowButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
