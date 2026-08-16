import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import GlowButton from "@/components/GlowButton";
import { getKnowledgeArticle, KNOWLEDGE_ARTICLES } from "@/lib/knowledge-centre";
import { getKnowledgeImage } from "@/lib/knowledge-centre-images";

export function generateStaticParams() {
  return KNOWLEDGE_ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getKnowledgeArticle(slug);
  if (!article) return { title: "Knowledge Centre | SensCore" };
  return { title: article.seoTitle, description: article.description, alternates: { canonical: `https://www.senscoretech.com/knowledge-centre/${article.slug}` } };
}

export default async function KnowledgeArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getKnowledgeArticle(slug);
  if (!article) return null;
  const image = getKnowledgeImage(slug);
  const index = KNOWLEDGE_ARTICLES.findIndex((item) => item.slug === article.slug);
  const previous = KNOWLEDGE_ARTICLES[index - 1];
  const next = KNOWLEDGE_ARTICLES[index + 1];
  const helpSection = article.sections.find((section) => section.heading.toLowerCase().startsWith("need help"));
  const contentSections = article.sections.filter((section) => section !== helpSection);

  return (
    <>
      <PageHero eyebrow="Knowledge Centre" title={article.title} description={article.description} />
      <main className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal>
            <Link href="/knowledge-centre" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-teal hover:text-ink"><ArrowLeft size={14} /> Back to Knowledge Centre</Link>
            {image ? <figure className="mt-8 overflow-hidden rounded-2xl border border-line bg-surface">
              <div className="relative aspect-[21/9] bg-[#07121d]">
                <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061015]/65 via-transparent to-transparent" />
              </div>
              <figcaption className="flex flex-wrap items-center justify-between gap-2 border-t border-line px-5 py-3 font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
                <span>Industrial application reference</span>
                <a href={image.href} target="_blank" rel="noopener noreferrer" className="text-teal hover:text-ink">Image source: {image.source} ↗</a>
              </figcaption>
            </figure> : null}
          </Reveal>

          <div className="mt-10 space-y-7">
            {contentSections.map((section, sectionIndex) => {
              const paragraphs = section.heading === "Choosing the Right Flow Measurement Technology"
                ? [article.intro, ...section.paragraphs]
                : section.paragraphs;

              return (
                <Reveal key={section.heading} delay={sectionIndex * 0.04}>
                  <section className="rounded-2xl border border-line bg-surface p-7 sm:p-9">
                    <h2 className="font-display text-2xl font-semibold text-ink">{section.heading}</h2>
                    {section.heading === "Frequently Asked Questions" ? (
                      <div className="mt-6 space-y-4">
                        {paragraphs.map((paragraph, faqIndex) => {
                          const [question, ...answerParts] = paragraph.split("\n");
                          const answer = answerParts.join(" ").trim();
                          return (
                            <div key={paragraph} className="rounded-xl border border-line bg-void/30 p-5 sm:p-6">
                              <div className="flex items-start gap-4">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-teal/30 bg-teal/10 font-mono text-[10px] font-semibold text-teal">
                                  {String(faqIndex + 1).padStart(2, "0")}
                                </span>
                                <div className="min-w-0">
                                  <h3 className="font-display text-base font-semibold leading-7 text-ink sm:text-lg">{question}</h3>
                                  {answer ? <p className="mt-2 text-sm leading-7 text-mute">{answer}</p> : null}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="mt-5 space-y-4 text-sm leading-8 text-mute">{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                    )}
                    {section.bullets ? <ul className="mt-5 space-y-3 text-sm leading-7 text-mute">{section.bullets.map((bullet) => <li key={bullet} className="border-l-2 border-teal/40 pl-4">{bullet}</li>)}</ul> : null}
                  </section>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-line bg-surface p-7 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="font-display text-lg font-medium text-ink">{helpSection?.heading ?? "Need help with an industrial application?"}</div>
                <p className="mt-1 text-sm leading-7 text-mute">{helpSection?.paragraphs[0] ?? "SensCore can review your process conditions and technical requirements."}</p>
              </div>
              <GlowButton href="/contact">Talk to an Engineer</GlowButton>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {previous ? <Link href={`/knowledge-centre/${previous.slug}`} className="rounded-xl border border-line p-5 text-sm text-mute hover:border-teal/40 hover:text-ink"><ArrowLeft size={15} className="mb-3 text-teal" />Previous: <span className="text-ink">{previous.title}</span></Link> : <div />}
            {next ? <Link href={`/knowledge-centre/${next.slug}`} className="rounded-xl border border-line p-5 text-sm text-mute hover:border-teal/40 hover:text-ink sm:text-right"><ArrowRight size={15} className="mb-3 ml-auto text-teal" />Next: <span className="text-ink">{next.title}</span></Link> : null}
          </div>
        </div>
      </main>
    </>
  );
}
