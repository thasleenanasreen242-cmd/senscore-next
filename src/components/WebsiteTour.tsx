"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, MapPin, Sparkles, X } from "lucide-react";

const STORAGE_KEY = "senscore-website-tour-completed";

const steps = [
  { title: "Welcome to SensCore", text: "Take a quick tour to discover our industrial engineering solutions, products, services and contact options.", icon: Sparkles, selector: null },
  { title: "Explore our solutions", text: "Browse Products to explore instrumentation, automation, valves, analysers, pumps and sealing solutions.", icon: ArrowRight, selector: 'a[href="/products"]' },
  { title: "See our engineering services", text: "Discover flow surveys, flowmeter verification, compressed-air audits, commissioning and application engineering.", icon: ArrowRight, selector: 'a[href="/industrial-engineering-services"]' },
  { title: "Find your industry", text: "Explore solutions selected for Oil & Gas, Manufacturing, Food & Beverage, Water & Utilities, Energy and HVAC applications.", icon: ArrowRight, selector: 'a[href="/industries"]' },
  { title: "Let's connect", text: "When you're ready, visit Contact to request a quotation, discuss an application or speak with the SensCore team.", icon: MapPin, selector: 'a[href="/contact"]' },
];

function getRect(selector: string | null) {
  if (!selector || typeof window === "undefined") return null;
  const element = document.querySelector(selector) as HTMLElement | null;
  if (!element) return null;
  const rect = element.getBoundingClientRect();
  return { top: rect.top, left: rect.left, width: rect.width, height: rect.height };
}

export default function WebsiteTour() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [rect, setRect] = useState<ReturnType<typeof getRect>>(null);

  useEffect(() => {
    if (window.localStorage.getItem(STORAGE_KEY) !== "true") {
      const timer = window.setTimeout(() => setOpen(true), 900);
      return () => window.clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    const update = () => setRect(getRect(steps[step].selector));
    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update);
    };
  }, [open, step]);

  const close = () => {
    window.localStorage.setItem(STORAGE_KEY, "true");
    setOpen(false);
  };

  const next = () => {
    if (step === steps.length - 1) return close();
    setStep((current) => current + 1);
  };

  if (!open) return null;
  const Icon = steps[step].icon;
  const isLast = step === steps.length - 1;

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100]" role="dialog" aria-modal="true" aria-label="SensCore website tour">
        <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px]" />
        {rect && <motion.div layout transition={{ duration: 0.3 }} className="pointer-events-none absolute rounded-xl border-2 border-teal shadow-[0_0_0_9999px_rgba(0,0,0,0.65),0_0_35px_rgba(45,212,191,0.35)]" style={{ top: rect.top - 6, left: rect.left - 6, width: rect.width + 12, height: rect.height + 12 }} />}
        <motion.div initial={{ opacity: 0, y: 18, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 18 }} className="absolute bottom-6 left-1/2 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-2xl border border-teal/25 bg-[#0b121a]/95 p-5 shadow-2xl backdrop-blur-xl sm:bottom-8 sm:p-6">
          <button onClick={close} aria-label="Skip website tour" className="absolute right-3 top-3 rounded-full p-2 text-mute transition-colors hover:bg-white/5 hover:text-ink"><X size={17} /></button>
          <div className="flex items-start gap-4 pr-8">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-teal/30 bg-teal/10 text-teal"><Icon size={19} /></div>
            <div><div className="font-mono text-[10px] uppercase tracking-[0.2em] text-teal">SensCore tour · {step + 1}/{steps.length}</div><h2 className="mt-1 font-display text-xl font-semibold text-ink">{steps[step].title}</h2></div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-mute">{steps[step].text}</p>
          <div className="mt-5 flex items-center justify-between gap-4">
            <div className="flex gap-1.5">{steps.map((_, index) => <span key={index} className={`h-1.5 rounded-full transition-all ${index === step ? "w-6 bg-teal" : "w-1.5 bg-white/20"}`} />)}</div>
            <div className="flex items-center gap-2"><button onClick={close} className="rounded-lg px-3 py-2 text-xs font-medium text-mute transition-colors hover:text-ink">Skip</button><button onClick={next} className="inline-flex items-center gap-2 rounded-lg bg-teal px-4 py-2.5 text-xs font-semibold text-[#061015] transition-transform hover:scale-[1.02]">{isLast ? <><Check size={14} /> Finish</> : <>Next <ArrowRight size={14} /></>}</button></div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
