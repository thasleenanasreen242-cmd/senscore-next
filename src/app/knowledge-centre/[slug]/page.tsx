import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import GlowButton from "@/components/GlowButton";
import { getKnowledgeArticle, KNOWLEDGE_ARTICLES } from "@/lib/knowledge-centre";

const baseUrl = "https://www.senscoretech.com";
const images: Record<string,string> = {
  "flow-measurement":"/images/knowledge-centre/flow-measurement.svg",
  "level-measurement":"/images/knowledge-centre/level-measurement.svg",
  "pressure-temperature":"/images/knowledge-centre/pressure-temperature.svg",
  "process-analysis":"/images/knowledge-centre/process-analysis.svg",
  "automation-connectivity":"/images/knowledge-centre/automation-connectivity.svg",
  "valves-flow-control":"/images/knowledge-centre/valves-flow-control.svg",
  "pumps-dosing":"/images/knowledge-centre/pumps-dosing.svg",
  "flange-protection":"/images/knowledge-centre/flange-protection.svg",
  "compressed-air-energy-efficiency":"/images/knowledge-centre/compressed-air-energy-efficiency.svg",
  "engineering-practice":"/images/knowledge-centre/engineering-practice.svg",
};

export function generateStaticParams(){return KNOWLEDGE_ARTICLES.map((article)=>({slug:article.slug}));}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const article=getKnowledgeArticle(slug);if(!article)return{title:"Knowledge Centre | SensCore"};return{title:article.seoTitle,description:article.description,alternates:{canonical:`${baseUrl}/knowledge-centre/${article.slug}`},openGraph:{title:article.seoTitle,description:article.description,url:`${baseUrl}/knowledge-centre/${article.slug}`,type:"article",images:[{url:`${baseUrl}${images[article.slug]}`,alt:`${article.title} industrial engineering application`} ]}};}

export default async function KnowledgeArticlePage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const article=getKnowledgeArticle(slug);if(!article)return null;const index=KNOWLEDGE_ARTICLES.findIndex((item)=>item.slug===article.slug);const previous=KNOWLEDGE_ARTICLES[index-1];const next=KNOWLEDGE_ARTICLES[index+1];const help=article.sections.find((section)=>section.heading.toLowerCase().startsWith("need help"));const sections=article.sections.filter((section)=>section!==help);const image=images[article.slug]??images["engineering-practice"];const alt=`${article.title} industrial engineering and instrumentation application`;
return <><PageHero eyebrow="Knowledge Centre" title={article.title} description={article.description}/><main className="py-20 sm:py-28"><div className="mx-auto max-w-5xl px-6 lg:px-10"><Reveal><Link href="/knowledge-centre" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-teal"><ArrowLeft size={14}/> Back to Knowledge Centre</Link></Reveal><Reveal><figure className="mt-10 overflow-hidden rounded-2xl border border-line bg-surface"><Image src={image} alt={alt} width={1600} height={700} priority className="h-auto w-full object-cover" sizes="(max-width: 1024px) 100vw, 1024px"/><figcaption className="sr-only">{alt}</figcaption></figure></Reveal><Reveal><section className="mt-10 rounded-2xl border border-line bg-surface p-7 sm:p-9"><h2 className="font-display text-2xl font-semibold text-ink">{article.title}</h2><p className="mt-5 text-sm leading-8 text-mute">{article.intro}</p></section></Reveal><div className="mt-10 space-y-7">{sections.map((section,sectionIndex)=><Reveal key={section.heading} delay={sectionIndex*.04}><section className="rounded-2xl border border-line bg-surface p-7 sm:p-9"><h2 className="font-display text-2xl font-semibold text-ink">{section.heading}</h2><div className="mt-5 space-y-4 text-sm leading-8 text-mute">{section.paragraphs.map((paragraph)=><p key={paragraph}>{paragraph}</p>)}</div>{section.bullets?<div className="mt-7 space-y-4">{section.bullets.map((bullet,i)=><div key={bullet} className="rounded-xl border border-line bg-void/30 p-5"><span className="font-mono text-xs text-teal">{String(i+1).padStart(2,"0")}</span><p className="mt-2 text-sm leading-7 text-mute">{bullet}</p></div>)}</div>:null}</section></Reveal>)}</div><Reveal><div className="mt-10 flex flex-col gap-4 rounded-2xl border border-line bg-surface p-7 sm:flex-row sm:items-center sm:justify-between"><div><div className="font-display text-lg font-medium text-ink">{help?.heading??"Need help with an industrial application?"}</div><p className="mt-1 text-sm leading-7 text-mute">{help?.paragraphs?.[0]??"SensCore can review your process conditions and technical requirements."}</p></div><GlowButton href="/contact">Talk to an Engineer</GlowButton></div></Reveal><div className="mt-10 grid gap-4 sm:grid-cols-2">{previous?<Link href={`/knowledge-centre/${previous.slug}`} className="rounded-xl border border-line p-5 text-sm text-mute"><ArrowLeft size={15} className="mb-3 text-teal"/>Previous: <span className="text-ink">{previous.title}</span></Link>:<div/>}{next?<Link href={`/knowledge-centre/${next.slug}`} className="rounded-xl border border-line p-5 text-sm text-mute sm:text-right"><ArrowRight size={15} className="mb-3 ml-auto text-teal"/>Next: <span className="text-ink">{next.title}</span></Link>:null}</div></div></main></>;
}
