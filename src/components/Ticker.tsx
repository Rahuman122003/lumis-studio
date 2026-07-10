"use client";

const items = [
  "Saves 10M+ Shopping Hours Yearly",
  "500+ Retail Brands Trust Probiz Automation",
  "Average 3.2× Revenue Lift",
  "98% Client Retention Rate",
  "Deployed in 40+ Countries",
  "Trusted by Fortune 500 Retailers",
  "ISO 27001 Certified Platform",
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
