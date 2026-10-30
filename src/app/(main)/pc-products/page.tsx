"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import pcLogo from "../../../../assets/pclogo.png";
import Footer from "@/components/Footer";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";
import {
  Download, X, ChevronDown, Cpu, Zap, Activity,
  CheckCircle2, ArrowRight, Shield, Layers, Globe,
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
function ProductCard({ product, onDownload }: { product: Product; onDownload: (p: Product) => void }) {
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
          <button
            id={`download-datasheet-${product.id}`}
            onClick={() => onDownload(product)}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-[0.8rem] font-bold text-white transition-opacity duration-200 hover:opacity-85"
            style={{ background: "#111111" }}
          >
            <Download size={14} />
            Download Datasheet
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ══════════════════════════════════════════════════════════
// CONTACT POPUP
// ══════════════════════════════════════════════════════════
function ContactPopup({ product, onClose }: { product: Product | null; onClose: () => void }) {
  const [form, setForm] = useState({ name: "", countryCode: "+91", phone: "", company: "", address: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.phone.trim()) e.phone = "Contact number is required";
    else if (!/^\d{7,15}$/.test(form.phone.replace(/\s/g, ""))) e.phone = "Enter a valid phone number";
    if (!form.company.trim()) e.company = "Company name is required";
    if (!form.address.trim()) e.address = "Address is required";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading || submitted || !product) return;

    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing");
      }

      // These variable names must match the EmailJS notification template.
      // Product identifiers are deliberately excluded from the email.
      const templateParams = {
        full_name: form.name.trim(),
        country_code: form.countryCode,
        contact_number: form.phone.trim(),
        company_name: form.company.trim(),
        address: form.address.trim(),
      };

      const response = await emailjs.send(serviceId, templateId, templateParams, {
        publicKey,
      });

      if (response.status !== 200) {
        throw new Error("EmailJS did not confirm delivery");
      }

      setSubmitted(true);
      if (product.pdf) {
        const link = document.createElement("a");
        link.href = encodeURI(product.pdf);
        link.download = `${product.model}-datasheet.pdf`;
        document.body.appendChild(link);
        link.click();
        link.remove();
      }
    } catch (error) {
      console.error("Datasheet request failed:", error);
      setErrors((previous) => ({
        ...previous,
        submit: "Unable to send your request. Please try again.",
      }));
    } finally {
      setLoading(false);
    }
  };

  const fieldClass = (field: string) => {
    const base = "w-full px-4 py-3.5 rounded-xl text-sm font-medium outline-none transition-all duration-250 bg-white";
    const focused = focusedField === field;
    if (errors[field]) return `${base} border-2 border-red-400 shadow-sm shadow-red-100`;
    if (focused) return `${base} border-2 border-[#111] shadow-sm shadow-black/10 ring-4 ring-black/5`;
    return `${base} border border-[#e5e7eb] hover:border-[#9ca3af]`;
  };

  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div
        ref={overlayRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(12px)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          exit={{ opacity: 0, y: 24, scale: 0.92 }}
          transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
          className="relative w-full max-w-[480px] max-h-[92vh] overflow-y-auto rounded-3xl"
          style={{
            background: "linear-gradient(165deg, #ffffff 0%, #f9fafb 100%)",
            border: "1px solid rgba(0,0,0,0.08)",
            boxShadow: "0 32px 80px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.5) inset",
          }}
        >
          {/* Decorative accent bar */}
          <div
            className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
            style={{ background: "#111111" }}
          />

          {/* Header */}
          <div className="sticky top-0 z-20 px-7 pt-7 pb-5 rounded-t-3xl"
            style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.97) 80%, transparent)", backdropFilter: "blur(8px)" }}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                {/* Product mini preview */}
                <div className="flex items-center gap-3 mb-3 p-3 rounded-2xl"
                  style={{ background: "rgba(0,0,0,0.04)", border: "1px solid rgba(0,0,0,0.08)" }}>
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <img src={product.image} alt={product.name} className="w-10 h-10 object-contain" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[0.6rem] font-bold uppercase tracking-widest mb-0.5 text-[#888]">
                      {product.category}
                    </p>
                    <p className="font-extrabold text-[#111] text-sm leading-tight truncate">{product.name}</p>
                    <p className="text-[0.65rem] text-[#666]">{product.model}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Download size={15} className="text-[#111]" />
                  <h2 className="text-lg font-extrabold text-[#111] leading-tight">Request Datasheet</h2>
                </div>
              </div>

              <button
                id="close-popup-btn"
                onClick={onClose}
                aria-label="Close"
                className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:bg-black/08 active:scale-90"
                style={{ border: "1px solid rgba(0,0,0,0.08)", marginTop: "2px" }}
              >
                <X size={16} />
              </button>
            </div>
          </div>

          <div className="px-7 pb-7">
            {!submitted ? (
              <>
                <p className="text-[0.78rem] text-[#6b7280] mb-6 leading-relaxed">
                  Fill in your contact details to request the <span className="font-semibold text-[#111]">{product.model}</span> technical datasheet. {product.pdf ? "Your PDF will download automatically once your request is sent." : "Our team will contact you with the datasheet."}
                </p>

                <form id="datasheet-contact-form" onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-[0.68rem] font-bold text-[#374151] mb-1.5 uppercase tracking-wider">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      className={fieldClass("name")}
                      value={form.name}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: "" }); }}
                    />
                    <AnimatePresence>
                      {errors.name && (
                        <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                          className="text-red-500 text-[0.68rem] mt-1.5 flex items-center gap-1">
                          <span>⚠</span> {errors.name}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[0.68rem] font-bold text-[#374151] mb-1.5 uppercase tracking-wider">
                      Contact Number <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <div className="relative flex-shrink-0">
                        <select
                          id="country-code-select"
                          value={form.countryCode}
                          onChange={(e) => setForm({ ...form, countryCode: e.target.value })}
                          className="appearance-none pl-3 pr-7 py-3.5 rounded-xl border border-[#e5e7eb] text-sm font-semibold bg-white outline-none focus:border-2 focus:border-[#111] transition-all cursor-pointer hover:border-[#9ca3af]"
                          style={{ minWidth: "105px" }}
                        >
                          {COUNTRY_CODES.map((c) => (
                            <option key={c.code} value={c.code}>{c.flag} {c.code}</option>
                          ))}
                        </select>
                        <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#9ca3af] pointer-events-none" />
                      </div>
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder="9876543210"
                        className={`flex-1 ${fieldClass("phone")}`}
                        value={form.phone}
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField(null)}
                        onChange={(e) => { setForm({ ...form, phone: e.target.value }); setErrors({ ...errors, phone: "" }); }}
                      />
                    </div>
                    <AnimatePresence>
                      {errors.phone && (
                        <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                          className="text-red-500 text-[0.68rem] mt-1.5 flex items-center gap-1">
                          <span>⚠</span> {errors.phone}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-[0.68rem] font-bold text-[#374151] mb-1.5 uppercase tracking-wider">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      placeholder="e.g. Probiz Automation Pvt. Ltd."
                      className={fieldClass("company")}
                      value={form.company}
                      onFocus={() => setFocusedField("company")}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => { setForm({ ...form, company: e.target.value }); setErrors({ ...errors, company: "" }); }}
                    />
                    <AnimatePresence>
                      {errors.company && (
                        <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                          className="text-red-500 text-[0.68rem] mt-1.5 flex items-center gap-1">
                          <span>⚠</span> {errors.company}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-[0.68rem] font-bold text-[#374151] mb-1.5 uppercase tracking-wider">
                      Address <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-address"
                      rows={3}
                      placeholder="Enter your full mailing or office address…"
                      className={`resize-none ${fieldClass("address")}`}
                      value={form.address}
                      onFocus={() => setFocusedField("address")}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => { setForm({ ...form, address: e.target.value }); setErrors({ ...errors, address: "" }); }}
                    />
                    <AnimatePresence>
                      {errors.address && (
                        <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                          className="text-red-500 text-[0.68rem] mt-1.5 flex items-center gap-1">
                          <span>⚠</span> {errors.address}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* EmailJS submission error */}
                  <AnimatePresence>
                    {errors.submit && (
                      <motion.p
                        role="alert"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-red-500 text-xs text-center"
                      >
                        {errors.submit}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  {/* Submit */}
                  <button
                    id="submit-datasheet-btn"
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl text-sm font-bold text-white mt-2 disabled:opacity-60 transition-opacity duration-200 hover:opacity-85"
                    style={{ background: "#111111" }}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-80" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        <span>Sending your request…</span>
                      </>
                    ) : (
                      <>
                        <Download size={15} />
                        <span>Submit & Get Datasheet</span>
                        <ArrowRight size={14} className="ml-0.5" />
                      </>
                    )}
                  </button>

                  {/* Trust indicator */}
                  <div className="flex items-center justify-center gap-4 pt-1">
                    <span className="flex items-center gap-1 text-[0.65rem] text-[#9ca3af]"><Lock size={10} /> Confidential</span>
                    <span className="w-px h-3 bg-[#e5e7eb]" />
                    <span className="flex items-center gap-1 text-[0.65rem] text-[#9ca3af]"><Shield size={10} /> No Spam</span>
                    <span className="w-px h-3 bg-[#e5e7eb]" />
                    <span className="flex items-center gap-1 text-[0.65rem] text-[#9ca3af]"><Zap size={10} /> Fast Response</span>
                  </div>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
                className="flex flex-col items-center text-center py-6"
              >
                {/* Success ring animation */}
                <div className="relative w-20 h-20 mb-6">
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ background: "rgba(16,185,129,0.12)", border: "2px solid rgba(16,185,129,0.3)" }}
                    animate={{ scale: [1, 1.15, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.1, duration: 0.5, ease: EASE_OUT_EXPO }}
                    >
                      <CheckCircle2 size={36} className="text-emerald-500" />
                    </motion.div>
                  </div>
                </div>

                <motion.h3 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                  className="text-2xl font-extrabold text-[#111] mb-2">
                  Request Received!
                </motion.h3>
                <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                  className="text-sm text-[#6b7280] leading-relaxed max-w-xs">
                  Thanks, <strong className="text-[#111]">{form.name}</strong>! {product.pdf ? "Your request has been sent and your PDF download has started." : "Your datasheet request has been received. Our team will contact you shortly."}
                </motion.p>

                {product.pdf && (
                  <a href={encodeURI(product.pdf)} download={`${product.model}-datasheet.pdf`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold underline underline-offset-4">
                    <Download size={15} /> Download PDF again
                  </a>
                )}

                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                  className="mt-5 w-full max-w-xs rounded-2xl p-4 text-left text-[0.72rem] text-[#555] space-y-2"
                  style={{ background: "rgba(0,0,0,0.03)", border: "1px solid rgba(0,0,0,0.06)" }}>
                  <div className="flex justify-between"><span className="text-[#9ca3af] font-medium">Name</span><span className="font-semibold text-[#111]">{form.name}</span></div>
                  <div className="flex justify-between"><span className="text-[#9ca3af] font-medium">Phone</span><span className="font-semibold text-[#111]">{form.countryCode} {form.phone}</span></div>
                  <div className="flex justify-between"><span className="text-[#9ca3af] font-medium">Company</span><span className="font-semibold text-[#111] truncate ml-2">{form.company}</span></div>
                </motion.div>

                <motion.button
                  id="close-success-btn"
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                  onClick={onClose}
                  className="mt-6 px-10 py-3 rounded-xl text-sm font-bold text-white transition-all duration-200"
                  style={{ background: "linear-gradient(135deg, #111 0%, #333 100%)" }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Done
                </motion.button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
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
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
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

          <div className="container max-w-6xl mx-auto px-6 relative z-10 pt-36 pb-20">
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
                  onDownload={setActiveProduct}
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

      {/* ── POPUP ────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {activeProduct && (
          <ContactPopup
            product={activeProduct}
            onClose={() => setActiveProduct(null)}
          />
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
