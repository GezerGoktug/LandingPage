import { useState } from "react";
import Links from "./Links";
import Logo from "./Logo";
import Search from "./Search";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => 
    setMenuOpen(!menuOpen);

  return (
    <>
      <nav className="relative flex justify-between items-center  py-[47px] xl:py-[57px] ">
        <Logo />
        <Links />
        <div className="flex gap-2 xs:gap-6">
          <Search />
          <button
            onClick={toggleMenu}
            className="block lg:hidden focus:outline-none"
          >
            <img
              src={menuOpen ? "/icon/xmark.svg" : "/icon/menu.svg"}
              alt="Menu"
            />
          </button>
        </div>
      </nav>
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        }    w-full mb-16    z-20  lg:hidden`}
      >
        <ul className="font-bold text-white text-xl  shadow-2xl shadow-[#d6b98dd6]  rounded-ss-3xl rounded-ee-3xl   flex flex-col items-center bg-[#ebc6add5]   ">
          <li className="border-b-4 border-[#F7EFED] w-full   text-center py-4">
            <a href="#">Home</a>
          </li>
          <li className="border-b-4 border-[#F7EFED] w-full   text-center py-4">
            <a href="#">About</a>
          </li>
          <li className="border-b-4 border-[#F7EFED] w-full   text-center py-4">
            <a href="#">Chips</a>
          </li>
          <li className=" w-full   text-center py-4">
            <a href="#">Services</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
