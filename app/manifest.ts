import type { MetadataRoute } from "next";

import { absoluteUrl, siteConfig } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f4eee3",
    theme_color: "#0f3d3b",
    icons: [
      {
        src: absoluteUrl("/icon.svg"),
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
