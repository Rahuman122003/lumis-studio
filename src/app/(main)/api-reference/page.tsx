"use client";

import React, { useState } from "react";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Code, Terminal, Key, Cpu, Zap, Copy, Check, Server, ArrowRight } from "lucide-react";
import { MetalButton } from "@/components/ui/metal-button";

const endpoints = [
  {
    method: "POST",
    path: "/v1/telemetry/ingest",
    title: "Ingest Sensor Telemetry",
    desc: "Stream real-time sensor metrics (temperature, kW power, flow rate, pressure) from edge gateways to Probiz Cloud.",
    code: `{
  "gateway_id": "gw-blr-tower-04",
  "timestamp": "2026-09-08T21:45:00Z",
  "metrics": [
    { "sensor_id": "hvac_ahu_01_temp", "val": 22.4, "unit": "C" },
    { "sensor_id": "chiller_02_kw", "val": 145.8, "unit": "kW" },
    { "sensor_id": "main_grid_pf", "val": 0.97, "unit": "pf" }
  ]
}`,
  },
  {
    method: "GET",
    path: "/v1/devices/status",
    title: "Get Gateway & Sensor Status",
    desc: "Fetch connected gateway operational status, signal quality, and telemetry polling health scores.",
    code: `// Response (200 OK)
{
  "gateways": [
    {
      "id": "gw-blr-tower-04",
      "status": "ONLINE",
      "uptime_pct": 99.98,
      "connected_sensors": 480,
      "protocol": "BACnet IP"
    }
  ]
}`,
  },
  {
    method: "PUT",
    path: "/v1/hvac/setpoint",
    title: "Update HVAC Setpoint",
    desc: "Send closed-loop setpoint adjustments to AHUs, Chillers, or VAV boxes with optional manual override duration.",
    code: `{
  "asset_id": "ahu_zone_3b",
  "target_temp_c": 23.0,
  "override_mode": "AI_AUTO",
  "duration_minutes": 120
}`,
  },
  {
    method: "GET",
    path: "/v1/analytics/energy-summary",
    title: "Get Energy Consumption Summary",
    desc: "Retrieve aggregated consumption, peak demand spikes, baseline forecast, and cost estimation for specified building zones.",
    code: `// Response (200 OK)
{
  "facility_id": "fac-bengaluru-hq",
  "period": "LAST_24_HOURS",
  "total_kwh": 14250.5,
  "savings_pct": 34.2,
  "co2_saved_kg": 11400
}`,
  },
];

export default function ApiReferencePage() {
  const [activeLang, setActiveLang] = useState<"curl" | "javascript" | "python">("javascript");
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const copyCode = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

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
              REST & WebSockets API
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none mt-4">
              API Reference
            </h1>
            <p className="text-[#333333] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Integrate Probiz Energy AI directly with your enterprise ERP, custom dashboards, or field edge devices using standard REST endpoints.
            </p>
          </motion.div>
        </section>

        {/* Authentication Notice */}
        <section className="container max-w-6xl mx-auto px-6 mb-12">
          <div className="bg-[#0A0A0A] text-white rounded-3xl p-8 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-neutral-900 border border-neutral-700 rounded-2xl text-[#047857]">
                <Key size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Bearer Token Authentication</h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Pass your API key in the Authorization header: <code className="bg-neutral-800 px-2 py-0.5 rounded text-[#047857] font-mono">Authorization: Bearer pbz_live_xxx</code>
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              {(["javascript", "python", "curl"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveLang(lang)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                    activeLang === lang
                      ? "bg-[#047857] text-white shadow-md"
                      : "bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Endpoints List */}
        <section className="container max-w-6xl mx-auto px-6 space-y-8">
          {endpoints.map((ep, idx) => (
            <div
              key={idx}
              className="bg-[#E5E5E5]/70 border border-[#8E8E8E] rounded-3xl p-8 backdrop-blur-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Column: Info */}
              <div className="lg:col-span-5 space-y-4 text-left">
                <div className="flex items-center gap-3">
                  <span
                    className={`px-3 py-1 rounded-lg text-xs font-black tracking-wider ${
                      ep.method === "POST"
                        ? "bg-blue-600/15 text-blue-700 border border-blue-600/30"
                        : ep.method === "GET"
                        ? "bg-[#047857]/15 text-[#047857] border border-[#047857]/30"
                        : "bg-amber-600/15 text-amber-700 border border-amber-600/30"
                    }`}
                  >
                    {ep.method}
                  </span>
                  <span className="font-mono text-sm font-bold text-[#111111]">{ep.path}</span>
                </div>
                <h3 className="text-xl font-bold text-[#111111]">{ep.title}</h3>
                <p className="text-xs text-[#333333] leading-relaxed">{ep.desc}</p>
              </div>

              {/* Right Column: Code Snippet */}
              <div className="lg:col-span-7 bg-[#0A0A0A] rounded-2xl p-5 border border-neutral-800 relative group font-mono text-xs overflow-x-auto text-neutral-200">
                <button
                  onClick={() => copyCode(ep.code, idx)}
                  className="absolute right-4 top-4 p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-700 transition-colors"
                  title="Copy code"
                >
                  {copiedIdx === idx ? <Check size={14} className="text-[#047857]" /> : <Copy size={14} />}
                </button>
                <pre className="text-[0.78rem] leading-relaxed">{ep.code}</pre>
              </div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
