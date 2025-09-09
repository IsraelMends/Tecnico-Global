import { CarouselPlugin } from "./service_carousel";

const Services: React.FC = () => {
  return (
    <section id="Parceiros">
      <div className="bg-[#f3f3f3] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-secondary font-bold text-center mb-12">
            Nossos Parceiros
          </h2>
          <div className="flex justify-center">
            <p className="text text-black font-bold text-center mb-12">
              Nossos polos parceiros oferecem qualidade, inovação e
              flexibilidade no ensino, garantindo que você tenha acesso a uma
              educação de excelência onde estiver.
            </p>
          </div>

          {/* Certifique-se de passar dados reais para o ServiceCarousel */}
          
          <CarouselPlugin/>

        </div>
      </div>
    </section>
  );
};

export default Services;
