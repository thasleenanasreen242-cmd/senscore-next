import type { Metadata } from "next";
import Link from "next/link";
import { Search, CheckCircle2, Wind, ShieldCheck, FileSearch, Wrench } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionEyebrow from "@/components/SectionEyebrow";
import GlowButton from "@/components/GlowButton";

export const metadata: Metadata = {
  title: "Industrial Engineering Services UAE | Flow Surveys & Compressed Air Audits | SensCore",
  description:
    "Industrial engineering services in the UAE including flow surveys, flowmeter verification, compressed air audits, leak detection, commissioning and application engineering.",
  alternates: {
    canonical: "https://www.senscoretech.com/industrial-engineering-services/",
  },
};

type ServiceLink = { href: string; label: string };
type SubItem = { label: string; detail: string };
type Service = {
  icon: typeof Search;
  title: string;
  description: string;
  links: ServiceLink[];
  subItems?: SubItem[];
};

const CORE_SERVICES: Service[] = [
  {
    icon: Search,
    title: "On-Site Flow Survey",
    description:
      "Establish actual flow conditions before selecting or replacing a flow meter. Using non-invasive flow measurement where technically suitable, we assess existing liquid, gas or utility lines to understand real operating flow rates and process conditions. The findings can help identify incorrectly sized or misapplied meters and provide measured data for instrument selection, system assessment and troubleshooting.",
    links: [
      { href: "/knowledge-centre/flow-measurement", label: "flow measurement guidance" },
      { href: "/products", label: "industrial instrumentation" },
    ],
  },
  {
    icon: CheckCircle2,
    title: "Flowmeter Verification",
    description:
      "Check the performance of an installed flow meter without unnecessary process interruption. Where site conditions allow, SensCore compares the installed meter against a suitable reference measurement to assess its operating performance. The verification helps identify measurement deviations, installation issues and potential instrument problems while keeping the meter in service. A documented verification report records the test conditions, observations and measurement results.",
    links: [
      { href: "/knowledge-centre/flow-measurement", label: "flow measurement guidance" },
      { href: "/products", label: "industrial instrumentation" },
    ],
  },
  {
    icon: Wind,
    title: "Compressed Air Audits & Efficiency Services",
    description:
      "Understand where compressed air is generated, distributed, consumed and lost. SensCore assesses compressed air systems using actual operating data to identify efficiency losses, leakage and opportunities for performance improvement.",
    links: [
      { href: "/knowledge-centre/compressed-air-energy-efficiency", label: "compressed air & energy efficiency guide" },
      { href: "/products", label: "industrial instrumentation" },
    ],
    subItems: [
      {
        label: "Compressed Air Network Audit",
        detail:
          "Assessment of compressor generation, distribution and demand, supported by measured data and prioritised engineering recommendations.",
      },
      {
        label: "Compressed Air Leak Detection",
        detail:
          "Ultrasonic inspection of the compressed air network to locate and tag leaks, with estimated leakage rates and associated operating cost where sufficient system data is available.",
      },
      {
        label: "Compressor Efficiency Analysis",
        detail:
          "Measurement of compressor output, energy consumption and load profile against actual plant demand to identify inefficient operation, pressure issues, capacity mismatch and control losses.",
      },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Flange Guard Survey, Mapping & Installation",
    description:
      "Identify, document and protect critical flanged joints. We survey process lines to identify flanges requiring spray protection, review line size, process media, temperature and service conditions, then support flange guard selection, mapping, supply and installation. The completed survey can provide a structured register of protected flange locations for future inspection and maintenance.",
    links: [
      { href: "/knowledge-centre/flange-protection", label: "flange protection guidance" },
      { href: "/products", label: "flange guards and sealing solutions" },
    ],
  },
  {
    icon: FileSearch,
    title: "Application Engineering & Equipment Selection",
    description:
      "Select equipment around the application, not simply the catalogue. Send us your P&ID, datasheet, RFQ or process requirements. Our engineers review the medium, operating conditions, duty and technical specification before recommending a suitable instrumentation, valve, pump or process solution, together with the reasoning behind the selection. Application review is included as part of our enquiry process.",
    links: [
      { href: "/knowledge-centre/engineering-practice", label: "engineering practice guidance" },
      { href: "/products", label: "industrial products and solutions" },
    ],
  },
  {
    icon: Wrench,
    title: "Commissioning & Technical Support",
    description:
      "Engineering support from installation through operation. SensCore provides configuration, start-up assistance, functional checks and troubleshooting for supplied equipment. Where applicable, we also support instrument setup, parameter verification and coordination of calibration requirements. Our objective is to help ensure the installed solution performs in line with the intended application and operating conditions.",
    links: [
      { href: "/knowledge-centre/engineering-practice", label: "engineering practice guidance" },
      { href: "/products", label: "industrial products and solutions" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industrial Engineering Services in the UAE"
        title="Specified. Installed. Verified."
        description="Supply is only one part of a reliable industrial solution. SensCore supports industrial facilities across the UAE with on-site measurement, verification, commissioning, audits and application engineering to help equipment perform as intended in real operating conditions."
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

                      <p className="mt-4 text-sm leading-7 text-mute">
                        Related:{" "}
                        {service.links.map((link, n) => (
                          <span key={link.href}>
                            {n > 0 ? ", " : ""}
                            <Link
                              href={link.href}
                              className="text-teal underline-offset-4 hover:underline"
                            >
                              {link.label}
                            </Link>
                          </span>
                        ))}
                        .
                      </p>

                      {service.subItems ? (
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
                      ) : null}
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
              Tell us what you are trying to measure, verify or improve. We will review the application, define the appropriate scope and tell you whether an on-site survey is likely to add meaningful value.
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
