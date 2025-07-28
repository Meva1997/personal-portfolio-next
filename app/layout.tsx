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
  title: "Alejandro Medina | Frontend Developer & Web Designer",
  description:
    "I'm Alejandro Medina, a Frontend Developer based in Mexico. Check out my work with Next.js, React, and modern web technologies. Let's connect!",
  keywords: [
    "Alejandro Medina",
    "Frontend Developer",
    "Web Designer",
    "Portfolio",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Mexico",
    "Jalisco",
    "Freelance",
    "JavaScript",
    "TypeScript",
  ],
  authors: [
    {
      name: "Alejandro Medina",
      url: "https://mevadev.com",
    },
  ],
  creator: "Alejandro Medina",
  openGraph: {
    title: "Alejandro Medina - Personal Portfolio",
    description: "A personal portfolio showcasing my work and skills.",
    url: "https://mevadev.com",
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
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>{children}</main>
        <WhatsAppBubble />
      </body>
    </html>
  );
}
