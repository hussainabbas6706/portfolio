"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, Cpu, Bot, Layers, Cloud } from "lucide-react";

export default function HeroSection() {
  const handleScrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const capabilities = [
    {
      category: "AI & Intelligent Systems",
      icon: Bot,
      items: ["Gemini API", "LLM Workflows", "Prompt Engineering", "Vector Embeddings", "AI Chat Assistants"],
    },
    {
      category: "Full Stack & Web",
      icon: Layers,
      items: ["Next.js", "React 18", "TypeScript", "Tailwind CSS", "Vite", "Redux Toolkit"],
    },
    {
      category: "Backend & Cloud",
      icon: Cloud,
      items: ["FastAPI", "Node.js", "Express", "PostgreSQL", "Supabase", "MongoDB", "Docker"],
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-20 pt-28 pb-16 max-w-7xl mx-auto z-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        {/* Left Column: Hero Content & Description */}
        <div className="lg:col-span-7 flex flex-col justify-center select-none">
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

          {/* Subtitle Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6"
          >
            <p className="text-xs sm:text-sm font-mono tracking-[0.2em] text-[#94A3B8] uppercase flex flex-wrap items-center gap-2">
              <span>BSCS UNDERGRADUATE</span>
              <span className="text-[#38BDF8]/60">·</span>
              <span className="text-[#E2E8F0]">FULL STACK DEVELOPER</span>
              <span className="text-[#38BDF8]/60">·</span>
              <span>SOFTWARE ENGINEER</span>
            </p>
          </motion.div>

          {/* High-Impact Copy with AI & Production-Ready Keywords */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-xl space-y-3 text-sm sm:text-base leading-relaxed text-[#94A3B8]"
          >
            <p className="font-medium text-[#E2E8F0] text-base sm:text-lg">
              Building AI-ready production applications, scalable full-stack architectures, and modern web platforms.
            </p>
            <p className="text-xs sm:text-sm text-[#94A3B8]/90">
              BSCS undergraduate at UBIT, University of Karachi. Specializing in integrating modern AI tools, Generative AI APIs (Gemini, LLMs), high-throughput FastAPI & Node.js backends, and responsive React/Next.js interfaces.
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
              onClick={(e) => handleScrollTo(e, "projects")}
              className="px-6 py-3 rounded-md bg-[#38BDF8]/10 border border-[#38BDF8] text-[#38BDF8] hover:bg-[#38BDF8]/20 hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all font-mono text-xs tracking-[0.2em] font-medium uppercase inline-flex items-center gap-2 group"
            >
              <span>VIEW PROJECTS</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#about"
              onClick={(e) => handleScrollTo(e, "about")}
              className="px-6 py-3 rounded-md bg-[#070C18]/80 border border-[#1E293B] text-[#94A3B8] hover:text-[#E2E8F0] hover:border-[#38BDF8]/50 transition-all font-mono text-xs tracking-[0.2em] font-medium uppercase"
            >
              ABOUT ME
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="px-6 py-3 rounded-md bg-[#070C18]/80 border border-[#1E293B] text-[#94A3B8] hover:text-[#E2E8F0] hover:border-[#38BDF8]/50 transition-all font-mono text-xs tracking-[0.2em] font-medium uppercase"
            >
              CONTACT
            </a>
          </motion.div>
        </div>

        {/* Right Column: Clean, Elegant, Minimalist Capabilities Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 w-full aspect-auto max-w-[500px] mx-auto lg:max-w-none relative z-10"
        >
          <div className="w-full rounded-2xl p-7 flex flex-col justify-between overflow-hidden shadow-2xl bg-[#070C18]/90 border border-[#1E293B]/80 backdrop-blur-md">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1E293B]/60">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
                <span className="text-xs font-mono tracking-widest text-[#E2E8F0] font-semibold uppercase">
                  Production Engineering Stack
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#38BDF8]/90">
                AI + Full Stack
              </span>
            </div>

            {/* Clean Capability Groups (No awkward headings or box borders) */}
            <div className="space-y-5">
              {capabilities.map((cap) => {
                const Icon = cap.icon;
                return (
                  <div key={cap.category} className="space-y-2.5">
                    <div className="flex items-center gap-2 text-xs font-sans font-semibold text-[#E2E8F0]">
                      <Icon size={14} className="text-[#38BDF8]" />
                      <span>{cap.category}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cap.items.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded-md bg-[#050811] border border-[#1E293B] text-[11px] font-mono text-[#CBD5E1]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Minimal Footer */}
            <div className="mt-6 pt-4 border-t border-[#1E293B]/60 flex items-center justify-between text-[11px] font-mono text-[#64748B]">
              <span>UBIT · University of Karachi</span>
              <span className="text-[#38BDF8]">Ready for Production</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Center SCROLL Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="mt-16 flex flex-col items-center gap-2 pointer-events-none select-none"
      >
        <span className="text-[10px] font-mono tracking-[0.25em] text-[#64748B]">SCROLL</span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-[#38BDF8]/60 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
