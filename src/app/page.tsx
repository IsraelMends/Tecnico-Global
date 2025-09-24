import { makeMetadata } from "@/lib/seo/metadata";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Carousel from "@/components/carousel";
import FeatureGrid from "@/components/feature_grid";
import FAQ from "@/components/faq";
import ContactCTA from "@/components/contact_cta";
import { WhatsAppFloatButton } from "@/components/whatsapp_float_button";

import React from "react";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <FeatureGrid />
      <Carousel />
      <FAQ />
      <ContactCTA />
      <Footer />
      <WhatsAppFloatButton />
    </>
  );
}

export const metadata = makeMetadata({
  title: "GlobalTec - Cursos Técnicos e Profissionalizantes",
  description:
    "Formação prática e focada no mercado de trabalho. Cursos técnicos reconhecidos e infraestrutura moderna.",
  openGraph: {
    images: ["/Global-Full.png"],
  },
});
