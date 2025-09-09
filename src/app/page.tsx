import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/carousel";
import FeatureGrid from "@/components/feature_grid";
import FAQ from "@/components/faq";
import ContactCTA from "@/components/contact_cta";
import {WhatsAppFloatButton} from "@/components/whatsapp_float_button"

import React from "react";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <FeatureGrid />
      <About />
      <Services />
      <FAQ />
      <ContactCTA />
      <Footer />
      <WhatsAppFloatButton/>
    </>
  );
}
