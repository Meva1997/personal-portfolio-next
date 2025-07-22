import AboutMeCard from "@/components/AboutMeCard";
import Footer from "@/components/Footer";
import MainHeader from "@/components/MainHeader";

export default function Home() {
  return (
    <>
      <MainHeader />
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold text-orange-500">
          Welcome to My Portfolio
        </h1>
        <p className="mt-4 text-lg font-semibold">Frontend Developer</p>
        <AboutMeCard />
      </main>

      <Footer />
    </>
  );
}
