"use client";

import React from "react";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Compass, BookOpen, Layers, CheckCircle2, PlayCircle, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { MetalButton } from "@/components/ui/metal-button";

const guides = [
  {
    category: "HVAC & Energy Optimization",
    title: "Configuring AI HVAC Load Optimization & Setpoint Automation",
    readTime: "12 min guide",
    level: "Intermediate",
    desc: "Learn how to connect your central chiller plant and Air Handling Units (AHUs) to the Probiz Energy AI optimization loop to automatically balance cooling loads based on live weather telemetry and occupancy forecasts.",
    steps: [
      "Verify BACnet IP controller connectivity for Chiller #1 & AHUs",
      "Define comfort setpoint boundaries (e.g., 22.0°C to 24.5°C)",
      "Enable Closed-Loop AI Auto-Tuning mode",
      "Monitor power consumption reduction in real-time"
    ]
  },
  {
    category: "IoT Gateway & Integration",
    title: "Integrating BACnet IP & Modbus RTU Chillers with Probiz Edge Gateway",
    readTime: "15 min guide",
    level: "Advanced",
    desc: "A practical guide for electrical and facility engineers on deploying physical Probiz Edge gateways over RS-485 Modbus serial loops and Ethernet BACnet networks.",
    steps: [
      "Wire RS-485 shielded twisted pair cable to Edge Serial Port 1",
      "Configure Modbus slave IDs and register addresses (Baud rate 9600 8N1)",
      "Set up automatic gateway offline storage buffer (up to 1,000,000 samples)",
      "Verify gateway handshake with Probiz Energy AI cloud"
    ]
  },
  {
    category: "Facility Management",
    title: "Setting Up Multi-Tenant Utility Invoicing & Energy Cost Allocation",
    readTime: "8 min guide",
    level: "Beginner",
    desc: "Configure sub-metering breakdown per tenant floor, generate automated monthly energy invoices, and export audit-ready CSV reports.",
    steps: [
      "Assign sub-meters to specific tenant zones in Digital Twin registry",
      "Configure tariff schedules (Peak, Off-Peak, Shoulder rates)",
      "Set up automated PDF bill generation on the 1st of every month",
      "Send tenant portal login invites"
    ]
  },
  {
    category: "Peak Demand Shaving",
    title: "Implementing Peak Demand Shaving & Load Shifting Schedules",
    readTime: "10 min guide",
    level: "Intermediate",
    desc: "Pre-emptively detect utility demand threshold breaches and trigger automated load shedding across non-critical building zones.",
    steps: [
      "Establish maximum monthly kW demand limit",
      "Prioritise shed sequence (e.g., dim common area lighting -> stage secondary AHUs)",
      "Configure threshold alert triggers",
      "Review historical demand curve smoothing"
    ]
  }
];

export default function PlatformGuidesPage() {
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
              Implementation & Best Practices
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none mt-4">
              Platform Guides
            </h1>
            <p className="text-[#333333] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Step-by-step tutorials and operational blueprints for facility managers, BMS engineers, and sustainability teams.
            </p>
          </motion.div>
        </section>

        {/* Guides List */}
        <section className="container max-w-6xl mx-auto px-6 space-y-10 mb-16">
          {guides.map((g, idx) => (
            <div
              key={idx}
              className="bg-[#E5E5E5]/70 border border-[#8E8E8E] rounded-3xl p-8 md:p-10 backdrop-blur-md space-y-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#047857] bg-[#047857]/10 px-3 py-1 rounded-full border border-[#047857]/20">
                  {g.category}
                </span>
                <div className="flex items-center gap-4 text-xs font-semibold text-[#555555]">
                  <span>{g.readTime}</span>
                  <span>•</span>
                  <span>Level: {g.level}</span>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111111] mb-2">{g.title}</h2>
                <p className="text-sm text-[#333333] leading-relaxed">{g.desc}</p>
              </div>

              {/* Implementation Steps Checklist */}
              <div className="bg-white/70 border border-[#8E8E8E]/40 rounded-2xl p-5 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#111111] flex items-center gap-2">
                  <PlayCircle size={15} className="text-[#047857]" /> Execution Steps
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {g.steps.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5 text-xs text-[#222222]">
                      <CheckCircle2 size={15} className="text-[#047857] flex-shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
