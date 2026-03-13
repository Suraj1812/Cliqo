import type { MetadataRoute } from "next";

import { navLinks } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return navLinks.map((link) => ({
    url: absoluteUrl(link.href),
    lastModified: now,
    changeFrequency: link.href === "/" ? "weekly" : "monthly",
    priority: link.href === "/" ? 1 : 0.7,
  }));
}
