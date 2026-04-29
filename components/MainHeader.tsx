"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

function NavLink({
  href,
  text,
  onClick,
}: {
  href: string;
  text: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      onClick={onClick}
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
  const close = () => setIsMenuOpen(false);

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
        className="flex items-center justify-between"
        style={{
          height: "64px",
          maxWidth: "1280px",
          margin: "0 auto",
          width: "100%",
          paddingLeft: "clamp(1.5rem, 5vw, 5rem)",
          paddingRight: "clamp(1.5rem, 5vw, 5rem)",
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

        {/* Desktop CTA */}
        <a
          href="/Alejandro_Medina_MD_Software_Engineer.pdf"
          download
          className="hidden md:inline-flex items-center gap-2 btn-outline shrink-0"
          style={{ padding: "0.5rem 1.25rem", fontSize: "13px" }}
        >
          Download CV
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden transition-colors duration-200 p-2 -mr-1"
          style={{ color: "var(--accent)" }}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          {isMenuOpen ? (
            <IoCloseSharp size={22} />
          ) : (
            <GiHamburgerMenu size={22} />
          )}
        </button>
      </div>

      {/* Mobile menu — full-width panel below the header bar */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 md:hidden"
            style={{ top: "64px", background: "rgba(3,6,8,0.55)" }}
            onClick={close}
          />

          {/* Dropdown panel */}
          <nav
            className="absolute left-0 right-0 z-50 md:hidden animate-slideDown"
            style={{
              top: "64px",
              background: "rgba(12, 21, 32, 0.98)",
              backdropFilter: "blur(16px)",
              borderBottom: "0.5px solid var(--border-md)",
            }}
          >
            <div
              style={{
                maxWidth: "1280px",
                margin: "0 auto",
                paddingLeft: "clamp(1.5rem, 5vw, 5rem)",
                paddingRight: "clamp(1.5rem, 5vw, 5rem)",
                paddingTop: "1.75rem",
                paddingBottom: "1.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <NavLink href="/" text="Home" onClick={close} />
              <NavLink href="/projects" text="Projects" onClick={close} />

              <div
                style={{
                  borderTop: "0.5px solid var(--border-md)",
                  paddingTop: "1.25rem",
                }}
              >
                <a
                  href="/Alejandro_Medina_MD_Software_Engineer.pdf"
                  download
                  className="btn-outline"
                  style={{
                    display: "inline-block",
                    padding: ".6rem 1.5rem",
                    fontSize: "13px",
                  }}
                  onClick={close}
                >
                  Download CV
                </a>
              </div>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
