import { Suspense } from "react";
import TechStackSkeleton from "./skeletons/TechStackSkeleton";
import Image from "next/image";
import TechStack from "./TechStack";

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
              Frontend development
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
      <section className="max-w-4xl px-5 py-10 mx-auto mt-20 space-y-5 font-semibold text-gray-300 bg-gray-900 rounded-lg">
        <h3 className="text-2xl font-bold text-orange-500">
          A little about me
        </h3>

        <p className="text-base leading-relaxed">
          I&apos;m a{" "}
          <span className="font-medium text-orange-400">
            28-year-old Developer
          </span>
          , born in Mexico and also a
          <span className="font-medium text-orange-400"> U.S. citizen</span> —
          which gives me the flexibility to work{" "}
          <span className="italic">
            remotely or on-site with international teams
          </span>
          .
        </p>

        <p className="text-base leading-relaxed">
          My journey into programming began thanks to a close friend who opened
          my eyes to the world of tech. Since then, I&apos;ve embraced the
          thrill of{" "}
          <span className="text-orange-400">solving complex challenges</span>{" "}
          and{" "}
          <span className="text-orange-400">
            building products that have a real impact
          </span>
          . I&apos;m especially drawn to working with{" "}
          <span className="italic">startups or fast-moving teams</span> where I
          can <span className="font-medium">grow, adapt, and add value</span>.
        </p>

        <p className="text-base leading-relaxed">
          I enjoy both collaborative and independent work. I&apos;m known for
          being{" "}
          <span className="italic">
            persistent, curious, and clear in my communication
          </span>
          . When I get deeply involved in a project, I often lose track of time
          — sometimes even{" "}
          <span className="font-medium text-orange-400">
            skipping meals until the issue is solved
          </span>
          ! I&apos;m always eager to learn{" "}
          <span className="font-medium">new technologies</span> and push my
          skills further.
        </p>

        <p className="text-base leading-relaxed">
          Outside of coding, I&apos;m passionate about{" "}
          <span className="italic">video games</span>,{" "}
          <span className="italic">collecting Pokémon cards</span>,{" "}
          <span className="italic">watching Formula 1</span>,{" "}
          <span className="italic">going to the movies</span>, and of course —{" "}
          <span className="italic">enjoying good food</span>.
        </p>

        <p className="text-base leading-relaxed">
          <span className="italic text-orange-400">Fun fact:</span> Before
          switching careers, I studied{" "}
          <span className="font-medium">
            medicine at the Universidad Autónoma de Guadalajara
          </span>
          . It might sound like an unusual path, but it taught me to{" "}
          <span className="font-medium">think critically</span>,{" "}
          <span className="font-medium">pay attention to detail</span>,{" "}
          <span className="font-medium">stay disciplined</span>, and{" "}
          <span className="font-medium">
            remain committed to continuous learning
          </span>{" "}
          — all traits that now{" "}
          <span className="font-medium text-orange-400">
            enrich my work as a programmer
          </span>
          .
        </p>
      </section>
    </>
  );
}
