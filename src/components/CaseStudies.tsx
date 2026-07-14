"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const cases = [
  {
    category: "COMMERCIAL BUILDING",
    company: "Metro Corporate Towers",
    result: "35% energy reduction with AI-powered BMS integration",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=80",
  },
  {
    category: "HEALTHCARE",
    company: "City General Hospital",
    result: "99.9% uptime on critical HVAC and air quality systems",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=700&q=80",
  },
  {
    category: "MANUFACTURING",
    company: "Apex Industrial Group",
    result: "42% reduction in unplanned equipment downtime",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&q=80",
  },
  {
    category: "DATA CENTER",
    company: "CloudNex Infrastructure",
    result: "28% improvement in PUE through smart cooling automation",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&q=80",
  },
  {
    category: "SMART CAMPUS",
    company: "National University",
    result: "Unified automation across 12 buildings in 6 months",
    img: "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
  },
];

const CARD_WIDTH = 330;
const GAP = 14;
const TOTAL_SCROLL_WIDTH = cases.length * (CARD_WIDTH + GAP) - GAP;

export default function CaseStudies() {
  const { ref: inViewRef, inView } = useInView();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [viewportWidth, setViewportWidth] = useState(700);

  useEffect(() => {
    setViewportWidth(window.innerWidth);
    const onResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Track scroll progress of the tall outer section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Map vertical scroll progress → horizontal translateX
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -(TOTAL_SCROLL_WIDTH - viewportWidth * 0.65)]
  );

  return (
    <section
      id="case-studies"
      ref={sectionRef}
      style={{
        height: `${TOTAL_SCROLL_WIDTH}px`,
        position: "relative",
      }}
    >
      {/* Sticky wrapper */}
      <div
        ref={inViewRef as React.RefObject<HTMLDivElement>}
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          overflow: "hidden",
          contain: "layout style",
        }}
      >
        {/* Header */}
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
          </motion.div>
        </div>

        {/* Horizontally-scrolling cards driven by vertical scroll */}
        <motion.div
          style={{
            x,
            display: "flex",
            gap: GAP,
            paddingLeft: "max(calc((100vw - 1100px) / 2), var(--container-px))",
            paddingRight: 80,
            paddingBottom: 6,
            willChange: "transform",
            transform: "translateZ(0)",
          }}
        >
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card"
              style={{
                minWidth: CARD_WIDTH,
                maxWidth: CARD_WIDTH,
                overflow: "hidden",
                flexShrink: 0,
                contain: "layout paint",
              }}
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
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 8,
                  }}
                >
                  {c.company}
                </div>
                <p className="card-title" style={{ color: "#FFFFFF" }}>{c.result}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
