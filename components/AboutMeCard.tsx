import { Suspense } from "react";
import TechStackSkeleton from "./skeletons/TechStackSkeleton";
import Image from "next/image";
import TechStack from "./TechStack";
import AboutMeText from "./AboutMeText";
import Certifications from "./Certifications";

export default function AboutMeCard() {
  return (
    <>
      <section className="flex flex-col items-center max-w-4xl px-5 mx-auto mt-20 mb-10 space-y-6 rounded-lg shadow-md text-balance md:flex-row md:space-y-0 md:space-x-6">
        <div className="p-5 text-gray-300 bg-gray-900 rounded-lg">
          <p className="text-lg font-semibold text-center md:text-center">
            Hello! My name is{" "}
            <span className="text-xl font-bold text-orange-500">
              Alejandro Medina
            </span>{" "}
            and I&apos;m a passionate developer eager to solve real-world
            problems through technology. I specialize in{" "}
            <span className="text-lg font-bold text-orange-500">
              Fullstack development
            </span>
            , focusing on building interactive, efficient, and user-friendly
            applications. Let&apos;s build something amazing together!
          </p>
        </div>
        <Image
          src={"/img-me.jpg"}
          alt="Alejandro Medina"
          width={250}
          height={250}
          priority
          className="object-cover w-auto h-auto mt-10 rounded-full shadow-lg md:mt-0"
        />
      </section>
      <section className="mt-20">
        <h2 className="text-2xl font-bold text-center text-orange-500">
          My Tech Stack
        </h2>
        <Suspense fallback={<TechStackSkeleton />}>
          <TechStack />
        </Suspense>
      </section>

      {/* Certifications */}
      <Certifications />

      {/* About Me Text */}
      <AboutMeText />
    </>
  );
}
