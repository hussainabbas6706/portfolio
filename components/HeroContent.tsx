"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <div className="relative z-20 flex flex-col justify-center max-w-2xl lg:max-w-3xl pointer-events-none select-none">
      {/* Main Name Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto"
      >
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-bold tracking-tight leading-[1.05] headline-glow">
          <span className="block">SYED MUHAMMAD</span>
          <span className="block mt-1 sm:mt-2">HUSSAIN ABBAS</span>
        </h1>
      </motion.div>

      {/* Subtitle / Roles Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="mt-5 sm:mt-6 pointer-events-auto"
      >
        <p className="text-xs sm:text-sm md:text-[15px] font-medium tracking-[0.16em] text-[#CBD5E1] uppercase">
          BSCS UNDERGRADUATE <span className="text-[#38BDF8]/60 mx-1.5 font-light">|</span> SOFTWARE ENGINEER <span className="text-[#38BDF8]/60 mx-1.5 font-light">|</span> LEARNING AI & ML
        </p>
      </motion.div>

      {/* Philosophical AI / Mathematical Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="mt-8 sm:mt-10 max-w-xl pointer-events-auto space-y-1.5 text-sm sm:text-base md:text-[17px] leading-relaxed text-[#94A3B8]"
      >
        <p>Navigating high-dimensional spaces. Modeling cosmos with code.</p>
        <p>Seeking mathematical elegance in artificial intelligence.</p>
      </motion.div>
    </div>
  );
}
