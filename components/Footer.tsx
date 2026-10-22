"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

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
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

interface SocialLink {
  icon: React.ElementType;
  href: string;
  label: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: GithubIcon,
    href: "https://github.com/hussainabbas6706",
    label: "GitHub Profile",
  },
  {
    icon: LinkedinIcon,
    href: "https://linkedin.com/in/hussainabbas6706",
    label: "LinkedIn Profile",
  },
  {
    icon: Mail,
    href: "mailto:hussainabbas6706@gmail.com",
    label: "Email Contact",
  },
];

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full relative z-20 border-t border-[#1E293B]/60 bg-[#050811]/90 backdrop-blur-md py-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand & Dynamic Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="text-xs font-mono tracking-widest text-[#E2E8F0] font-semibold">
            S.M.H.A.
          </span>
          <span className="hidden sm:inline text-[#64748B]">·</span>
          <p className="text-[11px] md:text-xs tracking-[0.06em] text-[#64748B]">
            © {currentYear} Syed Muhammad Hussain Abbas. All rights reserved.
          </p>
        </div>

        {/* Social Links Row */}
        <div className="flex items-center gap-5">
          {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group relative p-2 text-[#94A3B8] transition-all duration-300 hover:text-[#FFFFFF] hover:scale-110"
            >
              <Icon size={18} />
              <span className="absolute inset-0 -z-10 rounded-full bg-[#38BDF8]/0 blur-md transition-all duration-300 group-hover:bg-[#38BDF8]/20 group-hover:scale-125" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
