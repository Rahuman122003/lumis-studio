"use client";

import React from "react";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Zap, ArrowRight, BarChart2,
  Cloud, Shield, Globe, Bell, Thermometer,
  Receipt, Map, Cpu, Layers, RefreshCw, Wifi, CheckCircle2,
  TrendingUp, Activity, Award, Check, Settings, Server, Database, Lock
} from "lucide-react";
import { MetalButton } from "@/components/ui/metal-button";

// ─── Shared fade-up variant ────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
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

// ─── Reusable Feature Card ────────────────────────────────────────────────────
function FeatureCardDetailed({ icon, title, desc, highlights, color, muted, border }: {
  icon: React.ReactNode; title: string; desc: string; highlights: string[]; color: string; muted: string; border: string;
}) {
  return (
    <motion.div variants={fadeUp} className="rounded-2xl p-6 flex flex-col justify-between"
      style={{ background: "var(--color-surface)", border: "0.5px solid var(--color-border)" }}>
      <div>
        <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
          style={{ background: muted, color, border: `0.5px solid ${border}` }}>
          {icon}
        </div>
        <h4 className="text-[#111111] font-bold text-base mb-2">{title}</h4>
        <p className="text-[#333333] text-xs leading-relaxed mb-4">{desc}</p>
      </div>
      <ul className="space-y-2 pt-3 border-t border-black/10">
        {highlights.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-[0.72rem] text-[#222222]">
            <Check size={13} className="text-[#10b981] flex-shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

// ─── Section Divider ─────────────────────────────────────────────────────────
function SectionDivider() {
  return <div className="w-full h-px my-24" style={{ background: "linear-gradient(90deg, transparent, var(--color-border), transparent)" }} />;
}

// ═══════════════════════════════════════════════════════════════════════════════
// SECTION 1 — Probiz Energy AI (Brain for Your Building)
// ═══════════════════════════════════════════════════════════════════════════════
function ProbizEnergySection() {
  const p = {
    id: "probiz-energy",
    badge: "The Smartest Brain for Your Building",
    name: "Probiz Energy AI",
    tagline: "Move from reactive operations to proactive, intelligent building management.",
    description:
      "Transform the way your building operates with Probiz Energy AI — an intelligent building energy platform designed to optimise performance, reduce energy costs, and simplify facility operations. Built for facility managers, building operations teams, sustainability officers, and modern property owners, it combines AI analytics, IoT connectivity, real-time monitoring, automation, and intelligent energy management into one connected ecosystem.",
    color: "#111111",
    colorMuted: "rgba(0,0,0,0.06)",
    colorBorder: "rgba(0,0,0,0.2)",
    heroImage: "/energy-ai-hero.png",
    stats: [
      { val: "35%", label: "Avg. Energy Cost Savings" },
      { val: "99.9%", label: "System Gateway Uptime" },
      { val: "200+", label: "Facilities Integrated" },
      { val: "14+ Yrs", label: "Industry Expertise" },
    ],
    features: [
      {
        icon: <Cpu size={20} />,
        title: "AI-Powered HVAC Optimisation",
        desc: "Optimise heating, ventilation, and air-conditioning systems using intelligent control loops and deep data-driven insights.",
        highlights: [
          "Dynamic setpoint adjustments based on live occupancy & weather",
          "Chiller plant & Air Handling Unit (AHU) load balancing",
          "Prevents cooling/heating overlap & unnecessary peak demand",
          "Saves up to 35% on central HVAC power usage"
        ]
      },
      {
        icon: <Zap size={20} />,
        title: "Smart Lighting Management",
        desc: "Reduce unnecessary lighting consumption across commercial floors, common areas, and parking facilities with intelligent lighting controls.",
        highlights: [
          "Occupancy-based auto-dimming and scheduling",
          "Daylight harvesting sensors for perimeter zones",
          "Integration with DALI and BACnet lighting controllers",
          "Extends fixture lifespan while lowering electricity bills"
        ]
      },
      {
        icon: <Wifi size={20} />,
        title: "IoT & Field Sensor Integration",
        desc: "Connect your building's physical infrastructure with a universal mesh of intelligent edge devices and multi-protocol adapters.",
        highlights: [
          "Real-time tracking of energy, water, gas, and environmental sensors",
          "Supports BACnet IP/MSTP, Modbus RTU/TCP, MQTT, and LoRaWAN",
          "Zero downtime deployment over existing legacy controllers",
          "Continuous telemetry ingestion for total building visibility"
        ]
      },
      {
        icon: <Layers size={20} />,
        title: "AI Analytics & Predictive Intelligence",
        desc: "Turn raw building telemetry into meaningful, decision-ready insights through self-learning algorithms.",
        highlights: [
          "Pre-emptively detects equipment degradation before failure",
          "Historical consumption baseline modeling & anomaly scoring",
          "Peak demand forecasting & load shifting recommendations",
          "Root-cause diagnostics for operational disruptions"
        ]
      },
      {
        icon: <Activity size={20} />,
        title: "Centralised Command & Visibility",
        desc: "Consolidate multi-facility portfolios into a single cloud-native dashboard for facility managers and leadership.",
        highlights: [
          "Multi-building portfolio aggregation with floor plan mapping",
          "Role-based access control (RBAC) for engineering teams",
          "Customisable KPI widgets & live power distribution diagrams",
          "Accessible from desktop, tablet, and mobile browsers"
        ]
      },
      {
        icon: <Shield size={20} />,
        title: "Automated Operations & ESG Reporting",
        desc: "Eliminate manual compliance tracking while sustaining energy efficiency benchmarks automatically.",
        highlights: [
          "Automated ASHRAE, ISO 50001, and ESG compliance reports",
          "Self-correcting control feedback loops for temperature/pressure",
          "Instant alarm escalation via SMS, Email, and Push Notifications",
          "Audit-ready sustainability documentation"
        ]
      }
    ],
    fourPillars: [
      { label: "Monitor", desc: "Track energy consumption instantly and gain actionable visibility across all electrical and mechanical assets." },
      { label: "Analyse", desc: "Understand consumption behaviour, equipment degradation, peak demand spikes, and environmental conditions." },
      { label: "Predict", desc: "Identify patterns and anticipate future energy and operational requirements before equipment breakdowns occur." },
      { label: "Optimise & Automate", desc: "Use intelligent insights and automated feedback loops to continuously refine building efficiency without manual effort." },
    ],
    architectureSteps: [
      { step: "01", title: "Field Layer", desc: "BACnet/Modbus Chillers, AHUs, Meters, Lighting, VFDs, and Environmental Sensors." },
      { step: "02", title: "Edge Layer", desc: "Probiz Edge Connectors parse protocol packets locally with offline fail-safe logic." },
      { step: "03", title: "AI Cloud Engine", desc: "Real-time stream processing, neural net forecasting, anomaly detection & rule engines." },
      { step: "04", title: "Control & Action", desc: "Autonomous VFD/Setpoint adjustments, automated alerts, and executive ESG dashboards." }
    ]
  };

  return (
    <section id={p.id} className="container max-w-6xl mx-auto px-6">
      {/* Header */}
      <motion.div variants={fadeUp} className="text-center mb-14">
        <Badge label={p.badge} color={p.color} muted={p.colorMuted} border={p.colorBorder} />
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-none mt-5 mb-4" style={{ color: p.color }}>{p.name}</h2>
        <p className="text-lg md:text-xl text-[#333333] font-medium max-w-3xl mx-auto leading-relaxed">{p.tagline}</p>
      </motion.div>

      {/* Hero — image left, content right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
        <motion.div variants={fadeUp} className="relative rounded-2xl overflow-hidden border shadow-2xl aspect-[16/10]"
          style={{ borderColor: p.colorBorder }}>
          <img src={p.heroImage} alt={p.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${p.colorMuted} 0%, transparent 55%)` }} />
          <div className="absolute bottom-4 left-4 right-4 bg-white/85 backdrop-blur-md p-4 rounded-xl border border-black/10">
            <p className="text-xs font-bold text-[#111111] uppercase tracking-wider mb-1">Intelligent Energy. Smarter Buildings.</p>
            <p className="text-[0.75rem] text-[#333333]">Turning operational and energy data into continuous actionable intelligence.</p>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="space-y-6">
          <p className="text-[#222222] leading-relaxed text-[0.95rem]">{p.description}</p>
          
          {/* Detailed stats grid */}
          <div className="grid grid-cols-2 gap-3">
            {p.stats.map((s, i) => (
              <div key={i} className="rounded-xl p-4 text-center border" style={{ background: p.colorMuted, borderColor: p.colorBorder }}>
                <div className="text-2xl font-extrabold tracking-tight" style={{ color: p.color }}>{s.val}</div>
                <div className="text-[0.66rem] text-[#333333] font-medium uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="text-xs text-neutral-600 flex items-center gap-2">
            <Globe size={13} style={{ color: p.color }} />
            <span>AI + IoT + Automation + Energy Analytics + BMS Integration</span>
          </div>
          <MetalButton href="https://prosmartenergy.io/#contact" target="_blank" variant="primary">
            Learn More <ArrowRight size={15} />
          </MetalButton>
        </motion.div>
      </div>

      {/* 4 Pillars: Monitor, Analyse, Predict, Optimise */}
      <div className="mb-16">
        <div className="text-center max-w-xl mx-auto mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Operational Shift</p>
          <h3 className="text-2xl font-bold text-[#111111]">From Reactive Management to Proactive Optimisation</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {p.fourPillars.map((item, i) => (
            <div key={i} className="p-6 rounded-2xl border bg-white/70 shadow-sm flex flex-col justify-between" style={{ borderColor: p.colorBorder }}>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 size={18} className="text-[#10b981]" />
                  <h4 className="font-bold text-sm text-[#111111] uppercase tracking-wider">{item.label}</h4>
                </div>
                <p className="text-xs text-[#333333] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep Capabilities Grid */}
      <div className="mb-16">
        <div className="text-center max-w-xl mx-auto mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Core Ecosystem</p>
          <h3 className="text-2xl md:text-3xl font-bold text-[#111111]">One Intelligent Platform for Your Entire Building</h3>
        </div>
        <motion.div variants={{ show: { transition: { staggerChildren: 0.07 } } }}
          initial="hidden" whileInView="show" viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {p.features.map((f, i) => (
            <FeatureCardDetailed key={i} {...f} color={p.color} muted={p.colorMuted} border={p.colorBorder} />
          ))}
        </motion.div>
      </div>

      {/* Technical Integration Architecture */}
      <div className="p-8 md:p-10 rounded-3xl border bg-white/60 shadow-lg" style={{ borderColor: p.colorBorder }}>
        <div className="text-center max-w-xl mx-auto mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-1">Architecture</p>
          <h3 className="text-xl md:text-2xl font-bold text-[#111111]">End-to-End Data Integration Flow</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {p.architectureSteps.map((s, idx) => (
            <div key={idx} className="p-4 rounded-xl border bg-white/80" style={{ borderColor: "rgba(0,0,0,0.1)" }}>
              <span className="text-xs font-black text-[#10b981]">{s.step}</span>
              <h4 className="text-sm font-bold text-[#111111] mt-1 mb-1">{s.title}</h4>
              <p className="text-[0.72rem] text-[#333333] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SECTION 2 — Probiz Facility Management (4 Main Pillars)
// ═══════════════════════════════════════════════════════════════════════════════
function FacilityManagementSection() {
  const p = {
    id: "facility-management",
    badge: "Enterprise Building Operations & Maintenance Platform",
    name: "Facility Management",
    tagline: "Unify Asset Tracking, Preventive Maintenance, Work Orders, and Occupant Requests into One Intelligent Operations Engine.",
    description:
      "Probiz Facility Management is an end-to-end digital operations suite engineered to modernise commercial building maintenance. Built for facility directors, chief engineers, and field technicians, the platform eliminates paper-based friction and spreadsheet silos by connecting asset life cycles, preventive servicing schedules, work order dispatches, and tenant work requests into one real-time operational ecosystem.",
    color: "#111111",
    colorMuted: "rgba(0,0,0,0.06)",
    colorBorder: "rgba(0,0,0,0.2)",
    heroImage: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80",
    stats: [
      { val: "45%", label: "Breakdown Cost Reduction" },
      { val: "99.8%", label: "SLA Compliance Rate" },
      { val: "3.5x", label: "Faster Ticket Resolution" },
      { val: "100%", label: "Digital Asset Audit Trace" },
    ],
    fourPillars: [
      {
        icon: <Database size={20} />,
        title: "1. Asset Management (Digital Twin Registry)",
        desc: "Gain total visibility over every electrical panel, chiller, AHU, pump, elevator, and physical asset in your property portfolio.",
        highlights: [
          "Universal Asset Registry: Centralized digital repository for serial numbers, installation dates, model specifications, and locations.",
          "QR & Barcode Tagging: Scan physical equipment tags with mobile devices for instant access to service logs, manuals, and technical schematics.",
          "Lifecycle & Financial Tracking: Monitor asset depreciation, warranty expirations, replacement costs, and CapEx budget forecasts.",
          "Health & Reliability Metrics: Real-time tracking of Mean Time Between Failures (MTBF), Mean Time To Repair (MTTR), and health scorecards."
        ]
      },
      {
        icon: <RefreshCw size={20} />,
        title: "2. Preventive Management (Servicing & PM Automation)",
        desc: "Transition from costly reactive fire-fighting to structured, automated preventive and predictive maintenance schedules.",
        highlights: [
          "Automated PM Scheduling: Generate recurring servicing tasks automatically based on runtime hours, calendar intervals, or meter readings.",
          "Digital SOP Checklists: Standardized step-by-step procedures ensuring technicians adhere strictly to safety and maintenance guidelines.",
          "Telemetry Condition Triggers: IoT sensor integrations trigger automatic preventive maintenance upon detecting abnormal vibration, thermal, or pressure spikes.",
          "Extended Equipment Lifespan: Prevents minor component wear from turning into catastrophic equipment failures, extending asset life by up to 30%."
        ]
      },
      {
        icon: <Settings size={20} />,
        title: "3. Work Order Management (Smart Dispatch & SLA Tracking)",
        desc: "Streamline engineering workflows from ticket generation to technician assignment, spare parts usage, and resolution verification.",
        highlights: [
          "Automated Dispatching: Convert BMS alarms, sensor thresholds, or supervisor requests into structured digital work orders instantly.",
          "Skill & Location-Based Routing: Auto-assign work orders to the nearest qualified technician based on expertise and current building zone.",
          "Spare Parts & Inventory Sync: Track spare parts consumption per work order with automatic inventory deduction and low-stock reordering alerts.",
          "Real-Time SLA & Sign-offs: Monitor real-time response times, SLA deadlines, digital customer sign-offs, and quality assurance audits."
        ]
      },
      {
        icon: <Bell size={20} />,
        title: "4. Work Request Management (Tenant & Occupant Portal)",
        desc: "Empower tenants and facility occupants with an intuitive self-service portal to report issues and track resolution live.",
        highlights: [
          "Multi-Channel Reporting: Mobile web app, desktop portal, and QR code scan-to-report in common areas, conference rooms, and restrooms.",
          "Automated Triage & Approval: Smart rules classify, prioritize (Emergency vs Routine), and route requests to the correct supervisor for approval.",
          "Live Status Transparency: Occupants receive automated real-time SMS, Email, and Push notifications as their request progresses from Received to Resolved.",
          "Tenant Satisfaction Analytics: Post-resolution feedback ratings, Net Promoter Score (NPS) tracking, and service level benchmark analytics."
        ]
      }
    ],
    workflowSteps: [
      { step: "01", title: "Request & Detection", desc: "Occupants scan QR code or IoT sensors detect an anomaly to log a request instantly." },
      { step: "02", title: "Automated Triage", desc: "System checks priority, SLA deadlines, and asset warranty history to create a Work Order." },
      { step: "03", title: "Smart Technician Dispatch", desc: "Assigned to the nearest qualified engineer with SOP digital checklists on mobile." },
      { step: "04", title: "Resolution & Asset Update", desc: "Technician completes work, logs spare parts used, updates asset history, and obtains digital sign-off." }
    ]
  };

  return (
    <section id={p.id} className="container max-w-6xl mx-auto px-6">
      {/* Header */}
      <motion.div variants={fadeUp} className="text-center mb-14">
        <Badge label={p.badge} color={p.color} muted={p.colorMuted} border={p.colorBorder} />
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-none mt-5 mb-4" style={{ color: p.color }}>{p.name}</h2>
        <p className="text-lg md:text-xl text-[#333333] font-medium max-w-3xl mx-auto leading-relaxed">{p.tagline}</p>
      </motion.div>

      {/* Hero — content left, image right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
        <motion.div variants={fadeUp} className="space-y-6 order-2 lg:order-1">
          <p className="text-[#222222] leading-relaxed text-[0.95rem]">{p.description}</p>
          
          {/* Detailed stats grid */}
          <div className="grid grid-cols-2 gap-3">
            {p.stats.map((s, i) => (
              <div key={i} className="rounded-xl p-4 text-center border" style={{ background: p.colorMuted, borderColor: p.colorBorder }}>
                <div className="text-2xl font-extrabold tracking-tight" style={{ color: p.color }}>{s.val}</div>
                <div className="text-[0.66rem] text-[#333333] font-medium uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-2xl border bg-white/70 space-y-2 shadow-sm" style={{ borderColor: p.colorBorder }}>
            <p className="text-xs font-bold uppercase tracking-wider text-[#111111]">Built for Facilities, Commercial Towers & Industrial Parks</p>
            <p className="text-xs text-[#333333] leading-relaxed">
              Probiz Facility Management replaces paper logs and fragmented tools with an end-to-end digital command center for engineering and service teams.
            </p>
          </div>
          <MetalButton href="/contact" variant="primary">
            Request Facility Management Demo <ArrowRight size={15} />
          </MetalButton>
        </motion.div>

        <motion.div variants={fadeUp} className="relative rounded-2xl overflow-hidden border shadow-2xl aspect-[16/10] order-1 lg:order-2"
          style={{ borderColor: p.colorBorder }}>
          <img src={p.heroImage} alt={p.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(225deg, ${p.colorMuted} 0%, transparent 55%)` }} />
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <div className="text-[0.65rem] font-bold px-3 py-1.5 rounded-full backdrop-blur-md bg-white/85 border border-black/10 text-[#111111]">
              ● 4 PILLARS INTEGRATED
            </div>
            <div className="text-[0.65rem] font-bold px-3 py-1.5 rounded-full backdrop-blur-md bg-white/85 border border-black/10 text-[#111111]">
              Assets · Maintenance · Work Orders · Requests
            </div>
          </div>
        </motion.div>
      </div>

      {/* The 4 Main Pillars Showcase */}
      <div className="mb-16">
        <div className="text-center max-w-xl mx-auto mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Core Operations Architecture</p>
          <h3 className="text-2xl md:text-3xl font-bold text-[#111111]">The 4 Main Pillars of Facility Management</h3>
        </div>
        <motion.div variants={{ show: { transition: { staggerChildren: 0.07 } } }}
          initial="hidden" whileInView="show" viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {p.fourPillars.map((f, i) => (
            <FeatureCardDetailed key={i} {...f} color={p.color} muted={p.colorMuted} border={p.colorBorder} />
          ))}
        </motion.div>
      </div>

      {/* End-to-End Workflow Execution */}
      <div className="p-8 md:p-10 rounded-3xl border bg-white/60 shadow-lg mb-16" style={{ borderColor: p.colorBorder }}>
        <div className="text-center max-w-xl mx-auto mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-1">Operational Flow</p>
          <h3 className="text-xl md:text-2xl font-bold text-[#111111]">End-to-End Facility Issue Resolution Lifecycle</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {p.workflowSteps.map((s, idx) => (
            <div key={idx} className="p-4 rounded-xl border bg-white/80" style={{ borderColor: "rgba(0,0,0,0.1)" }}>
              <span className="text-xs font-black text-[#047857]">{s.step}</span>
              <h4 className="text-sm font-bold text-[#111111] mt-1 mb-1">{s.title}</h4>
              <p className="text-[0.72rem] text-[#333333] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SECTION 3 — Why Probiz Energy AI (14+ Years Experience)
// ═══════════════════════════════════════════════════════════════════════════════
function WhyProbizSection() {
  const points = [
    {
      title: "Centralised Visibility",
      desc: "Bring critical building information into one intelligent environment.",
      detail: "Single-pane-of-glass dashboard across all HVAC, electrical, water, and security infrastructure."
    },
    {
      title: "Real-Time Intelligence",
      desc: "Access live energy and operational information for faster, data-driven decisions.",
      detail: "Sub-second sensor streaming with real-time anomaly alerts to prevent unexpected outages."
    },
    {
      title: "Automated Operations",
      desc: "Reduce repetitive manual work and improve operational efficiency.",
      detail: "Closed-loop automated setpoint tuning, automated tenant invoicing, and scheduled diagnostics."
    },
    {
      title: "Predictive Insights",
      desc: "Move beyond historical reporting with proactive intelligence and predictive analysis.",
      detail: "Machine-learning models anticipate peak loads, equipment failure risks, and seasonal shifts."
    },
    {
      title: "Sustainable Performance",
      desc: "Improve energy efficiency while supporting long-term sustainability objectives.",
      detail: "Verifiable carbon footprint tracking, GRESB/LEED data support, and ISO 50001 compliance."
    },
  ];

  return (
    <section className="container max-w-6xl mx-auto px-6 mb-16">
      <div className="rounded-3xl p-8 md:p-12 border bg-white/80 backdrop-blur-md shadow-xl" style={{ borderColor: "rgba(0,0,0,0.15)" }}>
        <div className="max-w-3xl mx-auto text-center mb-10 space-y-4">
          <Badge label="14+ Years of Industry Leadership" color="#111111" muted="rgba(0,0,0,0.06)" border="rgba(0,0,0,0.2)" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#111111] tracking-tight">Why Probiz Energy AI?</h2>
          <p className="text-[#333333] text-sm md:text-base leading-relaxed">
            With <strong>14+ years of experience in energy management and smart infrastructure</strong>, Probiz Automation brings deep industry knowledge together with modern digital technologies. Our strength lies in creating seamless integrations between systems, devices, data, and people — helping organisations build reliable and efficient smart infrastructure.
          </p>
          <p className="text-[#111111] font-bold text-base md:text-lg pt-2 italic">
            &quot;We don&apos;t just connect technology. We connect your entire building into one intelligent ecosystem.&quot;
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-4">
          {points.map((pt, i) => (
            <div key={i} className="p-4 rounded-xl border bg-white/60 space-y-1.5 flex flex-col justify-between" style={{ borderColor: "rgba(0,0,0,0.1)" }}>
              <div>
                <Award size={18} className="text-[#111111] mb-2" />
                <h4 className="text-xs font-bold text-[#111111] mb-1">{pt.title}</h4>
                <p className="text-[0.72rem] text-[#333333] font-medium leading-relaxed mb-2">{pt.desc}</p>
              </div>
              <p className="text-[0.66rem] text-neutral-500 pt-2 border-t border-black/10">{pt.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════════════════════════════════════════
const navProducts = [
  { id: "probiz-energy",        label: "Probiz Energy AI",     color: "#111111", icon: <Cpu size={14} /> },
  { id: "facility-management", label: "Facility Management",  color: "#222222", icon: <Layers size={14} /> },
];

export default function ProductsPage() {
  return (
    <>
      <main className="min-h-screen pt-32 pb-24 text-[#111111]">

        {/* ── Page Hero ─────────────────────────────────────────────────────── */}
        <motion.section
          initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="container max-w-6xl mx-auto px-6 mb-16 text-center">
          <motion.div variants={fadeUp}>
            <span className="text-xs font-semibold tracking-wide uppercase text-[#333333] bg-[#333333]/10 py-1.5 px-4 rounded-full border border-[#333333]/20">
              Probiz Enterprise Suite
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none mt-5 mb-5">
              The Smartest Brain<br className="hidden md:block" /> for Your Building.
            </h1>
            <p className="text-[#333333] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Transform the way your building operates with Probiz Energy AI & Facility Management — combining AI analytics, asset management, preventive servicing, work orders, and tenant requests into one connected ecosystem.
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

        {/* ── Product 1: Probiz Energy AI ───────────────────────────────────── */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.08 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}>
          <ProbizEnergySection />
        </motion.div>

        <SectionDivider />

        {/* ── Product 2: Facility Management ────────────────────────────────── */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.08 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}>
          <FacilityManagementSection />
        </motion.div>

        <SectionDivider />

        {/* ── Why Probiz Energy AI ──────────────────────────────────────────── */}
        <WhyProbizSection />

        {/* ── Bottom Call To Action ─────────────────────────────────────────── */}
        <div className="container max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="rounded-3xl p-10 md:p-16 text-center"
            style={{ background: "linear-gradient(135deg, rgba(229,229,229,0.8), rgba(245,245,245,0.6))", border: "0.5px solid var(--color-border)" }}>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-[#111111]">Your Building Is Already Generating Data.</h2>
            <p className="text-lg md:text-xl text-[#333333] font-medium max-w-xl mx-auto mb-6">
              It&apos;s time to make that data intelligent.
            </p>
            <p className="text-sm text-[#333333] max-w-lg mx-auto mb-8 leading-relaxed">
              Experience the power of Probiz Energy AI. Monitor smarter. Operate better. Optimise continuously.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <MetalButton href="/contact" variant="primary">
                Book a Platform Demo <ArrowRight size={15} />
              </MetalButton>
              <MetalButton href="/contact" variant="secondary">
                Contact Our Experts
              </MetalButton>
            </div>
          </motion.div>
        </div>

      </main>

      <Footer />
    </>
  );
}
