"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles, Zap, Heart } from "lucide-react";
import Link from "next/link";

const traits = [
  { icon: <MessageCircle size={16} />, label: "Always Available",   desc: "24/7 conversational support — no hold music, no tickets." },
  { icon: <Sparkles size={16} />,      label: "Knows Everything",   desc: "Deep knowledge of every Probiz product and service." },
  { icon: <Zap size={16} />,           label: "Instant Answers",    desc: "Real-time responses powered by Probiz AI." },
  { icon: <Heart size={16} />,         label: "Genuinely Friendly", desc: "Built to feel like a teammate, not a chatbot." },
];

export default function ProxSectionInner() {
  return (
    <section className="section-pad" style={{ background: "var(--color-surface)", overflow: "hidden" }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — mascot */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-start"
          >
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ background: "radial-gradient(circle, #10b981 0%, transparent 70%)", transform: "scale(1.4)" }}
            />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <div
                className="relative rounded-3xl overflow-hidden border"
                style={{
                  background: "linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(8,8,8,0.9) 60%)",
                  borderColor: "rgba(16,185,129,0.2)",
                  padding: "2rem 2rem 0",
                  maxWidth: 360,
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                  <span className="text-xs font-semibold text-[#10b981] uppercase tracking-widest">Online · Probiz HQ</span>
                </div>
                <div
                  className="rounded-2xl rounded-tl-sm px-4 py-3 mb-5 text-sm text-neutral-200 leading-relaxed"
                  style={{ background: "rgba(16,185,129,0.1)", border: "0.5px solid rgba(16,185,129,0.2)" }}
                >
                  Hey! I&apos;m <strong className="text-white">Prox</strong> — your virtual friend at Probiz. 👋<br />
                  Ask me anything about our products, solutions, or how we can help your building.
                </div>
                <img
                  src="/mascot/mascot.png"
                  alt="Prox — Probiz Virtual Assistant"
                  className="w-full object-contain object-bottom"
                  style={{ maxHeight: 280, display: "block" }}
                />
              </div>
            </motion.div>

            <div
              className="absolute top-6 -right-2 md:right-4 text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-md"
              style={{ background: "rgba(8,8,8,0.8)", border: "0.5px solid rgba(16,185,129,0.3)", color: "#10b981" }}
            >
              🏢 Smart Buildings
            </div>
            <div
              className="absolute bottom-16 -right-2 md:right-2 text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-md"
              style={{ background: "rgba(8,8,8,0.8)", border: "0.5px solid rgba(59,130,246,0.3)", color: "#3b82f6" }}
            >
              ⚡ Energy AI
            </div>
          </motion.div>

          {/* Right — copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <span className="section-label">Meet Prox</span>
            <h2 className="section-h2" style={{ maxWidth: 460 }}>
              Your virtual friend at Probiz
            </h2>
            <p style={{ color: "var(--color-muted)", fontSize: "0.95rem", lineHeight: 1.7, maxWidth: 440 }}>
              Prox is the official mascot and virtual companion of Probiz Technologies —
              always on, always helpful, and built to guide you through everything Probiz.
              From product demos to technical support, Prox has you covered.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {traits.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3 p-4 rounded-xl"
                  style={{ background: "var(--color-bg)", border: "0.5px solid var(--color-border)" }}
                >
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(16,185,129,0.1)", color: "#10b981" }}>
                    {t.icon}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold mb-0.5">{t.label}</p>
                    <p className="text-neutral-500 text-xs leading-relaxed">{t.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-3 pt-2 flex-wrap">
              <Link href="/prox" className="btn-primary" style={{ padding: "12px 24px", fontSize: "0.875rem" }}>
                Meet Prox <ArrowRight size={14} />
              </Link>
              <Link href="/#contact" className="btn-secondary" style={{ padding: "12px 24px", fontSize: "0.875rem" }}>
                Chat with Us
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
