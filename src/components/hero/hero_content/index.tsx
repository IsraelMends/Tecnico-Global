import HeroButtons from "../hero_buttons";

const HeroContent = () => {
  return (
    <div className="md:w-1/2 mb-10 md:mb-0">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
        Bem Vindo a <br/> <span className="text-blue-500">Técnico Global</span>
      </h1>
      <p className="text-gray-400 text-lg mb-8">
        
      </p>
      <HeroButtons />
    </div>
  );
};

export default HeroContent;
