"use client";
import {
  RiNextjsFill,
  RiReactjsFill,
  RiTailwindCssLine,
  RiJavascriptFill,
  RiHtml5Fill,
  RiCss3Fill,
  RiNodejsFill,
} from "react-icons/ri";
import { SiTypescript, SiExpress, SiPython } from "react-icons/si";

export default function TechStack() {
  return (
    <article className="px-6 my-10">
      <ul className="grid items-center justify-center max-w-3xl grid-cols-2 gap-6 mx-auto lg:grid-cols-3 xl:flex xl:items-center xl:justify-center xl:gap-8">
        <li>
          <RiNextjsFill className="text-6xl text-gray-500 md:text-8xl" />
        </li>
        <li>
          <RiReactjsFill className="text-6xl text-sky-400 md:text-8xl" />
        </li>
        <li>
          <SiTypescript className="text-6xl text-blue-600 md:text-8xl" />
        </li>
        <li>
          <SiPython className="text-yellow-300 text-7xl md:text-8xl" />
        </li>
        <li>
          <RiTailwindCssLine className="text-6xl text-sky-500 md:text-8xl" />
        </li>
        <li>
          <RiHtml5Fill className="text-6xl text-orange-600 md:text-8xl" />
        </li>
        <li>
          <RiCss3Fill className="text-6xl text-blue-600 md:text-8xl" />
        </li>
        <li>
          <RiNodejsFill className="text-6xl text-green-600 md:text-8xl" />
        </li>
        <li>
          <SiExpress className="text-6xl text-gray-300 md:text-8xl" />
        </li>
      </ul>
    </article>
  );
}
