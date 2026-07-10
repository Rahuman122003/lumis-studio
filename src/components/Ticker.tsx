"use client";

const items = [
  "AI-Powered Building Intelligence",
  "200+ Buildings Automated Globally",
  "35% Average Energy Savings",
  "99.9% System Uptime",
  "Real-Time IoT Monitoring",
  "Digital Twin Technology",
  "Predictive Maintenance Platform",
  "24/7 Dedicated Support",
];

const Sep = () => (
  <span
    aria-hidden
    style={{
      width: 3,
      height: 3,
      borderRadius: "50%",
      background: "#BBBBBB",
      display: "inline-block",
      margin: "0 32px",
      flexShrink: 0,
      verticalAlign: "middle",
    }}
  />
);

export default function Ticker() {
  const doubled = [...items, ...items];

  return (
    <div
      style={{
        borderTop: "0.5px solid var(--color-border)",
        borderBottom: "0.5px solid var(--color-border)",
        background: "var(--color-surface)",
        padding: "14px 0",
        overflow: "hidden",
        userSelect: "none",
      }}
    >
      <div className="marquee-track" aria-hidden>
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 500,
                color: "var(--color-muted)",
                letterSpacing: "0.03em",
              }}
            >
              {item}
            </span>
            <Sep />
          </span>
        ))}
      </div>
    </div>
  );
}
