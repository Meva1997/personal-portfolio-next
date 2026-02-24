import { Suspense } from "react";
import TechStackSkeleton from "./skeletons/TechStackSkeleton";
import Image from "next/image";
import TechStack from "./TechStack";
import AboutMeText from "./AboutMeText";
import Certifications from "./Certifications";

export default function AboutMeCard() {
  return (
    <div className="w-full max-w-6xl px-5 mx-auto">
      {/* About Me Section */}
      <section className="flex flex-col items-center max-w-5xl px-6 py-8 mx-auto my-16 border border-gray-800 gap-8 glass-effect rounded-2xl md:flex-row md:gap-12 animate-fadeInUp">
        <div className="flex-1 text-gray-300">
          <h2 className="mb-4 text-2xl font-bold gradient-text">About Me</h2>
          <p className="text-lg leading-relaxed">
            Hello! My name is{" "}
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
              Alejandro Medina
            </span>{" "}
            and I&apos;m a passionate developer eager to solve real-world
            problems through technology. I specialize in{" "}
            <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
              Fullstack development
            </span>
            , focusing on building interactive, efficient, and user-friendly
            applications. Let&apos;s build something amazing together!
          </p>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 transition-all duration-300 rounded-full bg-gradient-to-r from-orange-600 to-yellow-500 blur-xl opacity-50 group-hover:opacity-75"></div>
          <Image
            src={"/img-me.jpg"}
            alt="Alejandro Medina"
            width={250}
            height={250}
            priority
            className="relative object-cover transition-all duration-300 border-4 border-gray-800 rounded-full shadow-2xl w-60 h-60 group-hover:scale-105"
          />
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="my-16 py-20 animate-fadeInUp">
        <h2 className="mb-8 text-4xl font-bold text-center gradient-text">
          My Tech Stack
        </h2>
        <Suspense fallback={<TechStackSkeleton />}>
          <TechStack />
        </Suspense>
      </section>

      {/* Certifications */}
      <div className="animate-fadeInUp py-10">
        <Certifications />
      </div>

      {/* About Me Text */}
      <div className="animate-fadeInUp py-10">
        <AboutMeText />
      </div>
    </div>
  );
}
