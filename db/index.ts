import { ProjectsDB } from "@/types";

export const db: ProjectsDB[] = [
  {
    id: 0,
    title: "PawScout - Pet Adoption Platform",
    description:
      "PawScout is a fullstack pet adoption platform. The frontend is developed using Next.js, TypeScript, and Tailwind CSS, and deployed on Vercel. Data is fetched from a custom REST API using TanStack Query for efficient management. The backend is built with Python, FastApi, and PostgreSQL, and deployed on Render. Still a work in progress.",
    demoLink: "https://paw-scout.vercel.app/",
    codeLink: "https://github.com/Meva1997/PawScout",
    image: "/PawScout-image.png",
  },
  {
    id: 1,
    title: "Cookmate - Recipe Sharing Platform",
    description:
      "Cookmate is a fullstack recipe sharing platform built with the MERN stack. The frontend is developed using React, TypeScript, and Tailwind CSS, and deployed on Netlify. Data is fetched from a custom REST API using Axios and React Query for efficient management. The backend is built with Node.js, Express, and MongoDB, and deployed on Render. This project showcases my ability to work with modern technologies, create responsive user interfaces, and handle deployment workflows.",
    demoLink: "https://cookmate-mevadev.netlify.app/",
    codeLink: "https://github.com/Meva1997/cookMate_frontend",
    image: "/homeView.png",
  },
  {
    id: 2,
    title: "Pokemon TCG E-commerce Application",
    description:
      "This is a fullstack application for the Pokemon Trading Card Game, built with the SERN stack. The frontend is developed using Next.js, TypeScript, and Tailwind CSS, and deployed on Vercel. Data is fetched from a custom REST API. The backend is built with Node.js, Express, and Sequelize, and deployed on Render. This project showcases my ability to work with modern technologies, create responsive user interfaces, and handle deployment workflows.",
    demoLink: "https://frontend-pokemon-tcg-ecommerce.vercel.app/",
    codeLink: "https://github.com/Meva1997/frontend-pokemonTCG-ecommerce",
    image: "/products.png",
  },
  {
    id: 3,
    title: "DevTree App for your Social Profiles",
    description:
      "DevTree is my first fullstack project, built with the MERN stack. The frontend is developed using React, TypeScript, and Tailwind CSS, and deployed on Netlify. Data is fetched from a custom REST API using Axios and React Query for efficient management. The backend is built with Node.js, Express, and MongoDB, and deployed on Render. This project showcases my ability to work with modern technologies, create responsive user interfaces, and handle deployment workflows. Ideal for anyone seeking an effective way to manage and showcase social profiles.",
    demoLink: "https://devtree-mevadev.netlify.app/",
    codeLink: "https://github.com/Meva1997/deploy_devtree_frontend",
    image: "/devtree-frontend.png", // Replace with your actual image path if available
  },
  {
    id: 4,
    title: "Music API Project",
    description:
      "A dynamic web application built with Next.js that allows users to explore music, manage comments, and user profiles. Featuring a responsive design, smooth animations with Framer Motion, and reusable components, this project highlights my skills in React, Next.js, and API integration. Dive into a seamless and engaging user experience.",
    demoLink: "https://music-app-next-rust.vercel.app/login",
    codeLink: "https://github.com/Meva1997/music-app-next",
    image: "/main-spotify-music.png",
  },
  {
    id: 5,
    title: "Cocktail Recipe App",
    description:
      "A sleek and modern web app that demonstrates API consumption, state management, AI integration, and a clean, intuitive UI. Built with React, TypeScript, Tailwind CSS, and powered by Zustand and OpenRouter AI, this project showcases my ability to create innovative and user-friendly applications. Deployed seamlessly with Netlify.",
    demoLink: "https://cocktail-drinks-alex.netlify.app/",
    codeLink: "https://github.com/Meva1997/cocktail-drinks",
    image: "/cocktail-zustand.png",
  },
];
