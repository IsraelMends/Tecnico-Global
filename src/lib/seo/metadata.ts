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
      "formação técnica",
      "qualidade",
      "tecnologia",
      "inovação",
      "desenvolvimento",
      "carreira",
      "aprendizado",
      "ensino",
      "capacitação",
      "profissionalização",
      "tecnicoglobal",
      "globaltec",
      "Tecnico Global",
      "GlobalTec",
      "Cursos Técnicos",
      "Formação Profissional",
      "Educação de Qualidade",
      "Desenvolvimento de Carreira",
      "Aprendizado Contínuo",
      "Capacitação Técnica",
      "Inovação Educacional",
      "Tecnologia e Educação",
      "Ensino Profissionalizante",
      "Cursos Online",
      "Treinamento Profissional",
      "Habilidades Técnicas",
      "Oportunidades de Carreira",
      "Educação Técnica Avançada",
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
    twitter: {
      card: "summary_large_image",
      title: `${siteConfig.name} — ${siteConfig.slogan}`,
      description: siteConfig.slogan,
      images: [siteConfig.ogImage],
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
      // Ex.: google: "token do Google Search Console", bing: "token"
    },
  };

  return {
    ...base,
    ...opts,
    openGraph: { ...base.openGraph, ...opts?.openGraph },
    twitter: { ...base.twitter, ...opts?.twitter },
  };
}
