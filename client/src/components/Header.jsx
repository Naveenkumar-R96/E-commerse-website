import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/data/";
import Navbar from "../components/Navbar";
import { useState } from "react";
const Header = () => {
  const [menuOpend, setMenuOpend] = useState(false);

  const toggleMenu = () => {
    setMenuOpend(!menuOpend);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-3 bg-white">
      <div className="max-padd-container flexBetween items-center align-middle">
        <div className="flex flex-1">
          <Link to="/" className="flex items-end">
            <img src={assets.logoImg} alt="Logo" className="h-11" />
            <span className="hidden sm:block bold-24 relative top-1 right-2">
              ogues
            </span>
          </Link>
        </div>
        <div className="flex-1 ">
          <Navbar
            setMenuOpend={setMenuOpend}
            containerStyles={`${
              menuOpend
                ? "flex items-start flex-col gap-y-8 fixed top-16 right-6 p-5 bg-white rounded-xl shadow-md w-53 z-50 lg:flex gap-x-5 xl:gap-x-8 medium-15 bg-secondary/10 rounded-full p-1"
                : "hidden lg:flex gap-x-5 xl:gap-x-8 medium-15 bg-secondary/10 rounded-full p-1"
            }`}
          />
        </div>
        <div className="flex flex-1 items-center sm:justify-end gap-x-4 sm:gap-x-8">
          <div className="relative lg:hidden w-7 h-6">
            <img
              onClick={toggleMenu}
              src={assets.menu}
              alt=""
              className={`absolute inset-0 lg:hidden cursor-pointer transition-opacity duration-700 ${
                menuOpend ? "opacity-0" : "opacity-100"
              }`}
            />
            <img
              onClick={toggleMenu}
              src={assets.menuClose}
              alt=""
              className={`absolute inset-0 lg:hidden cursor-pointer transition-opacity duration-700 ${
                menuOpend ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor=""
              className="text-center  bg-secondary/10 text-sm font-bold rounded-3xl"
            >
              0
            </label>
            <img src={assets.cartAdded} alt="" className="min-w-7 relative" />
          </div>
          <div>
            <div>
              <button className="btn-secondary flex gap-x-1">
                Login <img src={assets.user} alt="" className="invert w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
