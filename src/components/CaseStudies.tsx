"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cases = [
  {
    category: "FLAGSHIP STORE",
    company: "Nordica Fashion Group",
    result: "+148% dwell time in redesigned flagship",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=700&q=80",
  },
  {
    category: "SHOP-IN-SHOP",
    company: "TechHaven Electronics",
    result: "3.8× conversion lift with new experiential zones",
    img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=700&q=80",
  },
  {
    category: "POP-UP ACTIVATION",
    company: "Solé Luxury",
    result: "22,000 footfalls over 3-day launch pop-up",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
  },
  {
    category: "OMNICHANNEL",
    company: "Greens Organic Market",
    result: "61% increase in basket size post-refit",
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=700&q=80",
  },
  {
    category: "GLOBAL ROLLOUT",
    company: "Mova Sportswear",
    result: "Standardised across 80 stores in 18 months",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&q=80",
  },
];

function NavBtn({
  onClick,
  label,
  children,
}: {
  onClick: () => void;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      style={{
        width: 40, height: 40,
        borderRadius: "50%",
        border: "0.5px solid var(--color-border)",
        background: "var(--color-bg)",
        cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "all 200ms ease",
        color: "var(--color-text)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--color-surface)";
        e.currentTarget.style.borderColor = "#AAAAAA";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "var(--color-bg)";
        e.currentTarget.style.borderColor = "var(--color-border)";
      }}
    >
      {children}
    </button>
  );
}

export default function CaseStudies() {
  const { ref, inView } = useInView();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <section
      id="case-studies"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-pad"
    >
      {/* Header inside container */}
      <div className="container" style={{ marginBottom: "var(--space-lg)" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          <div className="section-header" style={{ marginBottom: 0 }}>
            <span className="section-label">CASE STUDIES</span>
            <h2 className="section-h2">Results that speak for themselves</h2>
          </div>

          <div style={{ display: "flex", gap: 8 }}>
            <NavBtn onClick={() => scroll(-1)} label="Previous">
              <ChevronLeft size={16} />
            </NavBtn>
            <NavBtn onClick={() => scroll(1)} label="Next">
              <ChevronRight size={16} />
            </NavBtn>
          </div>
        </motion.div>
      </div>

      {/* Scrollable row — bleeds to edges but starts at container indent */}
      <div
        ref={scrollRef}
        className="h-scroll"
        style={{
          display: "flex",
          gap: 14,
          paddingLeft: "max(calc((100vw - 1100px) / 2), var(--container-px))",
          paddingRight: "max(calc((100vw - 1100px) / 2), var(--container-px))",
          paddingBottom: 6,
        }}
      >
        {cases.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="card"
            style={{ minWidth: 330, maxWidth: 330, overflow: "hidden", flexShrink: 0 }}
          >
            {/* Image */}
            <div
              style={{
                height: 210,
                backgroundImage: `url(${c.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "14px 14px 0 0",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to bottom, transparent 45%, rgba(0,0,0,0.6))",
                }}
              />
              <span className="tag" style={{ position: "absolute", top: 14, left: 14 }}>
                {c.category}
              </span>
            </div>

            {/* Body */}
            <div style={{ padding: "20px var(--space-md)" }}>
              <div
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  color: "var(--color-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: 8,
                }}
              >
                {c.company}
              </div>
              <p className="card-title">{c.result}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
