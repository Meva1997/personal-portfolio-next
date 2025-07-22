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
      <ul className="text-xl font-bold">
        <li
          className={`${
            isActive ? "text-orange-500 underline" : "text-gray-300"
          } hover:underline`}
        >
          <Link href={href}>{text}</Link>
        </li>
      </ul>
    </nav>
  );
}
