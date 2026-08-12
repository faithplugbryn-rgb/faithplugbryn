"use client";

import { useEffect } from "react";

const PRAYERS_KEY = "faithplugbryn-prayers-read";
const LAST_PRAYER_DAY_KEY = "faithplugbryn-last-prayer-day";

export default function PrayPage() {
  useEffect(() => {
    const today = new Date().toLocaleDateString("en-CA");
    const lastPrayerDay = localStorage.getItem(LAST_PRAYER_DAY_KEY);

    if (lastPrayerDay !== today) {
      const currentCount = Number(localStorage.getItem(PRAYERS_KEY) || "0");
      localStorage.setItem(PRAYERS_KEY, String(currentCount + 1));
      localStorage.setItem(LAST_PRAYER_DAY_KEY, today);
    }
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#080807",
        color: "#ffffff",
        padding: "40px 20px 110px",
      }}
    >
      <div
        style={{
          maxWidth: "680px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            color: "#d8b365",
            fontSize: "13px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          FaithPlugBryn
        </p>

        <h1
          style={{
            color: "#d8b365",
            fontSize: "36px",
            margin: "0 0 10px",
          }}
        >
          Pray
        </h1>

        <p
          style={{
            color: "#c9c3b7",
            fontSize: "17px",
            lineHeight: 1.6,
            marginBottom: "32px",
          }}
        >
          Take a quiet moment with God. Read today&apos;s prayer slowly and make
          these words your own.
        </p>

        <section
          style={{
            backgroundColor: "#11110f",
            border: "1px solid rgba(216, 179, 101, 0.25)",
            borderRadius: "22px",
            padding: "28px",
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
            Today&apos;s Prayer
          </p>

          <h2
            style={{
              color: "#ffffff",
              fontSize: "24px",
              marginBottom: "18px",
            }}
          >
            A Prayer for Peace
          </h2>

          <p
            style={{
              color: "#d6d0c4",
              fontSize: "17px",
              lineHeight: 1.8,
              marginBottom: 0,
            }}
          >
            Heavenly Father, quiet my heart and help me place every worry into
            Your hands. Give me peace for what I cannot control, wisdom for the
            decisions ahead, and faith to trust that You are with me. Guide my
            steps today and help me walk in Your presence. In Jesus&apos; name,
            Amen.
          </p>
        </section>

        <p
          style={{
            color: "#8c8068",
            textAlign: "center",
            fontSize: "13px",
            marginTop: "26px",
          }}
        >
          “Be still, and know that I am God.” — Psalm 46:10
        </p>
      </div>
    </main>
  );
}