"use client";
import React from "react";
import { motion } from "framer-motion";

// --- Types ---
interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
  company: string;
}

// --- Data — Probiz Automation context ---
const testimonials: Testimonial[] = [
  {
    text: "Probiz Automation completely transformed how we manage our building. Energy costs dropped 35% in the first quarter — the AI insights are genuinely actionable.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sarah Mitchell",
    role: "Director of Facilities",
    company: "Brigade Group",
  },
  {
    text: "The Digital Twin gave us real-time visibility across all 12 floors. We can now predict equipment issues days before they happen.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "David Chen",
    role: "VP of Operations",
    company: "Mercedes-Benz",
  },
  {
    text: "Our HVAC and air quality systems have maintained 99.9% uptime since deployment. The support team is exceptional — always available.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Dr. Priya Sharma",
    role: "Chief Operating Officer",
    company: "NXP Semiconductors",
  },
  {
    text: "Unplanned downtime on our manufacturing floor dropped 42%. The predictive maintenance alerts have become the backbone of our strategy.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Marcus Webb",
    role: "Plant Manager",
    company: "IBM",
  },
  {
    text: "PUE improved by 28% across our data center portfolio. The energy dashboard gives us granular control we never had before.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Aisha Raza",
    role: "Infrastructure Lead",
    company: "L&T",
  },
  {
    text: "Onboarding was smooth and fast. The Probiz team understood our hospital's unique compliance requirements from day one.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Dr. Anita Verma",
    role: "Facility Manager, Healthcare",
    company: "Brigade Group",
  },
  {
    text: "We unified 8 campus buildings onto one platform in under 6 months. The centralized dashboard has been a game-changer for our team.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "James Okonkwo",
    role: "Campus Operations Director",
    company: "Mercedes-Benz",
  },
  {
    text: "The IoT integration with our legacy systems was seamless. Modbus and BACnet devices connected without any infrastructure overhaul.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Leila Nasser",
    role: "Building Technology Manager",
    company: "NXP Semiconductors",
  },
  {
    text: "Energy benchmarking across our hotel chain is now automated. We reduced carbon emissions significantly within the first year.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Omar Siddiqui",
    role: "Sustainability Director",
    company: "L&T",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// --- Column Component ---
const TestimonialsColumn = ({
  testimonials,
  duration = 15,
  className = "",
}: {
  testimonials: Testimonial[];
  duration?: number;
  className?: string;
}) => (
  <div className={className} style={{ flexShrink: 0 }}>
    <motion.ul
      animate={{ translateY: "-50%" }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        paddingBottom: 20,
        listStyle: "none",
        margin: 0,
        padding: 0,
      }}
    >
      {[...Array(2)].map((_, index) => (
        <React.Fragment key={index}>
          {testimonials.map(({ text, image, company }, i) => (
            <motion.li
              key={`${index}-${i}`}
              aria-hidden={index === 1 ? "true" : "false"}
              whileHover={{
                scale: 1.03,
                y: -6,
                transition: { type: "spring", stiffness: 400, damping: 17 },
              }}
              style={{
                padding: "24px",
                borderRadius: 16,
                border: "0.5px solid var(--color-border)",
                background: "var(--color-surface)",
                maxWidth: 300,
                width: "100%",
                cursor: "default",
                userSelect: "none",
                flexShrink: 0,
              }}
            >
              <blockquote style={{ margin: 0, padding: 0 }}>
                <p
                  style={{
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: 1.65,
                    fontSize: "0.875rem",
                    margin: 0,
                  }}
                >
                  "{text}"
                </p>
                <footer
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginTop: 20,
                  }}
                >
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt="Testimonial avatar"
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "0.5px solid var(--color-border)",
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        color: "#10b981",
                        fontWeight: 600,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {company}
                    </span>
                  </div>
                </footer>
              </blockquote>
            </motion.li>
          ))}
        </React.Fragment>
      ))}
    </motion.ul>
  </div>
);

// --- Main Export ---
export default function TestimonialsV2() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="section-pad"
      style={{ background: "var(--color-surface)", overflow: "hidden" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="container"
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: 540,
            margin: "0 auto",
            marginBottom: "var(--space-xl)",
          }}
        >
          <span className="section-label" style={{ marginBottom: 16 }}>
            TESTIMONIALS
          </span>
          <h2
            id="testimonials-heading"
            className="section-h2"
            style={{ marginBottom: 16 }}
          >
            Trusted by industry leaders
          </h2>
          <p
            style={{
              color: "var(--color-muted)",
              fontSize: "1rem",
              lineHeight: 1.65,
              maxWidth: 420,
            }}
          >
            Discover how leading organizations reduce energy costs, maximize uptime, and build smarter facilities with Probiz Automation.
          </p>
        </div>

        {/* Scrolling columns */}
        <div
          role="region"
          aria-label="Scrolling testimonials"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 20,
            maxHeight: 720,
            overflow: "hidden",
            maskImage:
              "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
          }}
        >
          <TestimonialsColumn testimonials={firstColumn} duration={18} />
          <TestimonialsColumn
            testimonials={secondColumn}
            duration={22}
            className="hidden md:block"
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            duration={20}
            className="hidden lg:block"
          />
        </div>
      </motion.div>
    </section>
  );
}
