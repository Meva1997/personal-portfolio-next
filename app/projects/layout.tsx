import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos | Alejandro Medina",
  description:
    "Conoce mis proyectos destacados en desarrollo web y diseño frontend.",
  keywords: [
    "Alejandro Medina",
    "Proyectos",
    "Portfolio",
    "Web Development",
    "Frontend",
    "React",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Diseño Web",
    "Desarrollador Frontend",
    "Desarrollador Web",
    "Freelance",
    "Jalisco",
    "México",
  ],
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
