"use client";
import {
  RiNextjsFill,
  RiReactjsFill,
  RiTailwindCssLine,
  RiHtml5Fill,
  RiCss3Fill,
  RiNodejsFill,
} from "react-icons/ri";
import {
  SiTypescript,
  SiExpress,
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

const techStack = [
  { Icon: RiNextjsFill, color: "#E8EDF2", name: "Next.js" },
  { Icon: RiReactjsFill, color: "#61DAFB", name: "React" },
  { Icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
  { Icon: SiPython, color: "#F7D04E", name: "Python" },
  { Icon: SiFastapi, color: "#2FCCAA", name: "FastAPI" },
  { Icon: SiPostgresql, color: "#4169E1", name: "PostgreSQL" },
  { Icon: SiMongodb, color: "#47A248", name: "MongoDB" },
  { Icon: RiTailwindCssLine, color: "#38BDF8", name: "Tailwind" },
  { Icon: RiNodejsFill, color: "#68A063", name: "Node.js" },
  { Icon: SiExpress, color: "#8A97A6", name: "Express" },
  { Icon: RiHtml5Fill, color: "#E34F26", name: "HTML5" },
  { Icon: RiCss3Fill, color: "#1572B6", name: "CSS3" },
];

export default function TechStack() {
  return (
    <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
      {techStack.map((tech, index) => (
        <li
          key={tech.name}
          className="flex flex-col items-center justify-center cursor-default"
          style={{
            padding: "22px 16px",
            background: "var(--bg-surface)",
            border: "0.5px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            animation: `fadeInUp 0.5s ease-out ${index * 0.05}s forwards`,
            opacity: 0,
            transition: "border-color 0.2s, background 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor =
              "var(--accent-border)";
            (e.currentTarget as HTMLElement).style.background =
              "var(--bg-surface-2)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor =
              "var(--border)";
            (e.currentTarget as HTMLElement).style.background =
              "var(--bg-surface)";
          }}
        >
          <tech.Icon
            style={{
              fontSize: "42px",
              color: tech.color,
              marginBottom: "12px",
              transition: "transform 0.2s",
            }}
          />
          <span
            style={{
              fontSize: "12px",
              fontWeight: 500,
              color: "var(--text-muted)",
              letterSpacing: "0.3px",
              textAlign: "center",
            }}
          >
            {tech.name}
          </span>
        </li>
      ))}
    </ul>
  );
}
