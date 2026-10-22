"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2 } from "lucide-react";

function GithubIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
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

function LinkedinIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" r="2" />
    </svg>
  );
}

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus("submitting");
    setTimeout(() => {
      setStatus("sent");
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-20 py-24 sm:py-32 max-w-7xl mx-auto z-10"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16"
      >
        <div>
          <span className="text-xs font-mono tracking-[0.25em] text-[#38BDF8] uppercase font-semibold">
            04 / CONTACT
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#E2E8F0] mt-2">
            Let's Connect & Collaborate
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-sans text-[#94A3B8] max-w-md">
          Open to software engineering roles, full-stack development, and building AI-ready production applications.
        </p>
      </motion.div>

      {/* Grid Layout: Left Info Column + Right Clean Form Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start w-full">
        {/* Left Column: Direct Info & Social Connections */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col justify-between space-y-8"
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-mono tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
              STATUS: OPEN FOR OPPORTUNITIES
            </div>

            <h3 className="text-2xl font-serif font-bold text-[#E2E8F0]">
              Get in Touch
            </h3>

            <p className="text-sm text-[#94A3B8] leading-relaxed">
              Whether you want to discuss full-stack applications, AI integrations, systems engineering, or potential roles, feel free to send a message.
            </p>
          </div>

          {/* Contact Details Cards */}
          <div className="space-y-4 pt-2">
            <a
              href="mailto:hussainabbas6706@gmail.com"
              className="cyber-card p-4 rounded-xl flex items-center gap-4 text-[#94A3B8] hover:text-[#E2E8F0] transition-colors group"
            >
              <div className="p-2.5 rounded-lg bg-[#0B0F19] border border-[#1E293B] group-hover:border-[#38BDF8]/40 transition-colors">
                <Mail size={18} className="text-[#38BDF8]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider">
                  DIRECT EMAIL
                </span>
                <span className="text-xs sm:text-sm font-mono text-[#E2E8F0]">
                  hussainabbas6706@gmail.com
                </span>
              </div>
            </a>

            <a
              href="https://github.com/hussainabbas6706"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-card p-4 rounded-xl flex items-center gap-4 text-[#94A3B8] hover:text-[#E2E8F0] transition-colors group"
            >
              <div className="p-2.5 rounded-lg bg-[#0B0F19] border border-[#1E293B] group-hover:border-[#38BDF8]/40 transition-colors">
                <GithubIcon size={18} className="text-[#38BDF8]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider">
                  GITHUB PROFILE
                </span>
                <span className="text-xs sm:text-sm font-mono text-[#E2E8F0]">
                  github.com/hussainabbas6706
                </span>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/hussainabbas6706"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-card p-4 rounded-xl flex items-center gap-4 text-[#94A3B8] hover:text-[#E2E8F0] transition-colors group"
            >
              <div className="p-2.5 rounded-lg bg-[#0B0F19] border border-[#1E293B] group-hover:border-[#38BDF8]/40 transition-colors">
                <LinkedinIcon size={18} className="text-[#38BDF8]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider">
                  LINKEDIN PROFILE
                </span>
                <span className="text-xs sm:text-sm font-mono text-[#E2E8F0]">
                  linkedin.com/in/hussainabbas6706
                </span>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Clean, Elegant Contact Form Card (No fake terminal commands) */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 w-full"
        >
          <div className="rounded-2xl overflow-hidden border border-[#1E293B] bg-[#070C18]/90 backdrop-blur-md p-6 sm:p-8 shadow-2xl">
            {/* Clean Header Bar */}
            <div className="flex items-center justify-between border-b border-[#1E293B] pb-4 mb-6">
              <h3 className="text-sm font-sans font-semibold text-[#E2E8F0] tracking-wide">
                Send a Message
              </h3>
              <span className="text-[#64748B] text-xs font-mono">
                Direct Inquiry
              </span>
            </div>

            {/* Clean Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-sans font-medium text-[#CBD5E1]"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Your name"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full bg-[#050811] border border-[#1E293B] rounded-lg px-4 py-3 text-sm text-[#E2E8F0] placeholder-[#475569] focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-sans font-medium text-[#CBD5E1]"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full bg-[#050811] border border-[#1E293B] rounded-lg px-4 py-3 text-sm text-[#E2E8F0] placeholder-[#475569] focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-sans font-medium text-[#CBD5E1]"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="How can we work together?"
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full bg-[#050811] border border-[#1E293B] rounded-lg px-4 py-3 text-sm text-[#E2E8F0] placeholder-[#475569] focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="relative group overflow-hidden rounded-lg bg-[#38BDF8]/15 border border-[#38BDF8] hover:bg-[#38BDF8]/25 px-6 py-3 text-xs font-mono tracking-wider text-[#38BDF8] uppercase transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 w-full sm:w-auto font-semibold"
                >
                  {status === "submitting" ? (
                    <>
                      <span className="w-3.5 h-3.5 rounded-full border-2 border-[#38BDF8] border-t-transparent animate-spin" />
                      SENDING...
                    </>
                  ) : status === "sent" ? (
                    <>
                      <CheckCircle2 size={16} className="text-[#38BDF8]" />
                      MESSAGE SENT
                    </>
                  ) : (
                    <>
                      <Send size={14} className="group-hover:translate-x-0.5 transition-transform" />
                      <span>SEND MESSAGE</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
