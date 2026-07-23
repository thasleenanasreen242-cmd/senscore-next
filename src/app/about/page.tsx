import { ShieldCheck, Target, Eye, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionEyebrow from "@/components/SectionEyebrow";
import GlowButton from "@/components/GlowButton";
import { REPRESENTED_BRANDS } from "@/lib/data";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    text: "We spec what a process actually needs — not what's easiest to sell.",
  },
  {
    icon: Target,
    title: "Reliability",
    text: "Field-proven hardware and 24/7 support keep your lines running.",
  },
  {
    icon: Eye,
    title: "Transparency",
    text: "Live data, not quarterly reports. You see what your plant sees.",
  },
  {
    icon: Users,
    title: "Partnership",
    text: "We stay engaged from commissioning through years of operation.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About SensCore"
        title="Engineering the UAE's autonomous industrial future"
        description="SensCore was founded on a simple premise: industrial data is only valuable if something acts on it. We build the sensing, connectivity, and AI decision layer that makes that possible."
      />

      {/* Mission */}
      <section className="border-b border-line py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-10">
          <Reveal>
            <SectionEyebrow index="01" label="Our mission" />
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Give every process a nervous system that thinks.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-mute sm:text-lg">
              Across oil & gas, manufacturing, water, and energy, most plants
              still react to failure after it happens. SensCore closes that
              gap — pairing certified instrumentation from the world&apos;s
              leading manufacturers with an AI layer that predicts, explains,
              and, increasingly, acts on its own.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionEyebrow index="02" label="How we got here" />
            <p className="mt-6 text-base leading-relaxed text-mute sm:text-lg">
              We started as a supplier of precision instrumentation and flow
              control hardware to the UAE&apos;s heaviest industries. Every
              install taught us the same lesson: the hardware was never the
              bottleneck — the ability to reason over what it reported was.
              That&apos;s what we&apos;ve since built into the platform layer of
              everything we deploy.
            </p>
            <p className="mt-4 text-base leading-relaxed text-mute sm:text-lg">
              Today we represent over 60 global manufacturing brands and
              support enterprise clients across the Gulf with a single point
              of accountability — from spec sheet to autonomous alert.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-line bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <SectionEyebrow index="03" label="What guides us" />
            <h2 className="mt-6 max-w-xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Four commitments behind every deployment.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-line bg-surface p-7 transition-colors hover:border-teal/40">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-teal/30 bg-teal/5 text-teal">
                    <v.icon size={20} strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-medium text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Represented brands */}
      <section className="border-b border-line py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <SectionEyebrow index="04" label="Brands we represent" />
            <h2 className="mt-6 max-w-xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              60+ manufacturers. One accountable partner.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
              {REPRESENTED_BRANDS.map((b) => (
                <span
                  key={b}
                  className="font-mono text-xs uppercase tracking-[0.1em] text-mute transition-colors hover:text-teal"
                >
                  {b}
                </span>
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
              Want to see the platform on your process data?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8">
              <GlowButton href="/contact">Talk to our team</GlowButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
