"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  const { ref, inView } = useInView();
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  };

  return (
    <section
      id="contact"
      ref={(el) => {
        (ref as React.MutableRefObject<HTMLElement | null>).current = el;
        (sectionRef as React.MutableRefObject<HTMLElement | null>).current = el;
      }}
      onMouseMove={handleMouseMove}
      className="cta-glow"
      style={{
        background: "#080808",
        padding: "var(--space-2xl) 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          maxWidth: 740,
        }}
      >
        <motion.span
          className="section-label"
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          style={{ color: "rgba(255,255,255,0.38)", marginBottom: 20 }}
        >
          GET STARTED
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
          style={{
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            fontWeight: 800,
            lineHeight: 1.08,
            color: "#FFFFFF",
            letterSpacing: "-0.025em",
            marginBottom: 24,
            maxWidth: 660,
          }}
        >
          Ready to transform your retail presence?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.16 }}
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "1.05rem",
            maxWidth: 480,
            lineHeight: 1.65,
            marginBottom: 40,
          }}
        >
          Join 500+ leading retail brands who trust Probiz Automation to design, build,
          and scale experiences that convert.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.24 }}
          style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}
        >
          <a
            href="mailto:hello@probiz.io"
            className="btn-primary"
            style={{ background: "#FFFFFF", color: "#080808", padding: "15px 30px", fontSize: "0.9rem" }}
          >
            Book a Discovery Call <ArrowRight size={15} />
          </a>
          <a
            href="#solutions"
            className="btn-secondary"
            style={{
              borderColor: "rgba(255,255,255,0.22)",
              color: "#FFFFFF",
              padding: "15px 30px",
              fontSize: "0.9rem",
            }}
          >
            View All Solutions
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.38 }}
          style={{
            fontSize: "0.76rem",
            color: "rgba(255,255,255,0.28)",
            marginTop: 28,
            letterSpacing: "0.02em",
          }}
        >
          No commitment required · Response within 24 hours · Free initial consultation
        </motion.p>
      </div>
    </section>
  );
}
