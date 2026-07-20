"use client";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { Spotlight } from "@/components/ui/spotlight";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";
import { MetalButton } from "@/components/ui/metal-button";

const cyclingWords = ["Intelligence", "Automation", "Sustainability", "Efficiency", "Innovation"];

export default function Hero() {
  const { ref: sectionRef, inView } = useInView(0.01);

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

      {/* Video Background - looping herobg.mp4 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.3,
          }}
        >
          <source src="/herobg.mp4" type="video/mp4" />
        </video>
        {/* Dark gradient overlay for readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(8,8,8,0.4) 0%, rgba(8,8,8,0.7) 60%, rgba(8,8,8,1) 100%)",
          }}
        />
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
             AI-Powered Building Automation & Energy Intelligence
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
           Smart Buildings.{" "}
          <AnimatedTextCycle
            words={cyclingWords}
            interval={2500}
            className="hero-cycle-word"
          />
          <br />
           Connected Infrastructure.
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
          Transform commercial buildings into intelligent, energy-efficient ecosystems with AI-driven automation, Digital Twin technology, IoT connectivity, and real-time analytics.
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
          <MetalButton href="#solutions" variant="primary">
            Book a Demo <ArrowRight size={15} />
          </MetalButton>
          <MetalButton href="#how-it-works" variant="secondary">
            <Play size={13} fill="currentColor" /> Schedule Consultation
          </MetalButton>
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
            { val: "200+",  label: "Buildings Managed" },
            { val: "99.9%", label: "System Uptime" },
            { val: "35%",   label: "Energy Cost Reduction" },
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
