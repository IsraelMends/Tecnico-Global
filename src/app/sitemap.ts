// app/sitemap.ts
import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/seo/config"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.domain

  const staticRoutes = [
    ""
  ]

  const dynamicRoutes: string[] = [] // TODO: carregar do CMS/BD se existir

  const urls = [...staticRoutes, ...dynamicRoutes].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }))

  return urls
}
