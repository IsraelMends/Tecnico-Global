import HeaderButtom from "../header_buttom";
import Header_Mob from "../header_mob";

const Header_Nav = () => {

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <span className="flex ml-3 text-2xl items- font-bold text-white">
          <div className="flex size-10 mr-2">
            <img src="/globo.png" alt="Image Globo" />
          </div>
          <div className="py-1">Técnico Global</div>
        </span>
      </div>

      {/* Desktop Navigation */}
        <HeaderButtom/>
      {/* Mobile Menu Button */}
      <header className="flex md:hidden fixed top-0 left-0 w-full z-40 bg-[#241645]">
        <Header_Mob />
      </header>
    </div>
  );
};

export default Header_Nav;
