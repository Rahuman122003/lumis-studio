"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What types of buildings and facilities does Probiz Automation work with?",
    a: "We partner with organizations across commercial real estate, healthcare, manufacturing, education, hospitality, data centers, and government infrastructure — from single facilities to enterprise portfolios managing hundreds of buildings. Our approach is industry-agnostic but always intelligence-driven.",
  },
  {
    q: "How long does a typical automation deployment take?",
    a: "Timelines vary by project scope. A single building BMS integration typically takes 8–12 weeks from assessment to go-live. A full campus-wide smart building deployment usually runs 16–24 weeks. Multi-site enterprise rollouts are planned in phased tranches to ensure quality and minimize operational disruption.",
  },
  {
    q: "Can you integrate with our existing building systems?",
    a: "Yes — our platform supports open protocols including BACnet, Modbus, MQTT, OPC UA, and REST APIs. We integrate with existing HVAC controllers, electrical meters, fire panels, access control systems, and legacy BMS platforms to create a unified intelligent ecosystem.",
  },
  {
    q: "What does the Probiz Automation Platform include?",
    a: "The platform provides centralized monitoring and control across all building systems: energy management, HVAC optimization, predictive maintenance, asset tracking, digital twin visualization, real-time analytics, and automated alerting. It integrates with your existing infrastructure via our open API.",
  },
  {
    q: "Can we start with energy monitoring and add full automation later?",
    a: "Absolutely. Many clients start with energy monitoring and analytics to establish baseline metrics before committing to full building automation. Our modular platform architecture means you can scale capabilities as your requirements and budget grow.",
  },
  {
    q: "How is pricing structured for Enterprise clients?",
    a: "Enterprise engagements are scoped and priced based on facility count, system complexity, and required service levels. We typically work on a platform license plus implementation basis. Contact our team for a bespoke proposal — most enterprise conversations result in a custom assessment within 48 hours.",
  },
];

function FAQItem({
  faq,
  index,
  inView,
}: {
  faq: { q: string; a: string };
  index: number;
  inView: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      style={{ borderBottom: "0.5px solid var(--color-border)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "22px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          textAlign: "left",
        }}
      >
        <span style={{ fontWeight: 600, fontSize: "0.97rem", lineHeight: 1.4, color: "var(--color-text)" }}>
          {faq.q}
        </span>
        <ChevronDown
          size={17}
          style={{
            flexShrink: 0,
            color: "var(--color-muted)",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        />
      </button>

      {/* Grid-rows accordion trick */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "grid-template-rows 0.3s ease",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--color-muted)",
              lineHeight: 1.75,
              paddingBottom: 22,
              paddingRight: 36,
            }}
          >
            {faq.a}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function FAQ() {
  const { ref, inView } = useInView();

  return (
    <section
      id="faq"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-pad"
    >
      <div
        className="container"
        style={{ maxWidth: 760, marginLeft: "auto", marginRight: "auto" }}
      >
        {/* Header — centred */}
        <motion.div
          className="section-header section-header--center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">FAQ</span>
          <h2 className="section-h2">Questions we get asked a lot</h2>
        </motion.div>

        <div style={{ borderTop: "0.5px solid var(--color-border)" }}>
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
