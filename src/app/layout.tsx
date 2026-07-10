import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Probiz Automation — Smart Building & Industrial Automation",
  description:
    "Probiz Automation: intelligent building management, energy optimization, IoT integration, and AI-powered automation solutions.",
  openGraph: {
    title: "Probiz Automation — Smart Building & Industrial Automation",
    description: "Intelligent building management and industrial automation solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
