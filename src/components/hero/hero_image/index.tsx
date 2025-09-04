const HeroImage = () => {
  return (
    <div className="md:w-1/2">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-1">
        <div className="bg-gray-800 rounded-lg p-8">
          <div className="aspect-w-16 aspect-h-9 bg-gray-700 rounded-lg ">
            {/* Placeholder for image or content */}
            <img src="./Global-Full.png" alt="Global logo for hero_content" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
