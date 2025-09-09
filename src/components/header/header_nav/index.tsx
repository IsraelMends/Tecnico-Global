import { useState } from "react";


import HeaderButtom from "../header_buttom"
import Header_Mob from "../header_mob";

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
      <Header_Mob/>
    </div>
  );
};

export default Header_Nav;
