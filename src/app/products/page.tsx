"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParallaxBackground from "@/components/ParallaxBackground";
import { motion } from "framer-motion";
import {
  Zap, Wifi, Sun, CheckCircle2, ArrowRight, BarChart2,
  Building2, Users, ShoppingCart, Cpu, Cloud, Shield,
  Globe, TrendingUp, Bell, Thermometer, Database, Lock,
  Smartphone, RefreshCw, Receipt, Map, Activity, Layers,
} from "lucide-react";

// ─── shared fade-up variant ────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

// ─── Probiz Energy (Solar & Renewables) ──────────────────────────────────────
const probizEnergy = {
  id: "probiz-energy",
  badge: "Renewable Solar Energy",
  name: "Probiz Energy",
  tagline: "Save Energy up to 40% with Premium Renewable Solar",
  description:
    "Probiz Energy designs, installs, and maintains cutting-edge solar and renewable energy systems for residential and commercial clients across South India. With over 5 years of excellence and hundreds of successful installations, we make clean energy accessible, affordable, and reliable — backed by an industry-leading 25-year warranty.",
  color: "#f59e0b",
  colorMuted: "rgba(245,158,11,0.1)",
  colorBorder: "rgba(245,158,11,0.22)",
  heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&q=80",
  stats: [
    { val: "40%",  label: "Energy Savings" },
    { val: "25 Yr", label: "Warranty Coverage" },
    { val: "100+", label: "Homeowners Served" },
    { val: "100%", label: "Carbon Neutral Plans" },
  ],
  clients: ["Brigade Group", "Puravankara", "BMRCL", "Divyasree", "Infiniti"],
  locations: "Bengaluru · Hosur · Coimbatore · Chennai · Trichy · Madurai · Nellai · Nagercoil",
  features: [
    { icon: <Sun size={18} />,        title: "Premium Solar Installation",   desc: "High-efficiency solar panel systems engineered for maximum generation and a minimal rooftop footprint — from residential rooftops to large commercial arrays." },
    { icon: <Database size={18} />,   title: "Advanced Energy Storage",      desc: "Lithium-ion battery solutions store surplus solar energy for round-the-clock power, ensuring zero downtime even on cloudy days or grid outages." },
    { icon: <Shield size={18} />,     title: "25-Year Warranty",             desc: "Industry-leading warranty coverage protecting your entire investment — panels, inverters, mounting systems, and workmanship included." },
    { icon: <Globe size={18} />,      title: "Carbon Neutral Programs",      desc: "Comprehensive green energy plans that track, offset, and reduce your Scope 1 & 2 carbon emissions to verifiable zero." },
    { icon: <Zap size={18} />,        title: "Wind Energy Systems",          desc: "Small and utility-scale wind turbine installations for industrial and agricultural sites with high wind resource potential." },
    { icon: <Activity size={18} />,   title: "Energy Consulting & Audit",    desc: "Site assessments, energy audits, and bespoke system design to identify the highest-ROI renewable solution for every property." },
  ],
  steps: [
    { num: "01", title: "Free Site Assessment", desc: "Our engineers visit your site, analyse your energy consumption, roof orientation, and shade factors." },
    { num: "02", title: "Custom System Design", desc: "We design a bespoke solar + storage solution optimised for your load profile and budget." },
    { num: "03", title: "Professional Installation", desc: "Certified installers deploy your system with zero disruption — typically completed in 1–3 days." },
    { num: "04", title: "Monitoring & Maintenance", desc: "Continuous remote monitoring and scheduled maintenance keep your system at peak efficiency for decades." },
  ],
};

