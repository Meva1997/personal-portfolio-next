import Image from "next/image";
import NavBar from "./NavBar";

export default function MainHeader() {
  return (
    <header className="relative flex justify-center h-auto p-4 bg-gray-900">
      <Image
        src="/logo.png"
        alt="Logo"
        width={50}
        height={50}
        className="absolute left-15 top-4"
      />
      <section className="flex space-x-6">
        <NavBar href="/" text="Home" />
        <NavBar href="/projects" text="Projects" />
        <NavBar href="/contact" text="Contact" />
      </section>
    </header>
  );
}
