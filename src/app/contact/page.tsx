import { Mail, Phone, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { CONTACT } from "@/lib/data";

const INFO = [
  { icon: MapPin, label: "Head office", value: CONTACT.address },
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Phone, label: "Phone", value: CONTACT.phone, href: CONTACT.phoneHref },
  { icon: Clock, label: "Support", value: "24/7 for active deployments" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's put your process on autopilot"
        description="Tell us about your site, your bottleneck, or just say hello — our engineering team replies within one business day."
      />

      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10">
          <Reveal>
            <div className="flex flex-col gap-6">
              {INFO.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 rounded-2xl border border-line bg-surface p-6"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-teal/30 bg-teal/5 text-teal">
                    <item.icon size={19} strokeWidth={1.75} />
                  </span>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a href={item.href} className="mt-1 block text-sm text-ink hover:text-teal">
                        {item.value}
                      </a>
                    ) : (
                      <div className="mt-1 text-sm text-ink">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}

              <div className="overflow-hidden rounded-2xl border border-line">
                <iframe
                  title="SensCore location — Abu Dhabi"
                  src="https://www.google.com/maps?q=Mazyad+Mall+Business+Tower+Abu+Dhabi&output=embed"
                  className="h-64 w-full grayscale invert-[0.92] contrast-[1.1]"
                  loading="lazy"
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
    </>
  );
}