// ─── ProSmart Energy ──────────────────────────────────────────────────────────
const proSmartEnergy = {
  id: "prosmart-energy",
  badge: "Smart Energy Platform",
  name: "ProSmart Energy",
  tagline: "Effortless Energy Monitoring & Automated Tenant Billing",
  description:
    "PROsmart Energy is the next-gen energy intelligence platform that unifies EB, DG, HVAC, Water, and Gas into one live dashboard — with automated tenant billing, an interactive 3D building map, and ISO 50001-ready compliance reporting. Built for real-estate developers, commercial portfolios, and enterprise facility teams.",
  color: "#3b82f6",
  colorMuted: "rgba(59,130,246,0.1)",
  colorBorder: "rgba(59,130,246,0.22)",
  heroImage: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80",
  stats: [
    { val: "30%",   label: "Avg. Energy Cost Reduction" },
    { val: "100%",  label: "Automated Tenant Billing" },
    { val: "24/7",  label: "Real-Time Monitoring" },
    { val: "ISO",   label: "50001 Compliance Ready" },
  ],
  clients: ["Prestige", "DLF", "Brigade", "Godrej", "Oberoi", "Sobha", "Lodha", "Embassy"],
  features: [
    { icon: <BarChart2 size={18} />,   title: "Live Energy Dashboard",        desc: "Monitor EB, DG, HVAC, Water, and Gas consumption through ring charts and live load curves — every watt visible in real time." },
    { icon: <Receipt size={18} />,     title: "Automated Tenant Billing",     desc: "Generate accurate, tenant-wise invoices automatically every billing cycle — no spreadsheets, no manual meter walks, no disputes." },
    { icon: <Map size={18} />,         title: "Interactive 3D Building Map",  desc: "Explore live energy, HVAC, water, and gas telemetry floor-by-floor through a fully interactive 3D building model of your portfolio." },
    { icon: <Thermometer size={18} />, title: "BTU Meter Integration",        desc: "Precise billing for cooling systems via BTU meters — a critical requirement for commercial buildings in India and the Middle East." },
    { icon: <Bell size={18} />,        title: "AI Anomaly Detection",         desc: "Machine learning continuously scans consumption patterns and fires instant alerts when faults, waste, or unusual demand are detected." },
    { icon: <Cloud size={18} />,       title: "ISO 50001 Compliance",         desc: "Audit-ready energy reports, efficiency programme tracking, and continuous diagnostics to achieve and maintain ISO 50001 certification." },
  ],
  steps: [
    { num: "01", title: "Install Smart Meters",    desc: "Plug-and-play BTU, energy, and multi-utility meters integrate with existing electrical infrastructure in hours, not weeks." },
    { num: "02", title: "Stream to the Cloud",     desc: "Secure edge gateways push real-time consumption data to the PROsmart cloud over BACnet, Modbus, or LoRaWAN." },
    { num: "03", title: "Visualise & Optimise",    desc: "Live dashboards, AI anomaly detection, and ISO 50001 reports help facility teams cut waste and prove savings." },
    { num: "04", title: "Automate Billing",        desc: "Generate accurate tenant-wise invoices automatically every cycle — zero manual effort, zero disputes." },
  ],
  impacts: [
    { tag: "MIXED-USE DEVELOPMENT", kpi: "₹38L Annual Savings",   desc: "A 24-tower premium residential project automated tenant billing across 1,800 units and cut common-area energy waste by 22% in the first year." },
    { tag: "COMMERCIAL PORTFOLIO",  kpi: "100% Billing Accuracy", desc: "PROsmart replaced manual meter walks across 14 office towers — eliminating disputes and reclaiming 60+ hours of facility-team work every month." },
    { tag: "HOSPITALITY CHAIN",     kpi: "ISO 50001 Achieved",    desc: "A national hotel group hit ISO 50001 in 8 months using PROsmart's continuous diagnostics, audit-ready reports, and AI anomaly alerts." },
  ],
};

