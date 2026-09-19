"use client";

import React from "react";
import { motion } from "framer-motion";
import { PROJECT_SLOTS } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
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
            02 / PROJECTS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#E2E8F0] mt-2">
            Built with Code
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-sans text-[#94A3B8] max-w-md">
          Selected projects from coursework and independent study.
        </p>
      </motion.div>

      {/* 2x2 Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
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
            className="cyber-card rounded-xl p-6 sm:p-8 flex flex-col justify-between min-h-[260px]"
          >
            {/* Card Header: Index & GitHub link */}
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#64748B] mb-4">
                <span className="text-[#38BDF8]/80 font-semibold">{project.index}</span>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#38BDF8] transition-colors flex items-center gap-1 font-mono text-[11px] tracking-widest"
                  >
                    GITHUB ↗
                  </a>
                )}
              </div>

              {/* Title & Description */}
              <h3 className="font-sans text-lg sm:text-xl font-bold tracking-tight text-[#E2E8F0] uppercase">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] mt-3 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Card Footer: Tech Tags & View Project action */}
            <div className="mt-6 pt-4 border-t border-[#1E293B]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
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

              <a
                href={project.githubUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono tracking-widest text-[#38BDF8] hover:text-[#00D2FF] transition-colors shrink-0 flex items-center gap-1 uppercase"
              >
                VIEW PROJECT ↗
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
