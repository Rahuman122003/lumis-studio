"use client";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Layers, BarChart2, Sparkles, ShoppingBag, Globe, Zap } from "lucide-react";

const cards = [
  {
    icon: <Layers size={18} />,
    label: "BUILDING MANAGEMENT",
    title: "Smart BMS Solutions",
    desc: "Complete Building Management Systems integrating HVAC, lighting, fire safety, and access control into one intelligent, cloud-connected ecosystem.",
    wide: true,
    demo: (
      <div style={{ display: "flex", gap: 6, marginTop: 20 }}>
        {["HVAC", "Lighting", "Safety", "Access"].map((s, i) => (
          <div
            key={s}
            style={{
              flex: 1,
              background: i === 3 ? "#FFFFFF" : "var(--color-surface)",
              color: i === 3 ? "#080808" : "var(--color-muted)",
              borderRadius: 8, padding: "9px 6px",
              fontSize: "0.68rem", fontWeight: 600,
              textAlign: "center",
              border: "0.5px solid var(--color-border)",
            }}
          >
            {s}
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: <BarChart2 size={18} />,
    label: "ENERGY INTELLIGENCE",
    title: "Real-Time Energy Monitoring",
    desc: "Track electricity, water, gas, steam, BTU, solar, and more through one centralized dashboard with live analytics and automated reports.",
    demo: (
      <div style={{ display: "flex", alignItems: "flex-end", gap: 4, marginTop: 20, height: 52 }}>
        {[38, 62, 48, 82, 68, 90, 74].map((h, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: `${h * 0.58}%`,
              borderRadius: "4px 4px 0 0",
              background: i === 5 ? "#FFFFFF" : "var(--color-border)",
            }}
          />
        ))}
      </div>
    ),
  },
  {
    icon: <Sparkles size={18} />,
    label: "AI ANALYTICS",
    title: "Probiz Energy AI Platform",
    desc: "Predictive analytics, anomaly detection, fault identification, and automated optimization — all powered by machine learning.",
    demo: (
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginTop: 20 }}>
        {[1, 2, 3, 4].map((n) => (
          <div
            key={n}
            style={{
              height: 36,
              background: n % 2 === 0 ? "var(--color-surface)" : "var(--color-border)",
              borderRadius: 6,
            }}
          />
        ))}
      </div>
    ),
  },
  {
    icon: <ShoppingBag size={18} />,
    label: "DIGITAL TWIN",
    title: "Digital Twin Technology",
    desc: "Create a living digital replica of your building. Monitor every floor, room, sensor, and asset through an interactive 3D environment.",
    demo: (
      <div style={{ marginTop: 20 }}>
        <div
          style={{
            display: "flex", alignItems: "center", gap: 9,
            background: "var(--color-surface)",
            borderRadius: 8, padding: "9px 12px",
            border: "0.5px solid var(--color-border)",
            fontSize: "0.78rem",
          }}
        >
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#10b981", flexShrink: 0 }} />
          <span style={{ fontWeight: 500 }}>Physical + Digital synced live</span>
        </div>
      </div>
    ),
  },
  {
    icon: <Globe size={18} />,
    label: "IOT INTEGRATION",
    title: "Industrial IoT Platform",
    desc: "Connect thousands of sensors, meters, and controllers using Modbus, BACnet, MQTT, OPC-UA, LoRaWAN, Zigbee, and REST APIs.",
    demo: (
      <div style={{ marginTop: 20, fontSize: "0.85rem", letterSpacing: "0.04em" }}>
        🏢 🏥 🏭 🏫 🏨 🏬
        <span style={{ fontSize: "0.72rem", color: "var(--color-muted)", fontWeight: 500, marginLeft: 6 }}>
          +12 more
        </span>
      </div>
    ),
  },
  {
    icon: <Zap size={18} />,
    label: "PLATFORM",
    title: "One Unified Cloud Platform for All Building Operations",
    desc: "Monitor, automate, optimize, and control every aspect of your building — from HVAC and lighting to utilities, assets, occupancy, and energy — all through one intelligent platform.",
    full: true,
    demo: (
      <div style={{ display: "flex", gap: 8, marginTop: 16, flexWrap: "wrap" }}>
        {["Command Center", "Energy Dashboard", "Digital Twin", "Asset Manager", "Tenant Billing"].map((f) => (
          <span key={f} className="tag">{f}</span>
        ))}
      </div>
    ),
  },
];

export default function Solutions() {
  const { ref, inView } = useInView();

  return (
    <section
      id="solutions"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-pad"
      style={{ background: "var(--color-surface)" }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">WHAT WE DO</span>
          <h2 className="section-h2" style={{ maxWidth: 520 }}>
            End-to-End Smart Building Solutions
          </h2>
        </motion.div>

        {/* Bento */}
        <div className="bento-grid">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className={`card${card.wide ? " bento-wide" : ""}${card.full ? " bento-full" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              style={{
                padding: "var(--space-md)",
                display: "flex",
                flexDirection: "column",
                minHeight: card.full ? 0 : 230,
                background: "var(--color-bg)",
              }}
            >
              {/* Icon + label row */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <div
                  style={{
                    width: 34, height: 34, borderRadius: 8,
                    background: "var(--color-surface)",
                    border: "0.5px solid var(--color-border)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                    color: "var(--color-text)",
                  }}
                >
                  {card.icon}
                </div>
                <span className="section-label">{card.label}</span>
              </div>

              <p className="card-title" style={{ marginBottom: 8 }}>{card.title}</p>
              <p style={{ fontSize: "0.855rem", color: "var(--color-muted)", lineHeight: 1.6, flex: 1 }}>{card.desc}</p>
              {card.demo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
