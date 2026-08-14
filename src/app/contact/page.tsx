import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, ExternalLink } from "lucide-react";
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

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=SensCore%209th%20Floor%20Mazyad%20Mall%20Business%20Tower%203%20MBZ%20City%20Abu%20Dhabi";

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

              {/* Premium blue map with a highlighted Open in Maps action */}
              <div className="relative overflow-hidden rounded-2xl border border-blue-400/50 bg-[#071a3a] shadow-[0_0_40px_rgba(30,111,255,0.24)]">
                <div className="pointer-events-none absolute inset-0 z-[1] bg-[#071a3a]/65" />
                <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(circle_at_50%_45%,rgba(77,145,255,0.28),transparent_52%)]" />
                <div className="pointer-events-none absolute inset-0 z-[3] rounded-2xl border border-white/20" />

                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open SensCore location in Google Maps"
                  className="group absolute left-4 top-4 z-[10] inline-flex items-center gap-2 rounded-xl border border-white/40 bg-[#0b2b5c]/95 px-4 py-2.5 text-sm font-medium text-white shadow-[0_8px_30px_rgba(0,0,0,0.35),0_0_20px_rgba(59,130,246,0.3)] backdrop-blur-md transition-all duration-200 hover:border-white hover:bg-[#123e7a] hover:shadow-[0_10px_35px_rgba(0,0,0,0.4),0_0_28px_rgba(59,130,246,0.5)]"
                >
                  <MapPin size={16} className="text-white" />
                  <span>Open in Maps</span>
                  <ExternalLink
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>

                <iframe
                  title="SensCore Location - Abu Dhabi"
                  src="https://www.google.com/maps?q=SensCore+9th+Floor+Mazyad+Mall+Business+Tower+3+MBZ+City+Abu+Dhabi&output=embed"
                  className="relative z-0 h-64 w-full grayscale brightness-[0.8] contrast-[1.15] saturate-0 opacity-[0.82] mix-blend-screen"
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
                        href={"tel:" + loc.phone.replace(/\s+/g, "")}
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
