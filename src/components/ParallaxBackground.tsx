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
        contain: "strict",
        contentVisibility: "auto" as React.CSSProperties["contentVisibility"],
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
          transform: "translateZ(0)",
        }}
      />

      {/* Ambient Orbs — use box-shadow instead of filter:blur for GPU perf */}
      <motion.div
        style={{
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(70,70,70,0.08) 0%, transparent 70%)",
          y: orb1Y,
          zIndex: 2,
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      />

      <motion.div
        style={{
          position: "absolute",
          top: "45%",
          right: "-15%",
          width: "35vw",
          height: "35vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(120,120,120,0.04) 0%, transparent 70%)",
          y: orb2Y,
          zIndex: 2,
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      />
    </div>
  );
}
