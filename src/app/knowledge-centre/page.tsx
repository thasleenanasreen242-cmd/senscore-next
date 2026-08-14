import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import GlowButton from "@/components/GlowButton";

export const metadata: Metadata = {
  title: "Knowledge Centre | SensCore",
  description:
    "Technical articles, application notes, manufacturer resources and engineering guidance from SensCore.",
  alternates: { canonical: "https://www.senscoretech.com/knowledge-centre" },
};

export default function KnowledgeCentrePage() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge Centre"
        title="Engineering insight for industrial applications."
        description="Explore technical resources, application guidance and selected manufacturer information relevant to instrumentation, flow control and engineered industrial solutions."
      />

      <section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal/10 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="mb-10">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-teal">
                Manufacturer Resource · 01
              </div>
              <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
                ABC Wearstar
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-mute sm:text-base">
                Explore ABC Valve&apos;s wear-resistant valve solutions for demanding fluid-control applications, including abrasive powders, slurries and other high-wear industrial services.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="rounded-2xl border border-teal/20 bg-surface/80 p-7 shadow-[0_20px_70px_rgba(0,0,0,.22)] backdrop-blur-xl sm:p-9">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                    Valve Technology · External Resource
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
                    Wear-resistant flow control
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mute">
                    ABC Wearstar technologies include wear-resistant butterfly and ball valve solutions designed for applications such as battery materials, silicon powder, dry bulk and slurry handling.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-teal">
                    <span className="rounded-full border border-teal/20 bg-teal/5 px-3 py-1.5">Wear-resistant valves</span>
                    <span className="rounded-full border border-teal/20 bg-teal/5 px-3 py-1.5">Butterfly valves</span>
                    <span className="rounded-full border border-teal/20 bg-teal/5 px-3 py-1.5">Ball valves</span>
                    <span className="rounded-full border border-teal/20 bg-teal/5 px-3 py-1.5">Abrasive applications</span>
                  </div>
                </div>

                <a
                  href="https://www.abcvalve.com/index.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-lg border border-teal/30 bg-teal/10 px-5 text-sm font-semibold text-teal transition hover:border-teal/60 hover:bg-teal/15"
                >
                  View ABC Wearstar Resource ↗
                </a>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-16 text-center">
              <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                Have a technical question?
              </h2>
              <div className="mt-8">
                <GlowButton href="/contact">Talk to an Engineer</GlowButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
