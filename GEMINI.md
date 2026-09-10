# Portfolio Project Guidelines

Minimal, space-themed portfolio site for **Syed Muhammad Hussain Abbas** (BSCS Undergraduate | Software Engineer | Learning AI & ML). The design focuses on mathematical elegance, linear algebra concept visualization, and AI/ML foundations using a dark cosmic grid aesthetic.

---

## Tech Stack & Dependencies
- **Framework:** Next.js (App Router), TypeScript
- **Styling:** Tailwind CSS, `clsx`, `tailwind-merge`
- **Animations & Smooth Motion:** `framer-motion` (micro-interactions), `lenis` (smooth inertia scrolling)
- **Grid Canvas & Graphics:** `@react-three/fiber`, `@react-three/drei`
- **Icons:** `lucide-react`

---

## Color Palette & Visual Tokens
- **Deep Space Background:** `#050811` to `#0B0F19` (Low-contrast navy-black)
- **Coordinate Grid Lines:** `#1E293B` or `#2A3850` (Rendered at 15–20% opacity)
- **Headline Typography:** `#3B5284` to `#4B6584` (Muted steel blue)
- **Secondary Text & Nav:** `#94A3B8` (Cool slate gray) and `#E2E8F0` (Off-white)
- **Vector Core (Glowing Asteroid):** `#FFFFFF` center fading out to `#38BDF8` (Light cyan) and `#00D2FF` (Electric sky blue)
- **Grid Axes & Points (X, Y, Z):** `#7DD3FC` (Subtle cyan accent)

---

## Architecture & Code Guidelines
- **Component Standard:** Use functional React components with strict TypeScript types/interfaces for all props and state.
- **Layout Aesthetics:** Keep UI minimal, sharp, and uncluttered. Avoid overly complex multi-layered canvas backgrounds or distracting planetary assets.
- **Hero Visual:** Feature a translucent background coordinate grid with an animated, glowing 3D/2D vector trajectory passing smoothly through the origin $(0, 0, 0)$.
- **Performance:** Ensure graphics loops in `@react-three/fiber` and Framer Motion transitions are optimized to run at 60+ FPS without blocking main thread interactions.