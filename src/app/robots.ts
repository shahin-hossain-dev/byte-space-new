import type { MetadataRoute } from "next";

import { ROUTES, SITE } from "@/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: [ROUTES.dashboard] },
    sitemap: new URL("/sitemap.xml", SITE.url).toString(),
    host: SITE.url,
  };
}
