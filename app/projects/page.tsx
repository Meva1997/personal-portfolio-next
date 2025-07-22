import Footer from "@/components/Footer";
import MainHeader from "@/components/MainHeader";
import ProjectCard from "@/components/ProjectCard";
import ProjectCardSkeleton from "@/components/skeletons/ProjectCardSkeleton";
import Image from "next/image";
import { Suspense } from "react";

export default function ProjectsPage() {
  return (
    <>
      <MainHeader />
      <main className="flex flex-col items-center justify-center px-4 mx-auto my-20 space-y-10">
        <h1 className="text-4xl font-bold text-orange-500">My Projects</h1>
        <p className="max-w-2xl mt-4 text-lg text-center text-white">
          Explore a collection of my recent projects, showcasing my expertise in
          modern web development, responsive design, and innovative solutions.
        </p>
        {/* Add your project components here */}
        <Suspense fallback={<ProjectCardSkeleton />}>
          <ProjectCard
            projectTitle={"Music API Project"}
            projectDescription={
              "A dynamic web application built with Next.js that allows users to explore music, manage comments, and user profiles. Featuring a responsive design, smooth animations with Framer Motion, and reusable components, this project highlights my skills in React, Next.js, and API integration. Dive into a seamless and engaging user experience."
            }
            demoLink="https://music-app-next-rust.vercel.app/login"
            codeLink="https://github.com/Meva1997/music-app-next"
            image={
              <Image
                src="/main-spotify-music.png"
                alt="Music API Project"
                className="object-cover w-full h-auto rounded-lg"
                width={200}
                height={100}
              />
            }
          />
          <ProjectCard
            projectTitle={"Cocktail Recipe App"}
            projectDescription={
              "A sleek and modern web app that demonstrates API consumption, state management, AI integration, and a clean, intuitive UI. Built with React, TypeScript, Tailwind CSS, and powered by Zustand and OpenRouter AI, this project showcases my ability to create innovative and user-friendly applications. Deployed seamlessly with Netlify."
            }
            demoLink="https://example.com/project-two"
            codeLink=""
            image={
              <Image
                src="/cocktail-zustand.png"
                alt="Cocktail Recipe App"
                className="object-cover w-full h-auto rounded-lg"
                width={200}
                height={100}
              />
            }
          />
          <ProjectCard
            projectTitle={"Inventory Management System"}
            projectDescription={
              "A comprehensive personal project designed to efficiently manage products and budgets. This system highlights my expertise in React, TypeScript, Zustand, and Tailwind CSS, while demonstrating my ability to build responsive, feature-rich applications. Perfect for streamlining inventory processes with a modern and user-friendly interface."
            }
            demoLink="https://ubiquitous-cajeta-d51d8f.netlify.app/"
            codeLink="https://github.com/Meva1997/yara_inventario_pedidos"
            image={
              <Image
                src="/yara-inventario.png"
                alt="Inventory Management System"
                className="object-cover w-full h-auto rounded-lg"
                width={180}
                height={100}
              />
            }
          />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}
