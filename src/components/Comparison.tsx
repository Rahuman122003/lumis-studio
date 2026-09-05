"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { PinContainer } from "@/components/ui/3d-pin";
import { Cpu, Leaf, Zap, Shield, Activity } from "lucide-react";

export default function Comparison() {
  const { ref, inView } = useInView();

  const products = [
    {
      id: 1,
      title: "Smart BMS Engine",
      subtitle: "Building Management System",
      pinText: "probiz.io/bms",
      href: "/products#probiz-energy",
      icon: <Cpu className="text-sky-400" size={24} />,
      colorClass: "text-sky-400",
      accentBg: "bg-sky-500",
      metric: "2.4x",
      metricLabel: "Operational Lift",
      details: [
        { label: "Response", val: "Instant" },
        { label: "Uptime", val: "99.9%" },
      ],
      desc: "Orchestrate HVAC, lighting, fire safety, access control, and utility systems automatically from one intelligent platform.",
    },
    {
      id: 2,
      title: "Energy Intelligence",
      subtitle: "Efficiency & Sustainability",
      pinText: "probiz.io/energy",
      href: "/products#facility-management",
      icon: <Leaf className="text-emerald-400" size={24} />,
      colorClass: "text-emerald-400",
      accentBg: "bg-emerald-500",
      metric: "35%",
      metricLabel: "Energy Reduction",
      details: [
        { label: "CO2 Saved", val: "4.8 Tons" },
        { label: "ROI Cycle", val: "4 Months" },
      ],
      desc: "Real-time energy monitoring, demand optimization, smart lighting profiles, and carbon footprint tracking.",
    },
    {
      id: 3,
      title: "Digital Twin",
      subtitle: "Virtual Infrastructure Modeling",
      pinText: "probiz.io/twin",
      href: "/products#probiz-energy",
      icon: <Zap className="text-yellow-400" size={24} />,
      colorClass: "text-yellow-400",
      accentBg: "bg-yellow-500",
      metric: "100%",
      metricLabel: "Visibility",
      details: [
        { label: "Sync Rate", val: "Real-time" },
        { label: "Assets", val: "Unlimited" },
      ],
      desc: "Real-time virtual representation of your physical infrastructure for monitoring, planning, and predictive analysis.",
    },
    {
      id: 4,
      title: "Connected CMMS",
      subtitle: "Facility Operations Engine",
      pinText: "probiz.io/cmms",
      href: "/products#facility-management",
      icon: <Shield className="text-purple-400" size={24} />,
      colorClass: "text-purple-400",
      accentBg: "bg-purple-500",
      metric: "4 Pillars",
      metricLabel: "Operations Suite",
      details: [
        { label: "SLA Rate", val: "99.8%" },
        { label: "Cost Saved", val: "45%" },
      ],
      desc: "Unify Asset Tracking, Preventive Maintenance, Work Orders, and Occupant Work Requests into one digital operations platform.",
    },
  ];

  return (
    <section
      id="products"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-pad bg-transparent relative overflow-hidden"
    >
      <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 relative z-20">
        {/* Header */}
        <motion.div
          className="section-header section-header--center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "var(--space-xl)" }}
        >
          <span className="section-label">PRODUCT PORTFOLIO</span>
          <h2 className="section-h2" style={{ maxWidth: 540 }}>
            Intelligent automation & energy optimization
          </h2>
          <p style={{ color: "var(--color-muted)", fontSize: "0.875rem", marginTop: "12px", maxWidth: "560px" }}>
            Hover over any product deck to rotate the 3D projection, view specifications, and establish live connection nodes.
          </p>
        </motion.div>

        {/* 3D Pin Cards Grid Container — 2x2 Grid with ample breathing room */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-36 gap-x-12 justify-items-center pt-16 pb-36 max-w-5xl mx-auto">
          {products.map((p) => (
            <div key={p.id} className="h-[26rem] w-full flex items-center justify-center relative my-4">
              <PinContainer title={p.pinText} href={p.href}>
                <div className="flex flex-col p-5 tracking-tight text-[#333333] w-[18.5rem] sm:w-[19.5rem] h-[24rem] bg-gradient-to-b from-[#E5E5E5] to-[#F5F5F5] border border-[#8E8E8E] rounded-2xl shadow-xl">
                  {/* Card Top */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`size-2.5 rounded-full ${p.accentBg} animate-pulse`} />
                      <div className="text-[10px] uppercase font-bold tracking-wider text-[#333333]">Live Telemetry</div>
                    </div>
                    {p.icon}
                  </div>

                  {/* Card Contents */}
                  <div className="flex-1 mt-5 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-[#111111] tracking-tight">
                        {p.title}
                      </h3>
                      <p className="text-[10px] text-[#333333] font-medium uppercase mt-0.5 tracking-wider">
                        {p.subtitle}
                      </p>
                      
                      <p className="text-xs text-[#333333] mt-3 leading-relaxed font-normal">
                        {p.desc}
                      </p>
                    </div>

                    {/* Stats Metric */}
                    <div className="my-2 py-2.5 border-t border-b border-[#8E8E8E] flex justify-between items-center">
                      <div className="space-y-0.5">
                        <div className={`text-2xl font-extrabold tracking-tight ${p.colorClass}`}>
                          {p.metric}
                        </div>
                        <div className="text-[10px] text-[#333333] uppercase font-semibold">
                          {p.metricLabel}
                        </div>
                      </div>

                      {/* Detail attributes */}
                      <div className="text-right space-y-1">
                        {p.details.map((detail, idx) => (
                          <div key={idx} className="text-[10px] text-[#333333]">
                            <span className="text-[#8E8E8E] mr-1">{detail.label}:</span>
                            <span className="font-mono text-[#111111]">{detail.val}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between items-center text-[11px] text-[#333333]">
                      <div className="flex items-center gap-1 font-medium">
                        <Activity size={10} className={p.colorClass} />
                        Connected
                      </div>
                      <span className={`${p.colorClass} font-semibold hover:underline`}>
                        Verify System →
                      </span>
                    </div>
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
