"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cpu, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProductSubnav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Product categories" className="flex justify-center px-4 mb-10">
      <div className="inline-flex items-center gap-1 rounded-2xl border border-black/10 bg-white/70 p-1.5 shadow-sm backdrop-blur-md">
        {[
          { label: "Software", href: "/products", icon: Layers },
          { label: "Hardware", href: "/pc-products", icon: Cpu },
        ].map(({ label, href, icon: Icon }) => (
          <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}
            className={cn("inline-flex items-center justify-center gap-2 rounded-xl px-6 sm:px-8 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2",
              pathname === href ? "bg-[#111] text-white shadow-sm" : "text-[#555] hover:bg-black/5 hover:text-black")}>
            <Icon size={16} aria-hidden="true" /> {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
