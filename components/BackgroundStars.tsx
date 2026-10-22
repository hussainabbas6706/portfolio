"use client";

import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  baseOpacity: number;
  speed: number;
  twinkleSpeed: number;
  phase: number;
  highlight: number;
}

export default function BackgroundStars() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinate tracking for gravitational pull
    const mouse = {
      x: -9999,
      y: -9999,
      isHovering: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.isHovering = true;
    };

    const handleMouseLeave = () => {
      mouse.isHovering = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize, { passive: true });

    // Generate balanced starfield
    let stars: Star[] = [];
    const count = Math.min(220, Math.floor((width * height) / 8000));

    const initStars = () => {
      stars = [];
      for (let i = 0; i < count; i++) {
        const baseOpacity = 0.25 + Math.random() * 0.65;
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: 0,
          vy: 0,
          size: Math.random() < 0.85 ? Math.random() * 1.5 + 0.6 : Math.random() * 2.2 + 1.2,
          opacity: baseOpacity,
          baseOpacity,
          speed: 0.05 + Math.random() * 0.12,
          twinkleSpeed: 0.01 + Math.random() * 0.03,
          phase: Math.random() * Math.PI * 2,
          highlight: 0,
        });
      }
    };

    initStars();

    const gravityRadius = 220; // Gravitational sphere of influence in pixels
    const maxPullForce = 0.9;  // Maximum acceleration towards cursor
    let time = 0;

    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        // Base peaceful vertical drift
        s.y -= s.speed;

        // Gravitational pull physics when cursor is active
        if (mouse.isHovering) {
          const dx = mouse.x - s.x;
          const dy = mouse.y - s.y;
          const dist = Math.hypot(dx, dy);

          if (dist > 1 && dist < gravityRadius) {
            // Non-linear gravitational attraction: stronger closer to cursor
            const forceRatio = 1 - dist / gravityRadius;
            const pull = forceRatio * forceRatio * maxPullForce;
            s.vx += (dx / dist) * pull;
            s.vy += (dy / dist) * pull;

            // Highlight star brightness when drawn into gravitational field
            s.highlight = Math.max(s.highlight, forceRatio);
          }
        }

        // Apply velocities with smooth damping
        s.x += s.vx;
        s.y += s.vy;
        s.vx *= 0.92;
        s.vy *= 0.92;
        s.highlight *= 0.94;

        // Wrap around screen boundaries seamlessly
        if (s.y < 0) {
          s.y = height;
          s.x = Math.random() * width;
          s.vx = 0;
          s.vy = 0;
        } else if (s.y > height) {
          s.y = 0;
        }

        if (s.x < 0) s.x = width;
        if (s.x > width) s.x = 0;

        // Sinusoidal twinkling + gravitational illumination boost
        const twinkle = Math.sin(time * s.twinkleSpeed + s.phase) * 0.3;
        const currentOpacity = Math.max(
          0.1,
          Math.min(1, s.baseOpacity + twinkle + s.highlight * 0.5)
        );

        // Render star with dynamic glow
        ctx.beginPath();
        const renderSize = s.size + s.highlight * 1.2;
        ctx.arc(s.x, s.y, renderSize, 0, Math.PI * 2);

        if (s.highlight > 0.1 || s.size > 2) {
          ctx.fillStyle = `rgba(186, 230, 253, ${currentOpacity})`;
          ctx.shadowBlur = 8 + s.highlight * 10;
          ctx.shadowColor = "rgba(56, 189, 248, 0.8)";
        } else {
          ctx.fillStyle = `rgba(226, 232, 240, ${currentOpacity})`;
          ctx.shadowBlur = 0;
        }
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-85"
      aria-hidden="true"
    />
  );
}
