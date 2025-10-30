const HeroImage = () => {
  return (
    <div className="md:w-1/2 relative flex items-center justify-center animate-slide-up">
      {/* halo colorido */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full bg-gradient-to-br from-[var(--blue-detail)] via-[var(--purple-soft)] to-[var(--amber)] blur-3xl opacity-30 z-0" />
      <div className="relative rounded-lg p-1 z-10">
        <div className="rounded-lg p-8">
          <div className="aspect-w-16 aspect-h-9 rounded-lg ">
            {/* Placeholder for image or content */}
            <img src="./Global-Full.png" alt="Global logo for hero_content" className="drop-shadow-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
