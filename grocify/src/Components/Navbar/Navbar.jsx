import { useEffect, useState } from "react";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { TbMenu3 } from "react-icons/tb";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-white fixed right-0 left-0 top-0 z-50 ${
        isScrolled ? "drop-shadow-[0_4px_25px_rgba(0,0,0,0.4)]" : ""
      }`}
    >
      <nav className="max-w-[1400px] md:h-[14vh] h-[12vh] px-10 items-center mx-auto flex justify-between">
        <a href="#" className="text-3xl font-bold">
          Gr<span className="text-orange-500 uppercase">o</span>cify
        </a>

        {/* desktop menu */}

        <ul className="md:flex items-center gap-x-15 hidden">
          <li>
            <a
              href="#"
              className="font-semibold tracking-widest text-orange-500 "
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#"
              className="font-semibold tracking-widest text-zinc-800 hover:text-orange-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-widest text-zinc-800 hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-widest text-zinc-800 hover:text-orange-500"
            >
              Contact Us
            </a>
          </li>
        </ul>
        {/* nav action */}
        <div className="flex items-center gap-x-8">
          {/* input field */}

          <div className="md:flex items-center border-2 border-orange-500 rounded-full px-2 py-1 gap-x-2 hidden">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search..."
              autoComplete="off"
              className="focus:outline-none flex-1 h-[5vh] rounded-full"
            />
            <button className="bg-gradient-to-b from-red-600 to-orange-400  p-2 rounded-full text-white hover:bg-orange-600">
              <IoSearch />
            </button>
          </div>
          <a href="#" className="text-zinc-700 text-2xl">
            <FaHeart />
          </a>

          <a href="#" className="text-zinc-700 text-2xl">
            <HiMiniShoppingBag />
          </a>

          {/* hamburger menu */}
          <a
            href="#"
            className="text-zinc-700 text-2xl md:hidden"
            onClick={toggleMenu}
          >
            {showMenu ? <TbMenu3 /> : <IoMenu />}
          </a>
        </div>

        {/* mobile menu */}
        <ul
          className={`flex flex-col gap-y-12 bg-amber-300/15 backdrop-blur-xl shadow-2xl rounded-2xl p-10 items-center gap-x-15 md:hidden absolute top-30 
        -left-full -translate-x-1/2 ${
          showMenu ? "left-1/2" : "-left-full"
        } transition-all duration-500 w-[90%]`}
        >
          <li>
            <a
              href="#"
              className="font-semibold tracking-widest text-orange-500 "
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#"
              className="font-semibold tracking-widest text-zinc-800 hover:text-orange-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-widest text-zinc-800 hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-widest text-zinc-800 hover:text-orange-500"
            >
              Contact Us
            </a>
          </li>

          <li className="flex items-center border-2 border-orange-500 rounded-full px-2 py-1 gap-x-2 md:hidden">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search..."
              autoComplete="off"
              className="focus:outline-none flex-1 h-[5vh] rounded-full"
            />
            <button className="bg-gradient-to-b from-red-600 to-orange-400  p-2 rounded-full text-white hover:bg-orange-600">
              <IoSearch />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
