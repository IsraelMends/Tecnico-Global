import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import About from "@/components/about"

import React from "react";

export default function HomePage() {
    return (
        <>
            <Header />
            <Hero />
            <About/>
            <Footer />
        </>
    );
}