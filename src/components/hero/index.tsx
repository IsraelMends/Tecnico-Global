import HeroContent from "./hero_content";
import HeroImage from "./hero_image";

const Hero = () => {
  return (
    <div className="relative bg-gray-900 py-20">
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
