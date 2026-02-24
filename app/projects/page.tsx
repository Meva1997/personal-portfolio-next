import Footer from "@/components/Footer";
import MainHeader from "@/components/MainHeader";
import ProjectCard from "@/components/ProjectCard";
import ProjectCardSkeleton from "@/components/skeletons/ProjectCardSkeleton";
import { Suspense } from "react";

export default function ProjectsPage() {
  return (
    <>
      <MainHeader />
      <main className="relative flex flex-col items-center justify-center px-4 mx-auto my-20 space-y-10">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-orange-500 rounded-full opacity-10 blur-3xl top-20 left-10 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-yellow-500 rounded-full opacity-10 blur-3xl bottom-20 right-10 animate-pulse"></div>
        </div>

        {/* Header section */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-6 animate-fadeInUp">
            <span className="px-4 py-2 text-sm font-semibold text-orange-300 border border-orange-500 rounded-full bg-orange-950/50">
              🚀 Portfolio
            </span>
          </div>

          <h1
            className="mb-6 text-5xl font-bold md:text-6xl gradient-text animate-fadeInUp"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            My Projects
          </h1>

          <p
            className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-300 animate-fadeInUp"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            Explore a collection of my recent projects, showcasing my expertise
            in modern web development, responsive design, and innovative
            solutions.
          </p>

          <div
            className="inline-flex items-center gap-2 px-4 py-3 mt-6 text-sm border border-yellow-500/50 rounded-lg bg-yellow-950/30 animate-fadeInUp"
            style={{ animationDelay: "0.6s", opacity: 0 }}
          >
            <span className="text-yellow-400">⚠️</span>
            <p className="text-yellow-300">
              Note: Some projects may have extended loading times due to
              free-tier hosting.
            </p>
          </div>
        </div>

        {/* Projects grid */}
        <div className="relative z-10 w-full">
          <Suspense fallback={<ProjectCardSkeleton />}>
            <ProjectCard />
          </Suspense>
        </div>
      </main>

      <Footer />
    </>
  );
}
