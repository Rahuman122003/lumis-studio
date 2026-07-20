"use client";

import React, { useRef } from "react";
import Footer from "@/components/Footer";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Sparkles,
  Zap,
  Heart,
  Shield,
  Building2,
  BarChart2,
  Cpu,
  Globe,
  Users,
  ChevronRight,
  Bot,
  Braces,
  Headphones,
  BookOpen,
  Briefcase,
  Phone,
} from "lucide-react";
import { useState, useEffect } from "react";
import { MetalButton } from "@/components/ui/metal-button";

/* ─── helpers ──────────────────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ─── data ─────────────────────────────────────────────────────────────────── */
const proxRoles = [
  {
    mascot: "/mascot/serviceprox.png",
    title: "Service Guide",
    desc: "Walks you through every Probiz product — from BMS command centres to smart energy dashboards. No jargon, just clarity.",
    color: "#10b981",
    icon: <Headphones size={18} />,
  },
  {
    mascot: "/mascot/workprox.png",
    title: "Work Assistant",
    desc: "Helps facility teams navigate the Probiz platform, run reports, acknowledge alarms, and configure automations in real time.",
    color: "#3b82f6",
    icon: <Briefcase size={18} />,
  },
  {
    mascot: "/mascot/processprox.png",
    title: "Process Expert",
    desc: "Guides you through onboarding, deployment pipelines, system audits, and best practices — step by step.",
    color: "#a855f7",
    icon: <Cpu size={18} />,
  },
  {
    mascot: "/mascot/storiesprox.png",
    title: "Story Teller",
    desc: "Shares real customer success stories, case studies, and measurable outcomes from buildings powered by Probiz.",
    color: "#f59e0b",
    icon: <BookOpen size={18} />,
  },
  {
    mascot: "/mascot/contactprox.png",
    title: "Contact Bridge",
    desc: "Instantly connects you with the right Probiz expert — sales, support, or engineering — without any phone trees.",
    color: "#ef4444",
    icon: <Phone size={18} />,
  },
  {
    mascot: "/mascot/developprox.png",
    title: "Dev Companion",
    desc: "Supports technical teams with API documentation, integration guides, protocol specs, and SDK walkthroughs.",
    color: "#06b6d4",
    icon: <Braces size={18} />,
  },
  {
    mascot: "/mascot/careersprox.png",
    title: "Careers Advisor",
    desc: "Explores open roles, team culture, and growth paths at Probiz Technologies — your first step into the team.",
    color: "#84cc16",
    icon: <Users size={18} />,
  },
];

const chatMessages = [
  { from: "prox", text: "Hey! 👋 I'm Prox. Ask me anything about Probiz!" },
  { from: "user", text: "What is Probiz Energy AI?" },
  {
    from: "prox",
    text: "Probiz Energy AI is our intelligent BMS Command & Control Centre — it gives you real-time control over HVAC, lighting, energy, and all building systems from a single AI-powered dashboard. Want a demo? 🏢⚡",
  },
  { from: "user", text: "How does ProSmart Energy work?" },
  {
    from: "prox",
    text: "PROsmart unifies EB, DG, HVAC, Water and Gas into one live platform with automated tenant billing and an interactive 3D building map. It even generates invoices automatically — zero manual work! 📊",
  },
];

const capabilities = [
  {
    icon: <Building2 size={20} />,
    title: "Smart Building Expertise",
    desc: "Deep knowledge of BMS, HVAC, energy management, and IoT protocols.",
  },
  {
    icon: <BarChart2 size={20} />,
    title: "Energy Analytics",
    desc: "Explains consumption patterns, billing, and ESG metrics in plain language.",
  },
  {
    icon: <Cpu size={20} />,
    title: "Platform Navigation",
    desc: "Guides users through every screen of the Probiz dashboard.",
  },
  {
    icon: <Globe size={20} />,
    title: "Multi-Language Support",
    desc: "Communicates fluently in English, Hindi, and regional Indian languages.",
  },
  {
    icon: <Shield size={20} />,
    title: "Compliance Assistant",
    desc: "Helps teams achieve ISO 50001, ASHRAE, and ESG reporting standards.",
  },
  {
    icon: <Users size={20} />,
    title: "Team Collaboration",
    desc: "Routes conversations to the right human expert when you need it.",
  },
];

