"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function ParallaxBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // Reduced parallax range to minimize repaints
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const orb3Y = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -10,
        pointerEvents: "none",
        overflow: "hidden",
        background: "var(--color-bg)",
        contain: "strict", // Full layout containment — prevents this layer from affecting rest of DOM
      }}
    >
      {/* Grid Pattern Layer — GPU promoted */}
      <motion.div
        style={{
          position: "absolute",
          inset: "-100px -100px -300px -100px",
          backgroundImage: `
            linear-gradient(var(--grid-color) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          y: gridY,
          zIndex: 1,
          willChange: "transform",
          transform: "translateZ(0)", // Force GPU compositing layer
        }}
      />

      {/* Ambient Orbs — reduced blur radii for better GPU perf */}
      <motion.div
        style={{
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: "60vw",
          height: "60vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(70,70,70,0.1) 0%, rgba(10,10,10,0) 70%)",
          filter: "blur(60px)", // Reduced from 90px
          y: orb1Y,
          zIndex: 2,
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      />

      <motion.div
        style={{
          position: "absolute",
          top: "40%",
          right: "-15%",
          width: "55vw",
          height: "55vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(120,120,120,0.05) 0%, rgba(10,10,10,0) 70%)",
          filter: "blur(70px)", // Reduced from 110px
          y: orb2Y,
          zIndex: 2,
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      />

      <motion.div
        style={{
          position: "absolute",
          top: "70%",
          left: "-5%",
          width: "50vw",
          height: "50vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(90,90,90,0.07) 0%, rgba(10,10,10,0) 70%)",
          filter: "blur(65px)", // Reduced from 100px
          y: orb3Y,
          zIndex: 2,
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      />
    </div>
  );
}
