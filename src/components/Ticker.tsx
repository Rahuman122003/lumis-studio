"use client";

const logos = [
  { src: "/logo1.png", alt: "Client 1" },
  { src: "/logo2.webp", alt: "Client 2" },
  { src: "/logo3.svg.webp", alt: "Client 3" },
  { src: "/logo4.svg", alt: "Client 4" },
  { src: "/logo5.svg", alt: "Client 5" },
  { src: "/logo6.png", alt: "Client 6" },
  { src: "/logo7.png", alt: "Client 7" },
  { src: "/logo8.webp", alt: "Client 8" },
  { src: "/logo9.jpeg", alt: "Client 9" },
  { src: "/logo10.webp", alt: "Client 10" },
  { src: "/logo11.webp", alt: "Client 11" },
  { src: "/logo12.webp", alt: "Client 12" },
  { src: "/logo13.png", alt: "Client 13" },
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
        padding: "20px 0",
        overflow: "hidden",
        userSelect: "none",
      }}
    >
      {/* Section label */}
      <div
        style={{
          textAlign: "center",
          marginBottom: 18,
        }}
      >
        <span
          style={{
            fontSize: "0.68rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "rgba(255,255,255,0.35)",
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
              margin: "0 32px",
            }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              draggable={false}
              style={{
                height: 44,
                width: "auto",
                maxWidth: 140,
                objectFit: "contain",
                filter: "brightness(0) invert(1)",
                opacity: 0.4,
                transition: "opacity 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.95";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0.4";
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
