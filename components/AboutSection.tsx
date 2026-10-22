"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Bot, Server, Database, Sparkles } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      icon: Bot,
      title: "AI Integration & Intelligent Systems",
      subtitle: "Gemini API · LLMs · AI Workflows",
      description:
        "Building AI-ready production applications, conversational triage assistants, automated report processing, and context-aware LLM interfaces.",
    },
    {
      icon: GraduationCap,
      title: "BSCS Undergraduate",
      subtitle: "UBIT · University of Karachi",
      description:
        "Rigorous foundation in Computer Science, Data Structures & Algorithms, Database Systems, System Design, and Computer Networks.",
    },
    {
      icon: Server,
      title: "Production Backend Architecture",
      subtitle: "FastAPI · Node.js · Express · REST",
      description:
        "Architecting high-throughput API services, real-time WebSockets, messaging integrations (WhatsApp Cloud API), and secure authentication systems.",
    },
    {
      icon: Database,
      title: "Databases & Cloud Engineering",
      subtitle: "PostgreSQL · Supabase · MongoDB · Docker",
      description:
        "Designing optimized relational schemas, NoSQL document collections, cache strategies, and automated containerized deployments.",
    },
  ];

  const skillPills = [
    "Gemini API",
    "LLM Integration",
    "Prompt Engineering",
    "TypeScript",
    "JavaScript (ES6+)",
    "React 18",
    "Next.js",
    "Tailwind CSS",
    "FastAPI",
    "Python",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Supabase",
    "MongoDB Atlas",
    "Socket.io",
    "Docker",
    "RESTful APIs",
    "Data Structures",
    "Git & GitHub",
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-20 py-24 sm:py-32 max-w-7xl mx-auto z-10"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14"
      >
        <div>
          <span className="text-xs font-mono tracking-[0.25em] text-[#38BDF8] uppercase font-semibold">
            01 / ABOUT
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#E2E8F0] mt-2">
            Engineering & Foundation
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-sans text-[#94A3B8] max-w-md">
          A software engineer dedicated to building AI-ready production applications, high-performance web systems, and scalable backend architectures.
        </p>
      </motion.div>

      {/* Grid of Key Strengths */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12">
        {highlights.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="cyber-card rounded-xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-[#050811] border border-[#1E293B] text-[#38BDF8]">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#E2E8F0] tracking-tight">
                      {item.title}
                    </h3>
                    <span className="text-xs font-mono text-[#38BDF8]/90">
                      {item.subtitle}
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Technical Skill Cloud Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-2xl p-6 sm:p-8 bg-[#070C18]/80 border border-[#1E293B]"
      >
        <div className="flex items-center gap-2 mb-5">
          <Sparkles size={16} className="text-[#38BDF8]" />
          <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#E2E8F0] font-semibold">
            CORE TECHNOLOGIES & AI TOOLS
          </h4>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {skillPills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 rounded-md bg-[#050811] border border-[#1E293B] hover:border-[#38BDF8]/60 text-xs font-mono text-[#CBD5E1] transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
