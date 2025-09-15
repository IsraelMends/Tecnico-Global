// lib/seo/metadata.ts
import type { Metadata } from "next";
import { siteConfig } from "./config";

export function makeMetadata(opts?: Partial<Metadata>): Metadata {
  const url = new URL(siteConfig.domain);

  const base: Metadata = {
    metadataBase: url,
    title: {
      default: `${siteConfig.name} — ${siteConfig.slogan}`,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.slogan,
    applicationName: siteConfig.name,
    keywords: [
      "faculdade",
      "cursos técnicos",
      "educação profissional",
      "GlobalTec",
      "Técnico Global",
      "tecnologia",
      "inovação",
      "desenvolvimento",
      "carreira",
      "futuro",
      "aprendizado",
      "ensino",
      "qualificação",
      "profissionalização",
      "educação continuada",
      "formação técnica",
      "Colégio Técnico",
      "Instituto Técnico",
      "Centro de Ensino Técnico",
      "Cursos Técnicos Presenciais",
      "Cursos Técnicos Online",
      "Educação Técnica de Qualidade",
      "Técnico em Informática",
      "Técnico em Administração",
      "Técnico em Enfermagem",
      "Técnico em Mecânica",
      "Técnico em Eletrônica",
      "Técnico em Logística",
      "Técnico em Segurança do Trabalho",
      "Técnico em Edificações",
    ],
    authors: [{ name: siteConfig.name, url: siteConfig.domain }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    alternates: {
      canonical: siteConfig.domain,
      languages: Object.fromEntries(
        (siteConfig.locales || [siteConfig.locale]).map((l) => [
          l,
          siteConfig.domain,
        ])
      ),
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: siteConfig.domain,
      siteName: siteConfig.name,
      title: `${siteConfig.name} — ${siteConfig.slogan}`,
      description: siteConfig.slogan,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    verification: {
      // Exemplo: google: "token do Google Search Console"
    },
  };

  return {
    ...base,
    ...opts,
    openGraph: { ...base.openGraph, ...opts?.openGraph },
    twitter: { ...base.twitter, ...opts?.twitter },
  };
}
