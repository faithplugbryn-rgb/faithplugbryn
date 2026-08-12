"use client";

import { useEffect, useState } from "react";

type Reflection = {
  date: string;
  text: string;
};

export default function ReflectionHistory() {
  const [reflections, setReflections] = useState<Reflection[]>([]);

  useEffect(() => {
    const saved: Reflection[] = [];
    const prefix = "faithplugbryn-reflection-";

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      if (key?.startsWith(prefix)) {
        const text = localStorage.getItem(key);

        if (text) {
          saved.push({
            date: key.replace(prefix, ""),
            text,
          });
        }
      }
    }

    saved.sort((a, b) => b.date.localeCompare(a.date));

    setTimeout(() => setReflections(saved), 0);
  }, []);

  if (reflections.length === 0) {
    return null;
  }

  return (
    <section
      style={{
        backgroundColor: "#11110f",
        border: "1px solid rgba(216, 179, 101, 0.25)",
        borderRadius: "22px",
        padding: "28px",
        marginTop: "18px",
      }}
    >
      <p
        style={{
          color: "#d8b365",
          fontSize: "12px",
          letterSpacing: "2px",
          textTransform: "uppercase",
          marginTop: 0,
        }}
      >
        Reflection History
      </p>

      <h2 style={{ fontSize: "25px", margin: "0 0 20px" }}>
        Your moments with God
      </h2>

      {reflections.map((reflection) => (
        <div
          key={reflection.date}
          style={{
            borderTop: "1px solid rgba(216, 179, 101, 0.18)",
            padding: "18px 0",
          }}
        >
          <p
            style={{
              color: "#d8b365",
              fontSize: "13px",
              margin: "0 0 8px",
            }}
          >
            {reflection.date}
          </p>

          <p
            style={{
              color: "#c9c3b7",
              lineHeight: 1.7,
              margin: 0,
              whiteSpace: "pre-wrap",
            }}
          >
            {reflection.text}
          </p>
        </div>
      ))}

      <p
        style={{
          color: "#8c8068",
          fontSize: "12px",
          marginBottom: 0,
        }}
      >
        Your reflections remain private on this device.
      </p>
    </section>
  );
}