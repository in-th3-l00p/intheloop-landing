import type { MetadataRoute } from "next";
import { reader } from "@/lib/reader";

const SITE_URL = "https://intheloop.space";
const LAST_MODIFIED = "2026-06-26";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [caseStudies, articles] = await Promise.all([
    reader.collections.caseStudies.list(),
    reader.collections.articles.list(),
  ]);

  const routes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/publishings", priority: 0.8 },
    ...caseStudies.map((slug) => ({ path: `/case-study/${slug}`, priority: 0.7 })),
    ...articles.map((slug) => ({ path: `/articles/${slug}`, priority: 0.6 })),
    { path: "/brand", priority: 0.6 },
    { path: "/logo", priority: 0.6 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority,
  }));
}
