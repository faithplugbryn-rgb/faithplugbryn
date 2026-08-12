"use client";

import { useState } from "react";

export default function DailyReflection() {
  const [reflection, setReflection] = useState(() => {
    if (typeof window === "undefined") return "";
    return localStorage.getItem("faithplugbryn-reflection") || "";
  });

  function saveReflection() {
    localStorage.setItem("faithplugbryn-reflection", reflection);
  }

  return (
    <section
      style={{
        background: "#11100d",
        border: "1px solid #302b21",
        borderRadius: "20px",
        padding: "25px",
        marginBottom: "18px",
      }}
    >
      <p
        style={{
          color: "#d8b365",
          fontSize: "12px",
          letterSpacing: "2px",
        }}
      >
        PRIVATE REFLECTION
      </p>

      <h2 style={{ fontFamily: "Georgia, serif" }}>
        What is God showing you today?
      </h2>

      <textarea
        value={reflection}
        onChange={(e) => setReflection(e.target.value)}
        placeholder="Write your thoughts here..."
        rows={5}
        style={{
          width: "100%",
          boxSizing: "border-box",
          background: "#080807",
          color: "#f8f4e8",
          border: "1px solid #3c3425",
          borderRadius: "12px",
          padding: "14px",
          fontSize: "16px",
          fontFamily: "Arial, sans-serif",
          resize: "vertical",
        }}
      />

      <button
        type="button"
        onClick={saveReflection}
        style={{
          width: "100%",
          background: "#d8b365",
          color: "#151108",
          border: "none",
          borderRadius: "12px",
          padding: "14px",
          marginTop: "12px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Save Reflection
      </button>

      <p style={{ color: "#aaa69c", fontSize: "12px" }}>
        Saved privately on this device.
      </p>
    </section>
  );
}