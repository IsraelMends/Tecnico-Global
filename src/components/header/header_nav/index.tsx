import { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import HeaderButtom from "../header_buttom"

const Header_Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <span className="ml-3 text-2xl font-bold text-white">Técnico Global</span>
      </div>

      {/* Desktop Navigation */}

      <HeaderButtom/>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-[#19edd0] focus:outline-none"
        aria-label="Mobile Menu"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
    </div>
  );
};

export default Header_Nav;
