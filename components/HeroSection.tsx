"use client";

import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import type { LandmarkData } from "@/components/canvas/HeroCanvas";

const HeroCanvas = dynamic(() => import("@/components/canvas/HeroCanvas"), {
  ssr: false,
});

interface HeroSectionProps {
  onHoverLandmark?: (data: LandmarkData | null) => void;
  onCursorCoords?: (coords: { x: number; y: number; z: number }) => void;
}

export default function HeroSection({
  onHoverLandmark,
  onCursorCoords,
}: HeroSectionProps) {
  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById("projects");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById("about");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-20 pt-28 pb-16 max-w-7xl w-full mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        {/* Left Column: Hero Content & Description */}
        <div className="lg:col-span-7 flex flex-col justify-center z-10 select-none">
          {/* Main Name Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight leading-[1.06] headline-glow">
              <span className="block">SYED</span>
              <span className="block mt-1 sm:mt-1.5">MUHAMMAD</span>
              <span className="block mt-1 sm:mt-1.5">HUSSAIN</span>
              <span className="block mt-1 sm:mt-1.5">ABBAS</span>
            </h1>
          </motion.div>

          {/* Subtitle Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6"
          >
            <p className="text-xs sm:text-sm font-mono tracking-[0.2em] text-[#94A3B8] uppercase">
              BSCS UNDERGRADUATE <span className="text-[#38BDF8]/60 mx-1.5">-</span> SOFTWARE <span className="text-[#38BDF8]/60 mx-1.5">-</span> AI/ML
            </p>
          </motion.div>

          {/* Grounded Description Copy */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-xl space-y-3 text-sm sm:text-base leading-relaxed text-[#94A3B8]"
          >
            <p className="font-medium text-[#E2E8F0]">
              Building intelligent systems through mathematics, software, and experimentation.
            </p>
            <p className="text-xs sm:text-sm text-[#94A3B8]/90">
              Currently exploring linear algebra, machine learning, intelligent Agentic AI systems and Computer Vision.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="px-6 py-3 rounded-md bg-[#38BDF8]/10 border border-[#38BDF8] text-[#38BDF8] hover:bg-[#38BDF8]/20 hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all font-mono text-xs tracking-[0.2em] font-medium uppercase"
            >
              VIEW PROJECTS
            </a>
            <a
              href="#about"
              onClick={handleScrollToAbout}
              className="px-6 py-3 rounded-md bg-[#070C18]/60 border border-[#1E293B] text-[#94A3B8] hover:text-[#E2E8F0] hover:border-[#38BDF8]/50 transition-all font-mono text-xs tracking-[0.2em] font-medium uppercase"
            >
              ABOUT
            </a>
          </motion.div>
        </div>

        {/* Right Column: Framed ℝ³ COORDINATE SPACE Viewport */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 w-full aspect-square max-w-[480px] mx-auto lg:max-w-none relative z-10"
        >
          <div className="w-full h-full cyber-viewport-frame rounded-lg p-6 flex flex-col justify-between overflow-hidden shadow-2xl">
            {/* Viewport Corner Brackets */}
            <div className="corner-bracket-tl" />
            <div className="corner-bracket-tr" />
            <div className="corner-bracket-bl" />
            <div className="corner-bracket-br" />

            {/* Viewport Header */}
            <div className="flex items-center justify-between text-[11px] font-mono tracking-widest text-[#64748B] z-10">
              <span className="text-[#38BDF8]/90 font-semibold">ℝ³ COORDINATE SPACE</span>
              <span className="text-[#475569]">SYS.3D</span>
            </div>

            {/* Embedded 3D Canvas */}
            <div className="absolute inset-0 z-0">
              <HeroCanvas
                onHoverLandmark={onHoverLandmark}
                onCursorCoords={onCursorCoords}
              />
            </div>

            {/* Viewport Center Placeholder Copy */}
            <div className="relative z-10 text-center my-auto pointer-events-none select-none opacity-40 hover:opacity-70 transition-opacity">
              <p className="text-xs font-mono tracking-widest text-[#38BDF8]">
                ℝ³ COORDINATE SPACE
              </p>
              <p className="text-[11px] font-mono text-[#64748B] mt-1 max-w-[220px] mx-auto leading-relaxed">
                3D mathematical visualization occupies this area.
              </p>
            </div>

            {/* Viewport Bottom Legend */}
            <div className="flex items-center justify-end text-[11px] font-mono tracking-widest text-[#64748B] z-10">
              <span>X - Y - Z</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Center SCROLL Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none select-none"
      >
        <span className="text-[10px] font-mono tracking-[0.25em] text-[#64748B]">SCROLL</span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-[#38BDF8]/60 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
