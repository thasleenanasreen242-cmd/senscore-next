import type { Metadata } from "next";
import { Search, CheckCircle2, Wind, ShieldCheck, FileSearch, Wrench } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionEyebrow from "@/components/SectionEyebrow";
import GlowButton from "@/components/GlowButton";

export const metadata: Metadata = {
  title: "Industrial Engineering Services | SensCore",
  description:
    "SensCore provides onsite flow surveys, flowmeter verification, compressed air audits, application engineering, commissioning, and technical support.",
  alternates: { canonical: "https://www.senscoretech.com/services" },
};

const CORE_SERVICES = [
  {
    icon: Search,
    title: "Onsite Flow Survey",
    description:
      "Non-invasive measurement of your existing lines to establish actual flow conditions before any instrument is specified. Identifies where meters are misapplied, undersized, or reading incorrectly, and gives you real data to design against rather than assumed values.",
  },
  {
    icon: CheckCircle2,
    title: "Flowmeter Verification",
    description:
      "In-situ verification of installed flowmeters against reference measurement. Confirms whether a meter still performs to specification without removing it from the line, and produces documentation you can present during audit.",
  },
  {
    icon: Wind,
    title: "Compressed Air Services",
    description:
      "A complete assessment of how your compressed air system generates, distributes, and consumes air, and what those costs are.",
    subItems: [
      { label: "Network Audit", detail: "End-to-end mapping of generation, distribution, and demand, with a written report and prioritised recommendations." },
      { label: "Leakage Testing", detail: "Ultrasonic detection across the distribution network, with each leak located, tagged, sized, and costed." },
      { label: "Efficiency Analysis", detail: "Specific energy consumption and load profile measured against actual demand, identifying oversizing, pressure band issues, and control losses." },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Flange Guard Mapping & Installation",
    description:
      "Site survey to identify flanges requiring protection, matched to line size, media, and temperature, followed by supply and installation. Produces a documented register of protected joints.",
  },
  {
    icon: FileSearch,
    title: "Application Engineering & Selection",
    description:
      "Review of your P&ID, datasheet, or specification against the medium, duty, and operating conditions, returning an instrument selection with the reasoning behind it. Included on every enquiry at no cost.",
  },
  {
    icon: Wrench,
    title: "Commissioning & Technical Support",
    description:
      "Configuration, calibration, and startup support for supplied instrumentation, plus troubleshooting when something in the field doesn't behave as specified.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Specified. Installed. Verified."
        description="Supply is where most vendors stop. We survey, verify, commission, and audit — so the instrument you bought keeps doing what it was specified to do."
      />

      <section className="py-24 sm:py-32">
        <div className="mx-auto flex max-w-7xl flex-col gap-20 px-6 lg:px-10">
          <Reveal>
            <SectionEyebrow index="—" label="Core Services" />
          </Reveal>

          {CORE_SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={i * 0.04}>
                <div className="border-t border-line pt-10">
                  <div className="flex items-start gap-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-teal/30 bg-teal/5 text-teal">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-xs text-faint">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-display text-2xl font-semibold text-ink">
                          {service.title}
                        </h3>
                      </div>
                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mute sm:text-base">
                        {service.description}
                      </p>

                      {service.subItems && (
                        <div className="mt-6 grid gap-4 sm:grid-cols-3">
                          {service.subItems.map((sub) => (
                            <div
                              key={sub.label}
                              className="rounded-xl border border-line bg-surface p-5"
                            >
                              <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-teal">
                                {sub.label}
                              </h4>
                              <p className="mt-2 text-xs leading-relaxed text-mute">
                                {sub.detail}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-line py-24 text-center">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal/10 blur-[120px]" />
        <div className="relative mx-auto max-w-2xl px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              Start with a survey, not a quotation.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-base text-mute">
              Tell us what you&apos;re trying to measure or where you think
              you&apos;re losing efficiency. We&apos;ll scope the survey and
              tell you honestly whether it&apos;s worth doing.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-8">
              <GlowButton href="/contact">Request a Site Survey</GlowButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
