"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { LandmarkData } from "@/components/canvas/HeroCanvas";

interface InspectionTooltipProps {
  activeLandmark: LandmarkData | null;
  mousePos: { x: number; y: number };
}

export default function InspectionTooltip({
  activeLandmark,
  mousePos,
}: InspectionTooltipProps) {
  // Prevent tooltip from overflowing screen bounds
  const left =
    typeof window !== "undefined"
      ? Math.min(mousePos.x + 16, window.innerWidth - 320)
      : mousePos.x + 16;
  const top =
    typeof window !== "undefined"
      ? Math.min(mousePos.y + 16, window.innerHeight - 60)
      : mousePos.y + 16;

  return (
    <AnimatePresence>
      {activeLandmark && (
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 8 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          style={{ left, top }}
          className="fixed z-50 pointer-events-none select-none flex items-center gap-2 px-3 py-2 rounded-lg bg-[#070C18]/92 border border-[#38BDF8]/50 backdrop-blur-md shadow-[0_0_25px_rgba(56,189,248,0.25)] text-[11px] font-mono text-[#E2E8F0]"
        >
          <Sparkles size={14} className="text-[#38BDF8] shrink-0 animate-pulse" />
          <span className="tracking-wide font-medium">{activeLandmark.label}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
