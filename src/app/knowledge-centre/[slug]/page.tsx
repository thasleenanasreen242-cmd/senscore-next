import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import GlowButton from "@/components/GlowButton";
import { getKnowledgeArticle, KNOWLEDGE_ARTICLES } from "@/lib/knowledge-centre";

const baseUrl = "https://www.senscoretech.com";
const uploadedImages: Record<string, { src: string; alt: string }> = {
  "flow-measurement": { src: "/images/knowledge-centre/Flow%20Measurement.png", alt: "Industrial flow measurement instrumentation" },
  "level-measurement": { src: "/images/knowledge-centre/Level%20measurement.png", alt: "Industrial level measurement instrumentation" },
  "pressure-temperature": { src: "/images/knowledge-centre/Pressure%20and%20Temperature%20Measurement.png", alt: "Industrial pressure and temperature measurement instrumentation" },
  "process-analysis": { src: "/images/knowledge-centre/Process%20Analysis.png", alt: "Industrial process analysis instrumentation" },
  "valves-flow-control": { src: "/images/knowledge-centre/Valves%20and%20Flow%20Control.png", alt: "Industrial valves and flow control equipment" },
  "pumps-dosing": { src: "/images/knowledge-centre/Pumps%20and%20Dosing.png", alt: "Industrial pumps and dosing equipment" },
};

export function generateStaticParams() { return KNOWLEDGE_ARTICLES.map((article) => ({ slug: article.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const article = getKnowledgeArticle(slug); if (!article) return { title: "Knowledge Centre | SensCore" };
  const image = uploadedImages[slug];
  return { title: article.seoTitle, description: article.description, alternates: { canonical: `${baseUrl}/knowledge-centre/${article.slug}` }, openGraph: { title: article.seoTitle, description: article.description, url: `${baseUrl}/knowledge-centre/${article.slug}`, type: "article", ...(image ? { images: [{ url: image.src, alt: image.alt }] } : {}) } };
}

export default async function KnowledgeArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const article = getKnowledgeArticle(slug); if (!article) return null;
  const index = KNOWLEDGE_ARTICLES.findIndex((item) => item.slug === article.slug); const previous = KNOWLEDGE_ARTICLES[index - 1]; const next = KNOWLEDGE_ARTICLES[index + 1];
  const help = article.sections.find((section) => section.heading.toLowerCase().startsWith("need help")); const sections = article.sections.filter((section) => section !== help); const image = uploadedImages[slug];
  return <><PageHero eyebrow="Knowledge Centre" title={article.title} description={article.description} /><main className="py-20 sm:py-28"><div className="mx-auto max-w-5xl px-6 lg:px-10"><Reveal><Link href="/knowledge-centre" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-teal"><ArrowLeft size={14}/> Back to Knowledge Centre</Link></Reveal>
    {image && <Reveal><div className="mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-line bg-surface"><img src={`${image.src}?v=17`} alt={image.alt} width={1800} height={1000} loading="eager" fetchPriority="high" decoding="async" className="block h-full w-full object-cover" /></div></Reveal>}
    <Reveal><section className="mt-10 rounded-2xl border border-line bg-surface p-7 sm:p-9"><h2 className="font-display text-2xl font-semibold text-ink">{article.title}</h2><p className="mt-5 text-sm leading-8 text-mute">{article.intro}</p></section></Reveal>
    <div className="mt-10 space-y-7">{sections.map((section, sectionIndex)=><Reveal key={section.heading} delay={sectionIndex*.04}><section className="rounded-2xl border border-line bg-surface p-7 sm:p-9"><h2 className="font-display text-2xl font-semibold text-ink">{section.heading}</h2><div className="mt-5 space-y-4 text-sm leading-8 text-mute">{section.paragraphs.map((paragraph)=><p key={paragraph}>{paragraph}</p>)}</div>{section.bullets&&<div className="mt-7 space-y-4">{section.bullets.map((bullet,i)=><div key={bullet} className="rounded-xl border border-line bg-void/30 p-5"><span className="font-mono text-xs text-teal">{String(i+1).padStart(2,"0")}</span><p className="mt-2 text-sm leading-7 text-mute">{bullet}</p></div>)}</div>}</section></Reveal>)}</div>
    <Reveal><div className="mt-10 flex flex-col gap-4 rounded-2xl border border-line bg-surface p-7 sm:flex-row sm:items-center sm:justify-between"><div><div className="font-display text-lg font-medium text-ink">{help?.heading??"Need help with an industrial application?"}</div><p className="mt-1 text-sm leading-7 text-mute">{help?.paragraphs?.[0]??"SensCore can review your process conditions and technical requirements."}</p></div><GlowButton href="/contact">Talk to an Engineer</GlowButton></div></Reveal>
    <div className="mt-10 grid gap-4 sm:grid-cols-2">{previous?<Link href={`/knowledge-centre/${previous.slug}`} className="rounded-xl border border-line p-5 text-sm text-mute"><ArrowLeft size={15} className="mb-3 text-teal"/>Previous: <span className="text-ink">{previous.title}</span></Link>:<div/>}{next?<Link href={`/knowledge-centre/${next.slug}`} className="rounded-xl border border-line p-5 text-sm text-mute sm:text-right"><ArrowRight size={15} className="mb-3 ml-auto text-teal"/>Next: <span className="text-ink">{next.title}</span></Link>:null}</div></div></main></>;
}
