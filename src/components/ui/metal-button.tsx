"use client";

/**
 * MetalButton — drop-in replacement for btn-primary / btn-secondary
 * Uses the liquid-metal shader for primary variant.
 * Secondary variant stays as a clean ghost pill (no shader overhead).
 *
 * Handles:
 *  - href navigation (renders as <a> or Next.js <Link>)
 *  - onClick handlers (renders as <button>)
 *  - children as label (icons + text)
 *  - target="_blank" for external links
 */

import dynamic from "next/dynamic";
import Link from "next/link";
import React, { type ReactNode } from "react";

// Load the heavy shader component only on the client
const LiquidMetalButton = dynamic(
  () => import("./liquid-metal-button").then((m) => m.LiquidMetalButton),
  { ssr: false }
);

interface MetalButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  external?: boolean;
  target?: "_blank" | "_self" | "_parent" | "_top";
  type?: "button" | "submit" | "reset";
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
}

export function MetalButton({
  children,
  href,
  onClick,
  variant = "primary",
  external = false,
  target,
  type = "button",
  className = "",
  style,
  disabled,
}: MetalButtonProps) {
  // Determine if link should open in new tab
  const isExternal = external || href?.startsWith("http") || target === "_blank";
  
  // --- Secondary variant: simple ghost pill, no shader ---
  if (variant === "secondary") {
    const cls = `btn-secondary ${className}`;
    if (href) {
      if (isExternal) {
        return <a href={href} target={target || "_blank"} rel="noopener noreferrer" className={cls} style={style}>{children}</a>;
      }
      return <Link href={href} className={cls} style={style}>{children}</Link>;
    }
    return (
      <button type={type} onClick={onClick} className={cls} style={style} disabled={disabled}>
        {children}
      </button>
    );
  }

  // --- Primary variant: liquid metal shader wrapper ---
  // Primary variant: liquid metal shader wrapper with bright white text & icons
  const label = extractText(children);

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target={target || "_blank"}
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center text-white no-underline ${className}`}
          style={style}
          aria-label={label}
        >
          <LiquidMetalButton label={label}>{children}</LiquidMetalButton>
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={`inline-flex items-center justify-center text-white no-underline ${className}`}
        style={style}
        aria-label={label}
      >
        <LiquidMetalButton label={label}>{children}</LiquidMetalButton>
      </Link>
    );
  }

  return (
    <div className={`inline-flex items-center justify-center ${className}`} style={style}>
      <LiquidMetalButton label={label} onClick={onClick}>
        {children}
      </LiquidMetalButton>
    </div>
  );
}

/** Recursively pull plain text out of React children for the shader label */
function extractText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(extractText).join(" ").trim();
  if (React.isValidElement(node)) {
    const el = node as React.ReactElement<{ children?: ReactNode }>;
    if (el.props.children) return extractText(el.props.children);
  }
  return "";
}
