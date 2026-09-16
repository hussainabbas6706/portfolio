"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Lenis from "lenis";
import Navbar from "@/components/Navbar";
import HeroContent from "@/components/HeroContent";
import Footer from "@/components/Footer";
import InspectionTooltip from "@/components/InspectionTooltip";
import TelemetryHUD from "@/components/TelemetryHUD";
import type { LandmarkData } from "@/components/canvas/HeroCanvas";

// Dynamically import Three.js HeroCanvas to ensure clean client-side rendering
const HeroCanvas = dynamic(() => import("@/components/canvas/HeroCanvas"), {
  ssr: false,
});

export default function Home() {
  const [activeLandmark, setActiveLandmark] = useState<LandmarkData | null>(null);
  const [cursorCoords, setCursorCoords] = useState({ x: 0, y: 0, z: 0 });
  const [mousePos, setMousePos] = useState({ x: -999, y: -999 });

  useEffect(() => {
    // Initialize smooth inertia scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const animId = requestAnimationFrame(raf);

    // Track 2D screen cursor position for floating inspection tooltip
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-[#050811] overflow-hidden flex flex-col justify-between">
      {/* Background 2D Coordinate Grid Layer */}
      <div className="absolute inset-0 bg-coordinate-grid opacity-70 pointer-events-none z-0" />

      {/* Cosmic Radial Vignette Depth Layer */}
      <div className="absolute inset-0 cosmic-vignette pointer-events-none z-0" />

      {/* Interactive 3D WebGL Canvas Layer */}
      <HeroCanvas
        onHoverLandmark={setActiveLandmark}
        onCursorCoords={setCursorCoords}
      />

      {/* Floating Holographic Inspection Tooltip (Sub-phase A.3.2) */}
      <InspectionTooltip activeLandmark={activeLandmark} mousePos={mousePos} />

      {/* Mathematical Telemetry HUD (Sub-phase A.3.3) */}
      <TelemetryHUD cursorCoords={cursorCoords} />

      {/* Top Navigation */}
      <Navbar />

      {/* Hero Central Section */}
      <section className="relative z-10 flex-1 flex items-center px-6 sm:px-12 md:px-16 lg:px-20 py-24 sm:py-28 max-w-7xl w-full mx-auto">
        <HeroContent />
      </section>

      {/* Bottom Footer & Social Connections */}
      <Footer />
    </main>
  );
}