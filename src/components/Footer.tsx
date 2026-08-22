import Link from "next/link";
import { Linkedin, Instagram, Mail, Phone, MapPin, Radio, Map } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/lib/data";

const HEAD_OFFICE_MAP = "https://www.google.com/maps/search/?api=1&query=9th+Floor%2C+Mazyad+Mall%2C+Business+Tower+3%2C+MBZ+City%2C+Abu+Dhabi%2C+UAE";

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-surface">
      <div className="absolute inset-0 hud-grid-fine opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5"><span className="flex h-8 w-8 items-center justify-center rounded-md border border-teal/40 bg-teal/5"><Radio size={16} className="text-teal" /></span><span className="font-display text-lg font-semibold text-ink">SENS<span className="text-teal">CORE</span></span></Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mute">Engineered sensing, control, flow and industrial automation solutions for real operating environments in the UAE. Application-driven engineering, supported by intelligent systems built for faster, clearer decisions.</p>
            <div className="mt-6 flex items-center gap-3"><Link href={CONTACT.linkedin} target="_blank" className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-mute transition-colors hover:border-teal/50 hover:text-teal"><Linkedin size={16} /><span className="text-sm">SensCore</span></Link><Link href={CONTACT.instagram} target="_blank" className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-mute transition-colors hover:border-teal/50 hover:text-teal"><Instagram size={16} /><span className="text-sm">@senscoretech</span></Link></div>
          </div>
          <div><div className="font-mono text-xs uppercase tracking-[0.2em] text-teal">Navigate</div><ul className="mt-4 flex flex-col gap-3">{NAV_LINKS.filter((link) => link.label !== "Services").map((link) => <li key={link.href}><Link href={link.href} className="text-sm text-mute transition-colors hover:text-ink">{link.label}</Link></li>)}<li><Link href="/industrial-engineering-services" className="text-sm text-mute transition-colors hover:text-ink">Services</Link></li></ul></div>
          <div><div className="font-mono text-xs uppercase tracking-[0.2em] text-teal">Solutions</div><ul className="mt-4 flex flex-col gap-3">{["Instrumentation", "Automation & Connectivity", "Valves", "Analysers", "Pumps", "Flange Guards & Gaskets", "Services"].map((item) => <li key={item}><Link href={item === "Services" ? "/industrial-engineering-services" : "/products"} className="text-sm text-mute transition-colors hover:text-ink">{item}</Link></li>)}</ul></div>
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-teal">Contact</div>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-mute">
              <li><div className="flex items-start gap-2"><MapPin size={15} className="mt-0.5 shrink-0 text-teal" /><span><span className="block text-ink/80">Head Office</span>9th Floor, Mazyad Mall, Business Tower 3<br />MBZ City, Abu Dhabi, UAE</span></div><a href={HEAD_OFFICE_MAP} target="_blank" rel="noopener noreferrer" aria-label="Open Head Office in Google Maps" title="Open in Google Maps" className="group mt-2 inline-flex items-center gap-1.5 pl-[23px] font-mono text-[10px] uppercase tracking-[0.15em] text-teal transition-colors hover:text-ink"><Map size={13} className="transition-transform group-hover:scale-110" /> Maps</a></li>
              <li className="flex items-start gap-2"><MapPin size={15} className="mt-0.5 shrink-0 text-teal" /><span><span className="block text-ink/80">Warehouse & Logistics</span>No. 22, Mussafah 9, Mussafah Industrial Area<br />PO Box 35514, Abu Dhabi, UAE</span></li>
              <li className="flex items-center gap-2"><Mail size={15} className="shrink-0 text-teal" /><a href={`mailto:${CONTACT.email}`} className="hover:text-ink">{CONTACT.email}</a></li>
              <li className="flex items-center gap-2"><Phone size={15} className="shrink-0 text-teal" /><a href={CONTACT.phoneHref} className="hover:text-ink">{CONTACT.phone}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-center gap-4 border-t border-line pt-6 font-mono text-[11px] uppercase tracking-[0.15em] text-faint sm:flex-row"><span>System status: all sensors online</span><span className="hidden sm:inline">·</span><span>© {new Date().getFullYear()} SensCore. All rights reserved.</span></div>
      </div>
    </footer>
  );
}
