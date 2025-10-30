"use client";

import Header_Nav from "./header_nav";

const Header = () => {
  return (
    <header className="bg-[var(--burnt-orange)] shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <Header_Nav />
      </nav>
    </header>
  );
};

export default Header;
