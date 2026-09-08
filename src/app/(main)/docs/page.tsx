"use client";

import React, { useState } from "react";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  BookOpen,
  Cpu,
  Wifi,
  ShieldCheck,
  Zap,
  Search,
  ChevronRight,
  Code,
  Terminal,
  FileText,
  Sliders,
  Layers,
  ArrowRight
} from "lucide-react";
import { MetalButton } from "@/components/ui/metal-button";

const categories = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: <BookOpen className="text-[#047857]" size={22} />,
    desc: "Overview of Probiz Energy AI, architecture, system requirements, and initial setup.",
    articles: [
      { title: "Probiz Automation Architecture Overview", time: "5 min read" },
      { title: "Quickstart: Deploying Your First Edge Connector", time: "8 min read" },
      { title: "User Roles, Permissions & Access Controls", time: "4 min read" },
    ],
  },
  {
    id: "edge-iot",
    title: "IoT & Protocol Gateway Setup",
    icon: <Wifi className="text-[#047857]" size={22} />,
    desc: "Connecting BACnet IP/MSTP, Modbus RTU/TCP, MQTT, and OPC-UA devices.",
    articles: [
      { title: "Configuring BACnet MSTP to BACnet IP Routers", time: "10 min read" },
      { title: "Modbus Register Mapping & Telemetry Polling", time: "7 min read" },
      { title: "Edge Offline Fail-Safe Storage & Retry Rules", time: "6 min read" },
    ],
  },
  {
    id: "energy-ai",
    title: "Energy AI & Analytics Engine",
    icon: <Zap className="text-[#047857]" size={22} />,
    desc: "Deep-dive into HVAC load balancing, anomaly detection, and peak demand algorithms.",
    articles: [
      { title: "Understanding Chiller Plant Load Balancing Algorithms", time: "12 min read" },
      { title: "Setting Up Dynamic Temperature Setpoint Schedules", time: "6 min read" },
      { title: "Peak Demand Forecasting & Auto-Load Shifting", time: "9 min read" },
    ],
  },
  {
    id: "security",
    title: "Security & Compliance",
    icon: <ShieldCheck className="text-[#047857]" size={22} />,
    desc: "Data encryption, ISO 50001 compliance, TLS telemetry streaming, and auditing.",
    articles: [
      { title: "End-to-End TLS 1.3 Telemetry Encryption", time: "5 min read" },
      { title: "Generating Audit-Ready ISO 50001 Reports", time: "8 min read" },
      { title: "Data Retention & Cloud Backup Policy", time: "4 min read" },
    ],
  },
];

export default function DocumentationPage() {
  const [search, setSearch] = useState("");

  return (
    <>
      <main className="min-h-screen pt-32 pb-24 text-[#111111]">
        {/* Header */}
        <section className="container max-w-6xl mx-auto px-6 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <span className="text-xs font-semibold tracking-wide uppercase text-[#047857] bg-[#047857]/10 py-1.5 px-4 rounded-full border border-[#047857]/20">
              Developer & Engineering Knowledge Base
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none mt-4">
              Documentation & Guides
            </h1>
            <p className="text-[#333333] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Explore step-by-step technical guides, IoT protocol configuration, AI model parameters, and platform architecture docs.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto mt-8 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search documentation (e.g., BACnet, Modbus, HVAC setpoints...)"
                className="w-full bg-white border border-[#8E8E8E] rounded-full py-3.5 pl-12 pr-6 text-sm text-[#111111] focus:border-[#047857] outline-none shadow-sm transition-all"
              />
            </div>
          </motion.div>
        </section>

        {/* Categories Grid */}
        <section className="container max-w-6xl mx-auto px-6 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="bg-[#E5E5E5]/70 border border-[#8E8E8E] rounded-3xl p-8 backdrop-blur-md space-y-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#F5F5F5] border border-[#8E8E8E]/60 rounded-2xl">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#111111]">{cat.title}</h3>
                    <p className="text-xs text-[#333333] mt-0.5">{cat.desc}</p>
                  </div>
                </div>

                <div className="space-y-3 pt-2 border-t border-black/10">
                  {cat.articles.map((art, idx) => (
                    <div
                      key={idx}
                      className="group flex items-center justify-between p-3 rounded-xl bg-white/70 hover:bg-white border border-[#8E8E8E]/40 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <FileText size={15} className="text-[#047857]" />
                        <span className="text-sm font-semibold text-[#111111] group-hover:text-[#047857] transition-colors">
                          {art.title}
                        </span>
                      </div>
                      <span className="text-[0.7rem] font-medium text-[#555555] flex items-center gap-1">
                        {art.time} <ChevronRight size={13} className="text-neutral-400 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Links Banner */}
        <section className="container max-w-6xl mx-auto px-6">
          <div className="bg-[#047857]/10 border border-[#047857]/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-bold text-[#111111]">Looking for API Endpoints?</h3>
              <p className="text-sm text-[#333333] max-w-lg">
                Check out our interactive REST & GraphQL API Reference for real-time telemetry ingestion and HVAC setpoint overrides.
              </p>
            </div>
            <MetalButton href="/api-reference" variant="primary">
              View API Reference <ArrowRight size={15} />
            </MetalButton>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
