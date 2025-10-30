import HeroContent from "./hero_content";
import HeroImage from "./hero_image";

const Hero = () => {
  return (
    <div className="relative bg-white py-20 overflow-hidden">
      {/* Elementos decorativos fundo (claros) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--amber)]/25 rounded-full opacity-70 blur-3xl -z-10" />
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-[var(--blue-detail)]/20 rounded-full opacity-60 blur-2xl -z-10" />
      <div className="absolute top-1/2 right-1/2 w-64 h-64 bg-[var(--purple-soft)]/20 rounded-full opacity-60 blur-2xl -z-10" />
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </div>
  );
};

export default Hero;
