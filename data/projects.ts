import { ProjectSlot } from "@/types/portfolio";

export const PROJECT_SLOTS: ProjectSlot[] = [
  {
    id: "safezone",
    index: "01",
    title: "SafeZone — WhatsApp-Based Emergency Triage Prototype",
    description:
      "A WhatsApp-based emergency triage system connecting FastAPI with Supabase/PostgreSQL, Gemini API for in-app AI triage assistant, and WhatsApp Cloud API messaging workflows for real-time reporting.",
    tags: ["React", "TypeScript", "FastAPI", "Supabase", "PostgreSQL", "Gemini API", "WhatsApp API"],
    status: "live",
    demoUrl: "https://safezone.fly.dev",
    githubUrl: "https://github.com/hussainabbas6706",
  },
  {
    id: "devex",
    index: "02",
    title: "DevEx — The Micro-SaaS Marketplace",
    description:
      "A premium, high-performance marketplace engineered for the seamless exchange of Micro-SaaS projects. Beyond a simple listing site, DevEx implements sophisticated System Design principles and Data Structures to ensure a secure, scalable, and ultra-fast user experience.",
    tags: ["React 18", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Socket.io", "Data Structures"],
    status: "live",
    demoUrl: "https://devexpk.vercel.app",
    githubUrl: "https://github.com/SalmanZulfiqarShaikh/DevEx",
  },
];
