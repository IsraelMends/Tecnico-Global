import { Service } from "../service_data";

interface ServiceCardProps extends Service {}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, description }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6 hover:shadow-sm shadow-secondary transition-shadow">
      <div className="w-12 h-12 bg-secondary rounded-lg mb-4 flex items-center justify-center text-white text-2xl">
        {id}
      </div>
      <h3 className="text-xl text-black font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
