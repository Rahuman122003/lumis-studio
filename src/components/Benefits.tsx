"use client";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import { TrendingUp, Clock, Users, Shield, Cpu, Award } from "lucide-react";

const stats = [
  { target: 200, suffix: "+", label: "Buildings Managed" },
  { target: 99,  suffix: "%", label: "System Uptime" },
  { target: 18,  suffix: "+", label: "Industries" },
  { target: 35,  suffix: "%", label: "Energy Savings" },
];

const benefits = [
  {
    icon: <TrendingUp size={22} strokeWidth={1.5} />,
    title: "AI-Driven Automation",
    desc: "Every automation decision is powered by artificial intelligence, delivering actionable insights not just raw data.",
  },
  {
    icon: <Clock size={22} strokeWidth={1.5} />,
    title: "Real-Time Monitoring",
    desc: "Centralized dashboards provide instant visibility into every connected asset across multiple facilities.",
  },
  {
    icon: <Users size={22} strokeWidth={1.5} />,
    title: "Predictive Maintenance",
    desc: "AI continuously monitors equipment health to identify potential issues before they become failures.",
  },
  {
    icon: <Shield size={22} strokeWidth={1.5} />,
    title: "Enterprise-Grade Security",
    desc: "End-to-end encryption, role-based access controls, and compliance-ready architecture for critical infrastructure.",
  },
  {
    icon: <Cpu size={22} strokeWidth={1.5} />,
    title: "Scalable Cloud Architecture",
    desc: "Cloud-native platform that scales from a single building to enterprise portfolios with open system integration.",
  },
  {
    icon: <Award size={22} strokeWidth={1.5} />,
    title: "Energy Optimization",
    desc: "Intelligent energy management achieving an average 35% reduction in energy consumption across managed facilities.",
  },
];

function StatItem({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { ref, inView } = useInView(0.3);
  const count = useCountUp(target, 1400, inView);
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ textAlign: "center", padding: "var(--space-md) var(--space-sm)" }}
    >
      <div
        style={{
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: "-0.025em",
          color: "var(--color-text)",
          marginBottom: 8,
        }}
      >
        {count}{suffix}
      </div>
      <div style={{ fontSize: "0.78rem", color: "var(--color-muted)", fontWeight: 500 }}>{label}</div>
    </div>
  );
}

export default function Benefits() {
  const { ref, inView } = useInView();

  return (
    <section
      id="benefits"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-pad"
    >
      <div className="container">
        {/* Header — centred */}
        <motion.div
          className="section-header section-header--center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">WHY PROBIZ AUTOMATION</span>
          <h2 className="section-h2" style={{ maxWidth: 460 }}>
            Built for intelligent infrastructure
          </h2>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            borderTop: "0.5px solid var(--color-border)",
            borderBottom: "0.5px solid var(--color-border)",
            marginBottom: "var(--space-xl)",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={{
                borderRight: i < stats.length - 1 ? "0.5px solid var(--color-border)" : "none",
              }}
            >
              <StatItem {...s} />
            </div>
          ))}
        </motion.div>

        {/* Benefits grid — 2 col with divider lines */}
        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 20,
                padding: "var(--space-lg) var(--space-sm)",
                borderBottom: i < benefits.length - 2 ? "0.5px solid var(--color-border)" : "none",
              }}
            >
              <div
                style={{
                  width: 44, height: 44,
                  borderRadius: 11,
                  border: "0.5px solid var(--color-border)",
                  background: "var(--color-bg)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                  color: "var(--color-text)",
                }}
              >
                {b.icon}
              </div>
              <div style={{ paddingTop: 2 }}>
                <p className="card-title" style={{ marginBottom: 7 }}>{b.title}</p>
                <p style={{ fontSize: "0.875rem", color: "var(--color-muted)", lineHeight: 1.65 }}>{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .benefits-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: var(--space-xl);
          border-top: 0.5px solid var(--color-border);
        }
        @media (max-width: 640px) {
          .benefits-grid { grid-template-columns: 1fr; }
          #benefits [style*="repeat(4"] { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
