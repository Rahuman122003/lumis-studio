"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  // Footer link data mapped from Lumis Studio
  const footerLinks = [
    {
      title: "Solutions",
      links: [
        { label: "Smart BMS", href: "/#solutions" },
        { label: "Energy Management", href: "/#solutions" },
        { label: "AI Analytics", href: "/#solutions" },
        { label: "Digital Twin", href: "/#solutions" },
        { label: "IoT Integration", href: "/#solutions" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Engineering Team", href: "/about" },
        { label: "Careers", href: "#" },
        { label: "Case Studies", href: "/#case-studies" },
        { label: "Contact", href: "/contact", pulse: true },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#" },
        { label: "API Reference", href: "#" },
        { label: "Platform Guides", href: "#" },
        { label: "Partner Program", href: "#" },
        { label: "Blog", href: "/blog" },
      ],
    },
  ];

  // Social media icons
  const socialLinks = [
    { icon: <Twitter size={18} />, label: "Twitter", href: "#" },
    { icon: <Linkedin size={18} />, label: "LinkedIn", href: "#" },
    { icon: <Instagram size={18} />, label: "Instagram", href: "#" },
    { icon: <Youtube size={18} />, label: "YouTube", href: "#" },
  ];

  return (
    <footer className="bg-[#080808]/40 relative h-fit rounded-3xl border border-neutral-900/60 overflow-hidden m-4 sm:m-8 z-10">
      <div className="max-w-7xl mx-auto p-8 sm:p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-8 lg:gap-12 pb-6">
          {/* Brand section */}
          <div className="flex flex-col space-y-4 lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <img
                src="/logoauto.png"
                alt="Probiz Automation Logo"
                style={{
                  height: 38,
                  width: "auto",
                  objectFit: "contain",
                }}
              />
              <span className="text-white font-bold text-base tracking-tight">
                Probiz Automation
              </span>
            </div>
            <p className="text-sm leading-relaxed text-neutral-400 max-w-xs">
              Intelligent building and industrial automation platform for the next generation of smart infrastructure.
            </p>
            
            {/* Newsletter input nested in brand section */}
            <div className="pt-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 block mb-2">Newsletter</span>
              {subscribed ? (
                <div className="text-xs text-neutral-400 bg-neutral-900/50 border border-neutral-800/80 rounded-full py-2 px-4 w-fit">
                  ✓ You&apos;re subscribed
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-2 max-w-xs">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border border-neutral-800 bg-neutral-950 text-neutral-200 text-xs rounded-full py-2 px-4 outline-none focus:border-neutral-700 transition-colors flex-1"
                  />
                  <button type="submit" className="btn-primary" style={{ padding: "8px 16px", fontSize: "0.75rem" }}>
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative w-fit">
                    <a
                      href={link.href}
                      className="text-sm text-neutral-400 hover:text-[#3ca2fa] transition-colors"
                    >
                      {link.label}
                    </a>
                    {link.pulse && (
                      <span className="absolute top-1/2 -translate-y-1/2 -right-3 w-1.5 h-1.5 rounded-full bg-[#3ca2fa] animate-pulse"></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* "Get in Touch" text hover effect — replaces PROBIZ branding */}
        <div className="flex w-full h-[14rem] sm:h-[18rem] -mt-6 -mb-6 pointer-events-none select-none items-center justify-center">
          <div className="w-full pointer-events-auto">
            <TextHoverEffect text="Get in Touch" className="z-30" />
          </div>
        </div>

        <hr className="border-t border-neutral-900/60 my-6" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 space-y-4 md:space-y-0 relative z-40">
          {/* Copyright */}
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Probiz Automation. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex space-x-5 text-neutral-400">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-[#3ca2fa] transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
