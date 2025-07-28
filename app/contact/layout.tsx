import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Alejandro Medina",
  description:
    "Ponte en contacto conmigo para proyectos de desarrollo web y diseño frontend.",
  keywords: [
    "Alejandro Medina",
    "Contacto",
    "Email",
    "Desarrollador Web",
    "Frontend",
    "Freelance",
    "Jalisco",
    "México",
    "Remoto",
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
