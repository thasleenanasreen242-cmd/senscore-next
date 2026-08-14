import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import GlowButton from "@/components/GlowButton";

export const metadata: Metadata = {
  title: "Knowledge Centre | SensCore",
  description:
    "Technical articles, application notes, and engineering resources from SensCore. Coming soon.",
  alternates: { canonical: "https://www.senscoretech.com/knowledge-centre" },
};

export default function KnowledgeCentrePage() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge Centre"
        title="Engineering insight, coming soon."
        description="We're building a library of technical articles, application notes and engineering guidance drawn from real projects across the UAE. Check back shortly."
      />

      <section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal/10 blur-[120px]" />

        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              Have a technical question in the meantime?
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8">
              <GlowButton href="/contact">
                Talk to an Engineer
              </GlowButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
