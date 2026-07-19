"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParallaxBackground from "@/components/ParallaxBackground";
import { motion } from "framer-motion";
import { Shield, Zap, Heart, Award } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { value: "50+", label: "Connected Facilities" },
    { value: "1.2M+", label: "Daily Data Points" },
    { value: "28%", label: "Average Energy Reduction" },
    { value: "99.9%", label: "Edge Gateway Uptime" },
  ];

  const values = [
    {
      icon: <Zap className="text-[#10b981]" size={24} />,
      title: "Innovation First",
      desc: "We continuously push the boundaries of AI, edge computing, and smart sensor integration.",
    },
    {
      icon: <Shield className="text-[#10b981]" size={24} />,
      title: "Reliability Built-in",
      desc: "Our local rules engines guarantee building safety and operational continuity, online or offline.",
    },
    {
      icon: <Award className="text-[#10b981]" size={24} />,
      title: "Sustainability Centered",
      desc: "Every line of code we write is optimized to help our partners track, lower, and predict energy use.",
    },
    {
      icon: <Heart className="text-[#10b981]" size={24} />,
      title: "Customer Oriented",
      desc: "We prioritize seamless, open solutions (BACnet, Modbus) that free clients from proprietary vendor lock-in.",
    },
  ];

  return (
    <>
      <ParallaxBackground />
      <Navbar />

      <main className="min-h-screen pt-32 pb-24 text-white">
        {/* Hero Section */}
        <section className="container max-w-6xl mx-auto px-6 mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <span className="text-xs font-semibold tracking-wide uppercase text-[#10b981] bg-[#10b981]/10 py-1.5 px-4 rounded-full border border-[#10b981]/20">
              Our Identity
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none mt-4">
              About Probiz Automation
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              We are a proud division of{" "}
              <span className="text-white font-semibold">Probiz Technologies</span>,
              on a mission to redefine commercial and industrial building operations
              through cloud intelligence.
            </p>
          </motion.div>
        </section>

        {/* Content Section */}
        <section className="container max-w-6xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-2xl md:text-3xl font-bold">
                Bridging Hardware and AI Cloud Systems
              </h2>
              <p className="text-neutral-400 leading-relaxed">
                Founded under the corporate umbrella of Probiz Technologies, Probiz
                Automation emerged to address a massive inefficiency: commercial buildings
                running heavy HVAC, lighting, and air handling equipment on rigid, static,
                and outdated operational rules.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                By designing secure edge connectors and localized translations layers, we
                allow standard building hardware protocols (like BACnet and Modbus) to communicate
                directly with cloud-native deep learning pipelines. The result is a self-sustaining,
                self-correcting building ecosystem that saves energy while improving comfort.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden border border-neutral-900 aspect-video shadow-2xl bg-neutral-950"
            >
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Probiz Modern Workspace"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="container max-w-6xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-[#0c0c0c]/40 border border-neutral-900 rounded-3xl p-8 text-center backdrop-blur-md">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <p className="text-3xl md:text-4xl font-extrabold text-[#10b981]">
                  {stat.value}
                </p>
                <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <section className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Our Core Philosophy</h2>
            <p className="text-neutral-500 text-sm mt-2">
              The principles that drive our engineering and customer relations daily.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 bg-[#0c0c0c]/30 border border-neutral-900/60 rounded-2xl"
              >
                <div className="p-3 bg-neutral-900/80 rounded-xl border border-neutral-800/50">
                  {val.icon}
                </div>
                <div className="space-y-1.5 text-left">
                  <h3 className="text-lg font-semibold text-white">{val.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
