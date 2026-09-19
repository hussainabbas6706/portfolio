"use client";

import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import InspectionTooltip from "@/components/InspectionTooltip";
import TelemetryHUD from "@/components/TelemetryHUD";
import type { LandmarkData } from "@/components/canvas/HeroCanvas";

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

      {/* Floating Holographic Inspection Tooltip */}
      <InspectionTooltip activeLandmark={activeLandmark} mousePos={mousePos} />

      {/* Mathematical Telemetry HUD */}
      <TelemetryHUD cursorCoords={cursorCoords} />

      {/* Top Navigation */}
      <Navbar activeSection="hero" />

      {/* Hero Section with Framed ℝ³ COORDINATE SPACE Viewport */}
      <HeroSection
        onHoverLandmark={setActiveLandmark}
        onCursorCoords={setCursorCoords}
      />

      {/* Bottom Footer & Social Connections */}
      <Footer />
    </main>
  );
}