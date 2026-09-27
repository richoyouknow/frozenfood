"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";

const About = dynamic(() => import("@/components/About"));
const Features = dynamic(() => import("@/components/Features"));
const Brands = dynamic(() => import("@/components/Brands"));
const Packages = dynamic(() => import("@/components/Packages"));
const Support = dynamic(() => import("@/components/Support"));
const Locations = dynamic(() => import("@/components/Locations"));
const Requirements = dynamic(() => import("@/components/Requirements"));
const Registration = dynamic(() => import("@/components/Registration"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Footer = dynamic(() => import("@/components/Footer"));

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

