"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import pcLogo from "../../../../assets/pclogo.png";
import Footer from "@/components/Footer";
import ProductSubnav from "@/components/ProductSubnav";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";
import {
  Download, ChevronDown, Cpu, Zap, Activity,
  ArrowRight, Shield, Layers, Globe,
  Wifi, Lock, Star
} from "lucide-react";

// ══════════════════════════════════════════════════════════
// PRODUCT DATA
// ══════════════════════════════════════════════════════════
const PC_PRODUCTS = [
  {
    id: "pc-cpu2p-v7",
    name: "PCCPU2P-V7",
    model: "PCCPU2P-V7",
    image: "/pc-products/PCCPU2P-V7.png",
    pdf: "/pc-products/PC Series PC-CPU-V7 (1).pdf",
    category: "CPU Module",
    badge: "Core Controller",
    tagline: "High-performance dual-port CPU controller for advanced automation architectures.",
    specs: ["Dual Communication Ports", "High-Speed Processing", "BACnet/Modbus Support", "DIN Rail Mountable"],
  },
  {
    id: "pc-4ai",
    name: "PC4AI",
    model: "PC4AI",
    image: "/pc-products/PC4AI.png",
    pdf: "/pc-products/PC Series PC-4AI-NTC.pdf",
    category: "Analog Input",
    badge: "4-Channel AI",
    tagline: "4-channel analog input module for precision sensor measurement and monitoring.",
    specs: ["4× Analog Inputs (0–10V / 4–20mA)", "12-Bit Resolution", "Scalable Measurement", "Auto-Calibration"],
  },
  {
    id: "pc-4ao",
    name: "PC4AO",
    model: "PC4AO",
    image: "/pc-products/PC4AO.png",
    pdf: "/pc-products/PC-4AO.pdf",
    category: "Analog Output",
    badge: "4-Channel AO",
    tagline: "4-channel analog output module for precision control of actuators and variable speed drives.",
    specs: ["4× Analog Outputs (0–10V / 4–20mA)", "12-Bit DAC Resolution", "Short-Circuit Protection", "LED Status Indicators"],
  },
  {
    id: "pc-aiao",
    name: "PCAIAO",
    model: "PCAIAO",
    image: "/pc-products/PCAIAO.png",
    pdf: "/pc-products/PC-AIAO.pdf",
    category: "Analog I/O",
    badge: "Combined AI/AO",
    tagline: "Combined analog I/O module integrating both input measurement and output control in a single unit.",
    specs: ["Mixed AI + AO Channels", "Simultaneous I/O Operation", "Wide Input Range", "Plug-and-Play Design"],
  },
  {
    id: "pc-4di1do",
    name: "PC4DI1DO",
    model: "PC4DI1DO",
    image: "/pc-products/PC4DI1DO.png",
    pdf: "/pc-products/PC-4DI1DO.pdf",
    category: "Digital I/O",
    badge: "4DI + 1DO",
    tagline: "Compact 4 digital input and 1 digital output module for mixed monitoring and control tasks.",
    specs: ["4× Digital Inputs", "1× Relay Output (10A)", "Optocoupler Isolation", "24V DC / AC Compatible"],
  },
  {
    id: "pc-2di1do",
    name: "PC-2DI1DO",
    model: "PC-2DI1DO",
    image: "/pc-products/PC-2DI1DO.png",
    pdf: "/pc-products/PC-2DI1DO.pdf",
    category: "Digital I/O",
    badge: "2DI + 1DO",
    tagline: "Entry-level 2 digital input and 1 digital output module for simple control applications.",
    specs: ["2× Digital Inputs", "1× Relay Output", "Compact Form Factor", "DIN Rail / Panel Mount"],
  },
  {
    id: "pc-4di4do",
    name: "PC-4DI4DO",
    model: "PC-4DI4DO",
    image: "/pc-products/PC-4DI4DO.png",
    pdf: "/pc-products/PC Series PC-4DI4DO.pdf",
    category: "Digital I/O",
    badge: "4DI + 4DO",
    tagline: "Balanced 4 digital input and 4 digital output module for symmetric control and status monitoring.",
    specs: ["4× Digital Inputs", "4× Relay Outputs (10A each)", "Dry Contact Inputs", "LED Per-Channel Indicators"],
  },
  {
    id: "pc-8di8do",
    name: "PC-8DI8DO",
    model: "PC-8DI8DO",
    image: "/pc-products/PC-8DI8DO.png",
    pdf: "/pc-products/PC-SERIES PC-8DI8DO.pdf",
    category: "Digital I/O",
    badge: "8DI + 8DO",
    tagline: "High-density 8 digital input and 8 digital output module for comprehensive system control.",
    specs: ["8× Digital Inputs", "8× Relay Outputs", "High Isolation Rating", "Modbus RTU/TCP Ready"],
  },
  {
    id: "pc-16di",
    name: "PC16DI",
    model: "PC16DI",
    image: "/pc-products/PC16DI.png",
    pdf: "/pc-products/PC Series PC-16DI (1).pdf",
    category: "Digital Input",
    badge: "16-Channel DI",
    tagline: "16-channel digital input module for large-scale monitoring and status acquisition applications.",
    specs: ["16× Digital Inputs", "Dry / Wet Contact", "High Scan Rate", "DIN Rail Mountable"],
  },
  {
    id: "pc-4ddam",
    name: "PC-4DDAM",
    model: "PC-4DDAM",
    image: "/pc-products/PC-4DDAM.png",
    pdf: "/pc-products/PC Series PC-4DDAM.pdf",
    category: "Dimmer Module",
    badge: "4-Ch Dimmer",
    tagline: "4-channel digital dimmer and actuator module for intelligent lighting control systems.",
    specs: ["4× Dimmer Channels", "0–100% Dimming Range", "DALI Compatible", "Phase-Cut Control"],
  },
  {
    id: "pc-4diai3do2ao",
    name: "PC4DIAI3DO2AO",
    model: "PC4DIAI3DO2AO",
    image: "/pc-products/PC4DIAI3DO2AO.png",
    pdf: "/pc-products/PC Series PC-4DIAI3DO2AO.pdf",
    category: "Multi-Function I/O",
    badge: "Universal I/O",
    tagline: "All-in-one multi-function I/O module combining DI, AI, DO and AO for versatile automation control.",
    specs: ["4× DI + 1× AI + 3× DO + 2× AO", "Multi-Protocol Support", "Universal Wiring", "BACnet/Modbus Native"],
  },
  {
    id: "pc-16do",
    name: "PC16DO",
    model: "PC16DO",
    image: "/pc-products/PC16DO.png",
    pdf: "/pc-products/PC-16DO (1).pdf",
    category: "Digital Output",
    badge: "16-Channel DO",
    tagline: "16-channel digital output module for building automation and control applications.",
    specs: ["16× Digital Outputs"],
  },
  {
    id: "pc-4di5ai3do2ao-ip",
    name: "PC4DI5AI3DO2AO-IP",
    model: "PC4DI5AI3DO2AO-IP",
    image: "/pc-products/PC4DI5AI3DO2AO-IP.png",
    pdf: "/pc-products/PC4DI5AI3DO2AO-IP.pdf",
    category: "Multi-Function I/O",
    badge: "IP Controller",
    tagline: "Mixed I/O controller combining digital and analog inputs and outputs for building automation.",
    specs: ["4× Digital Inputs", "5× Analog Inputs", "3× Digital Outputs", "2× Analog Outputs"],
  },
];

