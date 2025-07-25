import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="py-6 mx-auto space-y-4 text-white bg-gray-900 ">
        <div className="flex flex-col items-center space-y-2">
          <h3 className="text-xl font-bold text-center text-orange-500">
            Contact Me
          </h3>
          <p className="text-center text-gray-400">
            Feel free to reach out via{" "}
            <Link
              href="/contact"
              className="font-semibold text-orange-500 hover:underline"
            >
              email
            </Link>{" "}
            or connect with me on:{" "}
          </p>
          <div className="flex justify-center py-2 space-x-4 text-4xl text-orange-500">
            <a
              href="https://www.linkedin.com/in/alejandro-medina-web-developer/"
              rel="noopener noreferrer"
              target="_blank"
              className="transition-transform hover:scale-105"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Meva1997"
              rel="noopener noreferrer"
              target="_blank"
              className="transition-transform hover:scale-105"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <p className="text-center text-white">
          © {new Date().getFullYear()} Alejandro Medina. All rights reserved.
        </p>
      </footer>
    </>
  );
}
