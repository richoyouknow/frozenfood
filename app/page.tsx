import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import About from "@/components/About";
import Features from "@/components/Features";
import Brands from "@/components/Brands";
import Packages from "@/components/Packages";
import Support from "@/components/Support";
import Locations from "@/components/Locations";
import Requirements from "@/components/Requirements";
import Registration from "@/components/Registration";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <About />
        <Features />
        <Brands />
        <Packages />
        <Support />
        <Locations />
        <Requirements />
        <Registration />
      </main>
      <Footer />
    </>
  );
}
