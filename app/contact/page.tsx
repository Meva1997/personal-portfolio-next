import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import MainHeader from "@/components/MainHeader";

export default function ContactPage() {
  return (
    <>
      <MainHeader />
      <main className="relative flex flex-col items-center justify-center px-5 min-h-dvh">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-orange-500 rounded-full opacity-10 blur-3xl top-20 left-10 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-yellow-500 rounded-full opacity-10 blur-3xl bottom-20 right-10 animate-pulse"></div>
        </div>

        <section className="relative z-10 max-w-4xl px-5 mx-auto mb-12 text-center">
          <div className="mb-6 animate-fadeInUp">
            <span className="px-4 py-2 text-sm font-semibold text-orange-300 border border-orange-500 rounded-full bg-orange-950/50">
              💬 Get In Touch
            </span>
          </div>

          <h1
            className="mb-6 text-4xl font-bold md:text-5xl gradient-text animate-fadeInUp"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            Let&apos;s Work Together
          </h1>

          <p
            className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-300 animate-fadeInUp"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            I would love to hear from you! Whether you have a question, want to
            collaborate, or you want to hire me for a project, feel free to
            reach out using the form below. I&apos;ll get back to you as soon as
            possible!
          </p>
        </section>

        <div
          className="relative z-10 w-full animate-fadeInUp"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
