"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Calendar, FileText, Code, Settings, TrendingUp } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "DTC Strategy",
    date: "Phase 1",
    content: "Comprehensive retail spatial audit, competitor mapping, and baseline metrics formulation.",
    category: "Planning",
    icon: Calendar,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Spatial Design",
    date: "Phase 2",
    content: "Immersive 3D planning drafts, material board reviews, and photorealistic concept renders.",
    category: "Design",
    icon: FileText,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 3,
    title: "Integration",
    date: "Phase 3",
    content: "IoT beacon placement, digital dashboard API linkages, and planogram sync automation.",
    category: "Development",
    icon: Code,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 70,
  },
  {
    id: 4,
    title: "Rollout & Build",
    date: "Phase 4",
    content: "Fixture construction playbooks, installer coordination, and local site QA compliance signoff.",
    category: "Rollout",
    icon: Settings,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 40,
  },
  {
    id: 5,
    title: "Optimization",
    date: "Phase 5",
    content: "Continuous heat-mapping data review, average dwell time tuning, and revenue lift analytics tracking.",
    category: "Scale",
    icon: TrendingUp,
    relatedIds: [4],
    status: "pending" as const,
    energy: 15,
  },
];

export default function Pricing() {
  const { ref, inView } = useInView();

  return (
    <section
      id="pricing"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-pad bg-transparent"
    >
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header section-header--center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "var(--space-md)" }}
        >
          <span className="section-label">PROCESS ROADMAP</span>
          <h2 className="section-h2" style={{ maxWidth: 480 }}>
            Retail lifecycle from concept to conversion
          </h2>
          <p style={{ color: "var(--color-muted)", fontSize: "0.875rem", marginTop: "12px", maxWidth: "540px" }}>
            Click on any outer orbit node to inspect details, completion status, energy level parameters, and connected system links.
          </p>
        </motion.div>

        {/* Orbit timeline container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full flex items-center justify-center overflow-hidden"
        >
          <RadialOrbitalTimeline timelineData={timelineData} />
        </motion.div>
      </div>
    </section>
  );
}
