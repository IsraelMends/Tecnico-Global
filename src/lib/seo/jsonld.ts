// lib/seo/jsonld.ts
import { siteConfig } from "./config"

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.domain,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteConfig.domain}/buscar?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.domain,
  logo: siteConfig.logoUrl,
}

export function makeBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url
    }))
  }
}

export function makeCourseJsonLd(course: { name: string; desc: string; url: string; providerName: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.desc,
    provider: {
      "@type": "Organization",
      name: course.providerName,
      sameAs: siteConfig.domain
    },
    url: course.url
  }
}
