'use client';
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useSpring, useTransform, SpringOptions } from 'framer-motion';
import { cn } from '@/lib/utils';

type SpotlightProps = {
  className?: string;
  size?: number;
  springOptions?: SpringOptions;
  biasToCenter?: boolean;
  biasFactor?: number;
};

export function Spotlight({
  className,
  size = 400,
  springOptions = { bounce: 0, damping: 25, stiffness: 150 },
  biasToCenter = false,
  biasFactor = 0.15,
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [parentElement, setParentElement] = useState<HTMLElement | null>(null);
  const rafId = useRef<number>(0);
  const latestEvent = useRef<{ x: number; y: number } | null>(null);

  const mouseX = useSpring(0, springOptions);
  const mouseY = useSpring(0, springOptions);

  const spotlightLeft = useTransform(mouseX, (x) => `${x - size / 2}px`);
  const spotlightTop = useTransform(mouseY, (y) => `${y - size / 2}px`);

  useEffect(() => {
    if (containerRef.current) {
      const parent = containerRef.current.parentElement;
      if (parent) {
        parent.style.position = 'relative';
        parent.style.overflow = 'hidden';
        setParentElement(parent);

        if (biasToCenter) {
          const { width, height } = parent.getBoundingClientRect();
          mouseX.set(width / 2);
          mouseY.set(height / 2);
        }
      }
    }
  }, [biasToCenter, mouseX, mouseY]);

  // Throttled mouse handler using rAF to prevent jank from excessive mousemove events
  const processMouseMove = useCallback(() => {
    if (!latestEvent.current || !parentElement) return;
    const { x: clientX, y: clientY } = latestEvent.current;
    const { left, top, width, height } = parentElement.getBoundingClientRect();
    const clientXRel = clientX - left;
    const clientYRel = clientY - top;

    if (biasToCenter) {
      const centerX = width / 2;
      const centerY = height / 2;
      mouseX.set(centerX + (clientXRel - centerX) * biasFactor);
      mouseY.set(centerY + (clientYRel - centerY) * biasFactor);
    } else {
      mouseX.set(clientXRel);
      mouseY.set(clientYRel);
    }
    latestEvent.current = null;
    rafId.current = 0;
  }, [mouseX, mouseY, parentElement, biasToCenter, biasFactor]);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      latestEvent.current = { x: event.clientX, y: event.clientY };
      if (!rafId.current) {
        rafId.current = requestAnimationFrame(processMouseMove);
      }
    },
    [processMouseMove]
  );

  const handleEnter = useCallback(() => setIsHovered(true), []);
  const handleLeave = useCallback(() => setIsHovered(false), []);

  useEffect(() => {
    if (!parentElement) return;

    parentElement.addEventListener('mousemove', handleMouseMove, { passive: true });
    parentElement.addEventListener('mouseenter', handleEnter);
    parentElement.addEventListener('mouseleave', handleLeave);

    return () => {
      parentElement.removeEventListener('mousemove', handleMouseMove);
      parentElement.removeEventListener('mouseenter', handleEnter);
      parentElement.removeEventListener('mouseleave', handleLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [parentElement, handleMouseMove, handleEnter, handleLeave]);

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        'pointer-events-none absolute rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops),transparent_80%)] blur-2xl transition-opacity duration-300',
        'from-white/10 via-white/5 to-transparent',
        isHovered ? 'opacity-100' : 'opacity-80',
        className
      )}
      style={{
        width: size,
        height: size,
        left: spotlightLeft,
        top: spotlightTop,
        willChange: 'transform',
        transform: 'translateZ(0)',
      }}
    />
  );
}
