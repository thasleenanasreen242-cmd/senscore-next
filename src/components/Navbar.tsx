"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Radio } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-void/80 backdrop-blur-lg border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-md border border-teal/40 bg-teal/5">
            <Radio size={16} className="text-teal" strokeWidth={2} />
            <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-teal animate-pulseGlow" />
          </span>
          <span className="font-display text-lg font-semibold tracking-wide text-ink">
            SENS<span className="text-teal">CORE</span>
          </span>
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-mono text-xs uppercase tracking-[0.15em] transition-colors ${
                  active ? "text-teal" : "text-mute hover:text-ink"
                }`}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 h-px w-full bg-teal"
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="rounded-full border border-teal/40 bg-teal/5 px-5 py-2 font-mono text-xs uppercase tracking-[0.15em] text-teal transition-colors hover:bg-teal/15"
          >
            Get in touch
          </Link>
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-line bg-void/95 backdrop-blur-lg lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-md px-3 py-3 font-mono text-sm uppercase tracking-[0.15em] ${
                    pathname === link.href ? "text-teal" : "text-mute"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 rounded-full border border-teal/40 bg-teal/5 px-5 py-3 text-center font-mono text-xs uppercase tracking-[0.15em] text-teal"
              >
                Get in touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
