"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import LogoCard from "../carousel-logo-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Exemplo: edite aqui suas logos
const LOGOS = [
  { name: "NACIONAL", src: "/logos/NACIONAL 2.png" },
  { name: "TECMINAS", src: "/logos/TECMINAS 2.png" },
  { name: "EDUTEC", src: "/logos/EDUTEC.png" },
  { name: "UNIMINAS", src: "/logos/UNIMINAS 2.png" },
  { name: "UNITEC", src: "/logos/UNITEC.png" },
] as const;

// Hook para breakpoints (1/3/4/5)
function usePerView() {
  const [perView, setPerView] = React.useState(1);

  React.useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w >= 1024) return 5;
      if (w >= 768) return 4;
      if (w >= 640) return 3;
      return 1;
    };
    const onResize = () => setPerView(compute());
    setPerView(compute());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return perView;
}

export default function PartnerLogosCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: true })
  );
  const perView = usePerView();

  const visible = Math.min(perView, LOGOS.length);
  const slideWidth = `${100 / visible}%`;
  const canScroll = LOGOS.length > perView;

  return (
    <Carousel
      className="w-full max-w-47l mx-auto"
      plugins={canScroll ? [plugin.current] : []}
      onMouseEnter={canScroll ? plugin.current.stop : undefined}
      onMouseLeave={canScroll ? plugin.current.reset : undefined}
      opts={{
        align: "start",
        containScroll: "trimSnaps",
        loop: canScroll,
        dragFree: false,
        slidesToScroll: 1,
        startIndex: 0,
      }}
    >
      <CarouselContent className="pl-4">
        {LOGOS.map((logo, idx) => (
          <CarouselItem
            key={idx}
            style={{ flex: `0 0 ${slideWidth}` }}
            className="px-1 md:px-1.5 lg:px-2"
          >
            <LogoCard name={logo.name} src={logo.src} />
          </CarouselItem>
        ))}
      </CarouselContent>

      {canScroll && <CarouselPrevious className="-left-3 md:-left-4" />}
      {canScroll && <CarouselNext className="-right-3 md:-right-4" />}
    </Carousel>
  );
}
