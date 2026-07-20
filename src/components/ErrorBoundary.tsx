"use client";

import React from "react";

interface State { hasError: boolean; message: string }

export default class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  State
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, message: "" };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error.message };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: "100vh", display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          background: "#080808", color: "#f5f5f5", fontFamily: "Inter, sans-serif",
          padding: "2rem", textAlign: "center",
        }}>
          <p style={{ fontSize: "0.75rem", color: "#10b981", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
            Something went wrong
          </p>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: 12 }}>Page Error</h1>
          <p style={{ color: "#a0a0a0", fontSize: "0.875rem", maxWidth: 420, marginBottom: 24 }}>
            {this.state.message || "An unexpected error occurred. Please refresh the page."}
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              background: "#fff", color: "#080808", border: "none", borderRadius: 999,
              padding: "10px 24px", fontSize: "0.875rem", fontWeight: 600, cursor: "pointer",
            }}
          >
            Refresh Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
