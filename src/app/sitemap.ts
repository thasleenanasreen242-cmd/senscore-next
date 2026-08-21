import type { MetadataRoute } from "next";
import { KNOWLEDGE_ARTICLES } from "@/lib/knowledge-centre";

const baseUrl = "https://www.senscoretech.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const knowledgeCentreUrls: MetadataRoute.Sitemap = KNOWLEDGE_ARTICLES.map((article) => ({
    url: `${baseUrl}/knowledge-centre/${article.slug}`,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [
    { url: baseUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/products`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/services`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/industrial-engineering-services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/industries`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/knowledge-centre`, changeFrequency: "weekly", priority: 0.95 },
    ...knowledgeCentreUrls,
  ];
}
