import AboutMeCard from "@/components/AboutMeCard";
import Footer from "@/components/Footer";
import MainHeader from "@/components/MainHeader";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <MainHeader />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-5 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-orange-500 rounded-full opacity-20 blur-3xl -top-20 -left-20 animate-pulse"></div>
          <div className="absolute rounded-full w-96 h-96 bg-yellow-500 opacity-20 blur-3xl -bottom-20 -right-20 animate-pulse"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center max-w-6xl gap-12 mx-auto lg:flex-row lg:justify-between">
          {/* Ilustración Animada */}
          <div className="relative order-1 group lg:order-2">
            <div className="absolute inset-0 transition-all duration-500 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 blur-2xl opacity-40 group-hover:opacity-60 animate-pulse"></div>
            <Image
              src="/alex-toon-chatgpt.png"
              alt="Alejandro Medina - Developer Illustration"
              width={320}
              height={320}
              className="relative z-10 transition-transform duration-500 w-80 h-100 lg:w-120 md:h-120 rounded-2xl drop-shadow-2xl group-hover:scale-105"
            />
          </div>

          {/* Text Content */}
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <div className="mb-6 animate-fadeInUp">
              <span className="px-4 py-2 text-sm font-semibold text-orange-300 border border-orange-500 rounded-full bg-orange-950/50">
                👋 Welcome to my portfolio
              </span>
            </div>

            <h1
              className="px-5 mb-6 text-5xl font-bold md:text-7xl animate-fadeInUp"
              style={{ animationDelay: "0.2s", opacity: 0 }}
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Alejandro Medina</span>
            </h1>

            <p
              className="mb-4 text-2xl font-semibold md:text-3xl text-gray-300 animate-fadeInUp"
              style={{ animationDelay: "0.4s", opacity: 0 }}
            >
              Fullstack Developer
            </p>

            <p
              className="max-w-2xl mx-auto mb-8 text-lg text-gray-400 md:mx-0 animate-fadeInUp"
              style={{ animationDelay: "0.6s", opacity: 0 }}
            >
              Passionate about creating innovative web solutions that solve
              real-world problems. Let&apos;s build something amazing together!
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start animate-fadeInUp"
              style={{ animationDelay: "0.8s", opacity: 0 }}
            >
              <Link
                href="/projects"
                className="px-8 py-4 font-semibold text-white transition-all duration-300 transform bg-gradient-to-r from-orange-600 to-yellow-500 rounded-lg shadow-lg hover:shadow-orange-500/50 hover:scale-105"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 font-semibold text-white transition-all duration-300 border-2 border-orange-500 rounded-lg hover:bg-orange-500/10"
              >
                Get In Touch
              </Link>
              <a
                href="/Alejandro_Medina_Full_Stack_Developer.pdf"
                download
                className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-white transition-all duration-300 transform border-2 border-orange-500 rounded-lg hover:bg-orange-500/20 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
              >
                📄 Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 lg:bottom-40 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center my-20">
        <AboutMeCard />
      </main>

      <Footer />
    </>
  );
}
