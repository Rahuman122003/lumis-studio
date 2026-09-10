import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Probiz Automation — Smart Building & Industrial Automation",
  description:
    "Probiz Automation: intelligent building management, energy optimization, IoT integration, and AI-powered automation solutions.",
  icons: {
    icon: "/logoauto.png",
    shortcut: "/logoauto.png",
    apple: "/logoauto.png",
  },
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/logoauto.png" />
        <link rel="apple-touch-icon" href="/logoauto.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
