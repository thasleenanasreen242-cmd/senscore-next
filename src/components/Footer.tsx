import Link from "next/link";
import { Linkedin, Mail, Phone, MapPin, Radio } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-surface">
      <div className="absolute inset-0 hud-grid-fine opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-md border border-teal/40 bg-teal/5">
                <Radio size={16} className="text-teal" />
              </span>
              <span className="font-display text-lg font-semibold text-ink">
                SENS<span className="text-teal">CORE</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mute">
              The UAE&apos;s first autonomous AI industrial platform — fusing
              sensing, connectivity, and predictive intelligence into one
              self-optimizing system.
            </p>
            <Link
              href={CONTACT.linkedin}
              target="_blank"
              className="mt-6 inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-mute transition-colors hover:border-teal/50 hover:text-teal"
            >
              <Linkedin size={16} />
            </Link>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-teal">
              Navigate
            </div>
            <ul className="mt-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-mute transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-teal">
              Solutions
            </div>
            <ul className="mt-4 flex flex-col gap-3">
              {["Instrumentation", "Automation & Connectivity", "Valves", "Pumps"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="/products"
                      className="text-sm text-mute transition-colors hover:text-ink"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-teal">
              Contact
            </div>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-mute">
              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0 text-teal" />
                <span>{CONTACT.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} className="shrink-0 text-teal" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-ink">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} className="shrink-0 text-teal" />
                <a href={CONTACT.phoneHref} className="hover:text-ink">
                  {CONTACT.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 font-mono text-[11px] uppercase tracking-[0.15em] text-faint sm:flex-row">
          <span>© {new Date().getFullYear()} SensCore. All rights reserved.</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulseGlow" />
            System status: all sensors online
          </span>
        </div>
      </div>
    </footer>
  );
}
