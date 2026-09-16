"use client";

import React, { useState, useRef } from "react";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Loader2, Globe, ExternalLink } from "lucide-react";
import { MetalButton } from "@/components/ui/metal-button";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", org: "", msg: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const sanitize = (text: string) => text.replace(/<[^>]*>?/gm, "").trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const cleanName = sanitize(form.name).slice(0, 100);
    const cleanEmail = sanitize(form.email).slice(0, 100);
    const cleanOrg = sanitize(form.org).slice(0, 150);
    const cleanMsg = sanitize(form.msg).slice(0, 2000);

    if (!cleanName || !cleanEmail || !cleanMsg) {
      setError("Please fill out all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      setError("Please enter a valid work email address.");
      return;
    }

    // Rate limiting cooldown protection
    const lastSubmitted = typeof window !== "undefined" ? localStorage.getItem("last_contact_sub") : null;
    if (lastSubmitted && Date.now() - parseInt(lastSubmitted, 10) < 30000) {
      setError("Security Protection: Please wait 30 seconds before submitting another request.");
      return;
    }

    setLoading(true);
    try {
      // 1. Send Admin Notification Email (Contact Us)
      await emailjs.send(
        "service_hu3dxf5",
        "template_fz53dsl",     // Admin Contact Us Template ID
        {
          from_name: cleanName,
          from_email: cleanEmail,
          reply_to: cleanEmail,
          organization: cleanOrg,
          message: cleanMsg,
          to_email: "info@probizautomation.com",
          email: cleanEmail,
        },
        "9fR7EoDwwA_4UhF4B"
      );

      // 2. Send Auto-Reply Email to the User
      await emailjs.send(
        "service_hu3dxf5",
        "template_qqkhmca",     // User Auto-Reply Template ID
        {
          from_name: cleanName,
          from_email: cleanEmail,
          to_name: cleanName,
          to_email: cleanEmail,
          reply_to: "info@probizautomation.com",
          organization: cleanOrg,
          message: cleanMsg,
          email: cleanEmail,
        },
        "9fR7EoDwwA_4UhF4B"
      );

      if (typeof window !== "undefined") {
        localStorage.setItem("last_contact_sub", Date.now().toString());
      }
      setSubmitted(true);
      setForm({ name: "", email: "", org: "", msg: "" });
    } catch (err: any) {
      console.error("EmailJS error:", err);
      setError("Unable to submit message. Please try again or email info@probizautomation.com directly.");
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
      label: "India Office",
      value: "PROBIZ TECHNOLOGIES PVT LTD",
      sub: "Unit3F-03, Level 3, CENTURY CENTRAL, Mango Garden Layout, Bikasipura, Bengaluru, Karnataka 560062",
    },
    {
      icon: <MapPin className="text-[#047857]" size={20} />,
      label: "Oman Office",
      value: "ALMAHA Petroleum Products Marketing Co. SAOG",
      sub: "Al Maha Building 4th floor, behind Qatar Airways building, next to Aloft Hotel, Ghala, Muscat | P.O. Box: 1188, P.C. 114 | Tel: +968-24698900 / 24696001",
    },
  ];

  return (
    <>
      <main className="min-h-screen pt-24 pb-16 text-[#111111]">
        {/* Header Block */}
        <section className="container max-w-6xl mx-auto px-6 mb-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            <span className="text-xs font-semibold tracking-wide uppercase text-[#047857] bg-[#047857]/10 py-1.5 px-4 rounded-full border border-[#047857]/20">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-none mt-2">
              Contact Our Experts
            </h1>
            <p className="text-[#333333] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Have questions about integrating your building management systems with Probiz Energy AI? We are here to help.
            </p>
          </motion.div>
        </section>

        {/* Contact Layout */}
        <section className="container max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Direct Contact Info panel (5 cols) */}
            <div className="lg:col-span-5 space-y-4 order-2 lg:order-1 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#111111]">Direct Contact</h3>
                <div className="space-y-3">
                  {/* Email Card */}
                  <div className="flex items-center gap-4 p-4 bg-[#E5E5E5]/80 border border-[#8E8E8E] rounded-2xl text-left">
                    <div className="p-2.5 bg-[#F5F5F5] border border-[#8E8E8E]/60 rounded-xl shrink-0">
                      <Mail className="text-[#047857]" size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#333333]">Email Us</p>
                      <p className="text-sm font-bold text-[#111111] mt-0.5">info@probizautomation.com</p>
                      <p className="text-xs text-[#555555]">Sales & Support inquiries</p>
                    </div>
                  </div>

                  {/* Phone Card */}
                  <div className="flex items-center gap-4 p-4 bg-[#E5E5E5]/80 border border-[#8E8E8E] rounded-2xl text-left">
                    <div className="p-2.5 bg-[#F5F5F5] border border-[#8E8E8E]/60 rounded-xl shrink-0">
                      <Phone className="text-[#047857]" size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#333333]">Call Us</p>
                      <p className="text-sm font-bold text-[#111111] mt-0.5">+91 99161 99499</p>
                      <p className="text-xs text-[#555555]">Mon - Fri, 9am - 6pm IST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support Banner */}
              <div className="p-5 bg-[#047857]/5 border border-[#047857]/20 rounded-2xl text-left space-y-2 mt-4">
                <div className="flex items-center gap-2 text-[#047857] font-bold text-sm">
                  <MessageSquare size={16} /> Client Portal Support
                </div>
                <p className="text-xs text-[#444444] leading-relaxed">
                  Existing clients can submit service tickets directly through the Probiz Automation portal or contact their dedicated technical manager.
                </p>
              </div>
            </div>

            {/* Form panel (7 cols on large screens) */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="bg-[#E5E5E5]/80 border border-[#8E8E8E] rounded-3xl p-6 md:p-8 backdrop-blur-md h-full flex flex-col justify-center">
                <h3 className="text-lg font-bold text-[#111111] mb-4">Send Us a Message</h3>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 space-y-3"
                  >
                    <div className="w-14 h-14 bg-[#047857]/10 text-[#047857] rounded-full flex items-center justify-center mx-auto border border-[#047857]/20 text-xl font-bold">
                      ✓
                    </div>
                    <h2 className="text-xl font-bold text-[#111111]">Message Sent!</h2>
                    <p className="text-[#333333] max-w-md mx-auto text-xs">
                      Thank you for contacting Probiz Automation. An automation engineer from our team will review your request and get back to you within 24 hours.
                    </p>
                    <div className="mt-4">
                      <MetalButton onClick={() => setSubmitted(false)} variant="primary">
                        Send Another Message
                      </MetalButton>
                    </div>
                  </motion.div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 text-left">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-[#333333]">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-white border border-[#8E8E8E] rounded-xl py-2.5 px-3.5 text-sm text-[#111111] focus:border-[#047857] outline-none transition-colors"
                          placeholder="John Doe"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-[#333333]">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full bg-white border border-[#8E8E8E] rounded-xl py-2.5 px-3.5 text-sm text-[#111111] focus:border-[#047857] outline-none transition-colors"
                          placeholder="john@organization.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#333333]">
                        Organization / Company
                      </label>
                      <input
                        type="text"
                        value={form.org}
                        onChange={(e) => setForm({ ...form, org: e.target.value })}
                        className="w-full bg-white border border-[#8E8E8E] rounded-xl py-2.5 px-3.5 text-sm text-[#111111] focus:border-[#047857] outline-none transition-colors"
                        placeholder="ACME Corp"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#333333]">
                        Message / Project Scope *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={form.msg}
                        onChange={(e) => setForm({ ...form, msg: e.target.value })}
                        className="w-full bg-white border border-[#8E8E8E] rounded-xl py-2.5 px-3.5 text-sm text-[#111111] focus:border-[#047857] outline-none transition-colors resize-none"
                        placeholder="Tell us about your building facilities (number of buildings, current controllers, BMS protocols, etc.)."
                      />
                    </div>

                    {error && (
                      <p className="text-red-500 text-xs bg-red-50 border border-red-200 rounded-xl py-2 px-3">{error}</p>
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

        {/* Global Offices Section */}
        <section className="container max-w-6xl mx-auto px-6 mt-10">
          <div className="text-center mb-6 space-y-1.5">
            <span className="text-xs font-semibold tracking-wide uppercase text-[#047857] bg-[#047857]/10 py-1.5 px-4 rounded-full border border-[#047857]/20">
              Global Presence
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#111111]">Our Office Locations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* India Office Card */}
            <div className="group relative bg-[#E5E5E5]/90 border border-[#8E8E8E] rounded-3xl p-7 text-left flex flex-col justify-between hover:border-[#047857] transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden">
              {/* Decorative background glow on hover */}
              <div className="absolute -right-16 -top-16 w-40 h-40 bg-[#047857]/10 rounded-full blur-2xl group-hover:bg-[#047857]/20 transition-all pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 bg-[#047857]/10 border border-[#047857]/25 rounded-2xl text-[#047857] shrink-0 shadow-sm">
                    <MapPin size={22} className="animate-pulse" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#047857] bg-[#047857]/10 px-3 py-1 rounded-full border border-[#047857]/20 inline-block mb-1">
                      India
                    </span>
                    <h3 className="text-base font-extrabold text-[#111111] leading-snug">
                      PROBIZ TECHNOLOGIES PVT LTD
                    </h3>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#8E8E8E]/40 space-y-1 text-xs text-[#333333] leading-relaxed">
                  <p className="font-bold text-[#111111]">Unit3F-03, Level 3, CENTURY CENTRAL</p>
                  <p className="text-[#444444]">Mango Garden Layout, Bikasipura</p>
                  <p className="text-[#444444]">Bengaluru, Karnataka 560062, India</p>
                </div>

                {/* Map Container with rounded mask & border overlay */}
                <div className="w-full h-56 rounded-2xl overflow-hidden border border-[#8E8E8E]/60 relative mt-4 shadow-md group-hover:border-[#047857]/50 transition-colors">
                  <iframe
                    title="India Location Map"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "contrast(1.05) saturate(1.1)" }}
                    loading="lazy"
                    allowFullScreen
                    src="https://maps.google.com/maps?q=PROBIZ%20TECHNOLOGIES%20PVT%20LTD%20Century%20Central%20Bengaluru&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  />
                  {/* Subtle map header overlay badge */}
                  <div className="absolute bottom-3 left-3 bg-[#111111]/80 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-lg border border-white/20 flex items-center gap-1.5 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-[#047857] animate-ping" />
                    Bengaluru Headquarters
                  </div>
                </div>
              </div>
            </div>

            {/* Oman Office Card */}
            <div className="group relative bg-[#E5E5E5]/90 border border-[#8E8E8E] rounded-3xl p-7 text-left flex flex-col justify-between hover:border-[#047857] transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden">
              {/* Decorative background glow on hover */}
              <div className="absolute -right-16 -top-16 w-40 h-40 bg-[#047857]/10 rounded-full blur-2xl group-hover:bg-[#047857]/20 transition-all pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 bg-[#047857]/10 border border-[#047857]/25 rounded-2xl text-[#047857] shrink-0 shadow-sm">
                    <MapPin size={22} className="animate-pulse" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#047857] bg-[#047857]/10 px-3 py-1 rounded-full border border-[#047857]/20 inline-block mb-1">
                      Oman Regional Office
                    </span>
                    <h3 className="text-base font-extrabold text-[#111111] leading-snug">
                      PROBIZ TECHNOLOGIES PVT LTD
                    </h3>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#8E8E8E]/40 space-y-1 text-xs text-[#333333] leading-relaxed">
                  <p className="font-bold text-[#111111]">Al Maha Building, 4th Floor</p>
                  <p className="text-[#444444]">Behind Qatar Airways building, Ghala, Muscat, Oman</p>
                  <p className="text-[#047857] font-extrabold pt-0.5">Tel: +968-24698900 | +968-24696001</p>
                </div>

                {/* Map Container with rounded mask & border overlay */}
                <div className="w-full h-56 rounded-2xl overflow-hidden border border-[#8E8E8E]/60 relative mt-4 shadow-md group-hover:border-[#047857]/50 transition-colors">
                  <iframe
                    title="Oman Office Location Map"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "contrast(1.05) saturate(1.1)" }}
                    loading="lazy"
                    allowFullScreen
                    src="https://maps.google.com/maps?q=Al%20Maha%20Petroleum%20Building%20Ghala%20Muscat%20Oman&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  />
                  {/* Subtle map header overlay badge */}
                  <div className="absolute bottom-3 left-3 bg-[#111111]/80 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-lg border border-white/20 flex items-center gap-1.5 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-[#047857] animate-ping" />
                    Muscat Regional Hub
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
