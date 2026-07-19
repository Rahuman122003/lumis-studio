"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import {
  FaReact,
  FaAws,
  FaDocker,
  FaNodeJs,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGoogle,
  FaApple,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiVercel,
  SiRedux,
  SiTypescript,
  SiFacebook,
} from "react-icons/si";

const fallbackUrls = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/96/Among_Us_icon.png",
];

const iconConfigs = [
  { Icon: FaReact, color: "#61DAFB" },
  { Icon: FaAws, color: "#FF9900" },
  { Icon: FaDocker, color: "#2496ED" },
  { Icon: FaNodeJs, color: "#339933" },
  { Icon: SiNextdotjs, color: "#FFFFFF" },
  { Icon: SiVercel, color: "#FFFFFF" },
  { Icon: SiRedux, color: "#764ABC" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: FaGithub, color: "#FFFFFF" },
  { Icon: FaTwitter, color: "#1DA1F2" },
  { Icon: FaLinkedin, color: "#0077B5" },
  { Icon: FaInstagram, color: "#E1306C" },
  { Icon: FaGoogle, color: "#DB4437" },
  { Icon: FaApple, color: "#FFFFFF" },
  { Icon: SiFacebook, color: "#1877F2" },
  { Icon: null, img: fallbackUrls[0] },
  { Icon: null, img: fallbackUrls[1] },
];

export default function FeatureSection() {
  const orbitCount = 3;
  const orbitGap = 8; // rem between orbits
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

  return (
    <section className="relative max-w-6xl mx-auto my-32 pl-10 flex flex-col md:flex-row items-center justify-between min-h-[30rem] border border-neutral-900 bg-[#121212] overflow-hidden rounded-3xl p-8 md:p-12">
      {/* Left side: Heading and Text */}
      <div className="w-full md:w-1/2 z-10 text-left mb-8 md:mb-0">
        <span className="text-xs font-semibold tracking-wide uppercase text-[#10b981] bg-neutral-800/50 py-1 px-4 rounded-full">
          TECHNOLOGY STACK
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold mt-6 mb-4 text-white leading-tight">
          Built on a Unified IoT Stack
        </h2>
        <p className="text-neutral-400 mb-8 max-w-lg leading-relaxed">
          Probiz Automation integrates with leading cloud platforms, time-series databases, and containerized edge technologies to deliver secure, scalable, and real-time building intelligence.
        </p>
        <div className="flex items-center gap-3">
          <Button asChild variant="default" className="rounded-full bg-white text-[#080808] hover:bg-neutral-200 font-semibold px-6 py-2">
            <Link href="#contact">Get Started</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full border-neutral-800 text-white hover:bg-neutral-900 font-semibold px-6 py-2">
            <Link href="#solutions">Learn More</Link>
          </Button>
        </div>
      </div>

      {/* Right side: Orbit animation cropped to 1/4 */}
      <div className="relative w-full md:w-1/2 h-[30rem] flex items-center justify-start overflow-hidden">
        <div className="relative w-[50rem] h-[50rem] translate-x-[20%] md:translate-x-[40%] lg:translate-x-[30%] flex items-center justify-center scale-90 md:scale-100">
          {/* Center Circle */}
          <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center p-3 z-20">
            <img
              src="/logoauto.png"
              alt="Probiz Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Generate Orbits */}
          {[...Array(orbitCount)].map((_, orbitIdx) => {
            const size = `${12 + orbitGap * (orbitIdx + 1)}rem`; // equal spacing
            const angleStep = (2 * Math.PI) / iconsPerOrbit;

            return (
              <div
                key={orbitIdx}
                className="absolute rounded-full border-2 border-dotted border-neutral-800"
                style={{
                  width: size,
                  height: size,
                  animation: `spin-orbit-${orbitIdx} ${15 + orbitIdx * 8}s linear infinite`,
                }}
              >
                {iconConfigs
                  .slice(
                    orbitIdx * iconsPerOrbit,
                    orbitIdx * iconsPerOrbit + iconsPerOrbit
                  )
                  .map((cfg, iconIdx) => {
                    const angle = iconIdx * angleStep;
                    const x = 50 + 50 * Math.cos(angle);
                    const y = 50 + 50 * Math.sin(angle);

                    return (
                      <div
                        key={iconIdx}
                        className="absolute bg-neutral-900 border border-neutral-800 rounded-full p-2 shadow-md flex items-center justify-center"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        {cfg.Icon ? (
                          <cfg.Icon
                            className="w-7 h-7"
                            style={{ color: cfg.color }}
                          />
                        ) : (
                          <img
                            src={cfg.img}
                            alt="icon"
                            className="w-7 h-7 object-contain"
                          />
                        )}
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>

      {/* Animation keyframes injected safely */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-orbit-0 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-orbit-1 {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes spin-orbit-2 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </section>
  );
}
