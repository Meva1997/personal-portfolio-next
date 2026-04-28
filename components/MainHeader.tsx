"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

function NavLink({ href, text }: { href: string; text: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className="relative text-sm uppercase tracking-widest transition-colors duration-200"
      style={{
        color: isActive ? "var(--accent)" : "var(--text-muted)",
        letterSpacing: "0.08em",
      }}
    >
      {text}
      {isActive && (
        <span
          className="absolute -bottom-1 left-0 w-full h-px"
          style={{ background: "var(--accent)" }}
        />
      )}
    </Link>
  );
}

export default function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: "rgba(5, 9, 15, 0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "0.5px solid var(--border)",
      }}
    >
      <div
        className="flex items-center justify-between px-4 sm:px-6 md:px-8"
        style={{
          height: "64px",
          maxWidth: "1280px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-lg shrink-0"
          style={{ color: "var(--text-primary)", letterSpacing: "-0.3px" }}
        >
          Alex<span style={{ color: "var(--accent)" }}>.</span>dev
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="/" text="Home" />
          <NavLink href="/projects" text="Projects" />
        </nav>

        {/* CTA */}
        <a
          href="/Alejandro_Medina_MD_Software_Engineer.pdf"
          download
          className="hidden md:inline-flex items-center gap-2 btn-outline shrink-0"
          style={{ padding: "0.4rem 1rem", fontSize: "12px" }}
        >
          Download CV
        </a>

        {/* Mobile hamburger */}
        {!isMenuOpen && (
          <button
            className="md:hidden transition-colors duration-200 p-1"
            style={{ color: "var(--accent)" }}
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <GiHamburgerMenu size={22} />
          </button>
        )}
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 md:hidden"
            style={{
              background: "rgba(3,6,8,0.7)",
              backdropFilter: "blur(4px)",
            }}
            onClick={() => setIsMenuOpen(false)}
          />
          <nav
            className="fixed right-4 z-50 flex flex-col p-6 gap-6 md:hidden animate-slideInRight"
            style={{
              top: "72px",
              background: "var(--bg-surface)",
              border: "0.5px solid var(--border-md)",
              borderRadius: "var(--radius-lg)",
              minWidth: "220px",
              maxWidth: "calc(100vw - 2rem)",
            }}
          >
            <button
              className="self-end transition-colors duration-200 p-1"
              style={{ color: "var(--accent)" }}
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
            >
              <IoCloseSharp size={22} />
            </button>
            <NavLink href="/" text="Home" />
            <NavLink href="/projects" text="Projects" />
            <a
              href="/Alejandro_Medina_MD_Software_Engineer.pdf"
              download
              className="btn-outline text-xs"
              style={{ padding: "0.5rem 1rem", textAlign: "center" }}
            >
              Download CV
            </a>
          </nav>
        </>
      )}
    </header>
  );
}
