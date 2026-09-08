"use client";

import React, { useState, useRef } from "react";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Loader2 } from "lucide-react";
import { MetalButton } from "@/components/ui/metal-button";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", org: "", msg: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setLoading(true);
    setError("");
    try {
      await emailjs.send(
        "service_probiz",      // Replace with your EmailJS Service ID
        "template_contact",    // Replace with your EmailJS Template ID
        {
          from_name: form.name,
          from_email: form.email,
          organization: form.org,
          message: form.msg,
          to_email: "info@probizautomation.com",
        },
        "YOUR_PUBLIC_KEY"      // Replace with your EmailJS Public Key
      );
      setSubmitted(true);
      setForm({ name: "", email: "", org: "", msg: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Failed to send message. Please try again or email us directly at info@probizautomation.com.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-[#047857]" size={20} />,
      label: "Email",
      value: "info@probizautomation.com",
      sub: "Sales & Support inquiries",
    },
    {
      icon: <Phone className="text-[#047857]" size={20} />,
      label: "Phone",
      value: "+91 99161 99499",
      sub: "Mon - Fri, 9am - 6pm IST",
    },
    {
      icon: <MapPin className="text-[#047857]" size={20} />,
      label: "Office",
      value: "Probiz Technologies",
      sub: "Bengaluru, Karnataka, India",
    },
  ];

  return (
    <>
      <main className="min-h-screen pt-32 pb-24 text-[#111111]">
        {/* Header Block */}
        <section className="container max-w-6xl mx-auto px-6 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <span className="text-xs font-semibold tracking-wide uppercase text-[#047857] bg-[#047857]/10 py-1.5 px-4 rounded-full border border-[#047857]/20">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none mt-4">
              Contact Our Experts
            </h1>
            <p className="text-[#333333] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
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
                  className="flex items-start gap-4 p-5 bg-[#E5E5E5]/80 border border-[#8E8E8E] rounded-2xl text-left"
                >
                  <div className="p-3 bg-[#F5F5F5] border border-[#8E8E8E]/60 rounded-xl">
                    {info.icon}
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#333333]">
                      {info.label}
                    </p>
                    <p className="text-sm font-semibold text-[#111111]">
                      {info.value}
                    </p>
                    <p className="text-xs text-[#333333]">{info.sub}</p>
                  </div>
                </div>
              ))}

              <div className="p-6 bg-[#047857]/5 border border-[#047857]/10 rounded-2xl text-left space-y-3">
                <div className="flex items-center gap-2 text-[#047857] font-bold text-sm">
                  <MessageSquare size={16} /> Support Channels
                </div>
                <p className="text-xs text-[#333333] leading-relaxed">
                  Existing clients can also open service tickets directly through the Probiz Technologies portal or email info@probizautomation.com.
                </p>
              </div>
            </div>

            {/* Form panel (8 cols) */}
            <div className="lg:col-span-8">
              <div className="bg-[#E5E5E5]/80 border border-[#8E8E8E] rounded-3xl p-8 md:p-10 backdrop-blur-md">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-4"
                  >
                    <div className="w-16 h-16 bg-[#047857]/10 text-[#047857] rounded-full flex items-center justify-center mx-auto border border-[#047857]/20 text-2xl font-bold">
                      ✓
                    </div>
                    <h2 className="text-2xl font-bold text-[#111111]">Message Sent!</h2>
                    <p className="text-[#333333] max-w-md mx-auto text-sm">
                      Thank you for contacting Probiz Automation. An automation engineer from our team will review your request and get back to you within 24 hours.
                    </p>
                    <div className="mt-6">
                      <MetalButton onClick={() => setSubmitted(false)} variant="primary">
                        Send Another Message
                      </MetalButton>
                    </div>
                  </motion.div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 text-left">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-[#333333]">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-white border border-[#8E8E8E] rounded-xl py-3 px-4 text-sm text-[#111111] focus:border-[#047857] outline-none transition-colors"
                          placeholder="John Doe"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-[#333333]">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full bg-white border border-[#8E8E8E] rounded-xl py-3 px-4 text-sm text-[#111111] focus:border-[#047857] outline-none transition-colors"
                          placeholder="john@organization.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#333333]">
                        Organization / Company
                      </label>
                      <input
                        type="text"
                        value={form.org}
                        onChange={(e) => setForm({ ...form, org: e.target.value })}
                        className="w-full bg-white border border-[#8E8E8E] rounded-xl py-3 px-4 text-sm text-[#111111] focus:border-[#047857] outline-none transition-colors"
                        placeholder="ACME Corp"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#333333]">
                        Message / Project Scope *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={form.msg}
                        onChange={(e) => setForm({ ...form, msg: e.target.value })}
                        className="w-full bg-white border border-[#8E8E8E] rounded-xl py-3 px-4 text-sm text-[#111111] focus:border-[#047857] outline-none transition-colors resize-none"
                        placeholder="Tell us about your building facilities (number of buildings, current controllers, BMS protocols, etc.)."
                      />
                    </div>

                    {error && (
                      <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-xl py-2 px-4">{error}</p>
                    )}

                    <MetalButton type="submit" variant="primary" disabled={loading}>
                      {loading ? (
                        <><Loader2 size={14} className="animate-spin" /> Sending...</>
                      ) : (
                        <>Send Message <Send size={14} /></>
                      )}
                    </MetalButton>
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
