import type { MetadataRoute } from "next";

const SITE_URL = "https://intheloop.space";
const LAST_MODIFIED = "2026-06-25";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/portfolio", priority: 0.8 },
    { path: "/case-study", priority: 0.8 },
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
