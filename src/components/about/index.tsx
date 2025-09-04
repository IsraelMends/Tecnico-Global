import Story from "./about_story";
import Mission from "./about_mission";

const About = () => {
  return (
    <div className="bg-white py-16">
      <div id="About" className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">
          Sobre Nós
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-10 ">
          <Story />
          <Mission />
        </div>
      </div>
    </div>
  );
};

export default About;
