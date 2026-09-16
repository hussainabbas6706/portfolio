"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Compass, Activity } from "lucide-react";

interface TelemetryHUDProps {
  cursorCoords: { x: number; y: number; z: number };
}

export default function TelemetryHUD({ cursorCoords }: TelemetryHUDProps) {
  const [fps, setFps] = useState(60);

  // Monitor frame rate
  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animId: number;

    const calculateFps = () => {
      frameCount++;
      const now = performance.now();
      if (now - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (now - lastTime)));
        frameCount = 0;
        lastTime = now;
      }
      animId = requestAnimationFrame(calculateFps);
    };

    animId = requestAnimationFrame(calculateFps);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <aside
      aria-label="High-Dimensional Mathematical Telemetry HUD"
      className="fixed bottom-16 right-6 md:right-12 z-40 hidden sm:flex flex-col items-end gap-2.5 pointer-events-none select-none font-mono"
    >
      {/* Sci-Fi Mathematical Telemetry Badge */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col gap-1.5 p-3 rounded-xl bg-[#070C18]/85 border border-[#1E293B]/70 backdrop-blur-md shadow-2xl text-[10px] text-[#94A3B8]"
      >
        <div className="flex items-center justify-between gap-6 border-b border-[#1E293B]/60 pb-1.5 text-[#CBD5E1]">
          <span className="flex items-center gap-1.5 text-[10px] tracking-wider text-[#7DD3FC] font-semibold">
            <Compass size={12} className="text-[#38BDF8]" />
            SPACE: ℝ³
          </span>
          <span className="flex items-center gap-1 text-[9px] text-[#64748B]">
            <Activity size={10} className="text-[#38BDF8]/80" />
            {fps} FPS
          </span>
        </div>

        {/* Vector Coordinates Projection */}
        <div className="flex items-center gap-3 text-[10px]">
          <span className="text-[#64748B]">PROJECTION:</span>
          <span className="text-[#E2E8F0] tracking-tight">
            [{cursorCoords.x >= 0 ? `+${cursorCoords.x.toFixed(2)}` : cursorCoords.x.toFixed(2)},{" "}
            {cursorCoords.y >= 0 ? `+${cursorCoords.y.toFixed(2)}` : cursorCoords.y.toFixed(2)},{" "}
            {cursorCoords.z >= 0 ? `+${cursorCoords.z.toFixed(2)}` : cursorCoords.z.toFixed(2)}]
          </span>
        </div>

        {/* Basis Vectors Indicator & Interaction Hint */}
        <div className="flex items-center justify-between text-[9px] text-[#64748B] pt-0.5">
          <span>BASIS: [î, ĵ, k̂]</span>
          <span className="text-[#38BDF8]/90 font-medium">CLICK: PULSE</span>
        </div>
      </motion.div>
    </aside>
  );
}
