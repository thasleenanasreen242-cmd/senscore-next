import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import GlowButton from "@/components/GlowButton";
import { Check, ArrowUpRight } from "lucide-react";
import { KNOWLEDGE_TOPICS } from "@/lib/knowledgeData";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return KNOWLEDGE_TOPICS.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const topic = KNOWLEDGE_TOPICS.find((t) => t.slug === params.slug);
  if (!topic) return {};
  return {
    title: topic.seoTitle,
    description: topic.metaDescription,
    alternates: {
      canonical: `https://www.senscoretech.com/knowledge-centre/${topic.slug}`,
    },
    openGraph: {
      title: topic.seoTitle,
      description: topic.metaDescription,
      url: `https://www.senscoretech.com/knowledge-centre/${topic.slug}`,
    },
  };
}

export default function KnowledgeTopicPage({ params }: Props) {
  const topic = KNOWLEDGE_TOPICS.find((t) => t.slug === params.slug);
  if (!topic) notFound();

  const otherTopics = KNOWLEDGE_TOPICS.filter((t) => t.slug !== topic.slug).slice(0, 3);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: topic.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Knowledge Centre",
        item: "https://www.senscoretech.com/knowledge-centre",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: topic.shortTitle,
        item: `https://www.senscoretech.com/knowledge-centre/${topic.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <PageHero eyebrow="Knowledge Centre" title={topic.title} description="" />

      <section className="border-b border-line py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Link
            href="/knowledge-centre"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-mute hover:text-teal"
          >
            &larr; Knowledge Centre
          </Link>
        </div>
      </section>

      {/* ---------------- INTRO ---------------- */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-mute sm:text-lg">
              {topic.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- SECTIONS ---------------- */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="mx-auto flex max-w-4xl flex-col gap-16 px-6 lg:px-10">
          {topic.sections.map((s, i) => (
            <Reveal key={i} delay={i * 0.02}>
              <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                {s.heading}
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-mute sm:text-base">
                {s.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
              {s.bullets && s.bullets.length > 0 && (
                <div className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {s.bullets.map((b, j) => (
                    <div key={j} className="flex items-start gap-3 text-sm leading-relaxed text-ink">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-teal/20 bg-teal/5">
                        <Check size={12} className="text-teal" aria-hidden="true" />
                      </span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <Reveal>
            <h2 className="font-display text-2xl font-bold leading-tight text-ink sm:text-3xl">
              Frequently Asked Questions
            </h2>
          </Reveal>

          <div className="mt-10 flex flex-col gap-8">
            {topic.faqs.map((f, i) => (
              <Reveal key={i} delay={i * 0.03} className="border-t border-line pt-7">
                <h3 className="font-display text-lg font-medium text-ink">{f.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute sm:text-base">{f.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="relative overflow-hidden border-t border-line py-28 sm:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal/10 blur-[100px]" />
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              {topic.ctaHeading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base text-mute">{topic.ctaText}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-9">
              <GlowButton href="/contact">Tell Us About Your Application</GlowButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- RELATED TOPICS ---------------- */}
      {otherTopics.length > 0 && (
        <section className="border-t border-line py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                Related Topics
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
              {otherTopics.map((t, i) => (
                <Reveal key={t.slug} delay={i * 0.03} className="bg-surface">
                  <Link
                    href={`/knowledge-centre/${t.slug}`}
                    className="group flex h-full flex-col justify-between p-7 transition-colors duration-300 hover:bg-surface2/60"
                  >
                    <h3 className="font-display text-base font-medium text-ink">
                      {t.shortTitle}
                    </h3>
                    <div className="mt-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-teal opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Explore
                      <ArrowUpRight size={13} />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
