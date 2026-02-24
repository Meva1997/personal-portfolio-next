import React from "react";

export default function AboutMeText() {
  return (
    <section className="max-w-5xl px-6 py-10 mx-auto mt-16 space-y-6 border border-gray-800 glass-effect rounded-2xl">
      <h3 className="mb-6 text-3xl font-bold gradient-text">
        A little about me
      </h3>

      <p className="text-base leading-relaxed text-gray-300">
        I&apos;m a{" "}
        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
          28-year-old Developer
        </span>
        , born in Mexico and also a
        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
          {" "}
          U.S. citizen
        </span>{" "}
        — which gives me the flexibility to work{" "}
        <span className="italic">
          remotely or on-site with international teams
        </span>
        .
      </p>

      <p className="text-base leading-relaxed text-gray-300">
        My journey into programming began thanks to a close friend who opened my
        eyes to the world of tech. Since then, I&apos;ve embraced the thrill of{" "}
        <span className="text-orange-400">solving complex challenges</span> and{" "}
        <span className="text-orange-400">
          building products that have a real impact
        </span>
        . I&apos;m especially drawn to working with{" "}
        <span className="italic">startups or fast-moving teams</span> where I
        can <span className="font-semibold">grow, adapt, and add value</span>.
      </p>

      <p className="text-base leading-relaxed text-gray-300">
        I enjoy both collaborative and independent work. I&apos;m known for
        being{" "}
        <span className="italic">
          persistent, curious, and clear in my communication
        </span>
        . When I get deeply involved in a project, I often lose track of time —
        sometimes even{" "}
        <span className="font-semibold text-orange-400">
          skipping meals until the issue is solved
        </span>
        ! I&apos;m always eager to learn{" "}
        <span className="font-semibold">new technologies</span> and push my
        skills further.
      </p>

      <p className="text-base leading-relaxed text-gray-300">
        Outside of coding, I&apos;m passionate about{" "}
        <span className="italic">video games</span>,{" "}
        <span className="italic">collecting Pokémon cards</span>,{" "}
        <span className="italic">watching Formula 1</span>,{" "}
        <span className="italic">going to the movies</span>, and of course —{" "}
        <span className="italic">enjoying good food</span>.
      </p>

      <p className="text-base leading-relaxed text-gray-300">
        <span className="italic text-orange-400">Fun fact:</span> Before
        switching careers, I studied{" "}
        <span className="font-semibold">
          medicine at the Universidad Autónoma de Guadalajara
        </span>
        . It might sound like an unusual path, but it taught me to{" "}
        <span className="font-semibold">think critically</span>,{" "}
        <span className="font-semibold">pay attention to detail</span>,{" "}
        <span className="font-semibold">stay disciplined</span>, and{" "}
        <span className="font-semibold">
          remain committed to continuous learning
        </span>{" "}
        — all traits that now{" "}
        <span className="font-semibold text-orange-400">
          enrich my work as a programmer
        </span>
        .
      </p>
    </section>
  );
}
