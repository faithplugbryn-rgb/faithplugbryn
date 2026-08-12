"use client";

import { useEffect, useState } from "react";

const PRAYER_STREAK_KEY = "faithplugbryn-prayer-streak";

export default function PrayerStreak() {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const savedStreak = Number(
      localStorage.getItem(PRAYER_STREAK_KEY) || "0"
    );

    setTimeout(() => setStreak(savedStreak), 0);
  }, []);

  return (
    <section
      style={{
        backgroundColor: "#11110f",
        border: "1px solid rgba(216, 179, 101, 0.25)",
        borderRadius: "18px",
        padding: "22px",
        textAlign: "center",
        marginTop: "14px",
      }}
    >
      <div
        style={{
          color: "#d8b365",
          fontSize: "34px",
          fontWeight: 700,
        }}
      >
        {streak}
      </div>

      <div
        style={{
          color: "#c9c3b7",
          fontSize: "13px",
          marginTop: "5px",
        }}
      >
        Day Prayer Streak
      </div>
    </section>
  );
}