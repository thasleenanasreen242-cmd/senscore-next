import type { MetadataRoute } from "next";

const baseUrl = "https://www.senscoretech.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/about",
    "/products",
    "/products/flange-guards",
    "/services",
    "/industries",
    "/knowledge-centre",
    "/knowledge-centre/flange-protection",
    "/knowledge-centre/compressed-air-energy-efficiency",
    "/knowledge-centre/engineering-practice",
    "/contact",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path.startsWith("/knowledge-centre/") ? 0.9 : 0.8,
  }));
}
