"use client";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import React from "react";

export default function SecSection() {
  const { ref, inView } = useInView(0.15);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#0A0A0A] text-white py-16 my-8 rounded-3xl border border-neutral-800 shadow-2xl overflow-hidden"
    >
      <div className="container">
        {/* Header — centred */}
        <motion.div
          className="section-header section-header--center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "var(--space-lg)" }}
        >
          <span
            className="section-label px-3 py-1 rounded-full border border-[#10b981]/30 bg-[#10b981]/10 font-bold"
            style={{
              color: "#FFFFFF",
              WebkitTextStroke: "0.8px #10b981",
              textShadow: "0 0 10px rgba(16, 185, 129, 0.6)",
            }}
          >
            PROBIZ TECHNOLOGIES
          </span>
          <h2
            className="section-h2 text-white"
            style={{
              maxWidth: 640,
              color: "#FFFFFF",
            }}
          >
            Probiz Automation: A Division of Probiz Technologies
          </h2>
          <p
            style={{
              color: "#A3A3A3",
              fontSize: "1rem",
              lineHeight: 1.65,
              maxWidth: 540,
              marginTop: 10,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Operating under the banner of Probiz Technologies, we bridge the gap between physical infrastructure and cloud-based intelligence with our open IoT frameworks, BACnet/Modbus integrations, and Digital Twin architecture.
          </p>
        </motion.div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            style={{
              width: "100%",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              background: "rgba(255, 255, 255, 0.02)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="/sec.png"
              alt="Infrastructure visualization"
              loading="lazy"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
