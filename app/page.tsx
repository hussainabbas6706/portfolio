"use client";

import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExplorationSection from "@/components/ExplorationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackgroundStars from "@/components/BackgroundStars";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    // Initialize smooth inertia scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const animId = requestAnimationFrame(raf);

    // Track active section for navbar highlighting
    const sections = ["hero", "about", "projects", "exploration", "contact"];
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("scroll", handleScroll);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-[#050811] overflow-x-hidden flex flex-col justify-between selection:bg-[#38BDF8]/20 selection:text-[#38BDF8]">
      {/* Background 2D Coordinate Grid Layer */}
      <div className="fixed inset-0 bg-coordinate-grid opacity-60 pointer-events-none z-0" />

      {/* Cosmic Radial Vignette Depth Layer */}
      <div className="fixed inset-0 cosmic-vignette pointer-events-none z-0" />

      {/* Lightweight 2D Starry Background */}
      <BackgroundStars />

      {/* Top Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Sections Flow */}
      <div className="relative z-10 flex flex-col w-full">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExplorationSection />
        <ContactSection />
      </div>

      {/* Bottom Footer */}
      <Footer />
    </main>
  );
}