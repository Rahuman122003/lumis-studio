"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Camille Rousseau",
    role: "Chief Retail Officer",
    company: "Nordica Fashion Group",
    quote:
      "Probiz Automation completely transformed how we think about retail space. The results were immediate — our flagship in Paris saw a 148% jump in dwell time within the first quarter. The team's attention to commercial outcomes, not just aesthetics, sets them apart from every agency we've worked with.",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    stars: 5,
  },
  {
    name: "James Whitfield",
    role: "VP of Store Experience",
    company: "TechHaven Electronics",
    quote:
      "The Probiz Automation platform gave us a single source of truth across our 200+ store estate. Budget management, supplier coordination, and live analytics — all in one place. Our rollout speed improved by 40% within six months of onboarding.",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    stars: 5,
  },
  {
    name: "Priya Sharma",
    role: "Head of Brand",
    company: "Solé Luxury",
    quote:
      "We needed a partner who understood luxury retail at a global scale. Probiz Automation delivered a pop-up concept that generated 22,000 footfalls over three days and became a blueprint for our entire experiential strategy going forward.",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    stars: 5,
  },
  {
    name: "Marco de Vries",
    role: "COO",
    company: "Mova Sportswear",
    quote:
      "Standardising our store identity across 80 locations in 18 markets was a logistical nightmare — until Probiz Automation stepped in. The rollout playbook they built for us has become our global brand bible.",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
    stars: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const { ref, inView } = useInView();
  const t = testimonials[index];

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section
      id="testimonials"
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
          <span className="section-label">TESTIMONIALS</span>
          <h2 className="section-h2">Trusted by leading retail brands</h2>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card testimonials-card"
          style={{ overflow: "hidden", background: "var(--color-bg)" }}
        >
          {/* Quote side */}
          <div
            style={{
              padding: "clamp(2rem, 5vw, 3.5rem)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: 380,
              gap: "var(--space-lg)",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 12 }}
                transition={{ duration: 0.3 }}
                style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}
              >
                {/* Stars */}
                <div style={{ display: "flex", gap: 3 }}>
                  {Array(t.stars).fill(0).map((_, i) => (
                    <Star key={i} size={13} fill="#FFFFFF" color="#FFFFFF" />
                  ))}
                </div>

                <blockquote
                  style={{
                    fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
                    fontWeight: 500,
                    lineHeight: 1.65,
                    color: "var(--color-text)",
                    maxWidth: 580,
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>{t.name}</div>
                  <div style={{ fontSize: "0.82rem", color: "var(--color-muted)", marginTop: 4 }}>
                    {t.role} · {t.company}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dot indicators + arrows */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <button
                onClick={prev}
                aria-label="Previous"
                style={{
                  width: 38, height: 38, borderRadius: "50%",
                  border: "0.5px solid var(--color-border)",
                  background: "var(--color-bg)", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 200ms ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#AAAAAA"; e.currentTarget.style.background = "var(--color-surface)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--color-border)"; e.currentTarget.style.background = "var(--color-bg)"; }}
              >
                <ChevronLeft size={15} />
              </button>
              <button
                onClick={next}
                aria-label="Next"
                style={{
                  width: 38, height: 38, borderRadius: "50%",
                  border: "0.5px solid var(--color-border)",
                  background: "var(--color-bg)", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 200ms ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#AAAAAA"; e.currentTarget.style.background = "var(--color-surface)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--color-border)"; e.currentTarget.style.background = "var(--color-bg)"; }}
              >
                <ChevronRight size={15} />
              </button>

              {/* Dot indicators */}
              <div style={{ display: "flex", gap: 6, marginLeft: 4 }}>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Testimonial ${i + 1}`}
                    style={{
                      width: i === index ? 18 : 6, height: 6,
                      borderRadius: 99, border: "none", cursor: "pointer",
                      background: i === index ? "#FFFFFF" : "var(--color-border)",
                      transition: "all 250ms ease",
                      padding: 0,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Photo side */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundImage: `url(${t.photo})`,
                backgroundSize: "cover",
                backgroundPosition: "center top",
                borderLeft: "0.5px solid var(--color-border)",
                minHeight: 280,
              }}
            />
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        .testimonials-card {
          display: grid;
          grid-template-columns: 1fr 340px;
        }
        @media (max-width: 768px) {
          .testimonials-card {
            grid-template-columns: 1fr !important;
          }
          .testimonials-card > div:last-child {
            border-left: none !important;
            border-top: 0.5px solid var(--color-border) !important;
            min-height: 200px !important;
          }
        }
      `}</style>
    </section>
  );
}
