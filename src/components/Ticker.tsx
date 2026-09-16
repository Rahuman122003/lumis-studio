"use client";

interface LogoItem {
  src: string;
  alt: string;
  height?: number;
}

const logos: LogoItem[] = [
  { src: "/logo1.png", alt: "Client 1" },
  { src: "/logo2.png", alt: "Client 2" },
  { src: "/logo3.png", alt: "Client 3" },
  { src: "/logo4.svg", alt: "Client 4", height: 60 },
  { src: "/logo5.svg", alt: "Client 5", height: 60 },
  { src: "/logo6.png", alt: "Client 6", height: 46 },
  { src: "/logo7.png", alt: "Client 7" },
  { src: "/logo8.png", alt: "Client 8" },
  { src: "/logo9.png", alt: "Client 9" },
  { src: "/logo10.png", alt: "Client 10" },
  { src: "/logo11.png", alt: "Client 11" },
  { src: "/logo12.png", alt: "Client 12" },
  { src: "/logo13.png", alt: "Client 13" },
  { src: "/logo14.png", alt: "L&T Semiconductor Technologies" },
];

export default function Ticker() {
  // Triple the logos for seamless loop
  const tripled = [...logos, ...logos, ...logos];

  return (
    <div
      style={{
        borderTop: "0.5px solid var(--color-border)",
        borderBottom: "0.5px solid var(--color-border)",
        background: "var(--color-surface)",
        padding: "24px 0",
        overflow: "hidden",
        userSelect: "none",
      }}
    >
      {/* Section label */}
      <div
        style={{
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        <span
          style={{
            fontSize: "0.68rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "#111111",
          }}
        >
          Trusted by Industry Leaders
        </span>
      </div>

      {/* Logo marquee - scrolling left to right */}
      <div className="logo-marquee-track" aria-hidden>
        {tripled.map((logo, i) => (
          <div
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              height: 44,
              margin: "0 32px",
            }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              draggable={false}
              style={{
                height: logo.height ?? 38,
                width: "auto",
                maxWidth: 150,
                objectFit: "contain",
                opacity: 0.9,
                transition: "transform 0.2s ease, opacity 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0.9";
                e.currentTarget.style.transform = "scale(1)";
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
