import type { Metadata } from "next";

import { absoluteUrl, siteConfig } from "@/lib/site-config";

type MetadataOptions = {
  title: string;
  description: string;
  pathname: string;
};

export function createPageMetadata({ title, description, pathname }: MetadataOptions): Metadata {
  const canonical = absoluteUrl(pathname);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