type Product = typeof PC_PRODUCTS[0];

// ══════════════════════════════════════════════════════════
// COUNTRY CODES
// ══════════════════════════════════════════════════════════
const COUNTRY_CODES = [
  { code: "+91", flag: "🇮🇳", country: "India" },
  { code: "+1",  flag: "🇺🇸", country: "USA" },
  { code: "+44", flag: "🇬🇧", country: "UK" },
  { code: "+971",flag: "🇦🇪", country: "UAE" },
  { code: "+65", flag: "🇸🇬", country: "Singapore" },
  { code: "+60", flag: "🇲🇾", country: "Malaysia" },
  { code: "+61", flag: "🇦🇺", country: "Australia" },
  { code: "+49", flag: "🇩🇪", country: "Germany" },
  { code: "+33", flag: "🇫🇷", country: "France" },
  { code: "+81", flag: "🇯🇵", country: "Japan" },
  { code: "+86", flag: "🇨🇳", country: "China" },
  { code: "+82", flag: "🇰🇷", country: "South Korea" },
  { code: "+966",flag: "🇸🇦", country: "Saudi Arabia" },
  { code: "+974",flag: "🇶🇦", country: "Qatar" },
  { code: "+973",flag: "🇧🇭", country: "Bahrain" },
  { code: "+968",flag: "🇴🇲", country: "Oman" },
  { code: "+55", flag: "🇧🇷", country: "Brazil" },
  { code: "+27", flag: "🇿🇦", country: "South Africa" },
];

