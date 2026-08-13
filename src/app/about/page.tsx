import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionEyebrow from "@/components/SectionEyebrow";
import { PARTNERS } from "@/lib/data";

export const metadata: Metadata = {
  title: "SensCore | Industrial Automation and Instrumentation",
  description: "Learn about SensCore, a UAE-based industrial solutions company specializing in instrumentation, automation, flow control and engineered process solutions.",
  alternates: { canonical: "https://www.senscoretech.com/about" },
};

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
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">Engineering first. Always.</h2>
            <p className="mt-4 text-base leading-relaxed text-mute sm:text-lg">We were built on a simple conviction: industrial supply should start with the application, not the catalogue. That means engineering-led selection, proven technologies from trusted manufacturers, and technical support that continues well beyond delivery.</p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <SectionEyebrow index="02" label="Our Story" />
            <div className="mt-6 max-w-4xl">
              <p className="text-base leading-relaxed text-mute sm:text-lg">SensCore began with a clear focus: supplying reliable industrial instrumentation and engineering support across the UAE. As our capabilities grew, so did our role, from supplying equipment to supporting the decisions behind its selection, integration and performance.</p>
              <p className="mt-5 text-base leading-relaxed text-mute sm:text-lg">We believe industrial supply should go beyond matching a specification to a catalogue. It means understanding the application, evaluating the operating conditions, selecting the right technology, and remaining accountable after delivery.</p>
              <p className="mt-5 text-base leading-relaxed text-mute sm:text-lg">Today, SensCore brings together instrumentation, automation, connectivity and intelligent analytics, combining trusted industrial technologies with faster, more structured engineering workflows.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <SectionEyebrow index="04" label="Represented Brands" />
            <h2 className="mt-6 font-display text-3xl font-semibold text-ink sm:text-4xl">Authorised Manufacturers</h2>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-5">
              {PARTNERS.map((partner) => <span key={partner.name} className="font-display text-lg font-medium text-ink transition-colors hover:text-teal">{partner.name}</span>)}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
