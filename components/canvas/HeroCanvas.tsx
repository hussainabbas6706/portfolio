"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050811, 0.035);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 15);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    // Group for mouse parallax
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 2. Cosmic Starfield
    const starCount = 450;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);

    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 44;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 28;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 20 - 4;
      starSizes[i] = Math.random() * 2.8 + 1.2;
    }

    starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute("size", new THREE.BufferAttribute(starSizes, 1));

    // Star texture
    const createStarTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.18, "rgba(125, 211, 252, 0.9)");
        gradient.addColorStop(0.45, "rgba(56, 189, 248, 0.35)");
        gradient.addColorStop(1, "rgba(5, 8, 17, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const starMaterial = new THREE.PointsMaterial({
      size: 0.32,
      map: createStarTexture(),
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: 0xffffff,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    mainGroup.add(stars);

    // 3. Mathematical Origin Setup
    // Placed in upper right quadrant matching design mockup
    const getOriginOffset = () => {
      const w = container.clientWidth;
      if (w < 640) return new THREE.Vector3(1.2, 0.8, 0);
      if (w < 1024) return new THREE.Vector3(2.5, 0.8, 0);
      return new THREE.Vector3(3.6, 0.9, 0);
    };

    const originOffset = getOriginOffset();

    // 4. Mathematical Coordinate Axes Group (X, Y, Z)
    const axesGroup = new THREE.Group();
    axesGroup.position.copy(originOffset);
    mainGroup.add(axesGroup);

    const axisLineMaterial = new THREE.LineBasicMaterial({
      color: 0x334155,
      transparent: true,
      opacity: 0.75,
    });

    // Helper to create arrow with axis line and serif label
    const createAxis = (
      dir: THREE.Vector3,
      length: number,
      label: string,
      labelPos: THREE.Vector3
    ) => {
      // Main axis line
      const points = [
        dir.clone().multiplyScalar(-length * 0.35),
        dir.clone().multiplyScalar(length),
      ];
      const geom = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geom, axisLineMaterial);
      axesGroup.add(line);

      // Arrowhead cone
      const coneGeom = new THREE.ConeGeometry(0.08, 0.3, 16);
      const coneMat = new THREE.MeshBasicMaterial({ color: 0x7dd3fc });
      const cone = new THREE.Mesh(coneGeom, coneMat);

      const upAxis = new THREE.Vector3(0, 1, 0);
      cone.quaternion.setFromUnitVectors(upAxis, dir.clone().normalize());
      cone.position.copy(dir.clone().multiplyScalar(length));
      axesGroup.add(cone);

      // Label sprite with crisp typography
      const canvas = document.createElement("canvas");
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.fillStyle = "#7DD3FC";
        ctx.font = "italic 44px 'Cinzel', Georgia, serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(label, 64, 64);
      }
      const texture = new THREE.CanvasTexture(canvas);
      const spriteMat = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: 0.9,
      });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.scale.set(0.65, 0.65, 1);
      sprite.position.copy(labelPos);
      axesGroup.add(sprite);
    };

    // X Axis (Right)
    createAxis(
      new THREE.Vector3(1, 0, 0),
      3.8,
      "X",
      new THREE.Vector3(4.2, 0.0, 0)
    );

    // Y Axis (Up)
    createAxis(
      new THREE.Vector3(0, 1, 0),
      3.6,
      "Y",
      new THREE.Vector3(0.0, 4.0, 0)
    );

    // Z Axis (Projective downward-left depth)
    const zDir = new THREE.Vector3(-0.55, -0.6, 0.58).normalize();
    createAxis(
      zDir,
      3.2,
      "Z",
      zDir.clone().multiplyScalar(3.6)
    );

    // Subtle origin indicator point
    const originDotGeom = new THREE.SphereGeometry(0.05, 16, 16);
    const originDotMat = new THREE.MeshBasicMaterial({ color: 0x7dd3fc });
    const originDot = new THREE.Mesh(originDotGeom, originDotMat);
    axesGroup.add(originDot);

    // 5. Orbital Elliptical Trajectory & Planet Node
    const orbitPoints: THREE.Vector3[] = [];
    const orbitSegments = 120;
    const a = 2.6; // Semi-major axis
    const b = 1.35; // Semi-minor axis
    const orbitTilt = new THREE.Euler(0.45, 0.25, -0.15);

    for (let i = 0; i <= orbitSegments; i++) {
      const theta = (i / orbitSegments) * Math.PI * 2;
      const pt = new THREE.Vector3(Math.cos(theta) * a, Math.sin(theta) * b, 0);
      pt.applyEuler(orbitTilt);
      orbitPoints.push(pt);
    }

    const orbitGeometry = new THREE.BufferGeometry().setFromPoints(orbitPoints);
    const orbitMaterial = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.45,
    });
    const orbitLine = new THREE.Line(orbitGeometry, orbitMaterial);
    axesGroup.add(orbitLine);

    // Glowing orbital satellite node
    const satGeom = new THREE.SphereGeometry(0.08, 16, 16);
    const satMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
    });
    const satellite = new THREE.Mesh(satGeom, satMat);
    axesGroup.add(satellite);

    // 6. Glowing Vector Beam & Trajectory (Passing Through Origin (0,0,0))
    // Direction: upper right (-0.72, -0.62, 0.3)
    const vectorDir = new THREE.Vector3(-0.72, -0.62, 0.3).normalize();
    const beamStart = originOffset.clone().add(vectorDir.clone().multiplyScalar(-7.2));
    const beamEnd = originOffset.clone().add(vectorDir.clone().multiplyScalar(4.2));

    // Radial glow texture for volumetric halos
    const createGlowTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
        grad.addColorStop(0, "rgba(255, 255, 255, 1)");
        grad.addColorStop(0.2, "rgba(56, 189, 248, 0.95)");
        grad.addColorStop(0.5, "rgba(0, 210, 255, 0.4)");
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 128, 128);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const glowTexture = createGlowTexture();

    // Central Radiant White Laser Line
    const beamCoreGeom = new THREE.BufferGeometry().setFromPoints([beamStart, beamEnd]);
    const beamCoreMat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      linewidth: 3,
      transparent: true,
      opacity: 0.95,
    });
    const beamCore = new THREE.Line(beamCoreGeom, beamCoreMat);
    mainGroup.add(beamCore);

    // Multi-layer Glowing Light Streaks / Trailing Filaments
    const filamentGroup = new THREE.Group();
    mainGroup.add(filamentGroup);

    const filamentCount = 22;
    const filaments: { line: THREE.Line; basePts: THREE.Vector3[]; speed: number }[] = [];

    for (let f = 0; f < filamentCount; f++) {
      const fPts: THREE.Vector3[] = [];
      const steps = 36;
      const angle = (f / filamentCount) * Math.PI * 2;
      const radius = (Math.random() * 0.35 + 0.08);

      for (let s = 0; s <= steps; s++) {
        const t = s / steps;
        const basePos = new THREE.Vector3().lerpVectors(beamStart, beamEnd, t);
        // Envelope curve: tapered at endpoints, flared in middle and tail
        const flare = Math.sin(Math.pow(t, 0.6) * Math.PI) * radius;
        basePos.x += Math.cos(angle) * flare;
        basePos.y += Math.sin(angle) * flare * 0.7;
        fPts.push(basePos);
      }

      const fGeom = new THREE.BufferGeometry().setFromPoints(fPts);
      const isElectric = f % 3 === 0;
      const fMat = new THREE.LineBasicMaterial({
        color: isElectric ? 0xffffff : (f % 2 === 0 ? 0x38bdf8 : 0x00d2ff),
        transparent: true,
        opacity: Math.random() * 0.5 + 0.4,
        blending: THREE.AdditiveBlending,
      });

      const fLine = new THREE.Line(fGeom, fMat);
      filamentGroup.add(fLine);
      filaments.push({ line: fLine, basePts: fPts, speed: Math.random() * 2 + 1 });
    }

    // Volumetric Glow Nodes along the vector beam
    const glowSpriteCount = 8;
    const glowSprites: THREE.Sprite[] = [];
    for (let g = 0; g < glowSpriteCount; g++) {
      const t = 0.3 + (g / glowSpriteCount) * 0.7;
      const pos = new THREE.Vector3().lerpVectors(beamStart, beamEnd, t);
      const spriteMat = new THREE.SpriteMaterial({
        map: glowTexture,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending,
        color: 0x38bdf8,
      });
      const sprite = new THREE.Sprite(spriteMat);
      const size = 0.8 + t * 1.8;
      sprite.scale.set(size, size, 1);
      sprite.position.copy(pos);
      mainGroup.add(sprite);
      glowSprites.push(sprite);
    }

    // 7. Vector Core (Asteroid / Polyhedron Core + Directional Arrow)
    const asteroidGroup = new THREE.Group();
    asteroidGroup.position.copy(beamEnd);
    mainGroup.add(asteroidGroup);

    // Faceted icosahedron wireframe (organic meteorite core)
    const asteroidGeom = new THREE.IcosahedronGeometry(0.58, 1);
    const posAttr = asteroidGeom.attributes.position;
    const vertex = new THREE.Vector3();
    for (let v = 0; v < posAttr.count; v++) {
      vertex.fromBufferAttribute(posAttr, v);
      const noise = (Math.sin(vertex.x * 5.0) + Math.cos(vertex.y * 5.0)) * 0.07;
      vertex.addScalar(noise);
      posAttr.setXYZ(v, vertex.x, vertex.y, vertex.z);
    }
    asteroidGeom.computeVertexNormals();

    // Glowing wireframe shell
    const asteroidWireMat = new THREE.MeshBasicMaterial({
      color: 0x7dd3fc,
      wireframe: true,
      transparent: true,
      opacity: 0.95,
    });
    const asteroidMesh = new THREE.Mesh(asteroidGeom, asteroidWireMat);
    asteroidGroup.add(asteroidMesh);

    // Inner glowing white core nugget
    const innerCoreGeom = new THREE.SphereGeometry(0.28, 16, 16);
    const innerCoreMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.98,
      blending: THREE.AdditiveBlending,
    });
    const innerCore = new THREE.Mesh(innerCoreGeom, innerCoreMat);
    asteroidGroup.add(innerCore);

    // Outer radiant cyan bloom halo
    const asteroidBloomMat = new THREE.SpriteMaterial({
      map: glowTexture,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      color: 0x38bdf8,
    });
    const asteroidBloom = new THREE.Sprite(asteroidBloomMat);
    asteroidBloom.scale.set(3.2, 3.2, 1);
    asteroidGroup.add(asteroidBloom);

    // Directional Vector Arrowhead at the forefront
    const arrowConeGeom = new THREE.ConeGeometry(0.22, 0.65, 16);
    const arrowConeMat = new THREE.MeshBasicMaterial({
      color: 0x7dd3fc,
      transparent: true,
      opacity: 0.95,
    });
    const arrowCone = new THREE.Mesh(arrowConeGeom, arrowConeMat);
    const upVector = new THREE.Vector3(0, 1, 0);
    arrowCone.quaternion.setFromUnitVectors(upVector, vectorDir);
    arrowCone.position.copy(vectorDir.clone().multiplyScalar(0.52));
    asteroidGroup.add(arrowCone);

    // 8. Interactive Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const halfX = window.innerWidth / 2;
      const halfY = window.innerHeight / 2;
      mouseX = (e.clientX - halfX) / halfX;
      mouseY = (e.clientY - halfY) / halfY;

      targetRotationY = mouseX * 0.07;
      targetRotationX = -mouseY * 0.05;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // 9. Resize Handling
    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const newOrigin = getOriginOffset();
      axesGroup.position.copy(newOrigin);
    };

    window.addEventListener("resize", onResize);

    // 10. Animation Render Loop (Optimized 60+ FPS using performance.now)
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Smooth camera parallax
      mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.05;
      mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.05;

      // Rotate asteroid core
      asteroidMesh.rotation.x = elapsedTime * 0.4;
      asteroidMesh.rotation.y = elapsedTime * 0.65;

      // Pulse asteroid bloom
      const pulse = 1.0 + Math.sin(elapsedTime * 4.5) * 0.09;
      asteroidBloom.scale.set(3.2 * pulse, 3.2 * pulse, 1);

      // Satellite orbit around coordinate axes
      const satSpeed = elapsedTime * 0.75;
      const satX = Math.cos(satSpeed) * a;
      const satY = Math.sin(satSpeed) * b;
      const satPos = new THREE.Vector3(satX, satY, 0).applyEuler(orbitTilt);
      satellite.position.copy(satPos);

      // Shimmering filament waves
      filaments.forEach((f, idx) => {
        const wave = Math.sin(elapsedTime * 3.5 + idx) * 0.025;
        f.line.position.x = wave;
        f.line.position.y = -wave * 0.6;
      });

      // Twinkling stars
      starMaterial.opacity = 0.85 + Math.sin(elapsedTime * 2.2) * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    // 11. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      renderer.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      orbitGeometry.dispose();
      orbitMaterial.dispose();
      asteroidGeom.dispose();
      asteroidWireMat.dispose();
      innerCoreGeom.dispose();
      innerCoreMat.dispose();
      arrowConeGeom.dispose();
      arrowConeMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    />
  );
}
