"use client";
import Image from "next/image";
import NavBar from "./NavBar";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";

export default function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-end px-4 border-b border-gray-800 h-28 md:justify-center glass-effect">
      {/* Logo */}
      <div className="absolute top-0 left-0 transition-transform duration-300 hover:scale-105">
        <Link href={"/"}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="h-26 w-26"
            priority
          />
        </Link>
      </div>

      {/* Hamburger button (mobile) */}
      {!isMenuOpen && (
        <button
          className="z-50 transition-all duration-300 cursor-pointer md:hidden text-orange-400 hover:text-orange-300 hover:scale-110"
          aria-label="Abrir menú"
          onClick={() => setIsMenuOpen(true)}
        >
          <GiHamburgerMenu size={30} />
        </button>
      )}

      {/* Nav links (desktop) */}
      <nav className="items-center justify-center hidden space-x-8 md:flex">
        <NavBar href="/" text="Home" />
        <NavBar href="/projects" text="Projects" />
        <NavBar href="/contact" text="Contact" />
      </nav>

      {/* Mobile menu (hamburger open) */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Mobile nav */}
          <nav className="absolute right-4 z-50 flex flex-col w-64 p-6 space-y-6 border border-gray-800 glass-effect rounded-2xl top-5 md:hidden animate-slideInRight">
            {/* Close Button */}
            <button
              className="self-end mb-4 transition-all duration-300 text-orange-400 hover:text-orange-300 hover:rotate-90"
              aria-label="Cerrar menú"
              onClick={() => setIsMenuOpen(false)}
            >
              <IoCloseSharp size={30} />
            </button>
            <NavBar href="/" text="Home" />
            <NavBar href="/projects" text="Projects" />
            <NavBar href="/contact" text="Contact" />
          </nav>
        </>
      )}
    </header>
  );
}
