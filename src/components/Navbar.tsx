"use client";

import { useEffect, useState } from "react";
import { Layers, Workflow, TrendingUp, DollarSign, HelpCircle } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

const navItems = [
  { name: "Solutions", url: "#solutions", icon: Layers },
  { name: "How It Works", url: "#how-it-works", icon: Workflow },
  { name: "Case Studies", url: "#case-studies", icon: TrendingUp },
  { name: "Pricing", url: "#pricing", icon: DollarSign },
  { name: "FAQ", url: "#faq", icon: HelpCircle }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Floating Centered Tubelight Navbar */}
      <NavBar items={navItems} />

      {/* Header bar for Logo and CTA */}
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 40,
          transition: "background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
          background: scrolled ? "rgba(8, 8, 8, 0.4)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: `0.5px solid ${scrolled ? "var(--color-border)" : "transparent"}`,
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 68,
            gap: "var(--space-lg)",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <img
              src="/logoauto.png"
              alt="Probiz Automation Logo"
              style={{
                height: 38,
                width: "auto",
                objectFit: "contain",
              }}
            />
          </a>

          {/* Right CTA */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              flexShrink: 0,
            }}
          >
            <a
              href="#contact"
              className="btn-primary"
              style={{
                fontSize: "0.82rem",
                padding: "10px 22px",
              }}
            >
              Get Started
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
