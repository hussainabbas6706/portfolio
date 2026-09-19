"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ExplorationSection() {
  return (
    <section
      id="exploration"
      className="relative min-h-screen w-full flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-20 py-24 sm:py-32 max-w-7xl w-full mx-auto"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
      >
        <div>
          <span className="text-xs font-mono tracking-[0.25em] text-[#38BDF8] uppercase font-semibold">
            03 / EXPLORATION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#E2E8F0] mt-2">
            Mathematical Playground
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-sans text-[#94A3B8] max-w-md">
          Small experiments built while learning.
        </p>
      </motion.div>

      {/* Clean Skeleton Playground Frame */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="cyber-viewport-frame rounded-xl p-8 sm:p-12 min-h-[380px] flex flex-col justify-between"
      >
        {/* Corner Brackets */}
        <div className="corner-bracket-tl" />
        <div className="corner-bracket-tr" />
        <div className="corner-bracket-bl" />
        <div className="corner-bracket-br" />

        {/* Top Header */}
        <div className="flex items-center justify-between text-xs font-mono text-[#64748B]">
          <span className="text-[#38BDF8] font-semibold">PLAYGROUND SKELETON</span>
          <span>EXP.03</span>
        </div>

        {/* Center Skeleton Content Placeholder */}
        <div className="my-auto text-center py-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/40 text-[#38BDF8] text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-ping" />
            SKELETON IN PROGRESS
          </div>
          <h3 className="text-lg sm:text-xl font-sans font-bold text-[#E2E8F0] tracking-tight">
            Vector Transformations & PCA Scatter Plot Space
          </h3>
          <p className="text-xs sm:text-sm text-[#94A3B8] max-w-lg mx-auto mt-2 leading-relaxed">
            This modular slot is prepared for interactive linear algebra experiments, matrix transformations, and high-dimensional projections.
          </p>
        </div>

        {/* Bottom Status */}
        <div className="flex items-center justify-between text-[11px] font-mono text-[#64748B] pt-4 border-t border-[#1E293B]/60">
          <span>PANEL 01: VECTOR TRANSFORM</span>
          <span>PANEL 02: PCA PROJECTION</span>
        </div>
      </motion.div>
    </section>
  );
}
