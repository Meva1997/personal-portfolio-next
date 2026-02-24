"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavBarProps = {
  href: string;
  text: string;
};

export default function NavBar({ href, text }: NavBarProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <nav>
      <ul className="text-lg font-semibold">
        <li className="relative group">
          <Link
            href={href}
            className={`${
              isActive ? "gradient-text" : "text-gray-300"
            } transition-all duration-300 hover:text-orange-400`}
          >
            {text}
          </Link>
          {/* Underline effect */}
          <span
            className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-orange-600 to-yellow-500 transition-all duration-300 ${
              isActive ? "w-full" : "w-0 group-hover:w-full"
            }`}
          ></span>
        </li>
      </ul>
    </nav>
  );
}
