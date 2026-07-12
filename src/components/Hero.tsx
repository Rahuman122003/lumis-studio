"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

const cyclingWords = ["Intelligence", "Automation", "Efficiency", "Safety", "Performance"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const { ref: sectionRef, inView } = useInView(0.01);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % cyclingWords.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "calc(68px + 5rem) var(--container-px) 6rem",
        position: "relative",
        overflow: "hidden",
        background: "transparent",
      }}
    >
      {/* Cursor tracking spotlight animation centered and biased to follow the robot head */}
      <Spotlight className="z-0" size={600} biasToCenter={true} biasFactor={0.2} />

      {/* Spline 3D Scene Background - Only rendered when inView is true to maintain high FPS scroll performance */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30 select-none hidden md:block">
        {inView && (
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full pointer-events-none"
          />
        )}
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: 780,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          gap: 0,
        }}
      >
        {/* Platform badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ marginBottom: 28 }}
        >
          <span
            className="tag"
            style={{
              background: "rgba(255,255,255,0.09)",
              color: "rgba(255,255,255,0.58)",
              border: "0.5px solid rgba(255,255,255,0.12)",
              letterSpacing: "0.12em",
            }}
          >
             Smart Building & Industrial Automation
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="hero-h1"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
          style={{
            marginBottom: 28,
            width: "100%",
          }}
        >
           Building{" "}
          <span
            style={{
              display: "inline-block",
              position: "relative",
              minWidth: "6.5ch",
              verticalAlign: "bottom",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={cyclingWords[wordIndex]}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                style={{
                  color: "inherit",
                  textDecoration: "underline",
                  textDecorationColor: "rgba(134,239,172,0.35)",
                  textUnderlineOffset: "8px",
                  textDecorationThickness: "1.5px",
                  display: "inline-block",
                }}
              >
                {cyclingWords[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
          <br />
           Engineered
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.22 }}
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            maxWidth: 500,
            lineHeight: 1.65,
            marginBottom: 40,
          }}
        >
          Probiz Automation transforms traditional infrastructure into intelligent, connected, and autonomous ecosystems using AI, IoT, BMS, and Digital Twin technologies.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.34 }}
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 72,
          }}
        >
          <a
            href="#solutions"
            className="btn-primary"
            style={{
              background: "#FFFFFF",
              color: "#080808",
              padding: "14px 28px",
              fontSize: "0.9rem",
            }}
          >
             Explore Platform <ArrowRight size={15} />
          </a>
          <a
            href="#how-it-works"
            className="btn-secondary"
            style={{
              borderColor: "rgba(255,255,255,0.28)",
              color: "#FFFFFF",
              padding: "14px 28px",
              fontSize: "0.9rem",
            }}
          >
             <Play size={13} fill="currentColor" /> See How It Works
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.52 }}
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "var(--space-sm)",
            paddingTop: "var(--space-lg)",
            borderTop: "0.5px solid rgba(255,255,255,0.1)",
          }}
        >
          {[
            { val: "200+",  label: "Buildings Automated" },
            { val: "99.9%", label: "System Uptime" },
            { val: "35%",   label: "Avg. Energy Savings" },
            { val: "18+",   label: "Industries Served" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center", padding: "var(--space-sm) 0" }}>
              <div
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  marginBottom: 8,
                }}
              >
                {s.val}
              </div>
              <div
                style={{
                  fontSize: "0.72rem",
                  color: "rgba(255,255,255,0.45)",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .hero-stats-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  );
}
