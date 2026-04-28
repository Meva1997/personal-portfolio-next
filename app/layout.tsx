import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alejandro Medina | Full Stack Developer & Health Tech",
  description:
    "Licensed physician turned full stack developer. I build health tech products with deep clinical domain expertise and production-grade engineering. Next.js, FastAPI, PostgreSQL.",
  keywords: [
    "Alejandro Medina",
    "Full Stack Developer",
    "Health Tech",
    "Medical Software",
    "Clinical Dashboard",
    "Next.js",
    "FastAPI",
    "React",
    "TypeScript",
    "Python",
    "PostgreSQL",
    "MediDash",
    "Physician Developer",
  ],
  authors: [{ name: "Alejandro Medina", url: "https://mevadev.com" }],
  creator: "Alejandro Medina",
  openGraph: {
    title: "Alejandro Medina — Full Stack Developer & Health Tech",
    description:
      "Licensed physician turned full stack developer. Building at the intersection of medicine and technology.",
    url: "https://mevadev.com",
    siteName: "Alejandro Medina Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
      </head>
      <body className="antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
