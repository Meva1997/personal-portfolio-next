import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppBubble from "@/components/WhatsAppBubble";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Personal Portfolio",
  keywords: [
    "Portfolio",
    "Web Development",
    "Next.js",
    "React",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Frontend Developer",
    "Freelance",
    "Alejandro Medina",
    "Web Design",
    "Jalisco",
    "Mexico",
  ],
  authors: [
    {
      name: "Alejandro Medina",
      url: "https://frontend-developer-portfolio-five.vercel.app/",
    },
  ],
  creator: "Alejandro Medina",
  description: "A personal portfolio showcasing my work and skills.",
  openGraph: {
    title: "Alejandro Medina - Personal Portfolio",
    description: "A personal portfolio showcasing my work and skills.",
    url: "https://frontend-developer-portfolio-five.vercel.app/",
    siteName: "Alejandro Medina Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>{children}</main>
        <WhatsAppBubble />
      </body>
    </html>
  );
}
