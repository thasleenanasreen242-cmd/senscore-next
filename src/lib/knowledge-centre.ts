export type KnowledgeArticle = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  intro: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
};

export const KNOWLEDGE_ARTICLES: KnowledgeArticle[] = [
  {
    slug: "flow-measurement",
    title: "Flow Measurement for Industrial Applications",
    seoTitle: "Flow Measurement UAE | Industrial Flowmeter Guide | SensCore",
    description