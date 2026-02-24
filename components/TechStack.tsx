"use client";
import {
  RiNextjsFill,
  RiReactjsFill,
  RiTailwindCssLine,
  RiHtml5Fill,
  RiCss3Fill,
  RiNodejsFill,
} from "react-icons/ri";
import { SiTypescript, SiExpress, SiPython, SiFastapi } from "react-icons/si";

const techStack = [
  { Icon: RiNextjsFill, color: "text-gray-500", name: "Next.js" },
  { Icon: RiReactjsFill, color: "text-sky-400", name: "React" },
  { Icon: SiTypescript, color: "text-blue-600", name: "TypeScript" },
  { Icon: SiPython, color: "text-yellow-300", name: "Python" },
  { Icon: RiTailwindCssLine, color: "text-sky-500", name: "Tailwind" },
  { Icon: RiHtml5Fill, color: "text-orange-600", name: "HTML5" },
  { Icon: RiCss3Fill, color: "text-blue-600", name: "CSS3" },
  { Icon: RiNodejsFill, color: "text-green-600", name: "Node.js" },
  { Icon: SiExpress, color: "text-gray-300", name: "Express" },
  { Icon: SiFastapi, color: "text-emerald-300", name: "FastAPI" },
];

export default function TechStack() {
  return (
    <article className="px-6 my-10">
      <ul className="grid items-center justify-center max-w-5xl grid-cols-2 gap-8 mx-auto lg:grid-cols-5">
        {techStack.map((tech, index) => (
          <li
            key={tech.name}
            className="flex flex-col items-center justify-center p-6 transition-all duration-300 border border-gray-800 group glass-effect rounded-xl hover:scale-110 hover:border-orange-500"
            style={{
              animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`,
              opacity: 0,
            }}
          >
            <tech.Icon
              className={`text-7xl md:text-8xl ${tech.color} transition-transform duration-300 group-hover:scale-125`}
            />
            <span className="mt-3 text-sm font-semibold text-gray-400 transition-colors duration-300 group-hover:text-orange-400">
              {tech.name}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
