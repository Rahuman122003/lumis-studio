"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What types of retail brands does Probiz Automation work with?",
    a: "We partner with brands across fashion, beauty, electronics, food & beverage, luxury, and sportswear — from emerging DTC brands opening their first physical store to global enterprises managing hundreds of locations. Our approach is sector-agnostic but always commercially led.",
  },
  {
    q: "How long does a typical store design and build project take?",
    a: "Timelines vary by project scope. A single shop-in-shop concept typically takes 8–12 weeks from brief to launch. A full flagship store design and build usually runs 16–24 weeks. Multi-market rollouts are planned in phased tranches to maintain quality and momentum.",
  },
  {
    q: "Do you handle international store rollouts?",
    a: "Yes — we've delivered projects in 40+ countries. Our global supplier network, certified installation partners, and standardised rollout playbooks ensure consistent brand execution regardless of market. We manage local compliance, logistics, and quality assurance.",
  },
  {
    q: "What does the Probiz Automation Platform include?",
    a: "The platform centralises your entire retail estate: project management, supplier coordination, budget tracking, design asset library, installation scheduling, and live performance analytics. It integrates with your existing ERP and POS systems via our open API.",
  },
  {
    q: "Can we start with just the design consultancy and add build services later?",
    a: "Absolutely. Many clients start with a strategy and design engagement to validate their concept before committing to a full build. Our modular service model means you can scale your engagement as your confidence and budget grow.",
  },
  {
    q: "How is pricing structured for Enterprise clients?",
    a: "Enterprise engagements are scoped and priced based on project volume, market complexity, and required service levels. We typically work on a retainer plus project basis. Contact our sales team for a bespoke proposal — most Enterprise conversations result in a custom brief within 48 hours.",
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
