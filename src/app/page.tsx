import { makeMetadata } from "@/lib/seo/metadata";

import Carousel from "@/components/carousel";
import ContactCTA from "@/components/contact_cta";
import { CourseCard } from "@/components/course-card";
import Header from "@/components/header";
import Hero from "@/components/hero";
import FAQ from "@/components/faq";
import FeatureGrid from "@/components/feature_grid";
import Footer from "@/components/footer";
import { WhatsAppFloatButton } from "@/components/whatsapp_float_button";

import React from "react";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <FeatureGrid />
      <Carousel />
      <CourseCard />
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
