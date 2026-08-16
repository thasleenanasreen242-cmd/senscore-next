import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";
import { KNOWLEDGE_TOPICS, KC_HUB } from "@/lib/knowledgeData";

export const metadata: Metadata = {
  title: KC_HUB.seoTitle,
  description: KC_HUB.metaDescription,
  alternates: { canonical: "https://www.senscoretech.com/knowledge-centre" },
  openGraph: {
    title: KC_HUB.seoTitle,
    description: KC_HUB.metaDescription,
    url: "https://www.senscoretech.com/knowledge-centre",
  },
};

export default function KnowledgeCentrePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: KC_HUB.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        eyebrow="Knowledge Centre"
        title={KC_HUB.heading}
        description=""
      />

      <section className="border-b border-line py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="max-w-4xl space-y-5 text-base leading-relaxed text-mute sm:text-lg">
              {KC_HUB.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- TOPICS GRID ---------------- */}
      <section className="py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <h2 className="font-display text-2xl font-bold leading-tight text-ink sm:text-3xl">
              Explore by Engineering Topic
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {KNOWLEDGE_TOPICS.map((topic, i) => (
              <Reveal key={topic.slug} delay={i * 0.03} className="bg-surface">
                <Link
                  href={`/knowledge-centre/${topic.slug}`}
                  className="group flex h-full flex-col justify-between p-9 transition-colors duration-300 hover:bg-surface2/60"
                >
                  <div>
                    <h3 className="font-display text-lg font-medium text-ink">
                      {topic.shortTitle}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-mute">
                      {topic.intro[0]}
                    </p>
                  </div>
                  <div className="mt-9 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-teal opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Explore
                    <ArrowUpRight size={13} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="border-t border-line py-28 sm:py-36">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <Reveal>
            <h2 className="font-display text-2xl font-bold leading-tight text-ink sm:text-3xl">
              Frequently Asked Questions
            </h2>
          </Reveal>

          <div className="mt-12 flex flex-col gap-10">
            {KC_HUB.faqs.map((f, i) => (
              <Reveal key={i} delay={i * 0.03} className="border-t border-line pt-8">
                <h3 className="font-display text-lg font-medium text-ink">
                  {f.q}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mute sm:text-base">
                  {f.a}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