// ─── Probiz Connect (eB2B SaaS) ───────────────────────────────────────────────
const probizConnect = {
  id: "probiz-connect",
  badge: "AI-Powered eB2B Platform",
  name: "Probiz Connect",
  tagline: "Digitise, Automate & Optimise Your B2B Sales & Distribution",
  description:
    "Probiz Connect is an AI-powered eB2B cloud platform built for consumer goods brands of all sizes — from micro to enterprise. It digitises and automates B2B sales operations involving retailers, distributors, and field sales teams, providing 360° visibility and control across your entire distribution network.",
  color: "#a855f7",
  colorMuted: "rgba(168,85,247,0.1)",
  colorBorder: "rgba(168,85,247,0.22)",
  heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
  stats: [
    { val: "360°", label: "Visibility & Control" },
    { val: "25+",  label: "Integrations" },
    { val: "Real-time", label: "Order Processing" },
    { val: "AI",   label: "Powered Analytics" },
  ],
  modules: [
    { icon: <TrendingUp size={18} />,  title: "Sales Connect",    desc: "Real-time order processing, inventory tracking, performance analytics, incentive management, route optimisation, and customisable stakeholder access for your sales team." },
    { icon: <Building2 size={18} />,   title: "Dealer Connect",   desc: "A Dealer & Distributor Management module that streamlines order processing, inventory tracking, performance analysis, and communication across your entire dealer and retailer network." },
    { icon: <Users size={18} />,       title: "Employee Connect", desc: "Empower field sales and distribution teams with the tools to excel — mobile order capture, attendance, beat planning, and powerful reporting for sales insights." },
    { icon: <Globe size={18} />,       title: "Partner Connect",  desc: "Leverage influencer networks, channel partners, and loyalty programmes to grow brand presence and leave a lasting impression in competitive markets." },
    { icon: <Zap size={18} />,         title: "Reward Schemes",   desc: "Design flexible rewards that match your business goals — choose between points-based rewards or instant cash incentives to drive partner engagement." },
    { icon: <ShoppingCart size={18} />, title: "Loyalty Program", desc: "Easily establish a brand loyalty programme for partners — reward points for actions like scanning in-product coupons and strengthen your market presence." },
  ],
  integrations: ["Tally", "Zoho", "Amazon", "Freshworks", "Razorpay", "SAP", "QuickBooks", "WhatsApp", "Paytm", "IndiaMART", "Keka", "Greytip"],
};

// ─── Reusable Badge ───────────────────────────────────────────────────────────
function Badge({ label, color, muted, border }: { label: string; color: string; muted: string; border: string }) {
  return (
    <span className="inline-block text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full"
      style={{ color, background: muted, border: `1px solid ${border}` }}>
      {label}
    </span>
  );
}

