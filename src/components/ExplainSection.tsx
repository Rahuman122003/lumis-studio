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
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          style={{
            position: "relative",
            width: "100%",
            borderRadius: 24,
            border: "0.5px solid var(--color-border)",
            background: "rgba(10,10,10,0.5)",
            overflow: "hidden",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Image on top — full width, fixed aspect ratio */}
          <div
            style={{
              width: "100%",
              aspectRatio: "21 / 9",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 50%)",
                zIndex: 2,
                pointerEvents: "none",
              }}
            />
            <img
              src="/explain.png"
              alt="Probiz Energy AI Cloud Platform"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          {/* Content below the image */}
          <div
            style={{
              padding: "clamp(2rem, 4vw, 3.5rem)",
              position: "relative",
            }}
          >
            {/* Subtle glow */}
            <div
              style={{
                position: "absolute",
                top: -80,
                left: "50%",
                transform: "translateX(-50%)",
                width: 400,
                height: 200,
                background: "rgba(134,239,172,0.08)",
                filter: "blur(80px)",
                borderRadius: "50%",
                pointerEvents: "none",
              }}
            />

            <div style={{ position: "relative", zIndex: 1 }}>
              <span
                style={{
                  display: "inline-block",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#86efac",
                  background: "rgba(134,239,172,0.1)",
                  border: "1px solid rgba(134,239,172,0.2)",
                  padding: "6px 16px",
                  borderRadius: 999,
                  marginBottom: 24,
                }}
              >
                AI Cloud Platform
              </span>

              <h2
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  marginBottom: 28,
                  maxWidth: 700,
                }}
              >
                Experience the future of building management with{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #86efac, #34d399)",
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
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: 24,
                }}
              >
                <p
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                  }}
                >
                  Transform your building management with the power of an
                  advanced AI cloud platform. Seamlessly control air
                  conditioners, FCUs, lights, and HVAC equipment to ensure
                  optimal comfort and elevate the occupant experience.
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                  }}
                >
                  Introducing Probiz Energy AI, a cutting-edge solution for
                  energy monitoring that reshapes how buildings optimise their
                  energy consumption. Harnessing real-time data analytics,
                  detailed reporting, and intelligent alarms, it empowers
                  building owners and facility managers.
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                  }}
                >
                  Utilising Probiz Energy AI for monitoring and performance
                  prediction offers invaluable insights — informing effective
                  energy management strategies, leading to cost savings,
                  improved performance, and a positive societal impact.
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                  }}
                >
                  Embrace continuous and automated monitoring of buildings and
                  components. Leveraging smart automation and data analysis, it
                  establishes self-sustaining, self-correcting systems capable
                  of autonomously identifying issues and implementing optimal
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
