import  {servicesData}  from "./service_data";
import ServiceCard from "./service_card";

const Services: React.FC = () => {
  return (
    <div className="bg-[#f3f3f3] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-secondary font-bold text-center mb-12">Nossos Parceiros</h2>
        <div className="flex justify-center">
          <p className="text text-black font-bold text-center mb-12" >Nossos polos parceiros oferecem qualidade, inovação e flexibilidade no ensino, garantindo que você tenha acesso a uma educação de excelência onde estiver.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;