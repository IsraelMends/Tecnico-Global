// app/robots.ts
import { siteConfig } from "@/lib/seo/config"
import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const base = siteConfig.domain
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api/private"]
    },
    sitemap: `${base}/sitemap.xml`,
    host: base.replace(/^https?:\/\//, "")
  }
}
