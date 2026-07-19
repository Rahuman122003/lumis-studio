"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import React from "react";

export default function ExplainSection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section className="section-pad">
      <div className="container">
        <motion.div
          ref={ref as any}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          style={{
            position: "relative",
            width: "100%",
            borderRadius: 20,
            border: "0.5px solid var(--color-border)",
            background: "rgba(10,10,10,0.5)",
            overflow: "hidden",
          }}
        >
          {/* Image container — fully visible, no cropping */}
          <div
            style={{
              width: "100%",
              overflow: "hidden",
              position: "relative",
              background: "rgba(0,0,0,0.15)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "0.5px solid var(--color-border)",
            }}
          >
            <img
              src="/explain.png"
              alt="Probiz Energy AI Cloud Platform"
              loading="lazy"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "400px",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>

          {/* Content — compact padding */}
          <div style={{ padding: "clamp(1.5rem, 3vw, 2.5rem)" }}>
            <span
              style={{
                display: "inline-block",
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#6ee7b7",
                background: "rgba(16,185,129,0.1)",
                border: "1px solid rgba(16,185,129,0.2)",
                padding: "4px 14px",
                borderRadius: 999,
                marginBottom: 16,
              }}
            >
              AI Cloud Platform
            </span>

            <h2
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                marginBottom: 16,
                maxWidth: 600,
              }}
            >
              Experience the future of building management with{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #6ee7b7, #10b981)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Probiz Energy AI
              </span>
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 16,
              }}
            >
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", lineHeight: 1.65 }}>
                Transform your building management with an advanced AI cloud platform. Seamlessly control ACs, FCUs, lights, and HVAC equipment for optimal comfort.
              </p>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", lineHeight: 1.65 }}>
                A cutting-edge energy monitoring solution harnessing real-time analytics, reporting, and intelligent alarms to empower facility managers.
              </p>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", lineHeight: 1.65 }}>
                Performance prediction delivers invaluable insights for cost savings, improved efficiency, and positive societal impact.
              </p>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", lineHeight: 1.65 }}>
                Continuous automated monitoring with self-sustaining, self-correcting systems that autonomously identify and resolve issues.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
