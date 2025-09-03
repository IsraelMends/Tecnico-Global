import { useState } from "react";
import { IoCall } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";

const Header_Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <span className="ml-3 text-2xl font-bold text-white">Técnico Global</span>
      </div>

      {/* Desktop Navigation */}

      <div className="hidden md:flex items-center space-x-8">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            className={`px-4 py-2 rounded-md transition-all duration-300 ${
              activeItem === item.id
                ? "bg-secondary text-white"
                : "text-white hover:bg-primary hover:text-[#241645]"
            }`}
            aria-label={item.label}
          >
            {item.label}
          </button>
        ))}
        <button
          className="bg-[#8c15e8] text-white px-6 py-2 rounded-md flex items-center space-x-2 hover:bg-[#19edd0] hover:text-[#241645] transition-all duration-300"
          aria-label="Call Us"
        >
          <IoCall className="text-xl" />
          <span>Entre em contato</span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-[#19edd0] focus:outline-none"
        aria-label="Toggle Menu"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
    </div>
  );
};

export default Header_Nav;
