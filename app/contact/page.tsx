import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import MainHeader from "@/components/MainHeader";

export default function ContactPage() {
  return (
    <>
      <MainHeader />
      <main className="flex flex-col items-center justify-center min-h-dvh">
        <section className="max-w-4xl px-5 mx-auto mb-8 text-center">
          <h1 className="text-3xl font-bold text-center text-orange-500">
            Send Me a Message to Get in Touch
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-center text-gray-300">
            I would love to hear from you! Whether you have a question, want to
            collaborate, or you want to hire me for a project, feel free to
            reach out using the form below. I&apos;ll get back to you as soon as
            possible!.
          </p>
        </section>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
