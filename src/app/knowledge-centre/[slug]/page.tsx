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
  const showIntroBeforeSections = article.slug === "level-measurement" || article.slug === "pressure-temperature";

  return (
    <>
      <PageHero eyebrow="Knowledge Centre" title={article.title} description={article.description} />
      <main className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal>
            <Link href="/knowledge-centre" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-teal hover:text-ink"><ArrowLeft size={14} /> Back to Knowledge Centre</Link>
            <figure className="mt-8 overflow-hidden rounded-2xl border border-line bg-surface">
              <div className="relative aspect-[21/9] overflow-hidden bg-[#07121d]">
                {image ? (
                  <>
                    <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061015]/65 via-transparent to-transparent" />
                  </>
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-[#07121d] via-[#0a1622] to-[#061015]" aria-hidden="true" />
                )}
              </div>
            </figure>
          </Reveal>

          {showIntroBeforeSections ? (
            <Reveal>
              <section className="mt-10 rounded-2xl border border-line bg-surface p-7 sm:p-9">
                <h2 className="font-display text-2xl font-semibold text-ink">{article.title}</h2>
                <div className="mt-5 space-y-4 text-sm leading-8 text-mute">
                  <p>{article.intro}</p>
                </div>
              </section>
            </Reveal>
          ) : null}

          <div className="mt-10 space-y-7">
            {contentSections.map((section, sectionIndex) => {
              const isFlowTechnologySection = section.heading === "Choosing the Right Flow Measurement Technology";
              const isLevelSelectionSection = section.heading === "What Should Engineers Consider When Selecting a Level Instrument?";
              const paragraphs = isFlowTechnologySection ? [article.intro, ...section.paragraphs] : section.paragraphs;

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
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-teal/30 bg-teal/10 font-mono text-[10px] font-semibold text-teal">{String(faqIndex + 1).padStart(2, "0")}</span>
                                <div className="min-w-0">
                                  <h3 className="font-display text-base font-semibold leading-7 text-ink sm:text-lg">{question}</h3>
                                  {answer ? <p className="mt-2 text-sm leading-7 text-mute">{answer}</p> : null}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : isLevelSelectionSection ? (
                      <ul className="mt-6 list-disc space-y-3 pl-6 text-sm leading-8 text-mute marker:text-teal sm:text-[15px]">
                        {section.bullets?.map((bullet) => <li key={bullet} className="pl-2">{bullet}</li>)}
                      </ul>
                    ) : (
                      <>
                        <div className="mt-5 space-y-4 text-sm leading-8 text-mute">
                          {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                        </div>

                        {section.bullets ? (
                          <div className="mt-8 space-y-5">
                            {section.bullets.map((bullet, bulletIndex) => {
                              const separatorIndex = bullet.indexOf(" — ");
                              const title = separatorIndex >= 0 ? bullet.slice(0, separatorIndex) : `Application point ${String(bulletIndex + 1).padStart(2, "0")}`;
                              const text = separatorIndex >= 0 ? bullet.slice(separatorIndex + 3) : bullet;

                              return (
                                <article key={bullet} className="group relative overflow-hidden rounded-2xl border border-line bg-void/35 p-6 transition-all duration-300 hover:border-[#4f9cff]/40 hover:bg-[#08121f]/90 sm:p-7">
                                  <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#2f80ff]/5 blur-3xl transition-opacity duration-300 group-hover:bg-[#2f80ff]/10" />
                                  <div className="relative flex gap-5">
                                    <div className="shrink-0">
                                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#4f9cff]/30 bg-[#0a1727] font-mono text-[10px] tracking-[0.15em] text-[#6da8ff]">{String(bulletIndex + 1).padStart(2, "0")}</div>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                      <div className="flex items-center gap-3">
                                        <span className="h-px w-7 shrink-0 bg-[#4f9cff]" />
                                        <h3 className="font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">{title}</h3>
                                      </div>
                                      <p className="mt-4 max-w-5xl text-sm leading-7 text-[#91a9c4] sm:text-[15px] sm:leading-8">{text}</p>
                                    </div>
                                  </div>
                                </article>
                              );
                            })}
                          </div>
                        ) : null}
                      </>
                    )}
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