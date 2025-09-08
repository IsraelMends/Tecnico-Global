import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/service";
import FeatureGrid from "@/components/feature_grid";
import Stats from "@/components/stats";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import ContactCTA from "@/components/contact_cta";

import React from "react";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <FeatureGrid />
      <About />
      <Stats />
      <Services />
      <Testimonials />
      <FAQ />
      <ContactCTA />
      <Footer />
    </>
  );
}
