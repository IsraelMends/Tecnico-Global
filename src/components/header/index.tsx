"use client";

import Header_Nav from "./header_nav";
import Header_Mob from "./header_mob";

const Header = () => {
  return (
    <header className="bg-[#241645] shadow-lg">
      <nav className="container mx-auto px-4 py-4">

        <Header_Nav />
      </nav>
    </header>
  );
};

export default Header;
