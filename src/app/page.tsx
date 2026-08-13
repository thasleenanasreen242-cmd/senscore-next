import type { Metadata } from "next";
import { ShieldCheck, Gem, Users, ListChecks } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionEyebrow from "@/components/SectionEyebrow";
import GlowButton from "@/components/GlowButton";
import { PARTNERS } from "@/lib/data";

export const metadata: Metadata = {
  title: "SensCore | Industrial Automation and Instrumentation",
  description:
    "Learn about SensCore, an engineering-led industrial automation and instrumentation partner delivering sensing, control, and monitoring solutions.",
  alternates: { canonical: "https://www.senscoretech.com/about" },
};

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Engineering First",
    text: "Application-driven decisions, not catalogue-based selling. We specify for the process, not the price list.",
  },
  {
    icon: Gem,
    title: "Precision & Quality",
    text: "Accuracy, consistency, and reliability in every solution, from the instrument selected to the documentation that comes with it.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    text: "Solutions built around real operational needs, with support that continues long after commissioning.",
  },
  {
    icon: ListChecks,
    title: "Execution Discipline",
    text: "Structured processes and accountable delivery. What we commit to is what arrives.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About SensCore"
        title="Engineering the Future of Industrial Automation"
        description="SensCore is a UAE-based industrial solutions company specializing in instrumentation, automation, flow control and engineered process solutions."
      />

      <section className="border-b border-line py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              Engineering first. Always.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-mute sm:text-lg">
              We were built on a simple conviction: industrial supply should
              start with the application, not the catalogue. That means
              engineering-led selection, proven technologies from trusted
              manufacturers, and technical support that continues well
              beyond delivery.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <SectionEyebrow index="03" label="Our Values" />

            <h2 className="mt-6 max-w-xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Principles Behind Every Solution
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value, index) => {
              const Icon = value.icon;

              return (
                <Reveal key={value.title} delay={index * 0.05}>
                  <div className="h-full rounded-2xl border border-line bg-surface p-7 transition-colors hover:border-teal/40">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-teal/30 bg-teal/5 text-teal">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>

                    <h3 className="mt-6 font-display text-lg font-semibold text-ink">
                      {value.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-mute">
                      {value.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-line py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <SectionEyebrow index="04" label="Represented Brands" />

            <h3 className="mt-6 font-mono text-xs uppercase tracking-[0.15em] text-teal">
              Authorised Manufacturers
            </h3>
            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-4">
              {PARTNERS.map((partner) => (
                <span
                  key={partner.name}
                  className="font-display text-lg font-medium text-ink transition-colors hover:text-teal"
                >
                  {partner.name}
                </span>
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
              Ready to Modernize Your Operations?
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8">
              <GlowButton href="/contact">
                Contact Our Team
              </GlowButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
