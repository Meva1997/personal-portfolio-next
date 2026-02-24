import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-10 mx-auto mt-20 text-white border-t border-gray-800 glass-effect">
      <div className="flex flex-col items-center max-w-4xl px-4 mx-auto space-y-6">
        {/* Contact Section */}
        <div className="text-center">
          <h3 className="mb-3 text-2xl font-bold gradient-text">
            Let&apos;s Connect
          </h3>
          <p className="text-gray-400">
            Feel free to reach out via{" "}
            <Link
              href="/contact"
              className="font-semibold transition-colors duration-300 text-orange-400 hover:text-orange-300"
            >
              email
            </Link>{" "}
            or connect with me on social media
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/alex-fullstack-developer/"
            rel="noopener noreferrer"
            target="_blank"
            className="transition-all duration-300 transform text-orange-400 hover:text-orange-300 hover:scale-125"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-5xl" />
          </a>
          <a
            href="https://github.com/Meva1997"
            rel="noopener noreferrer"
            target="_blank"
            className="transition-all duration-300 transform text-orange-400 hover:text-orange-300 hover:scale-125"
            aria-label="GitHub"
          >
            <FaGithub className="text-5xl" />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Alejandro Medina. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
