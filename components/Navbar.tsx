"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EXPLORATION", href: "#exploration" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 lg:px-16 pointer-events-none"
    >
      {/* Brand Monogram */}
      <div className="pointer-events-auto">
        <a
          href="#"
          className="group inline-flex items-center text-xs md:text-sm font-semibold tracking-[0.3em] text-[#E2E8F0] transition-all duration-300 hover:text-white"
        >
          <span className="relative">
            S.M.H.A.
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#38BDF8] transition-all duration-300 group-hover:w-full" />
          </span>
        </a>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center gap-8 lg:gap-12 pointer-events-auto">
        {NAV_ITEMS.map((item, index) => (
          <motion.a
            key={item.label}
            href={item.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1 * index + 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative text-xs tracking-[0.22em] font-medium text-[#94A3B8] transition-colors duration-300 hover:text-[#E2E8F0]"
          >
            {item.label}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-[#38BDF8] to-[#00D2FF] transition-all duration-300 group-hover:w-full opacity-70" />
          </motion.a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden pointer-events-auto">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-[#94A3B8] hover:text-[#E2E8F0] focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-[#050811]/95 backdrop-blur-xl border-b border-[#1E293B]/40 px-6 py-6 flex flex-col gap-4 pointer-events-auto md:hidden"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs tracking-[0.25em] font-medium text-[#94A3B8] hover:text-[#E2E8F0] py-2 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
