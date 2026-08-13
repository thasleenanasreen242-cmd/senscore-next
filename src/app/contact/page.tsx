import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionEyebrow from "@/components/SectionEyebrow";
import ContactForm from "@/components/ContactForm";
import { LOCATIONS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact SensCore | Industrial Engineering Support",
  description:
    "Contact SensCore for industrial instrumentation, automation, valves, pumps and process solutions across the UAE.",
  alternates: {
    canonical: "https://www.senscoretech.com/contact",
  },
};

const INFO = [
  {
    icon: MapPin,
    label: "Head Office",
    value:
      "9th Floor, Mazyad Mall, Business Tower 3, MBZ City, Abu Dhabi, UAE",
  },
  {
    icon: MapPin,
    label: "Warehouse & Logistics",
    value:
      "No. 22, Mussafah 9, Mussafah Industrial Area, PO Box 35514, Abu Dhabi, UAE",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@senscoretech.com",
    href: "mailto:info@senscoretech.com?subject=SensCore%20Enquiry",
  },
  {
    icon: Mail,
    label: "Enquiries",
    value: "enquiries@senscoretech.com",
    href: "mailto:enquiries@senscoretech.com?subject=SensCore%20Enquiry",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+971 50 103 5348",
    href: "tel:+971501035348",
  },
  {
    icon: Clock,
    label: "Support",
    value: "24/7 for active deployments",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to Our Industrial Engineering Team"
        description="From instrumentation and automation to valves, pumps and process solutions, tell us what your application requires. SensCore supports industrial projects and facilities across the UAE."
      />

      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10">
          <Reveal>
            <div className="flex flex-col gap-4">
              {INFO.map(function (item) {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-line bg-surface p-6"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-teal/30 bg-teal/5 text-teal">
                        <Icon size={19} strokeWidth={1.75} />
                      </span>

                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                          {item.label}
                        </div>

                        {item.href ? (
                          <a
                            href={item.href}
                            aria-label={`Email ${item.value}`}
                            className="mt-1 block cursor-pointer text-sm text-ink transition-colors hover:text-teal"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="mt-1 text-sm leading-relaxed text-ink">
                            {item.value}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Blue + White highlighted map */}
              <div className="relative overflow-hidden rounded-2xl border border-blue-300/60 bg-white shadow-[0_0_36px_rgba(37,99,235,0.22)]">
                {/* Soft blue highlight */}
                <div className="pointer-events-none absolute inset-0 z-[1] bg-blue-500/10" />

                {/* Blue border highlight */}
                <div className="pointer-events-none absolute inset-0 z-[2] rounded-2xl border-2 border-blue-500/40" />

                <iframe
                  title="SensCore Location - Abu Dhabi"
                  src="https://www.google.com/maps?q=SensCore+9th+Floor+Mazyad+Mall+Business+Tower+3+MBZ+City+Abu+Dhabi&output=embed"
                  className="relative z-0 h-64 w-full brightness-[1.08] contrast-[0.9] saturate-[1.25] hue-rotate-[175deg]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-line bg-surface p-8 sm:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <SectionEyebrow index="00" label="Our Locations" />
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {LOCATIONS.map(function (loc, i) {
              return (
                <Reveal key={loc.country} delay={i * 0.05}>
                  <div className="h-full rounded-2xl border border-line bg-void/40 p-6">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-teal">
                      {loc.country}
                    </div>

                    <div className="mt-2 font-display text-lg font-medium text-ink">
                      {loc.label}
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-mute">
                      {loc.address}
                    </p>

                    {loc.phone ? (
                      <a
                        href={
                          "tel:" + loc.phone.replace(/\s+/g, "")
                        }
                        className="mt-3 block text-sm text-ink transition-colors hover:text-teal"
                      >
                        {loc.phone}
                      </a>
                    ) : null}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
