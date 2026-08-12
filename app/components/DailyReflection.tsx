"use client";

import { useEffect, useState } from "react";

function getTodayKey() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `faithplugbryn-reflection-${year}-${month}-${day}`;
}

export default function DailyReflection() {
  const [reflection, setReflection] = useState("");

  useEffect(() => {
    const todayKey = getTodayKey();
    const savedToday = localStorage.getItem(todayKey);
    const oldReflection = localStorage.getItem("faithplugbryn-reflection");
    const saved = savedToday ?? oldReflection;

    if (saved) {
      setTimeout(() => setReflection(saved), 0);
    }
  }, []);

  function saveReflection() {
    localStorage.setItem(getTodayKey(), reflection);
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
        Save Today&apos;s Reflection
      </button>

      <p style={{ color: "#aaa69c", fontSize: "12px" }}>
        Saved privately on this device for today.
      </p>
    </section>
  );
}