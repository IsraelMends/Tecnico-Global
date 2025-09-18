// lib/seo/config.ts
export const siteConfig = {
  name: "Tecnico Global",
  slogan: "Cursos técnicos e formação profissional de qualidade",
  domain: "https://www.colegiotecnicoglobal.com.br/",
  locale: "pt-BR",
  locales: ["pt-BR"],
  logoUrl: "/logo.png",
  ogImage: "/og-default.png",
  address: {
    name: "Tecnico Global",
    street: "Rua Exemplo, 123",
    city: "Sua Cidade",
    state: "UF",
    zip: "00000-000",
    country: "BR",
    phone: "+55 00 0000-0000",
    email: "contato@tecnicoglobal.com.br"
  }
} as const
