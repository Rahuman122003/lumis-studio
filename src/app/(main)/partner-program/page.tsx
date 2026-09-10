"use client";

import React, { useState } from "react";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Handshake, Award, Shield, Check, ArrowRight, Building, Users, Send } from "lucide-react";
import { MetalButton } from "@/components/ui/metal-button";

const partnerTiers = [
  {
    name: "System Integrator (SI)",
    badge: "Certified Field Partner",
    desc: "For BMS contractors, electrical integrators, and MEP firms deploying smart building controls.",
    benefits: [
      "25%+ Tiered hardware & gateway margins",
      "Dedicated technical partner support engineer",
      "Co-branded marketing & joint sales collateral",
      "Access to Probiz Edge Gateway certification training"
    ]
  },
  {
    name: "Solution & Energy Partner",
    badge: "Enterprise Advisor",
    desc: "For energy consultants, ESCOs, and sustainability audit firms offering turnkey decarbonization.",
    benefits: [
      "Recurring SaaS subscription revenue sharing",
      "Priority REST & GraphQL API bandwidth",
      "Joint customer case studies & industry webinars",
      "Custom ESG & ISO 50001 report white-labeling"
    ]
  },
  {
    name: "OEM Tech Alliance",
    badge: "Hardware & Platform Partner",
    desc: "For chiller manufacturers, meter OEMs, VFD vendors, and IoT sensor manufacturers.",
    benefits: [
      "Native protocol driver integration in Probiz Edge",
      "Joint product validation & interoperability seal",
      "Pre-loaded device profiles in Digital Twin library",
      "Executive strategy sessions with Probiz product team"
    ]
  }
];

export default function PartnerProgramPage() {
  const [form, setForm] = useState({ name: "", company: "", email: "", type: "System Integrator", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const sanitize = (text: string) => text.replace(/<[^>]*>?/gm, "").trim();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const cleanName = sanitize(form.name).slice(0, 100);
    const cleanEmail = sanitize(form.email).slice(0, 100);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!cleanName || !cleanEmail) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!emailRegex.test(cleanEmail)) {
      setError("Please enter a valid work email address.");
      return;
    }

    setSubmitted(true);
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
              Grow With Us
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none mt-4">
              Probiz Partner Program
            </h1>
            <p className="text-[#333333] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Join our global network of system integrators, OEMs, ESCOs, and energy advisors delivering AI building automation.
            </p>
          </motion.div>
        </section>

        {/* Partner Tiers */}
        <section className="container max-w-6xl mx-auto px-6 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTiers.map((tier, idx) => (
              <div
                key={idx}
                className="bg-[#E5E5E5]/70 border border-[#8E8E8E] rounded-3xl p-8 backdrop-blur-md flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <span className="text-[0.7rem] font-bold uppercase tracking-wider text-[#047857] bg-[#047857]/10 px-3 py-1 rounded-full border border-[#047857]/20">
                    {tier.badge}
                  </span>
                  <h3 className="text-xl font-bold text-[#111111] pt-1">{tier.name}</h3>
                  <p className="text-xs text-[#333333] leading-relaxed">{tier.desc}</p>
                  
                  <ul className="space-y-2.5 pt-4 border-t border-black/10">
                    {tier.benefits.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs text-[#222222]">
                        <Check size={14} className="text-[#047857] flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Partner Application Form */}
        <section className="container max-w-4xl mx-auto px-6">
          <div className="bg-[#E5E5E5]/80 border border-[#8E8E8E] rounded-3xl p-8 md:p-12 backdrop-blur-md text-left">
            <h2 className="text-3xl font-extrabold text-[#111111] mb-2 text-center">Become a Probiz Partner</h2>
            <p className="text-xs text-[#333333] text-center max-w-md mx-auto mb-8">
              Fill out the partner application form and our partner manager will get in touch within 24 hours.
            </p>

            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 bg-[#047857]/10 text-[#047857] rounded-full flex items-center justify-center mx-auto border border-[#047857]/20 text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-[#111111]">Application Submitted!</h3>
                <p className="text-xs text-[#333333] max-w-md mx-auto">
                  Thank you for your interest in partnering with Probiz Technologies. Our team will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#333333]">Contact Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white border border-[#8E8E8E] rounded-xl py-3 px-4 text-sm text-[#111111] focus:border-[#047857] outline-none"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#333333]">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white border border-[#8E8E8E] rounded-xl py-3 px-4 text-sm text-[#111111] focus:border-[#047857] outline-none"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#333333]">Company / Firm</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full bg-white border border-[#8E8E8E] rounded-xl py-3 px-4 text-sm text-[#111111] focus:border-[#047857] outline-none"
                      placeholder="Apex Automation Systems"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#333333]">Partner Track</label>
                    <select
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                      className="w-full bg-white border border-[#8E8E8E] rounded-xl py-3 px-4 text-sm text-[#111111] focus:border-[#047857] outline-none"
                    >
                      <option value="System Integrator">System Integrator (SI)</option>
                      <option value="Solution Partner">Solution & Energy Partner</option>
                      <option value="OEM Tech Alliance">OEM Tech Alliance</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#333333]">Partnership Intent / Overview</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white border border-[#8E8E8E] rounded-xl py-3 px-4 text-sm text-[#111111] focus:border-[#047857] outline-none resize-none"
                    placeholder="Tell us about your active building projects or hardware ecosystem."
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-xl py-2 px-4">{error}</p>
                )}

                <MetalButton type="submit" variant="primary">
                  Submit Partner Application <Send size={14} />
                </MetalButton>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
