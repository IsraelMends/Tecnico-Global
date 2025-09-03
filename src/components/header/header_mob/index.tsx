"use client"

import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const Header_Mob = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState("home");

    const menuItems = [
        { id: "home", label: "Home" },
        { id: "services", label: "Services" },
        { id: "about", label: "About" },
        { id: "contact", label: "Contact" }
    ];

    useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
          className={`fixed top-0 right-0 h-full w-64 bg-[#241645] transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <div className="p-6">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-[#19edd0]"
              aria-label="Close Menu"
            >
              <FaTimes size={24} />
            </button>
            <div className="flex flex-col space-y-4 mt-12">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveItem(item.id);
                    setIsOpen(false);
                  }}
                  className={`px-4 py-2 rounded-md transition-all duration-300 ${
                    activeItem === item.id
                      ? "bg-[#8c15e8] text-white"
                      : "text-white hover:bg-[#19edd0] hover:text-[#241645]"
                  }`}
                  aria-label={item.label}
                >
                  {item.label}
                </button>
              ))}
              <button
                className="bg-[#8c15e8] text-white px-6 py-2 rounded-md flex items-center justify-center space-x-2 hover:bg-[#19edd0] hover:text-[#241645] transition-all duration-300"
                aria-label="Call Us"
              >
                <IoCall className="text-xl" />
                <span>Entre em contato</span>
              </button>
            </div>
          </div>
        </div>
  );
};

export default Header_Mob;
