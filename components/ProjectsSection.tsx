"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { PROJECT_SLOTS } from "@/data/projects";

function GithubIcon({ size = 14, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
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
            02 / PROJECTS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#E2E8F0] mt-2">
            Featured Systems & Deployments
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-sans text-[#94A3B8] max-w-md">
          Production prototypes, marketplaces, and backend services engineered with real-world integrations.
        </p>
      </motion.div>

      {/* 2x2 Project Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        {PROJECT_SLOTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.8,
              delay: idx * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="cyber-card rounded-xl p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden bg-[#070C18]/85 border border-[#1E293B]"
          >
            {/* Top Bar: Index & Status Tag */}
            <div>
              <div className="flex items-center justify-between text-xs font-mono mb-4">
                <span className="text-[#38BDF8] font-mono font-semibold text-xs tracking-[0.2em] uppercase">
                  PROJECT {project.index}
                </span>
                {project.status === "live" && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/40 text-[#38BDF8] text-[10px] tracking-wider uppercase font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                    LIVE DEPLOYMENT
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <h3 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-[#E2E8F0] group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] mt-3 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Bottom Actions & Tech Tags */}
            <div className="mt-8 pt-5 border-t border-[#1E293B]/70 flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-[#050811] border border-[#1E293B] text-[11px] font-mono text-[#7DD3FC]/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons: Live Demo & GitHub */}
              <div className="flex items-center gap-3 pt-2">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#38BDF8]/15 border border-[#38BDF8] text-[#38BDF8] hover:bg-[#38BDF8]/25 hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all font-mono text-xs tracking-wider uppercase font-semibold"
                  >
                    <span>LIVE DEMO</span>
                    <ExternalLink size={13} />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#050811] border border-[#1E293B] text-[#94A3B8] hover:text-[#E2E8F0] hover:border-[#38BDF8]/40 transition-colors font-mono text-xs tracking-wider uppercase"
                  >
                    <GithubIcon size={13} />
                    <span>CODE</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
