"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight" style={{ color: "#e55b5b" }}>
          Rent<span className="text-white">Car</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          <li>
            <a href="#" className="text-white hover:text-[#e55b5b] transition-colors duration-200 font-medium">
              Cars
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-[#e55b5b] transition-colors duration-200 font-medium">
              About us
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-[#e55b5b] transition-colors duration-200 font-medium">
              Contract
            </a>
          </li>
        </ul>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          <button
            className="px-5 py-2 rounded-full font-semibold text-white transition-all duration-200 hover:brightness-110 active:scale-95 cursor-pointer"
            style={{ backgroundColor: "#e55b5b" }}
          >
            order
          </button>
          <div className="flex items-center gap-2">
            <button className="opacity-80 hover:opacity-100 transition-opacity">
              <Image src="/russian.svg" alt="RU" width={28} height={28} />
            </button>
            <button className="opacity-80 hover:opacity-100 transition-opacity">
              <Image src="/britain.svg" alt="EN" width={28} height={28} />
            </button>
          </div>
        </div>

        {/* Burger Button (mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] focus:outline-none"
          aria-label="Меню"
        >
          <span
            className="block w-6 h-[2px] bg-white transition-all duration-300 origin-center"
            style={{
              transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
            }}
          />
          <span
            className="block w-6 h-[2px] bg-white transition-all duration-300"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-6 h-[2px] bg-white transition-all duration-300 origin-center"
            style={{
              transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-black"
        style={{ maxHeight: menuOpen ? "400px" : "0px" }}
      >
        <ul className="flex flex-col list-none m-0 px-4 pb-4 pt-2 gap-1">
          <li>
            <a
              href="#"
              className="block py-3 px-2 text-white border-b border-white/10 hover:text-[#e55b5b] transition-colors font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Машины
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-3 px-2 text-white border-b border-white/10 hover:text-[#e55b5b] transition-colors font-medium"
              onClick={() => setMenuOpen(false)}
            >
              О нас
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-3 px-2 text-white border-b border-white/10 hover:text-[#e55b5b] transition-colors font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Договор
            </a>
          </li>
        </ul>

        <div className="flex items-center justify-between px-4 pb-5">
          <button
            className="px-6 py-2 rounded-full font-semibold text-white"
            style={{ backgroundColor: "#e55b5b" }}
            onClick={() => setMenuOpen(false)}
          >
            Заказать
          </button>
          <div className="flex items-center gap-3">
            <button className="opacity-80 hover:opacity-100 transition-opacity">
              <Image src="/russian.svg" alt="RU" width={28} height={28} />
            </button>
            <button className="opacity-80 hover:opacity-100 transition-opacity">
              <Image src="/britain.svg" alt="EN" width={28} height={28} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
