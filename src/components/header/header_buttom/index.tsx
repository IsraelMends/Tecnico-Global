import { IoCall } from "react-icons/io5";

import { useState } from "react";

const HeaderButtom = () => {
  const menuItems = [
    { id: "home", label: "Início" },
    { id: "About", label: "Sobre Nós" },
    { id: "Contact", label: "Contato" },
  ];

  const [activeItem, setActiveItem] = useState("home");

  return (
    <div className="hidden md:flex items-center space-x-8">
      {menuItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`px-4 py-2 rounded-md transition-all duration-300 ${
            activeItem === item.id
              ? "bg-secondary text-white"
              : "text-white hover:bg-primary hover:text-[#241645]"
          }`}
          aria-label={item.label}
        >
          {item.label}
        </a>
      ))}
      <button
        className="bg-[#8c15e8] text-white px-6 py-2 rounded-md flex items-center space-x-2 hover:bg-[#19edd0] hover:text-[#241645] transition-all duration-300"
        aria-label="Entre em contato"
        onClick={() => console.log("modal")}
      >
        <IoCall className="text-xl" />
        <span>Entre em contato</span>
      </button>
    </div>
  );
};

export default HeaderButtom;
