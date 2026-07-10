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
        
        // Initialize at the center if biased
        if (biasToCenter) {
          const { width, height } = parent.getBoundingClientRect();
          mouseX.set(width / 2);
          mouseY.set(height / 2);
        }
      }
    }
  }, [biasToCenter, mouseX, mouseY]);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!parentElement) return;
      const { left, top, width, height } = parentElement.getBoundingClientRect();
      const clientXRel = event.clientX - left;
      const clientYRel = event.clientY - top;
      
      if (biasToCenter) {
        const centerX = width / 2;
        const centerY = height / 2;
        const dx = clientXRel - centerX;
        const dy = clientYRel - centerY;
        // Shift spotlight slightly from the center relative to mouse position
        mouseX.set(centerX + dx * biasFactor);
        mouseY.set(centerY + dy * biasFactor);
      } else {
        mouseX.set(clientXRel);
        mouseY.set(clientYRel);
      }
    },
    [mouseX, mouseY, parentElement, biasToCenter, biasFactor]
  );

  useEffect(() => {
    if (!parentElement) return;

    parentElement.addEventListener('mousemove', handleMouseMove);
    parentElement.addEventListener('mouseenter', () => setIsHovered(true));
    parentElement.addEventListener('mouseleave', () => setIsHovered(false));

    return () => {
      parentElement.removeEventListener('mousemove', handleMouseMove);
      parentElement.removeEventListener('mouseenter', () => setIsHovered(true));
      parentElement.removeEventListener('mouseleave', () =>
        setIsHovered(false)
      );
    };
  }, [parentElement, handleMouseMove]);

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
      }}
    />
  );
}
