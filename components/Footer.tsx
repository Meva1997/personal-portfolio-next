import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "80px",
        background: "var(--bg-dark)",
        borderTop: "0.5px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: "1152px",
          margin: "0 auto",
          padding: "40px 32px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
        }}
      >
        {/* Left */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "16px",
              color: "var(--text-primary)",
              marginBottom: "4px",
            }}
          >
            Alejandro Medina
          </p>
          <p style={{ fontSize: "12px", color: "var(--text-muted)" }}>
            Full Stack Developer · U.S. Citizen · Open to health tech roles
          </p>
        </div>

        {/* Center */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <Link
            href="/projects"
            className="footer-link"
            style={{
              fontSize: "13px",
              color: "var(--text-muted)",
              textDecoration: "none",
            }}
          >
            Projects
          </Link>

          <a
            href="mailto:mevadev97@gmail.com"
            style={{
              fontSize: "13px",
              color: "var(--accent)",
              textDecoration: "none",
            }}
          >
            mevadev97@gmail.com
          </a>
        </div>

        {/* Right — socials */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <a
            href="https://www.linkedin.com/in/alex-fullstack-developer/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="footer-social"
            style={{ color: "var(--text-muted)" }}
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/Meva1997"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="footer-social"
            style={{ color: "var(--text-muted)" }}
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          paddingBottom: "16px",
          fontSize: "11px",
          color: "var(--text-muted)",
        }}
      >
        © {new Date().getFullYear()} Alejandro Medina. All rights reserved.
      </div>
    </footer>
  );
}