// ══════════════════════════════════════════════════════════
// ANIMATION VARIANTS
// ══════════════════════════════════════════════════════════
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

const revealUp = {
  hidden: { opacity: 0, y: 48, filter: "blur(4px)" },
  show: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.75, ease: EASE_OUT_EXPO },
  },
};

const revealScale = {
  hidden: { opacity: 0, scale: 0.88, filter: "blur(6px)" },
  show: {
    opacity: 1, scale: 1, filter: "blur(0px)",
    transition: { duration: 0.65, ease: EASE_OUT_EXPO },
  },
};

const staggerContainer = (stagger = 0.07) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: 0.05 } },
});

const slideInLeft = {
  hidden: { opacity: 0, x: -32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE_OUT_EXPO } },
};

// ══════════════════════════════════════════════════════════
// ANIMATED COUNTER
// ══════════════════════════════════════════════════════════
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    const duration = 1400;
    const step = (timestamp: number, startTime: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame((t) => step(t, startTime));
    };
    requestAnimationFrame((t) => step(t, t));
    return () => { start = end; };
  }, [inView, value]);

  return <span ref={ref}>{display}{suffix}</span>;
}



// ══════════════════════════════════════════════════════════
// PRODUCT CARD
// ══════════════════════════════════════════════════════════
function ProductCard({ product }: { product: Product }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 56, scale: 0.94 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
      className="group cursor-default"
    >
      <div
        className="relative flex flex-col rounded-2xl overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        style={{
          background: "linear-gradient(145deg, #ffffff 0%, #f7f8fa 100%)",
          border: "1px solid rgba(0,0,0,0.08)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.9)",
        }}
      >
        {/* Subtle top border on hover */}
        <div
          className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{ background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.3), transparent)" }}
        />

        {/* Badge */}
        <div className="absolute top-3.5 left-3.5 z-10">
          <span
            className="inline-flex items-center gap-1 text-[0.6rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
            style={{
              color: "#333",
              background: "rgba(0,0,0,0.06)",
              border: "1px solid rgba(0,0,0,0.1)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#111] inline-block" />
            {product.badge}
          </span>
        </div>

        {/* Product Image */}
        <div
          className="relative overflow-hidden z-10"
          style={{
            aspectRatio: "4/3",
            background: "linear-gradient(135deg, #f5f5f7 0%, #ebebed 100%)",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-7 transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {/* Image shimmer line */}
          <motion.div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
            style={{
              background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)",
              backgroundSize: "200% 100%",
            }}
            animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear", repeatDelay: 0.4 }}
          />
        </div>

        {/* Divider */}
        <div className="relative z-10 h-px mx-4" style={{ background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)" }} />

        {/* Content */}
        <div className="relative z-10 flex flex-col flex-1 p-5 pt-4">
          <p className="text-[0.64rem] font-bold uppercase tracking-[0.12em] mb-1 text-[#888]">
            {product.category}
          </p>
          <h3 className="text-[1.05rem] font-extrabold text-[#0f0f0f] leading-tight mb-2 tracking-tight">
            {product.name}
          </h3>
          <p className="text-[0.75rem] text-[#6b7280] leading-relaxed mb-4 flex-1">
            {product.tagline}
          </p>

          {/* Specs */}
          <ul className="space-y-1.5 mb-5">
            {product.specs.map((spec, i) => (
              <motion.li
                key={i}
                className="flex items-center gap-2 text-[0.71rem] text-[#374151] font-medium"
                initial={{ opacity: 0, x: -8 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.06, duration: 0.4, ease: "easeOut" }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
                  <circle cx="7" cy="7" r="6.5" stroke="#111" strokeOpacity="0.2" />
                  <path d="M4.5 7L6.2 8.8L9.5 5.5" stroke="#111" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {spec}
              </motion.li>
            ))}
          </ul>

          {/* Download Button — solid black, white text, no tilt/animation */}
          <a
            id={`download-datasheet-${product.id}`}
            href={encodeURI(product.pdf)}
            download={`${product.model}-datasheet.pdf`}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-[0.8rem] font-bold text-white transition-opacity duration-200 hover:opacity-85 cursor-pointer"
            style={{ background: "#111111" }}
          >
            <Download size={14} />
            Download Datasheet
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// ══════════════════════════════════════════════════════════
// FLOATING ORBS (Hero decoration)
// ══════════════════════════════════════════════════════════
function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden>
      {[
        { size: 320, top: "8%",  left: "12%",  color: "rgba(0,0,0,0.04)",  delay: 0 },
        { size: 240, top: "55%", right: "8%",  color: "rgba(0,0,0,0.05)", delay: 2 },
        { size: 180, top: "20%", right: "22%", color: "rgba(0,0,0,0.035)",  delay: 1 },
        { size: 120, top: "70%", left: "30%",  color: "rgba(0,0,0,0.03)",  delay: 3 },
      ].map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size, height: orb.size,
            top: orb.top, left: (orb as any).left, right: (orb as any).right,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
          }}
          animate={{ y: [0, -24, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 7 + i * 1.5, repeat: Infinity, ease: "easeInOut", delay: orb.delay }}
        />
      ))}
    </div>
  );
}

