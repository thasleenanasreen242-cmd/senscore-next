import Link from "next/link";
import {
  Gauge, Cpu, Sliders, TestTube, Waves, ShieldCheck, Wrench, ArrowUpRight, Sparkles,
} from "lucide-react";
import Industrial360Background from "@/components/Industrial360Background";
import Reveal from "@/components/Reveal";
import SectionEyebrow from "@/components/SectionEyebrow";
import GlowButton from "@/components/GlowButton";
import StatReadout from "@/components/StatReadout";
import TiltCard from "@/components/TiltCard";
import DecodeText from "@/components/DecodeText";
import RevealWords from "@/components/RevealWords";
import {
  PRODUCT_CATEGORIES, INDUSTRIES, REPRESENTED_BRANDS,
} from "@/lib/data";

const ICONS: Record<string, any> = {
  instrumentation: Gauge,
  automation: Cpu,
  valves: Sliders,
  analysers: TestTube,
  pumps: Waves,
  flangeguards: ShieldCheck,
  services: Wrench,
};

export default function HomePage() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28">
        <Industrial360Background />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/65" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-black/30 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-teal backdrop-blur-sm">
              <Sparkles size={12} />
              First Autonomous Industrial Solution Provider in the UAE
            </div>
          </Reveal>

          <h1 className="mt-8 max-w-4xl font-display text-[2.6rem] font-semibold leading-[1.08] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            <DecodeText text="Industrial systems that" delay={0.1} />
            <br />
            <DecodeText
              text="sense, decide,"
              delay={0.5}
              className="text-teal text-glow-teal"
            />{" "}
            <DecodeText text="and act on their own." delay={0.9} />
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-mute sm:text-lg">
            <RevealWords
              text="SensCore combines precision instrumentation, industrial automation, Industrial IoT and AI-enabled intelligence to help industries improve process visibility, control and operational performance."
              delay={1.3}
            />
          </p>

          <Reveal delay={1.5}>
            <div className="mt-11 flex flex-wrap items-center gap-5">
              <GlowButton href="/products">Explore Solutions</GlowButton>
              <GlowButton href="/contact" variant="ghost">Contact Us</GlowButton>
            </div>
          </Reveal>

          <Reveal delay={1.6}>
            <div className="mt-20 grid grid-cols-2 gap-10 border-t border-line/70 pt-10 sm:grid-cols-4">
              <StatReadout value={4200} suffix="+" label="Sensors integrated" />
              <StatReadout value={200} suffix="+" label="Auto-decisions per day" />
              <StatReadout value={12} suffix="+" label="AI agents deployed" />
              <StatReadout value={100} suffix="+" label="Industrial clients served" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- ABOUT STRIP ---------------- */}
      <section className="relative border-t border-line bg-surface py-28 sm:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <Reveal>
              <SectionEyebrow index="01" label="Who we are" />
              <h2 className="mt-7 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                More than a supplier.
                <br />
                An engineering partner built for faster decisions.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-mute sm:text-lg">
                We deliver industrial instrumentation, automation and
                engineered solutions backed by practical application
                knowledge and trusted global manufacturers. Behind every
                enquiry, our intelligent workflow helps evaluate
                specifications, align manufacturer data and identify the
                right-fit solution, enabling faster, technically sound
                proposals without compromising engineering judgment.
              </p>
              <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 font-mono text-xs uppercase tracking-[0.15em] text-mute">
                {["Integrity", "Reliability", "Continuous improvement"].map((v) => (
                  <span key={v} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                    {v}
                  </span>
                ))}
              </div>
              <Link
                href="/about"
                className="group mt-11 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-teal"
              >
                Learn our story
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- PRODUCTS ---------------- */}
      <section className="relative border-t border-line py-28 sm:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <SectionEyebrow index="02" label="Products & Solutions" />
            <h2 className="mt-7 max-w-2xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Engineered solutions across the industrial process.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCT_CATEGORIES.map((cat, i) => {
              const Icon = ICONS[cat.id] ?? Gauge;
              return (
                <Reveal key={cat.id} delay={i * 0.05}>
                  <TiltCard className="group gradient-border h-full">
                    <Link
                      href="/products"
                      className="glass-panel flex h-full flex-col rounded-2xl p-8 transition-colors duration-300 hover:bg-surface2/60"
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-teal/30 bg-teal/5 text-teal">
                          <Icon size={20} strokeWidth={1.75} />
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                          {cat.tag}
                        </span>
                      </div>
                      <h3 className="mt-7 font-display text-xl font-medium text-ink">
                        {cat.title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-mute">
                        {cat.description}
                      </p>
                      <div className="mt-7 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-teal opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Explore {cat.title}
                        <ArrowUpRight size={13} />
                      </div>
                    </Link>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- INDUSTRIES ---------------- */}
      <section className="relative border-t border-line bg-surface py-28 sm:py-40">
        <div className="absolute inset-0 hud-grid-fine opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <SectionEyebrow index="03" label="Industries" />
            <h2 className="mt-7 max-w-2xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Built for the sectors running the UAE.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.id} delay={i * 0.04} className="bg-surface">
                <div className="flex h-full flex-col justify-between p-9">
                  <div>
                    <h3 className="font-display text-lg font-medium text-ink">
                      {ind.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-mute">
                      {ind.description}
                    </p>
                  </div>
                  <div className="mt-10 flex items-baseline gap-2">
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
            <div className="mt-12">
              <GlowButton href="/industries" variant="ghost">
                See all industries
              </GlowButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- TRUSTED BRANDS ---------------- */}
      <section className="relative overflow-hidden border-t border-line py-28 sm:py-40">
        <div className="absolute inset-0 hud-grid-fine opacity-20" />
        <div className="scan-sweep pointer-events-none absolute inset-y-0 left-0 w-40" />

        <div className="relative mx-auto mb-20 max-w-7xl px-6 lg:px-10">
          <Reveal>
            <SectionEyebrow index="04" label="Trusted Global Brands" />
          </Reveal>
        </div>

        <div className="relative mask-fade-x">
          <div className="flex w-max animate-marquee brands-marquee-slow items-center gap-8">
            {[...REPRESENTED_BRANDS, ...REPRESENTED_BRANDS].map((brand, i) => (
              <span key={`brand-${i}`} className="flex items-center gap-8">
                <span className="whitespace-nowrap font-display text-xl font-medium text-faint transition-colors duration-300 hover:text-teal sm:text-2xl">
                  {brand}
                </span>
                <span className="h-1 w-1 shrink-0 rounded-full bg-teal/40" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="relative overflow-hidden border-t border-line py-32 sm:py-40">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal/10 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-5xl">
              Ready to make your plant think for itself?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-mute sm:text-lg">
              Start with a conversation. Our engineers will review your
              application and specify what&apos;s right for it, from the
              field device up.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-11 flex flex-wrap items-center justify-center gap-5">
              <GlowButton href="/contact">Talk to an Engineer</GlowButton>
              <GlowButton href="/products" variant="ghost">View Products</GlowButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
