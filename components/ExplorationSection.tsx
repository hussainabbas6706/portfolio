"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Clock } from "lucide-react";

export default function ExplorationSection() {
  return (
    <section
      id="exploration"
      className="relative min-h-[75vh] w-full flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-20 py-24 sm:py-32 max-w-7xl mx-auto z-10"
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
            Exploration Lab
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-sans text-[#94A3B8] max-w-md">
          Experimental prototypes, architecture tests, and technical deep-dives.
        </p>
      </motion.div>

      {/* Clean Minimal Coming Soon Frame */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="cyber-viewport-frame rounded-xl p-10 sm:p-16 min-h-[360px] flex flex-col items-center justify-center text-center bg-[#070C18]/80 border border-[#1E293B]"
      >
        <div className="corner-bracket-tl" />
        <div className="corner-bracket-tr" />
        <div className="corner-bracket-bl" />
        <div className="corner-bracket-br" />

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-mono tracking-widest uppercase mb-6">
          <Clock size={13} className="text-[#38BDF8] animate-spin" style={{ animationDuration: "8s" }} />
          <span>IN DEVELOPMENT</span>
        </div>

        {/* Big Coming Soon Headline */}
        <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#E2E8F0] uppercase headline-glow">
          COMING SOON
        </h3>

        {/* Subtext */}
        <p className="text-xs sm:text-sm text-[#94A3B8] max-w-md mx-auto mt-4 leading-relaxed font-sans">
          New interactive systems, technical case studies, and engineering explorations are currently being built. Check back soon!
        </p>

        {/* Minimal Corner Accents */}
        <div className="mt-8 flex items-center gap-2 text-[11px] font-mono text-[#64748B]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]/60 animate-ping" />
          <span>MODULE // LAB.NEXT</span>
        </div>
      </motion.div>
    </section>
  );
}
