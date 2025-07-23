"use client";
import Image from "next/image";
import NavBar from "./NavBar";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

export default function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-end px-4 bg-gray-900 h-30 md:justify-center">
      {/* Logo */}
      <div className="absolute top-0 left-0">
        <Image
          src="/alex-logo.png"
          alt="Logo"
          width={120}
          height={100}
          className="block"
          priority
        />
      </div>

      {/* Hamburger button (mobile) */}
      {!isMenuOpen && (
        <button
          className="z-50 text-orange-500 cursor-pointer md:hidden hover:scale-105"
          aria-label="Abrir menú"
          onClick={() => setIsMenuOpen(true)}
        >
          <GiHamburgerMenu size={30} />
        </button>
      )}

      {/* Nav links (desktop) */}
      <nav className="items-center justify-center hidden space-x-6 md:flex">
        <NavBar href="/" text="Home" />
        <NavBar href="/projects" text="Projects" />
        <NavBar href="/contact" text="Contact" />
      </nav>

      {/* Mobile menu (hamburger open) */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Mobile nav */}
          <nav className="absolute right-0 z-50 flex flex-col w-1/3 h-auto max-w-xs p-6 space-y-6 bg-gray-900 shadow-lg top-5 md:hidden">
            {/* Close Button */}
            <button
              className="self-end mb-8 text-orange-500"
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
