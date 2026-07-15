"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import createGlobe, { COBEOptions } from "cobe";
import { useEffect, useRef } from "react";
import React from "react";

export default function GlobeFeatureSection() {
  return (
    <section
      className="container"
      style={{
        paddingTop: "var(--space-2xl)",
        paddingBottom: "var(--space-2xl)",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          borderRadius: 24,
          background: "rgba(255,255,255,0.04)",
          border: "0.5px solid var(--color-border)",
          padding: "clamp(2.5rem, 5vw, 4rem)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "3rem",
            flexWrap: "wrap",
          }}
        >
          {/* Text side */}
          <div style={{ flex: "1 1 380px", maxWidth: 520, zIndex: 2 }}>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                fontWeight: 400,
                color: "#fff",
                lineHeight: 1.35,
              }}
            >
              Powered by{" "}
              <span style={{ color: "#86efac", fontWeight: 700 }}>
                Probiz Technologies
              </span>{" "}
              <span style={{ color: "rgba(255,255,255,0.45)" }}>
                Probiz Automation is a division of Probiz Technologies. We
                empower global organizations with fast, elegant, and intelligent
                building automation and energy intelligence systems to optimize
                efficiency and drive sustainability.
              </span>
            </h2>
            <a
              href="#contact"
              className="btn-primary"
              style={{
                marginTop: 28,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 26px",
                fontSize: "0.85rem",
              }}
            >
              Explore Our Tech <ArrowRight size={16} />
            </a>
          </div>

          {/* Globe side — fully visible, no clipping */}
          <div
            style={{
              flex: "0 0 320px",
              height: 320,
              position: "relative",
              zIndex: 1,
              margin: "0 auto",
            }}
          >
            <Globe />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const phiRef = useRef(0);
  const rRef = useRef(0);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;

    // Use a fixed render size so cobe always gets valid dimensions
    const size = 600;

    const globeConfig: COBEOptions = {
      devicePixelRatio: 2,
      width: size * 2,
      height: size * 2,
      phi: 0,
      theta: 0.3,
      dark: 0,
      diffuse: 0.4,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [1, 1, 1],
      markerColor: [251 / 255, 100 / 255, 21 / 255],
      glowColor: [1, 1, 1],
      markers: [
        { location: [14.5995, 120.9842], size: 0.03 },
        { location: [19.076, 72.8777], size: 0.1 },
        { location: [23.8103, 90.4125], size: 0.05 },
        { location: [30.0444, 31.2357], size: 0.07 },
        { location: [39.9042, 116.4074], size: 0.08 },
        { location: [-23.5505, -46.6333], size: 0.1 },
        { location: [19.4326, -99.1332], size: 0.1 },
        { location: [40.7128, -74.006], size: 0.1 },
        { location: [34.6937, 135.5022], size: 0.05 },
        { location: [41.0082, 28.9784], size: 0.06 },
      ],
      onRender: (state: Record<string, any>) => {
        if (!pointerInteracting.current) {
          phiRef.current += 0.005;
        }
        state.phi = phiRef.current + rRef.current;
      },
    };

    const globe = createGlobe(canvas, globeConfig);

    // Fade in after first paint
    requestAnimationFrame(() => {
      canvas.style.opacity = "1";
    });

    return () => globe.destroy();
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    pointerInteracting.current =
      e.clientX - pointerInteractionMovement.current;
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
  };

  const onPointerUp = () => {
    pointerInteracting.current = null;
    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (pointerInteracting.current !== null) {
      const delta = e.clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      rRef.current = delta / 200;
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0] && pointerInteracting.current !== null) {
      const delta = e.touches[0].clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      rRef.current = delta / 200;
    }
  };

  return (
    <div
      className={className}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          opacity: 0,
          transition: "opacity 0.5s ease",
          contain: "layout paint size",
          cursor: "grab",
        }}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerOut={onPointerUp}
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
      />
    </div>
  );
}
