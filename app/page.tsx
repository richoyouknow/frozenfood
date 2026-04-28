"use client";

import { useState } from "react";
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
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState<string>("");

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Testimonials />
        <About />
        <Features />
        <Brands />
        <Packages onSelectPackage={setSelectedPackage} />
        <Support />
        <Locations />
        <Requirements />
        <Registration selectedPackage={selectedPackage} onPackageChange={setSelectedPackage} />
      </main>
      <Footer />
    </>
  );
}
