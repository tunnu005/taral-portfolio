"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // Menu icons
import {  Animation1 } from "@/animations/Anime1";

type ScrollFunction = (id: string) => void;

const Navbar:React.FC<{scroll:ScrollFunction}> =({scroll})=> {
  const [menuOpen, setMenuOpen] = useState(false);

  Animation1()
  return (
    <>
      {/* 🌟 Main Navbar with Glassmorphism & Inner Shadow */}
      <nav
        className={`top-0 left-0 w-full px-6 py-3 flex justify-between items-center  transition-all duration-300 fahkwang 
        bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-b-lg 
        before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[10px] before:bg-white/20 before:blur-lg  navbar z-50`}
      >
        {/* 🌟 Logo */}
        <div className="text-3xl font-extrabold tracking-wide transform transition-transform duration-300 hover:scale-105 nav-items">
          <Link href="/" className="text-gray-300">
            Taral&apos;s <span className={`text-white modern`}>Dev</span>
          </Link>
        </div>

        {/* 🌟 Desktop Menu */}
        <div className="hidden md:flex gap-8 text-white">
          {["Skills", "Projects", "Contact"].map((item) => (
            <div
              key={item}
              onClick={()=>{scroll(item)}}
              className={`relative cursor-pointer hover:scale-110 hover:font-semibold transition-transform duration-200 
              after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 
              hover:after:w-full hover:after:left-0 nav-items`}
            >
              {item}
            </div>
          ))}
        </div>

        {/* 🌟 Mobile Menu Button */}
        <button
          className={`md:hidden text-white transform transition-transform duration-300 hover:scale-110 cursor-pointer`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>

        {/* 🌟 Mobile Menu Dropdown */}
        <div
          className={`absolute top-[72px] left-0 w-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg py-4 flex flex-col gap-4 items-center transition-all duration-500 rounded-lg ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 "
          }`}
        >
          {["Skills", "Projects", "Contact"].map((item) => (
            <div
              key={item}
              className="text-white cursor-pointer"
              onClick={()=>{scroll(item)}}
            >
              {item}

            </div>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