// ─── Step Card ────────────────────────────────────────────────────────────────
function StepCard({ num, title, desc, color, border, muted }: {
  num: string; title: string; desc: string; color: string; border: string; muted: string;
}) {
  return (
    <div className="flex gap-4 p-5 rounded-2xl" style={{ background: muted, border: `0.5px solid ${border}` }}>
      <div className="text-2xl font-black tracking-tight flex-shrink-0 w-10" style={{ color }}>{num}</div>
      <div>
        <h4 className="text-white font-semibold text-sm mb-1">{title}</h4>
        <p className="text-neutral-400 text-xs leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

// ─── Feature Card ─────────────────────────────────────────────────────────────
function FeatureCard({ icon, title, desc, color, muted, border }: {
  icon: React.ReactNode; title: string; desc: string; color: string; muted: string; border: string;
}) {
  return (
    <motion.div variants={fadeUp} className="rounded-2xl p-5 flex flex-col gap-3"
      style={{ background: "var(--color-surface)", border: "0.5px solid var(--color-border)" }}>
      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: muted, color, border: `0.5px solid ${border}` }}>
        {icon}
      </div>
      <div>
        <h4 className="text-white font-semibold text-sm mb-1.5">{title}</h4>
        <p className="text-neutral-400 text-xs leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

// ─── Section Divider ─────────────────────────────────────────────────────────
function SectionDivider() {
  return <div className="w-full h-px my-28" style={{ background: "linear-gradient(90deg, transparent, var(--color-border), transparent)" }} />;
}

// ─── Stat Pills ───────────────────────────────────────────────────────────────
function StatGrid({ stats, color, muted, border }: {
  stats: { val: string; label: string }[]; color: string; muted: string; border: string;
}) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {stats.map((s, i) => (
        <div key={i} className="rounded-xl p-4 text-center" style={{ background: muted, border: `0.5px solid ${border}` }}>
          <div className="text-2xl font-extrabold tracking-tight" style={{ color }}>{s.val}</div>
          <div className="text-[0.66rem] text-neutral-400 font-medium uppercase tracking-wider mt-1">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SECTION 1 — Probiz Energy
// ═══════════════════════════════════════════════════════════════════════════════
function ProbizEnergySection() {
  const p = probizEnergy;
  return (
    <section id={p.id} className="container max-w-6xl mx-auto px-6">
      {/* Header */}
      <motion.div variants={fadeUp} className="text-center mb-14">
        <Badge label={p.badge} color={p.color} muted={p.colorMuted} border={p.colorBorder} />
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-none mt-5 mb-4" style={{ color: p.color }}>{p.name}</h2>
        <p className="text-lg md:text-xl text-neutral-300 font-medium max-w-2xl mx-auto">{p.tagline}</p>
      </motion.div>

      {/* Hero — image left, content right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
        <motion.div variants={fadeUp} className="relative rounded-2xl overflow-hidden border shadow-2xl aspect-[16/10]"
          style={{ borderColor: p.colorBorder }}>
          <img src={p.heroImage} alt={p.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${p.colorMuted} 0%, transparent 55%)` }} />
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
            {p.clients.map((c, i) => (
              <span key={i} className="text-[0.65rem] font-bold px-2.5 py-1 rounded-full backdrop-blur-md"
                style={{ background: "rgba(0,0,0,0.55)", border: `0.5px solid ${p.colorBorder}`, color: p.color }}>{c}</span>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="space-y-6">
          <p className="text-neutral-400 leading-relaxed text-[0.95rem]">{p.description}</p>
          <StatGrid stats={p.stats} color={p.color} muted={p.colorMuted} border={p.colorBorder} />
          <div className="text-xs text-neutral-500 flex items-center gap-2">
            <Globe size={12} style={{ color: p.color }} />
            <span>{p.locations}</span>
          </div>
          <a href="https://probizenergy.com/#contact" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full font-semibold text-sm px-6 py-3 transition-opacity duration-200 hover:opacity-80"
            style={{ background: p.color, color: "#080808" }}>
            Get a Free Quote <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>

      {/* Features */}
      <div className="mb-14">
        <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6">Services & Capabilities</p>
        <motion.div variants={{ show: { transition: { staggerChildren: 0.07 } } }}
          initial="hidden" whileInView="show" viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {p.features.map((f, i) => (
            <FeatureCard key={i} {...f} color={p.color} muted={p.colorMuted} border={p.colorBorder} />
          ))}
        </motion.div>
      </div>

      {/* How It Works */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6">How It Works</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {p.steps.map((s, i) => (
            <StepCard key={i} {...s} color={p.color} border={p.colorBorder} muted={p.colorMuted} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SECTION 2 — ProSmart Energy
// ═══════════════════════════════════════════════════════════════════════════════
function ProSmartEnergySection() {
  const p = proSmartEnergy;
  return (
    <section id={p.id} className="container max-w-6xl mx-auto px-6">
      {/* Header */}
      <motion.div variants={fadeUp} className="text-center mb-14">
        <Badge label={p.badge} color={p.color} muted={p.colorMuted} border={p.colorBorder} />
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-none mt-5 mb-4" style={{ color: p.color }}>{p.name}</h2>
        <p className="text-lg md:text-xl text-neutral-300 font-medium max-w-2xl mx-auto">{p.tagline}</p>
      </motion.div>

      {/* Hero — content left, image right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
        <motion.div variants={fadeUp} className="space-y-6 order-2 lg:order-1">
          <p className="text-neutral-400 leading-relaxed text-[0.95rem]">{p.description}</p>
          <StatGrid stats={p.stats} color={p.color} muted={p.colorMuted} border={p.colorBorder} />
          {/* Trusted clients ticker */}
          <div>
            <p className="text-[0.65rem] font-bold uppercase tracking-widest text-neutral-600 mb-2">Trusted By</p>
            <div className="flex flex-wrap gap-2">
              {p.clients.map((c, i) => (
                <span key={i} className="text-[0.7rem] font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: p.colorMuted, color: p.color, border: `0.5px solid ${p.colorBorder}` }}>{c}</span>
              ))}
            </div>
          </div>
          <a href="https://prosmartenergy.io/book-demo" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full font-semibold text-sm px-6 py-3 transition-opacity duration-200 hover:opacity-80"
            style={{ background: p.color, color: "#fff" }}>
            Book a Demo <ArrowRight size={15} />
          </a>
        </motion.div>

        <motion.div variants={fadeUp} className="relative rounded-2xl overflow-hidden border shadow-2xl aspect-[16/10] order-1 lg:order-2"
          style={{ borderColor: p.colorBorder }}>
          <img src={p.heroImage} alt={p.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(225deg, ${p.colorMuted} 0%, transparent 55%)` }} />
          {/* Live stats overlay */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <div className="text-[0.65rem] font-bold px-3 py-1.5 rounded-full backdrop-blur-md"
              style={{ background: "rgba(0,0,0,0.65)", border: `0.5px solid ${p.colorBorder}`, color: p.color }}>
              ● LIVE CONSUMPTION 847 kWh ↓18%
            </div>
            <div className="text-[0.65rem] font-bold px-3 py-1.5 rounded-full backdrop-blur-md"
              style={{ background: "rgba(0,0,0,0.65)", border: `0.5px solid ${p.colorBorder}`, color: "#fff" }}>
              2,341 Tenants Billed · 100% Auto
            </div>
          </div>
        </motion.div>
      </div>

      {/* Features */}
      <div className="mb-14">
        <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6">Platform Features</p>
        <motion.div variants={{ show: { transition: { staggerChildren: 0.07 } } }}
          initial="hidden" whileInView="show" viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {p.features.map((f, i) => (
            <FeatureCard key={i} {...f} color={p.color} muted={p.colorMuted} border={p.colorBorder} />
          ))}
        </motion.div>
      </div>

      {/* How It Works */}
      <div className="mb-14">
        <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6">From Meter to Invoice — Fully Automated</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {p.steps.map((s, i) => (
            <StepCard key={i} {...s} color={p.color} border={p.colorBorder} muted={p.colorMuted} />
          ))}
        </div>
      </div>

      {/* Real-world impact */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6">Real-World Impact</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {p.impacts.map((item, i) => (
            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="rounded-2xl p-6" style={{ background: p.colorMuted, border: `0.5px solid ${p.colorBorder}` }}>
              <span className="text-[0.6rem] font-black uppercase tracking-widest" style={{ color: p.color }}>{item.tag}</span>
              <p className="text-white font-extrabold text-xl mt-2 mb-2">{item.kpi}</p>
              <p className="text-neutral-400 text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SECTION 3 — Probiz Connect
// ═══════════════════════════════════════════════════════════════════════════════
function ProbizConnectSection() {
  const p = probizConnect;
  return (
    <section id={p.id} className="container max-w-6xl mx-auto px-6">
      {/* Header */}
      <motion.div variants={fadeUp} className="text-center mb-14">
        <Badge label={p.badge} color={p.color} muted={p.colorMuted} border={p.colorBorder} />
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-none mt-5 mb-4" style={{ color: p.color }}>{p.name}</h2>
        <p className="text-lg md:text-xl text-neutral-300 font-medium max-w-2xl mx-auto">{p.tagline}</p>
      </motion.div>

      {/* Hero — image left, content right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
        <motion.div variants={fadeUp} className="relative rounded-2xl overflow-hidden border shadow-2xl aspect-[16/10]"
          style={{ borderColor: p.colorBorder }}>
          <img src={p.heroImage} alt={p.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${p.colorMuted} 0%, transparent 55%)` }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-black" style={{ color: p.color }}>360°</div>
              <div className="text-white text-sm font-semibold mt-1">Visibility & Control</div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="space-y-6">
          <p className="text-neutral-400 leading-relaxed text-[0.95rem]">{p.description}</p>
          <StatGrid stats={p.stats} color={p.color} muted={p.colorMuted} border={p.colorBorder} />
          <a href="https://probizconnect.io/#/book-a-demo" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full font-semibold text-sm px-6 py-3 transition-opacity duration-200 hover:opacity-80"
            style={{ background: p.color, color: "#fff" }}>
            Book a Demo <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>

      {/* Modules */}
      <div className="mb-14">
        <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6">Platform Modules</p>
        <motion.div variants={{ show: { transition: { staggerChildren: 0.07 } } }}
          initial="hidden" whileInView="show" viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {p.modules.map((f, i) => (
            <FeatureCard key={i} {...f} color={p.color} muted={p.colorMuted} border={p.colorBorder} />
          ))}
        </motion.div>
      </div>

      {/* Integrations */}
      <div className="rounded-2xl p-8" style={{ background: "var(--color-surface)", border: "0.5px solid var(--color-border)" }}>
        <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">25+ Ecosystem Integrations</p>
        <p className="text-neutral-400 text-sm mb-5">Unlock limitless possibilities with seamless connectivity across your favourite tools and services.</p>
        <div className="flex flex-wrap gap-2">
          {p.integrations.map((tag, i) => (
            <span key={i} className="text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{ background: p.colorMuted, color: p.color, border: `0.5px solid ${p.colorBorder}` }}>
              {tag}
            </span>
          ))}
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full"
            style={{ background: "var(--color-border)", color: "var(--color-muted)" }}>
            +13 more
          </span>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════════════════════════════════════════
const navProducts = [
  { id: "probiz-energy",   label: "Probiz Energy",   color: "#f59e0b", icon: <Sun size={14} /> },
  { id: "prosmart-energy", label: "ProSmart Energy", color: "#3b82f6", icon: <BarChart2 size={14} /> },
  { id: "probiz-connect",  label: "Probiz Connect",  color: "#a855f7", icon: <Wifi size={14} /> },
];

export default function ProductsPage() {
  return (
    <>
      <ParallaxBackground />
      <Navbar />

      <main className="min-h-screen pt-32 pb-24 text-white">

        {/* ── Page Hero ─────────────────────────────────────────────────────── */}
        <motion.section
          initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="container max-w-6xl mx-auto px-6 mb-16 text-center">
          <motion.div variants={fadeUp}>
            <span className="text-xs font-semibold tracking-wide uppercase text-[#10b981] bg-[#10b981]/10 py-1.5 px-4 rounded-full border border-[#10b981]/20">
              Product Suite
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none mt-5 mb-5">
              Three Platforms.<br className="hidden md:block" /> One Ecosystem.
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Probiz Automation's suite covers renewable energy, intelligent building management,
              and AI-powered B2B sales — built to work independently or as a unified stack.
            </p>
          </motion.div>

          {/* Quick nav pills */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 mt-10">
            {navProducts.map((p) => (
              <a key={p.id} href={`#${p.id}`}
                className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-opacity duration-200 hover:opacity-75"
                style={{ background: `${p.color}18`, color: p.color, border: `1px solid ${p.color}38` }}>
                {p.icon} {p.label}
              </a>
            ))}
          </motion.div>
        </motion.section>

        {/* ── Product 1: Probiz Energy ──────────────────────────────────────── */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.08 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}>
          <ProbizEnergySection />
        </motion.div>

        <SectionDivider />

        {/* ── Product 2: ProSmart Energy ────────────────────────────────────── */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.08 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}>
          <ProSmartEnergySection />
        </motion.div>

        <SectionDivider />

        {/* ── Product 3: Probiz Connect ─────────────────────────────────────── */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.08 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}>
          <ProbizConnectSection />
        </motion.div>

        {/* ── Bottom CTA ────────────────────────────────────────────────────── */}
        <div className="mt-28 container max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="rounded-3xl p-10 md:p-16 text-center"
            style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.07), rgba(59,130,246,0.07), rgba(168,85,247,0.07))", border: "0.5px solid var(--color-border)" }}>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Not Sure Which Product Fits?</h2>
            <p className="text-neutral-400 max-w-lg mx-auto mb-8 leading-relaxed">
              Our team will assess your facility, sales operation, or energy footprint and recommend
              the right platform — or a combination. Free consultation, no commitment.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="mailto:info@probiztech.com" className="btn-primary" style={{ padding: "14px 30px", fontSize: "0.9rem" }}>
                Talk to Our Team <ArrowRight size={15} />
              </a>
              <a href="/#solutions" className="btn-secondary" style={{ padding: "14px 30px", fontSize: "0.9rem" }}>
                Explore Solutions
              </a>
            </div>
          </motion.div>
        </div>

      </main>

      <Footer />
    </>
  );
}
