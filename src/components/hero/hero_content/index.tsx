import HeroButtons from "./";

const HeroContent = () => {
  return (
    <div className="md:w-1/2 mb-10 md:mb-0">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
        Welcome to <span className="text-blue-500">Our Platform</span>
      </h1>
      <p className="text-gray-400 text-lg mb-8">
        Discover amazing features and services that will help you achieve your goals.
      </p>
      <HeroButtons />
    </div>
  );
};

export default HeroContent;
