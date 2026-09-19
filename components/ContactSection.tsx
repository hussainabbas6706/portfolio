"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, CheckCircle2 } from "lucide-react";

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
      className="relative min-h-screen w-full flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-20 py-24 sm:py-32 max-w-7xl w-full mx-auto"
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
            Let's Build Something
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-sans text-[#94A3B8] max-w-md">
          Open to collaborations, research conversations, job opportunities, and interesting problems. Reach out — I read every message.
        </p>
      </motion.div>

      {/* Grid Layout: Left Info Column + Right Technical Terminal */}
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
              STATUS: OPEN FOR NEW OPPORTUNITIES
            </div>

            <h3 className="text-2xl font-serif font-bold text-[#E2E8F0]">
              Get in Touch
            </h3>

            <p className="text-sm text-[#94A3B8] leading-relaxed">
              Whether you want to discuss machine learning algorithms, software engineering projects, research ideas, or potential career roles, feel free to send a message.
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
                <Github size={18} className="text-[#38BDF8]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider">
                  GITHUB REPOSITORIES
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
                <Linkedin size={18} className="text-[#38BDF8]" />
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

        {/* Right Column: Clean Technical Terminal Console (No Mac Buttons) */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 w-full"
        >
          <div className="cyber-viewport-frame rounded-xl overflow-hidden border border-[#1E293B] bg-[#0B0F19]/90 backdrop-blur-md p-6 sm:p-8">
            {/* Corner Brackets */}
            <div className="corner-bracket-tl" />
            <div className="corner-bracket-tr" />
            <div className="corner-bracket-bl" />
            <div className="corner-bracket-br" />

            {/* Clean Terminal Header Bar (Strictly NO Mac Window Buttons) */}
            <div className="flex items-center justify-between border-b border-[#1E293B] pb-4 mb-6 text-xs font-mono text-[#64748B]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                <span className="text-[#E2E8F0] font-semibold">
                  smha@portfolio:~$ ./send_message
                </span>
              </div>
              <span className="hidden sm:inline text-[#64748B] text-[11px] uppercase tracking-widest">
                [ SECURE TERMINAL ]
              </span>
            </div>

            {/* Terminal Form */}
            <form onSubmit={handleSubmit} className="space-y-5 font-mono">
              {/* Field: Name */}
              <div className="space-y-2">
                <label
                  htmlFor="contact-name"
                  className="block text-xs text-[#7DD3FC] tracking-wider uppercase"
                >
                  &gt; name:
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Enter your name..."
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full bg-[#050811] border border-[#1E293B] rounded-lg px-4 py-3 text-xs sm:text-sm text-[#E2E8F0] placeholder-[#475569] focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all"
                />
              </div>

              {/* Field: Email */}
              <div className="space-y-2">
                <label
                  htmlFor="contact-email"
                  className="block text-xs text-[#7DD3FC] tracking-wider uppercase"
                >
                  &gt; email:
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full bg-[#050811] border border-[#1E293B] rounded-lg px-4 py-3 text-xs sm:text-sm text-[#E2E8F0] placeholder-[#475569] focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all"
                />
              </div>

              {/* Field: Message */}
              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="block text-xs text-[#7DD3FC] tracking-wider uppercase"
                >
                  &gt; message:
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Type your message here..."
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full bg-[#050811] border border-[#1E293B] rounded-lg px-4 py-3 text-xs sm:text-sm text-[#E2E8F0] placeholder-[#475569] focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex items-center justify-between">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="relative group overflow-hidden rounded-lg border border-[#38BDF8]/60 bg-[#38BDF8]/10 hover:bg-[#38BDF8]/20 px-6 py-3 text-xs font-mono tracking-widest text-[#38BDF8] uppercase transition-all duration-300 disabled:opacity-50 flex items-center gap-2"
                >
                  {status === "submitting" ? (
                    <>
                      <span className="w-3 h-3 rounded-full border-2 border-[#38BDF8] border-t-transparent animate-spin" />
                      TRANSMITTING...
                    </>
                  ) : status === "sent" ? (
                    <>
                      <CheckCircle2 size={16} className="text-[#38BDF8]" />
                      MESSAGE TRANSMITTED
                    </>
                  ) : (
                    <>
                      <Send size={14} className="group-hover:translate-x-0.5 transition-transform" />
                      [ TRANSMIT MESSAGE ]
                    </>
                  )}
                </button>

                <span className="text-[11px] text-[#64748B] hidden sm:inline">
                  EXEC: 0x00A4
                </span>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
