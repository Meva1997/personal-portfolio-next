import { ProjectsDB } from "@/types";

export const db: ProjectsDB[] = [
  {
    id: 1,
    title: "Music API Project",
    description:
      "A dynamic web application built with Next.js that allows users to explore music, manage comments, and user profiles. Featuring a responsive design, smooth animations with Framer Motion, and reusable components, this project highlights my skills in React, Next.js, and API integration. Dive into a seamless and engaging user experience.",
    demoLink: "https://music-app-next-rust.vercel.app/login",
    codeLink: "https://github.com/Meva1997/music-app-next",
    image: "/main-spotify-music.png",
  },
  {
    id: 2,
    title: "Cocktail Recipe App",
    description:
      "A sleek and modern web app that demonstrates API consumption, state management, AI integration, and a clean, intuitive UI. Built with React, TypeScript, Tailwind CSS, and powered by Zustand and OpenRouter AI, this project showcases my ability to create innovative and user-friendly applications. Deployed seamlessly with Netlify.",
    demoLink: "https://cocktail-drinks-alex.netlify.app/",
    codeLink: "https://github.com/Meva1997/cocktail-drinks",
    image: "/cocktail-zustand.png",
  },
  {
    id: 3,
    title: "Inventory Management System",
    description:
      "A comprehensive personal project designed to efficiently manage products and budgets. This system highlights my expertise in React, TypeScript, Zustand, and Tailwind CSS, while demonstrating my ability to build responsive, feature-rich applications. Perfect for streamlining inventory processes with a modern and user-friendly interface.",
    demoLink: "https://ubiquitous-cajeta-d51d8f.netlify.app/",
    codeLink: "https://github.com/Meva1997/yara_inventario_pedidos",
    image: "/yara-inventario.png",
  },
];
