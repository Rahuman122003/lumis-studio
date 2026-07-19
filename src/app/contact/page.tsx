"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParallaxBackground from "@/components/ParallaxBackground";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", org: "", msg: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email) {
      setSubmitted(true);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-[#10b981]" size={20} />,
      label: "Email",
      value: "info@probiztech.com",
      sub: "Sales & Support inquiries",
    },
    {
      icon: <Phone className="text-[#10b981]" size={20} />,
      label: "Phone",
      value: "+1 (800) 555-0199",
      sub: "Mon - Fri, 9am - 6pm EST",
    },
    {
      icon: <MapPin className="text-[#10b981]" size={20} />,
      label: "Office",
      value: "100 Innovation Way, Suite 400",
      sub: "Tech Plaza, NY 10001",
    },
  ];

  return (
    <>
      <ParallaxBackground />
      <Navbar />

      <main className="min-h-screen pt-32 pb-24 text-white">
        {/* Header Block */}
        <section className="container max-w-6xl mx-auto px-6 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <span className="text-xs font-semibold tracking-wide uppercase text-[#10b981] bg-[#10b981]/10 py-1.5 px-4 rounded-full border border-[#10b981]/20">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none mt-4">
              Contact Our Experts
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Have questions about integrating your building management systems with Probiz Energy AI? We are here to help.
            </p>
          </motion.div>
        </section>

        {/* Contact Layout */}
        <section className="container max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Info panel (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-5 bg-[#0c0c0c]/40 border border-neutral-900 rounded-2xl text-left"
                >
                  <div className="p-3 bg-neutral-900 border border-neutral-800/80 rounded-xl">
                    {info.icon}
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      {info.label}
                    </p>
                    <p className="text-sm font-semibold text-white">
                      {info.value}
                    </p>
                    <p className="text-xs text-neutral-400">{info.sub}</p>
                  </div>
                </div>
              ))}

              <div className="p-6 bg-[#10b981]/5 border border-[#10b981]/10 rounded-2xl text-left space-y-3">
                <div className="flex items-center gap-2 text-[#10b981] font-bold text-sm">
                  <MessageSquare size={16} /> Support Channels
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Existing clients can also open service tickets directly through the Probiz Technologies portal or email support@probiztech.com.
                </p>
              </div>
            </div>

            {/* Form panel (8 cols) */}
            <div className="lg:col-span-8">
              <div className="bg-[#0c0c0c]/40 border border-neutral-900 rounded-3xl p-8 md:p-10 backdrop-blur-md">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-4"
                  >
                    <div className="w-16 h-16 bg-[#10b981]/10 text-[#10b981] rounded-full flex items-center justify-center mx-auto border border-[#10b981]/20 text-2xl font-bold">
                      ✓
                    </div>
                    <h2 className="text-2xl font-bold text-white">Message Sent!</h2>
                    <p className="text-neutral-400 max-w-md mx-auto text-sm">
                      Thank you for contacting Probiz Automation. An automation engineer from our team will review your request and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-primary mt-6"
                      style={{ padding: "10px 24px", fontSize: "0.85rem" }}
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 text-left">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-neutral-950 border border-neutral-800 rounded-xl py-3 px-4 text-sm text-neutral-200 focus:border-[#10b981] outline-none transition-colors"
                          placeholder="John Doe"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full bg-neutral-950 border border-neutral-800 rounded-xl py-3 px-4 text-sm text-neutral-200 focus:border-[#10b981] outline-none transition-colors"
                          placeholder="john@organization.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                        Organization / Company
                      </label>
                      <input
                        type="text"
                        value={form.org}
                        onChange={(e) => setForm({ ...form, org: e.target.value })}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl py-3 px-4 text-sm text-neutral-200 focus:border-[#10b981] outline-none transition-colors"
                        placeholder="ACME Corp"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                        Message / Project Scope *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={form.msg}
                        onChange={(e) => setForm({ ...form, msg: e.target.value })}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl py-3 px-4 text-sm text-neutral-200 focus:border-[#10b981] outline-none transition-colors resize-none"
                        placeholder="Tell us about your building facilities (number of buildings, current controllers, BMS protocols, etc.)."
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-full py-3 px-8 text-sm font-semibold transition-all"
                    >
                      Send Message <Send size={14} />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