// ══════════════════════════════════════════════════════════
// STATS ROW
// ══════════════════════════════════════════════════════════
function StatsRow() {
  const stats = [
    { value: 13, suffix: "+", label: "PC Series Products" },
    { value: 14, suffix: " Yrs", label: "Industry Experience" },
    { value: 200, suffix: "+", label: "Facilities Deployed" },
    { value: 99, suffix: ".9%", label: "System Uptime SLA" },
  ];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer(0.1)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="grid grid-cols-2 md:grid-cols-4 gap-px"
      style={{ background: "rgba(0,0,0,0.08)", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "20px", overflow: "hidden" }}
    >
      {stats.map((s, i) => (
        <motion.div
          key={i}
          variants={revealUp}
          className="flex flex-col items-center justify-center py-7 px-4 text-center"
          style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(8px)" }}
        >
          <span className="text-3xl md:text-4xl font-black text-[#111] tracking-tighter leading-none mb-1">
            <AnimatedCounter value={s.value} suffix={s.suffix} />
          </span>
          <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-[#888]">{s.label}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}

// ══════════════════════════════════════════════════════════
// PAGE
// ══════════════════════════════════════════════════════════
export default function PCProductsPage() {
  const [filter, setFilter] = useState("All");
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const categories = ["All", ...Array.from(new Set(PC_PRODUCTS.map((p) => p.category)))];
  const filtered = filter === "All" ? PC_PRODUCTS : PC_PRODUCTS.filter((p) => p.category === filter);

  return (
    <>
      <main className="min-h-screen text-[#111111] overflow-x-hidden" style={{ background: "#f0f0f0" }}>

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section ref={heroRef} className="relative min-h-[82vh] flex flex-col justify-center overflow-hidden"
          style={{ background: "linear-gradient(160deg, #fafafa 0%, #f0f0f0 45%, #e6e6e8 100%)" }}>

          {/* Animated grid */}
          <motion.div className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(rgba(0,0,0,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.035) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              y: heroY, opacity: heroOpacity,
            }}
          />

          <FloatingOrbs />

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent, #f0f0f0)" }} />

          <div className="container max-w-6xl mx-auto px-6 relative z-10 pt-24 sm:pt-44 pb-20">
            <ProductSubnav />
            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              animate="show"
              className="text-center"
            >
              <motion.div variants={revealUp} className="flex flex-col items-center mb-7">
                <Image
                  src={pcLogo}
                  alt="Probiz Controls logo"
                  priority
                  sizes="192px"
                  className="w-36 sm:w-48 h-auto rounded-2xl"
                />
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.2em] text-[#333]">Probiz Controls</p>
              </motion.div>

              {/* Label pill */}
              <motion.div variants={revealUp} className="flex justify-center mb-7">
                <motion.span
                  className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.15em] py-2 px-5 rounded-full"
                  style={{
                    background: "rgba(0,0,0,0.06)",
                    color: "#333",
                    border: "1px solid rgba(0,0,0,0.1)",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.7)",
                  }}
                  whileHover={{ scale: 1.04 }}
                >
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-[#111]"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                  />
                  Probiz Automation · PC Series I/O Modules
                </motion.span>
              </motion.div>

              {/* Headline */}
              <motion.div variants={revealUp}>
                <h1 className="text-5xl sm:text-6xl md:text-[5.5rem] font-black tracking-[-0.04em] leading-[0.95] mb-7 text-[#0d0d0d]">
                  Precision I/O{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">Control</span>
                    <motion.span
                      className="absolute bottom-1 left-0 right-0 h-3 -z-0 rounded-sm"
                      style={{ background: "rgba(0,0,0,0.1)" }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.6, duration: 0.7, ease: EASE_OUT_EXPO }}
                    />
                  </span>
                  <br className="hidden md:block" />
                  <span className="text-[#555]">Modules</span>
                </h1>
              </motion.div>

              <motion.p variants={revealUp}
                className="text-lg md:text-xl text-[#555] max-w-2xl mx-auto leading-relaxed font-medium mb-10">
                Industrial-grade programmable controller modules engineered for BMS integration, smart building automation, and mission-critical infrastructure.
              </motion.p>

              {/* Feature pills */}
              <motion.div variants={revealUp} className="flex flex-wrap justify-center gap-2.5 mb-14">
                {[
                  { icon: <Cpu size={12} />, label: "BACnet / Modbus" },
                  { icon: <Shield size={12} />, label: "Industrial Grade" },
                  { icon: <Wifi size={12} />, label: "DIN Rail Mount" },
                  { icon: <Globe size={12} />, label: "Global Certs" },
                  { icon: <Activity size={12} />, label: "Real-time I/O" },
                  { icon: <Star size={12} />, label: "14+ Years Expertise" },
                ].map((item, i) => (
                  <motion.span
                    key={i}
                    className="inline-flex items-center gap-1.5 text-[0.68rem] font-semibold px-3.5 py-1.5 rounded-full"
                    style={{ background: "rgba(0,0,0,0.06)", color: "#333", border: "1px solid rgba(0,0,0,0.09)" }}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.07, duration: 0.4, ease: EASE_OUT_EXPO }}
                    whileHover={{ scale: 1.05, background: "rgba(0,0,0,0.1)" }}
                  >
                    {item.icon} {item.label}
                  </motion.span>
                ))}
              </motion.div>

              {/* Stats */}
              <motion.div variants={revealScale}>
                <StatsRow />
              </motion.div>

              {/* Scroll hint */}
              <motion.div
                variants={revealUp}
                className="flex flex-col items-center gap-1.5 mt-12 text-[#aaa]"
              >
                <span className="text-[0.65rem] font-semibold uppercase tracking-widest">Explore Products</span>
                <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
                  <ChevronDown size={18} />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── STICKY FILTER BAR ────────────────────────────────────── */}
        <div className="sticky top-[68px] z-40 py-3.5"
          style={{
            background: "rgba(235,235,235,0.88)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            borderBottom: "1px solid rgba(0,0,0,0.07)",
            boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
          }}>
          <div className="container max-w-6xl mx-auto px-6">
            <motion.div
              className="flex flex-wrap gap-2 justify-center"
              variants={staggerContainer(0.04)}
              initial="hidden"
              animate="show"
            >
              {categories.map((cat, i) => (
                <motion.button
                  key={cat}
                  id={`filter-${cat.replace(/\s+/g, "-").toLowerCase()}`}
                  variants={slideInLeft}
                  onClick={() => setFilter(cat)}
                  className="text-[0.68rem] font-bold uppercase tracking-wide px-4 py-2 rounded-full transition-all duration-250 relative overflow-hidden"
                  style={{
                    background: filter === cat ? "#111" : "rgba(255,255,255,0.7)",
                    color: filter === cat ? "#fff" : "#444",
                    border: `1px solid ${filter === cat ? "transparent" : "rgba(0,0,0,0.1)"}`,
                    boxShadow: filter === cat ? "0 2px 12px rgba(0,0,0,0.2)" : "0 1px 3px rgba(0,0,0,0.06)",
                  }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {filter === cat && (
                    <motion.span
                      layoutId="filterPill"
                      className="absolute inset-0 rounded-full bg-[#111]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── PRODUCT GRID ─────────────────────────────────────────── */}
        <section className="container max-w-6xl mx-auto px-6 py-16">
          {/* Row header */}
          <div className="flex items-center justify-between mb-10">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#999] mb-0.5">Product Catalogue</p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#111] tracking-tight">
                PC Series <span className="text-[#888] font-medium">({filtered.length})</span>
              </h2>
            </motion.div>

          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            >
              {filtered.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </section>

        {/* ── CTA SECTION ──────────────────────────────────────────── */}
        <section className="container max-w-6xl mx-auto px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
            className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center"
            style={{
              background: "linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 50%, #222 100%)",
              boxShadow: "0 24px 80px rgba(0,0,0,0.3)",
            }}
          >
            {/* Background orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
              <motion.div className="absolute -top-20 -left-20 w-80 h-80 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)" }}
                animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity }} />
              <motion.div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)" }}
                animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 6, repeat: Infinity, delay: 1 }} />
            </div>

            {/* Grid texture */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-10"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }} />

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5, ease: EASE_OUT_EXPO }}
                className="w-14 h-14 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <Cpu size={24} className="text-white/70" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, duration: 0.6, ease: EASE_OUT_EXPO }}
                className="text-2xl md:text-4xl font-black text-white mb-3 tracking-tight"
              >
                Need a Custom I/O Configuration?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="text-white/60 text-sm md:text-base max-w-lg mx-auto mb-10 leading-relaxed"
              >
                Our engineering team can help you select and configure the right combination of PC Series modules for your specific automation project requirements.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 }}
                className="flex flex-wrap gap-3 justify-center"
              >
                <motion.a
                  href="/contact"
                  id="contact-engineering-btn"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-[#111] bg-white relative overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{ boxShadow: "0 4px 20px rgba(255,255,255,0.2)" }}
                >
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "linear-gradient(105deg, transparent 35%, rgba(0,0,0,0.04) 50%, transparent 65%)", backgroundSize: "200% 100%" }}
                    animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    Talk to Our Engineers <ArrowRight size={15} />
                  </span>
                </motion.a>
                <motion.a
                  href="/products"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white/80 hover:text-white transition-colors"
                  style={{ border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.06)" }}
                  whileHover={{ scale: 1.03, background: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  View All Products <Layers size={15} />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}
