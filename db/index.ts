import { ProjectsDB } from "@/types";

export const db: ProjectsDB[] = [
  {
    id: 1,
    title: "DevTree App for your Social Profiles",
    description:
      "DevTree is my first fullstack project, built with the MERN stack. The frontend is developed using React, TypeScript, and Tailwind CSS, and deployed on Netlify. Data is fetched from a custom REST API using Axios and React Query for efficient management. The backend is built with Node.js, Express, and MongoDB, and deployed on Render. This project showcases my ability to work with modern technologies, create responsive user interfaces, and handle deployment workflows. Ideal for anyone seeking an effective way to manage and showcase social profiles.",
    demoLink: "https://devtree-mevadev.netlify.app/",
    codeLink: "https://github.com/Meva1997/deploy_devtree_frontend",
    image: "/devtree-frontend.png", // Replace with your actual image path if available
  },
  {
    id: 2,
    title: "Music API Project",
    description:
      "A dynamic web application built with Next.js that allows users to explore music, manage comments, and user profiles. Featuring a responsive design, smooth animations with Framer Motion, and reusable components, this project highlights my skills in React, Next.js, and API integration. Dive into a seamless and engaging user experience.",
    demoLink: "https://music-app-next-rust.vercel.app/login",
    codeLink: "https://github.com/Meva1997/music-app-next",
    image: "/main-spotify-music.png",
  },
  {
    id: 3,
    title: "Cocktail Recipe App",
    description:
      "A sleek and modern web app that demonstrates API consumption, state management, AI integration, and a clean, intuitive UI. Built with React, TypeScript, Tailwind CSS, and powered by Zustand and OpenRouter AI, this project showcases my ability to create innovative and user-friendly applications. Deployed seamlessly with Netlify.",
    demoLink: "https://cocktail-drinks-alex.netlify.app/",
    codeLink: "https://github.com/Meva1997/cocktail-drinks",
    image: "/cocktail-zustand.png",
  },
  {
    id: 4,
    title: "Inventory Management System",
    description:
      "A comprehensive personal project designed to efficiently manage products and budgets. This system highlights my expertise in React, TypeScript, Zustand, and Tailwind CSS, while demonstrating my ability to build responsive, feature-rich applications. Perfect for streamlining inventory processes with a modern and user-friendly interface.",
    demoLink: "https://ubiquitous-cajeta-d51d8f.netlify.app/",
    codeLink: "https://github.com/Meva1997/yara_inventario_pedidos",
    image: "/yara-inventario.png",
  },
];
