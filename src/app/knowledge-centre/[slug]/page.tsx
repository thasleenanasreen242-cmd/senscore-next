import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import GlowButton from "@/components/GlowButton";
import { getKnowledgeArticle, KNOWLEDGE_ARTICLES } from "@/lib/knowledge-centre";

const baseUrl = "https://www.senscoretech.com";
const uploadedImages: Record<string, { src: string; alt: string }> = {
  "flow-measurement": { src: "/images/knowledge-centre/Flow Measurement.png", alt: "Industrial flow measurement instrumentation" },
  "level-measurement": { src: "/images/knowledge-centre/Level measurement.png", alt: "Industrial level measurement instrumentation" },
  "pressure-temperature": { src: "/images/knowledge-centre/Pressure and Temperature Measurement.png", alt: "Industrial pressure and temperature measurement instrumentation" },
  "process-analysis": { src: "/images/knowledge-centre/Process Analysis.png", alt: "Industrial process analysis instrumentation" },
  "automation-connectivity": { src: "/images/knowledge-centre/Automation & Connectivity.png", alt: "Industrial automation and connectivity" },
  "valves-flow-control": { src: "/images/knowledge-centre/Valves and Flow Control.png", alt: "Industrial valves and flow control equipment" },
  "pumps-dosing": { src: "/images/knowledge-centre/Pumps and Dosing.png", alt: "Industrial pumps and dosing equipment" },
  "flange-protection": { src: "/images/knowledge-centre/Flange Protection and Sealing.png", alt: "Industrial flange protection and sealing" },
  "compressed-air-energy-efficiency": { src: "/images/knowledge-centre/Compressed Air and Energy Efficiency.png", alt: "Compressed air and industrial energy efficiency" },
  "engineering-practice": { src: "/images/knowledge-centre/Engineering Practice and Industrial Applications.png", alt: "Engineering practice and industrial applications" },
};

export function generateStaticParams() {
  return KNOWLEDGE_ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getKnowledgeArticle(slug);
  if (!article) return { title: "Knowledge Centre | SensCore" };
  const image = uploadedImages[slug];
  return {
    title: article.seoTitle,
    description: article.description,
    alternates: { canonical: `${baseUrl}/knowledge-centre/${article.slug}` },
    openGraph: {
      title: article.seoTitle,
      description: article.description,
      url: `${baseUrl}/knowledge-centre/${article.slug}`,
      type: "article",
      ...(image ? { images: [{ url: image.src, alt: image.alt }] } : {}),
    },
  };
}

function FAQSection({ paragraphs }: { paragraphs: string[] }) {
  const items = paragraphs.flatMap((paragraph) => {
    const parts = paragraph.split(/\n+/).map((part) => part.trim()).filter(Boolean);
    if (parts.length >= 2 && parts.length % 2 === 0) {
      return Array.from({ length: parts.length / 2 }, (_, index) => [parts[index * 2], parts[index * 2 + 1]] as const);
    }
    return [[parts[0] ?? "", parts.slice(1).join(" ")] as const];
  });

  return (
    <Reveal>
      <section className="rounded-2xl border border-line bg-surface p-7 sm:p-9">
        <h2 className="font-display text-2xl font-semibold text-ink">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-4">
          {items.map(([question, answer], index) => (
            <article key={`${question}-${index}`} className="rounded-xl border border-line bg-void/30 p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-teal/30 bg-teal/10 font-mono text-[10px] font-semibold text-teal">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-base font-semibold leading-7 text-ink sm:text-lg">{question}</h3>
                  {answer ? <p className="mt-2 text-sm leading-7 text-mute">{answer}</p> : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Reveal>
  );
}

export default async function KnowledgeArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getKnowledgeArticle(slug);
  if (!article) return null;

  const help = article.sections.find((section) => section.heading.toLowerCase().startsWith("need help"));
  const faq = article.sections.find((section) => section.heading.toLowerCase() === "frequently asked questions");
  const sections = article.sections.filter((section) => section !== help && section !== faq);
  const image = uploadedImages[slug];

  return (
    <>
      <PageHero eyebrow="Knowledge Centre" title={article.title} description={article.description} />
      <main className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal>
            <Link href="/knowledge-centre" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-teal">
              <ArrowLeft size={14} /> Back to Knowledge Centre
            </Link>
          </Reveal>

          {image ? (
            <div className="mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-line bg-surface">
              <img src={encodeURI(image.src)} alt={image.alt} width={1800} height={1000} loading="eager" fetchPriority="high" decoding="async" className="block h-full w-full object-cover" />
            </div>
          ) : null}

          <Reveal>
            <section className="mt-10 rounded-2xl border border-line bg-surface p-7 sm:p-9">
              <h2 className="font-display text-2xl font-semibold text-ink">{article.title}</h2>
              <p className="mt-5 text-sm leading-8 text-mute">{article.intro}</p>
            </section>
          </Reveal>

          <div className="mt-10 space-y-7">
            {sections.map((section, sectionIndex) => {
              const isLevelConsiderations = slug === "level-measurement" && section.heading === "What Should Engineers Consider When Selecting a Level Instrument?";
              return (
                <Reveal key={section.heading} delay={sectionIndex * 0.04}>
                  <section className={isLevelConsiderations ? "relative overflow-hidden rounded-2xl border border-line bg-surface p-7 sm:p-9" : "rounded-2xl border border-line bg-surface p-7 sm:p-9"}>
                    {isLevelConsiderations ? <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-teal/[0.06] blur-3xl" /> : null}
                    <div className={isLevelConsiderations ? "relative" : undefined}>
                      <h2 className="font-display text-2xl font-semibold text-ink">{section.heading}</h2>
                      <div className="mt-4 space-y-4 text-sm leading-8 text-mute">
                        {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                      </div>
                      {section.bullets ? (
                        <div className={isLevelConsiderations ? "mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" : "mt-7 space-y-4"}>
                          {section.bullets.map((bullet, index) => (
                            <div key={bullet} className={isLevelConsiderations ? "group rounded-xl border border-line bg-void/30 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal/35 hover:bg-teal/[0.04]" : "rounded-xl border border-line bg-void/30 p-5"}>
                              <span className="font-mono text-xs text-teal">{String(index + 1).padStart(2, "0")}</span>
                              <p className="mt-2 text-sm leading-7 text-mute">{bullet}</p>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </section>
                </Reveal>
              );
            })}
          </div>

          {faq ? <div className="mt-10"><FAQSection paragraphs={faq.paragraphs} /></div> : null}

          <Reveal>
            <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-line bg-surface p-7 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="font-display text-lg font-medium text-ink">{help?.heading ?? "Need help with an industrial application?"}</div>
                <p className="mt-1 text-sm leading-7 text-mute">{help?.paragraphs?.[0] ?? "SensCore can review your process conditions and technical requirements."}</p>
              </div>
              <GlowButton href="/contact">Talk to an Engineer</GlowButton>
            </div>
          </Reveal>
        </div>
      </main>
    </>
  );
}