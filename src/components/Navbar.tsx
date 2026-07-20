"use client";

import { useEffect, useState, Suspense } from "react";
import { usePathname } from "next/navigation";
import { Layers, Workflow, TrendingUp, HelpCircle, BookOpen, Package, Bot } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Solutions",    url: "/#solutions",    icon: Layers },
  { name: "Products",     url: "/products",      icon: Package },
  { name: "Work",         url: "/#how-it-works", icon: Workflow },
  { name: "Case Studies", url: "/#case-studies", icon: TrendingUp },
  { name: "Prox",         url: "/prox",          icon: Bot },
  { name: "Blog",         url: "https://blogsbyprobiz.vercel.app/probiz-automation/blogs", icon: BookOpen },
  { name: "FAQ",          url: "/#faq",          icon: HelpCircle },
];

// Inner component that uses usePathname — must be wrapped in Suspense
function FloatingNavInner({ items }: { items: typeof navItems }) {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(items[0].name);

  useEffect(() => {
    const match = items.find((item) => {
      if (item.url.startsWith("http")) return false;
      const path = item.url.split("#")[0] || "/";
      return pathname === path;
    });
    if (match) setActiveTab(match.name);
  }, [pathname, items]);

  return (
    <div className="flex items-center gap-0.5 bg-neutral-950/70 border border-neutral-800/60 backdrop-blur-xl py-1 px-1.5 rounded-full shadow-2xl">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.name;
        const isExternal = item.url.startsWith("http");

        const content = (
          <>
            <span className="hidden sm:inline">{item.name}</span>
            <span className="sm:hidden flex items-center justify-center">
              <Icon size={18} strokeWidth={2.2} />
            </span>
            {isActive && (
              <motion.div
                layoutId="lamp"
                className="absolute inset-0 w-full bg-white/5 rounded-full -z-10"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-t-full">
                  <div className="absolute w-12 h-6 bg-white/20 rounded-full blur-md -top-2 -left-2" />
                  <div className="absolute w-8 h-6 bg-white/20 rounded-full blur-md -top-1" />
                  <div className="absolute w-4 h-4 bg-white/20 rounded-full blur-sm top-0 left-2" />
                </div>
              </motion.div>
            )}
          </>
        );

        const cls = cn(
          "relative cursor-pointer text-xs sm:text-sm font-semibold px-3 sm:px-5 py-2 rounded-full transition-colors select-none",
          "text-neutral-400 hover:text-white",
          isActive && "text-white"
        );

        return isExternal ? (
          <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer"
            className={cls} onClick={() => setActiveTab(item.name)}>
            {content}
          </a>
        ) : (
          <Link key={item.name} href={item.url} className={cls}
            onClick={() => setActiveTab(item.name)}>
            {content}
          </Link>
        );
      })}
    </div>
  );
}

function FloatingNav() {
  return (
    <div className="fixed bottom-4 sm:bottom-auto sm:top-[76px] left-1/2 -translate-x-1/2 z-50">
      <Suspense fallback={
        <div className="flex items-center gap-0.5 bg-neutral-950/70 border border-neutral-800/60 backdrop-blur-xl py-1 px-1.5 rounded-full shadow-2xl opacity-60">
          {navItems.map((item) => (
            <span key={item.name} className="text-xs sm:text-sm font-semibold px-3 sm:px-5 py-2 rounded-full text-neutral-600 hidden sm:inline">
              {item.name}
            </span>
          ))}
        </div>
      }>
        <FloatingNavInner items={navItems} />
      </Suspense>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Fixed top header — logo + CTA */}
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 40,
          transition: "background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
          background: scrolled ? "rgba(8,8,8,0.65)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: `0.5px solid ${scrolled ? "var(--color-border)" : "transparent"}`,
        }}
      >
        <div style={{
          width: "100%",
          paddingLeft: "max(1.5rem, 4vw)",
          paddingRight: "max(1.5rem, 4vw)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 68,
        }}>
          <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            <img src="/logoauto.png" alt="Probiz Automation Logo" style={{ height: 38, width: "auto", objectFit: "contain" }} />
            <span className="hidden xl:inline-block font-bold text-white text-base tracking-tight whitespace-nowrap">Probiz Automation</span>
            <span className="hidden sm:inline-block xl:hidden font-bold text-white text-base tracking-tight whitespace-nowrap">Probiz</span>
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            <a href="/#contact" className="btn-primary" style={{ fontSize: "0.82rem", padding: "10px 22px" }}>
              Get Started
            </a>
          </div>
        </div>
      </header>

      <FloatingNav />
    </>
  );
}
