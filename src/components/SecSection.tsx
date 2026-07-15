"use client";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import React from "react";

export default function SecSection() {
  const { ref, inView } = useInView(0.15);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        paddingTop: "var(--space-lg)",
        paddingBottom: "var(--space-lg)",
        background: "var(--color-bg)",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ display: "flex", justifyContent: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: "100%",
            borderRadius: "16px",
            overflow: "hidden",
            border: "0.5px solid var(--color-border)",
            background: "rgba(255, 255, 255, 0.01)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/sec.png"
            alt="Infrastructure visualization"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