/* ─── Parallax Role Card ───────────────────────────────────────────────────── */
function ParallaxRoleCard({
  role,
  index,
}: {
  role: (typeof proxRoles)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.92, 1, 1, 0.96]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y: springY, opacity, scale }}
      className="group relative"
    >
      <div
        className="relative rounded-3xl overflow-hidden transition-all duration-500"
        style={{
          background: `linear-gradient(145deg, ${role.color}08, #0a0a0a 40%, ${role.color}04)`,
          border: `0.5px solid ${role.color}25`,
        }}
      >
        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at 50% 50%, ${role.color}12, transparent 70%)`,
          }}
        />

        {/* Top accent line */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-1/2 opacity-60 group-hover:w-4/5 transition-all duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, ${role.color}, transparent)`,
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-0">
          {/* Left — Mascot with parallax */}
          <div
            className="relative md:col-span-2 flex items-end justify-center overflow-hidden"
            style={{ minHeight: 280 }}
          >
            {/* Ambient glow behind mascot */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-60 h-60 rounded-full blur-3xl opacity-20 group-hover:opacity-35 transition-opacity duration-700"
              style={{ background: role.color }}
            />
            <motion.img
              src={role.mascot}
              alt={role.title}
              className="relative z-10 w-4/5 max-w-[220px] object-contain object-bottom"
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </div>

          {/* Right — Content */}
          <div className="md:col-span-3 p-6 md:p-8 lg:p-10">
            {/* Role badge */}
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: `${role.color}15`,
                  color: role.color,
                  border: `0.5px solid ${role.color}30`,
                }}
              >
                {role.icon}
              </div>
              <span
                className="text-[0.65rem] font-bold uppercase tracking-widest"
                style={{ color: role.color }}
              >
                Role {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h3
              className="text-2xl md:text-3xl font-bold mb-3 tracking-tight"
              style={{ color: role.color }}
            >
              {role.title}
            </h3>
            <p className="text-neutral-400 text-sm md:text-[0.95rem] leading-relaxed mb-6 max-w-md">
              {role.desc}
            </p>

            {/* Status indicator */}
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: role.color }}
              />
              <span className="text-xs text-neutral-500 font-medium">
                Active & Ready
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Animated chat demo ───────────────────────────────────────────────────── */
function ChatDemo() {
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    if (visible >= chatMessages.length) return;
    const t = setTimeout(() => setVisible((v) => v + 1), 1800);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <div
      className="rounded-2xl overflow-hidden border backdrop-blur-xl"
      style={{
        background: "rgba(18,18,18,0.8)",
        borderColor: "var(--color-border)",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center gap-3 px-5 py-3.5 border-b"
        style={{ borderColor: "var(--color-border)" }}
      >
        <img
          src="/mascot/mascot.png"
          alt="Prox"
          className="w-8 h-8 object-contain"
        />
        <div>
          <p className="text-white text-sm font-semibold leading-none">Prox</p>
          <p className="text-[0.65rem] text-[#10b981] mt-0.5 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] inline-block animate-pulse" />{" "}
            Online
          </p>
        </div>
      </div>
      {/* Messages */}
      <div className="p-5 space-y-3 min-h-[280px]">
        <AnimatePresence>
          {chatMessages.slice(0, visible).map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.from === "prox" && (
                <img
                  src="/mascot/mascot.png"
                  alt="Prox"
                  className="w-6 h-6 object-contain self-end mr-2 flex-shrink-0"
                />
              )}
              <div
                className="max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed"
                style={
                  msg.from === "prox"
                    ? {
                        background: "rgba(16,185,129,0.1)",
                        border: "0.5px solid rgba(16,185,129,0.2)",
                        color: "#e5e5e5",
                        borderRadius: "4px 18px 18px 18px",
                      }
                    : {
                        background: "#fff",
                        color: "#080808",
                        borderRadius: "18px 4px 18px 18px",
                      }
                }
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {visible < chatMessages.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="w-6 h-6 mr-2" />
            <div
              className="px-4 py-3 rounded-2xl flex gap-1 items-center"
              style={{
                background: "rgba(16,185,129,0.08)",
                border: "0.5px solid rgba(16,185,129,0.15)",
              }}
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-[#10b981]"
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.18,
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

/* ─── Floating Particle ────────────────────────────────────────────────────── */
function FloatingParticle({
  delay,
  x,
  y,
  size,
  color,
}: {
  delay: number;
  x: string;
  y: string;
  size: number;
  color: string;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        background: color,
        filter: `blur(${size / 3}px)`,
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.3, 0.7, 0.3],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 5 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function ProxPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(heroProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(heroProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 0.9]);

  // Smooth spring values
  const smoothHeroY = useSpring(heroY, { stiffness: 80, damping: 30 });
  const smoothScale = useSpring(heroScale, { stiffness: 80, damping: 30 });

  return (
    <>
      <main className="min-h-screen text-white overflow-hidden">
        {/* ── HERO ────────────────────────────────────────────────────────── */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        >
          {/* Floating particles */}
          <FloatingParticle delay={0} x="15%" y="20%" size={6} color="rgba(16,185,129,0.4)" />
          <FloatingParticle delay={1.2} x="80%" y="15%" size={8} color="rgba(59,130,246,0.3)" />
          <FloatingParticle delay={0.6} x="70%" y="70%" size={5} color="rgba(168,85,247,0.35)" />
          <FloatingParticle delay={2} x="25%" y="75%" size={7} color="rgba(245,158,11,0.3)" />
          <FloatingParticle delay={1.5} x="50%" y="85%" size={4} color="rgba(16,185,129,0.5)" />
          <FloatingParticle delay={0.8} x="90%" y="50%" size={6} color="rgba(6,182,212,0.3)" />

          {/* Radial glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(16,185,129,0.08) 0%, rgba(59,130,246,0.04) 40%, transparent 70%)",
            }}
          />

          {/* Concentric orbit rings */}
          {[280, 440, 600].map((s, i) => (
            <motion.div
              key={s}
              className="absolute rounded-full border pointer-events-none"
              style={{
                width: s,
                height: s,
                top: "50%",
                left: "50%",
                x: "-50%",
                y: "-50%",
                borderColor: `rgba(16,185,129,${0.06 - i * 0.015})`,
              }}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{
                duration: 30 + i * 15,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* Small dot on the ring */}
              <div
                className="absolute w-1.5 h-1.5 rounded-full"
                style={{
                  background: "#10b981",
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  boxShadow: "0 0 8px rgba(16,185,129,0.6)",
                }}
              />
            </motion.div>
          ))}

          <motion.div
            style={{ y: smoothHeroY, opacity: heroOpacity, scale: smoothScale }}
            className="relative z-10 max-w-3xl mx-auto"
          >
            <motion.div
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.12 } } }}
            >
              <motion.div variants={fadeUp}>
                <span
                  className="inline-block text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full mb-6 backdrop-blur-md"
                  style={{
                    color: "#10b981",
                    background: "rgba(16,185,129,0.08)",
                    border: "1px solid rgba(16,185,129,0.2)",
                  }}
                >
                  Probiz Technologies · Virtual Mascot
                </span>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="relative inline-block mb-8"
              >
                <motion.div
                  animate={{
                    y: [0, -14, 0],
                    rotate: [0, 1, -1, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <img
                    src="/mascot/mascot.png"
                    alt="Prox"
                    className="w-48 md:w-64 mx-auto object-contain"
                    style={{
                      filter:
                        "drop-shadow(0 0 60px rgba(16,185,129,0.15)) drop-shadow(0 20px 40px rgba(0,0,0,0.4))",
                    }}
                  />
                </motion.div>

                {/* Orbiting badge */}
                <motion.div
                  className="absolute -top-2 -right-4 text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm"
                  style={{ background: "#10b981", color: "#080808" }}
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  AI Powered ✦
                </motion.div>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-5"
              >
                Hi, I&apos;m{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #10b981, #3b82f6, #a855f7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Prox
                </span>
                <span className="text-white"> 👋</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-xl mx-auto mb-8"
              >
                Your virtual friend and digital companion at{" "}
                <span className="text-white font-semibold">
                  Probiz Technologies
                </span>
                . I&apos;m here to guide, assist, and make every interaction
                with Probiz feel effortless.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex gap-4 justify-center flex-wrap"
              >
                <MetalButton href="/#contact" variant="primary">
                  Chat with Prox <MessageCircle size={15} />
                </MetalButton>
                <MetalButton href="/products" variant="secondary">
                  Explore Products <ArrowRight size={15} />
                </MetalButton>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            animate={{ opacity: [0.3, 0.8, 0.3], y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-[0.6rem] uppercase tracking-widest text-neutral-600 font-medium">
              Scroll to explore
            </span>
            <div className="w-5 h-8 rounded-full border border-neutral-700 flex justify-center pt-1.5">
              <motion.div
                className="w-1 h-2 rounded-full bg-[#10b981]"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </section>

        {/* ── WHAT PROX DOES — Glassmorphism Cards ─────────────────────────── */}
        <section
          className="section-pad relative"
          style={{ background: "var(--color-surface)" }}
        >
          {/* Section glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, rgba(16,185,129,0.06) 0%, transparent 70%)",
            }}
          />

          <div className="container max-w-6xl mx-auto px-6 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            >
              <motion.div variants={fadeUp} className="text-center mb-14">
                <span className="section-label mb-3 block">What Prox Does</span>
                <h2 className="section-h2">
                  Built to assist. Designed to delight.
                </h2>
                <p className="text-neutral-400 max-w-xl mx-auto mt-3 text-[0.95rem] leading-relaxed">
                  Prox isn&apos;t just a mascot — it&apos;s a fully capable
                  virtual assistant that understands Probiz inside out and adapts
                  to whatever you need.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {capabilities.map((c, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="group relative p-6 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background:
                        "linear-gradient(145deg, rgba(18,18,18,0.9), rgba(8,8,8,0.95))",
                      border: "0.5px solid var(--color-border)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                      style={{
                        background:
                          "radial-gradient(300px circle at 50% 0%, rgba(16,185,129,0.08), transparent 70%)",
                      }}
                    />
                    {/* Top line accent */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#10b981]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="flex gap-4 items-start relative z-10">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: "rgba(16,185,129,0.1)",
                          color: "#10b981",
                          border: "0.5px solid rgba(16,185,129,0.2)",
                        }}
                      >
                        {c.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm mb-1.5">
                          {c.title}
                        </h3>
                        <p className="text-neutral-500 text-xs leading-relaxed">
                          {c.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── ROLES GALLERY — Parallax Scroll Cards ──────────────────────────── */}
        <section className="py-24 md:py-32 relative">
          {/* Vertical line accent */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 pointer-events-none hidden lg:block"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(16,185,129,0.15) 20%, rgba(16,185,129,0.15) 80%, transparent 100%)",
            }}
          />

          <div className="container max-w-5xl mx-auto px-6 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={{ show: { transition: { staggerChildren: 0.07 } } }}
              className="text-center mb-20"
            >
              <motion.div variants={fadeUp}>
                <span className="section-label mb-3 block">Prox Roles</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="section-h2">
                Many faces. One mission.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-neutral-400 max-w-lg mx-auto mt-3 text-[0.95rem] leading-relaxed"
              >
                Prox shows up differently depending on what you need — always
                helpful, always friendly.
              </motion.p>
            </motion.div>

            {/* Parallax role cards */}
            <div className="space-y-8 md:space-y-12">
              {proxRoles.map((role, i) => (
                <ParallaxRoleCard key={i} role={role} index={i} />
              ))}

              {/* CTA Card */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={scaleIn}
                className="rounded-3xl p-8 md:p-12 text-center relative overflow-hidden group cursor-default"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(16,185,129,0.06), #0a0a0a 50%)",
                  border: "0.5px dashed rgba(16,185,129,0.3)",
                }}
                whileHover={{ scale: 1.01 }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(500px circle at 50% 50%, rgba(16,185,129,0.08), transparent 70%)",
                  }}
                />
                <Sparkles
                  size={36}
                  className="mx-auto mb-4 relative z-10"
                  style={{ color: "#10b981" }}
                />
                <p className="text-white font-bold text-lg mb-2 relative z-10">
                  More roles coming soon
                </p>
                <p className="text-neutral-500 text-sm max-w-sm mx-auto relative z-10">
                  Prox is always evolving with new skills, personas, and
                  capabilities to serve you better.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── LIVE CHAT DEMO ─────────────────────────────────────────────── */}
        <section
          className="section-pad relative"
          style={{ background: "var(--color-surface)" }}
        >
          {/* Ambient glow */}
          <div
            className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)",
            }}
          />

          <div className="container max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
              >
                <span className="section-label mb-3 block">
                  See Prox in Action
                </span>
                <h2 className="section-h2 mb-4">
                  Real conversations. Real answers.
                </h2>
                <p className="text-neutral-400 text-[0.95rem] leading-relaxed mb-6">
                  Prox understands the full Probiz product suite and responds in
                  seconds — whether you&apos;re a facility manager, developer,
                  or just curious.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Answers product & technical questions instantly",
                    "Guides users through onboarding step-by-step",
                    "Routes complex queries to human experts",
                    "Available 24/7 — no wait times, ever",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      className="flex items-center gap-2.5 text-sm text-neutral-300"
                    >
                      <ChevronRight
                        size={14}
                        style={{ color: "#10b981", flexShrink: 0 }}
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>
                <MetalButton href="/#contact" variant="primary">
                  Talk to Prox Now <ArrowRight size={14} />
                </MetalButton>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30, rotateY: 5 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.65,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <ChatDemo />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ──────────────────────────────────────────────────── */}
        <section className="section-pad relative">
          {/* Double glow */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 100%, rgba(16,185,129,0.08) 0%, transparent 60%)",
            }}
          />

          <div className="container max-w-6xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={scaleIn}
              className="rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, rgba(18,18,18,0.95) 0%, rgba(8,8,8,0.98) 100%)",
                border: "0.5px solid var(--color-border)",
              }}
            >
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none">
                <div
                  className="absolute top-0 left-1/4 right-1/4 h-[1px]"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(16,185,129,0.4), transparent)",
                  }}
                />
              </div>

              {/* Background glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 120%, rgba(16,185,129,0.1) 0%, transparent 60%)",
                }}
              />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 mb-6"
              >
                <img
                  src="/mascot/mascot.png"
                  alt="Prox"
                  className="w-28 md:w-36 mx-auto object-contain"
                  style={{
                    filter:
                      "drop-shadow(0 0 40px rgba(16,185,129,0.12))",
                  }}
                />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative z-10">
                Ready to meet Prox?
              </h2>
              <p className="text-neutral-400 max-w-md mx-auto mb-8 leading-relaxed relative z-10">
                Jump into a conversation and experience what it feels like when
                your building tech actually talks back — helpfully.
              </p>
              <div className="flex flex-wrap gap-4 justify-center relative z-10">
                <MetalButton href="/#contact" variant="primary">
                  Start a Conversation <MessageCircle size={15} />
                </MetalButton>
                <MetalButton href="/products" variant="secondary">
                  See Our Products
                </MetalButton>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
