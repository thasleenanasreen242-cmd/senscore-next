import { Mail, Phone, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionEyebrow from "@/components/SectionEyebrow";
import ContactForm from "@/components/ContactForm";
import { CONTACT, LOCATIONS } from "@/lib/data";

const INFO = [
  {
    icon: MapPin,
    label: "Head Office",
    value: CONTACT.address,
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT.email,
    href: "mailto:" + CONTACT.email,
  },
  {
    icon: Phone,
    label: "Phone",
    value: CONTACT.phone,
    href: CONTACT.phoneHref,
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
        title="Let's Put Your Process on Autopilot"
        description="Tell us about your site, your bottleneck, or simply say hello. Our engineering team replies within one business day."
      />

      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10">
          <Reveal>
            <div className="flex flex-col gap-6">
              {INFO.map(function (item) {
                var Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 rounded-2xl border border-line bg-surface p-6"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-teal/30 bg-teal/5 text-teal">
                      <Icon size={19} strokeWidth={1.75} />
                    </span>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                        {item.label}
                      </div>
                      {item.href ? (
                        
                          href={item.href}
                          className="mt-1 block text-sm text-ink hover:text-teal transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="mt-1 text-sm text-ink">
                          {item.value}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
              <div className="overflow-hidden rounded-2xl border border-line">
                <iframe
                  title="SensCore Location - Abu Dhabi"
                  src="https://www.google.com/maps?q=Mazyad+Mall+Business+Tower+Abu+Dhabi&output=embed"
                  className="h-64 w-full grayscale invert-[0.92] contrast-[1.1]"
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
                      
                        href={"tel:" + loc.phone.replace(/\s+/g, "")}
                        className="mt-3 block text-sm text-ink hover:text-teal transition-colors"
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
