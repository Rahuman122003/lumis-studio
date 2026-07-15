"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import createGlobe, { COBEOptions } from "cobe";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import React from "react";

export default function GlobeFeatureSection() {
  return (
    <section className="relative w-full mx-auto overflow-hidden rounded-3xl bg-[#121212] border border-neutral-900 shadow-2xl px-6 py-16 md:px-16 md:py-24 my-24 max-w-layout container">
      <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row">
        <div className="z-10 max-w-xl text-left">
          <h1 className="text-3xl md:text-4xl font-normal text-white leading-tight">
            Powered by <span className="text-[#86efac] font-bold">Probiz Technologies</span>{" "}
            <span className="block mt-4 text-neutral-400 text-sm md:text-base leading-relaxed">
              Probiz Automation is a division of Probiz Technologies. We empower global organizations with fast, elegant, and intelligent building automation and energy intelligence systems to optimize efficiency and drive sustainability.
            </span>
          </h1>
          <Button
            asChild
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-[#080808] hover:bg-neutral-200 px-6 py-2.5 text-sm font-semibold transition"
          >
            <a href="#contact">
              Explore Our Tech <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
        <div className="relative h-[250px] w-full max-w-md flex justify-center items-center overflow-visible">
          <Globe className="absolute scale-110 md:scale-125" />
        </div>
      </div>
    </section>
  );
}

const GLOBE_CONFIG = {
  width: 800,
  height: 800,
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1] as [number, number, number],
  markerColor: [251 / 255, 100 / 255, 21 / 255] as [number, number, number],
  glowColor: [1, 1, 1] as [number, number, number],
  markers: [
    { location: [14.5995, 120.9842] as [number, number], size: 0.03 },
    { location: [19.076, 72.8777] as [number, number], size: 0.1 },
    { location: [23.8103, 90.4125] as [number, number], size: 0.05 },
    { location: [30.0444, 31.2357] as [number, number], size: 0.07 },
    { location: [39.9042, 116.4074] as [number, number], size: 0.08 },
    { location: [-23.5505, -46.6333] as [number, number], size: 0.1 },
    { location: [19.4326, -99.1332] as [number, number], size: 0.1 },
    { location: [40.7128, -74.006] as [number, number], size: 0.1 },
    { location: [34.6937, 135.5022] as [number, number], size: 0.05 },
    { location: [41.0082, 28.9784] as [number, number], size: 0.06 },
  ],
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: Partial<COBEOptions>;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [r, setR] = useState(0);

  useEffect(() => {
    let phi = 0;
    let width = 0;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    // Fallback if width cannot be immediately computed
    if (width === 0) {
      width = 300;
    }

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender: (state: Record<string, any>) => {
        if (!pointerInteracting.current) {
          phi += 0.005;
        }
        state.phi = phi + r;
        state.width = width * 2;
        state.height = width * 2;
      },
    } as any);

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    });

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [config, r]);

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      setR(delta / 200);
    }
  };

  return (
    <div className={cn("aspect-square w-full max-w-[400px]", className)}>
      <canvas
        className="w-full h-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current
          )
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}
