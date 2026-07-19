"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const steps = [
  {
    num: "01",
    title: "Consultation & Site Assessment",
    desc: "We understand your infrastructure, challenges, and business objectives — conducting a comprehensive site assessment to build a data-driven automation strategy tailored to your facility.",
    visual: (
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 10 }}>
        <p style={{ fontSize: "0.72rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-muted)", marginBottom: 4 }}>
           Assessment Dashboard
        </p>
         {["Infrastructure Audit", "Energy Analysis", "Equipment Map", "KPI Baseline"].map((t, i) => (
          <div
            key={t}
            style={{
              display: "flex", alignItems: "center", gap: 12,
              background: "var(--color-surface)", borderRadius: 10,
              padding: "11px 14px",
              border: "0.5px solid var(--color-border)",
            }}
          >
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#FFFFFF", flexShrink: 0 }} />
            <span style={{ fontSize: "0.82rem", fontWeight: 500, flex: 1 }}>{t}</span>
            <div style={{ width: 52, height: 5, background: "var(--color-border)", borderRadius: 4 }}>
              <div style={{ height: "100%", width: `${55 + i * 12}%`, background: "#FFFFFF", borderRadius: 4 }} />
            </div>
            <span style={{ fontSize: "0.7rem", color: "var(--color-muted)", fontWeight: 500, minWidth: 28, textAlign: "right" }}>
              {55 + i * 12}%
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: "02",
    title: "Solution Design & Implementation",
    desc: "Our experts design a customised automation strategy — then execute hardware integration, IoT deployment, software configuration, and cloud onboarding with minimal disruption to your operations.",
    visual: (
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 12 }}>
        <p style={{ fontSize: "0.72rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-muted)", marginBottom: 4 }}>
           Implementation Pipeline
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
           {[["Solution Design", false], ["IoT Deployment", false], ["Cloud Config", true], ["Go Live", false]].map(([t, active]) => (
            <div
              key={t as string}
              style={{
                background: active ? "#FFFFFF" : "var(--color-surface)",
                color: active ? "#080808" : "var(--color-text)",
                borderRadius: 10, padding: "18px 14px",
                border: "0.5px solid var(--color-border)",
                fontSize: "0.8rem", fontWeight: 600,
              }}
            >
              {t as string}
            </div>
          ))}
        </div>
        <div style={{
          background: "var(--color-surface)", borderRadius: 10,
          padding: "10px 14px", border: "0.5px solid var(--color-border)",
          fontSize: "0.78rem", color: "var(--color-muted)",
          display: "flex", alignItems: "center", gap: 8,
        }}>
          <span style={{ color: "#10b981", fontWeight: 600 }}>✓</span>
           Client approved — ready for AI optimization phase
        </div>
      </div>
    ),
  },
  {
    num: "03",
    title: "AI Optimization & Continuous Support",
    desc: "Enable predictive analytics, Digital Twin visualization, and intelligent automation — backed by ongoing monitoring, maintenance, upgrades, and optimization services.",
    visual: (
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
        <p style={{ fontSize: "0.72rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-muted)", marginBottom: 4 }}>
           AI Optimization Progress
        </p>
        {[
           { label: "Digital Twin Active", pct: 100 },
           { label: "AI Predictions Live", pct: 100 },
           { label: "Energy Optimization", pct: 78 },
           { label: "Predictive Alerts",   pct: 30 },
        ].map((s, i) => (
          <div key={s.label}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: "0.8rem", fontWeight: 500 }}>
              <span>{s.label}</span>
              <span style={{ color: "var(--color-muted)" }}>{s.pct}%</span>
            </div>
            <div style={{ background: "var(--color-border)", borderRadius: 4, height: 6 }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${s.pct}%` }}
                transition={{ duration: 0.9, delay: i * 0.15, ease: "easeOut" }}
                style={{
                  height: "100%",
                  background: s.pct === 100 ? "#FFFFFF" : "#555555",
                  borderRadius: 4,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    ),
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const { ref, inView } = useInView();

  return (
    <section
      id="how-it-works"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-pad"
    >
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">OUR PROCESS</span>
          <h2 className="section-h2" style={{ maxWidth: 520 }}>
            From Assessment to Intelligent Operations
          </h2>
        </motion.div>

        {/* Two-col layout */}
        <div className="hiw-grid">
          {/* Left: step buttons */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {steps.map((step, i) => (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                style={{
                  background: active === i ? "#FFFFFF" : "var(--color-bg)",
                  color: active === i ? "#080808" : "var(--color-text)",
                  border: `0.5px solid ${active === i ? "#FFFFFF" : "var(--color-border)"}`,
                  borderRadius: 14,
                  padding: "20px 22px",
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "all 200ms ease",
                  width: "100%",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: active === i ? 10 : 0 }}>
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: "0.68rem",
                      color: active === i ? "rgba(8, 8, 8, 0.55)" : "var(--color-muted)",
                      letterSpacing: "0.06em",
                      minWidth: 20,
                    }}
                  >
                    {step.num}
                  </span>
                  <span className="card-title" style={{ color: "inherit" }}>{step.title}</span>
                  {active === i && (
                    <span
                      style={{
                        marginLeft: "auto",
                        background: "rgba(0,0,0,0.07)",
                        color: "rgba(0,0,0,0.7)",
                        borderRadius: 999,
                        padding: "3px 12px",
                        fontSize: "0.65rem",
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Active
                    </span>
                  )}
                </div>
                {active === i && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      fontSize: "0.875rem",
                      color: "rgba(255,255,255,0.65)",
                      lineHeight: 1.65,
                      marginTop: 2,
                    }}
                  >
                    {step.desc}
                  </motion.p>
                )}
              </motion.button>
            ))}
          </div>

          {/* Right: animated visual */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.38 }}
            className="card"
            style={{ overflow: "hidden", minHeight: 280 }}
          >
            {steps[active].visual}
          </motion.div>
        </div>
      </div>

      <style>{`
        .hiw-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          align-items: start;
        }
        @media (max-width: 768px) {
          .hiw-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
