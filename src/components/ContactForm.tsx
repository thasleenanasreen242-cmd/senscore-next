"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-2xl border border-teal/30 bg-teal/5 p-10 text-center"
      >
        <CheckCircle2 size={40} className="text-teal" />
        <h3 className="mt-5 font-display text-xl font-medium text-ink">
          Message received
        </h3>
        <p className="mt-2 max-w-sm text-sm text-mute">
          A SensCore engineer will get back to you within one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 font-mono text-xs uppercase tracking-[0.15em] text-teal"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Company" name="company" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
      </div>
      <Field label="Industry" name="industry" as="select" />
      <div>
        <label className="font-mono text-[11px] uppercase tracking-[0.15em] text-mute">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your process, site, or the problem you're solving..."
          className="mt-2 w-full resize-none rounded-lg border border-line bg-surface2 px-4 py-3 text-sm text-ink placeholder:text-faint focus:border-teal/50 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-teal px-6 py-3.5 font-medium text-void transition-transform duration-300 hover:scale-[1.02] disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending
          </>
        ) : (
          <>
            Send message
            <Send size={15} className="transition-transform group-hover:translate-x-0.5" />
          </>
        )}
      </button>

      {status === "error" && (
        <p className="font-mono text-xs text-amber">
          Something went wrong — please email info@senscoretech.com directly.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  as,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  as?: "select";
}) {
  return (
    <div>
      <label className="font-mono text-[11px] uppercase tracking-[0.15em] text-mute">
        {label}
        {required && <span className="text-teal"> *</span>}
      </label>
      {as === "select" ? (
        <select
          name={name}
          className="mt-2 w-full rounded-lg border border-line bg-surface2 px-4 py-3 text-sm text-ink focus:border-teal/50 focus:outline-none"
          defaultValue=""
        >
          <option value="" disabled>Select an industry</option>
          {["Oil & Gas", "Manufacturing", "Food & Beverage", "Water & Utilities", "Power & Energy", "HVAC & Facilities", "Other"].map(
            (opt) => (
              <option key={opt} value={opt}>{opt}</option>
            )
          )}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          className="mt-2 w-full rounded-lg border border-line bg-surface2 px-4 py-3 text-sm text-ink placeholder:text-faint focus:border-teal/50 focus:outline-none"
        />
      )}
    </div>
  );
}
