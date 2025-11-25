import Footer from "@/components/Footer";
import MainHeader from "@/components/MainHeader";
import ProjectCard from "@/components/ProjectCard";
import ProjectCardSkeleton from "@/components/skeletons/ProjectCardSkeleton";
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
        <p className="max-w-2xl text-center text-green-500 animate-pulse">
          Note: Some projects may not work or have extended loading times due to
          being hosted on free-tier services.
        </p>
        <Suspense fallback={<ProjectCardSkeleton />}>
          <ProjectCard />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}
