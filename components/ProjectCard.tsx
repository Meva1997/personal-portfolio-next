import { db } from "@/db";
import Image from "next/image";

export default function ProjectCard() {
  return (
    <div className="grid gap-8 px-4 md:grid-cols-1 lg:grid-cols-1 max-w-6xl mx-auto">
      {db.map((project, index) => (
        <div
          key={project.id}
          className="relative overflow-hidden transition-all duration-500 bg-gray-900 border border-gray-800 group rounded-2xl card-hover"
          style={{
            animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
            opacity: 0,
          }}
        >
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-orange-600/10 via-yellow-600/10 to-transparent group-hover:opacity-100"></div>

          <div className="relative z-10 p-8">
            {/* Title with gradient */}
            <h2 className="mb-6 text-3xl font-bold text-center transition-all duration-300 gradient-text group-hover:scale-105">
              {project.title}
            </h2>

            {/* Content grid */}
            <div className="flex flex-col items-center gap-8 md:flex-row">
              {/* Image container with hover effect */}
              <div className="relative overflow-hidden rounded-xl md:w-1/2 group/image">
                <div className="transition-transform duration-500 transform group-hover:scale-110">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full rounded-xl"
                    width={500}
                    height={300}
                  />
                </div>
              </div>

              {/* Description */}
              <div className="md:w-1/2">
                <p className="text-lg leading-relaxed text-gray-300">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Action buttons with improved styling */}
            <div className="flex flex-col items-center justify-center gap-4 mt-8 sm:flex-row">
              <a
                href={project.demoLink}
                className="relative flex items-center gap-2 px-6 py-3 overflow-hidden font-semibold text-white transition-all duration-300 transform group/btn bg-gradient-to-r from-orange-600 to-yellow-500 rounded-lg hover:shadow-lg hover:shadow-orange-500/50 hover:scale-105"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="relative z-10">🚀 Live Demo</span>
                <div className="absolute inset-0 transition-transform duration-300 transform -translate-x-full bg-gradient-to-r from-yellow-500 to-orange-600 group-hover/btn:translate-x-0"></div>
              </a>

              <a
                className="flex items-center gap-2 px-6 py-3 font-semibold text-white transition-all duration-300 border-2 border-orange-500 rounded-lg hover:bg-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30"
                href={project.codeLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                💻 View Code
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
