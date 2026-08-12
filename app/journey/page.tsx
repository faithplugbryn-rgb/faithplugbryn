"use client";

import { useEffect, useState } from "react";

const DAY_KEY = "faithplugbryn-days";
const LAST_DAY_KEY = "faithplugbryn-last-day";
const PRAYERS_KEY = "faithplugbryn-prayers-read";

export default function JourneyPage() {
  const [days, setDays] = useState(1);
  const [prayersRead, setPrayersRead] = useState(0);

  useEffect(() => {
    const today = new Date().toLocaleDateString("en-CA");

    const savedDays = Number(localStorage.getItem(DAY_KEY) || "0");
    const lastDay = localStorage.getItem(LAST_DAY_KEY);

    let updatedDays = savedDays;

    if (lastDay !== today) {
      updatedDays = savedDays + 1;
      localStorage.setItem(DAY_KEY, String(updatedDays));
      localStorage.setItem(LAST_DAY_KEY, today);
    }

    setDays(Math.max(updatedDays, 1));
    setPrayersRead(Number(localStorage.getItem(PRAYERS_KEY) || "0"));
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
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>
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
          My Journey
        </h1>

        <p
          style={{
            color: "#c9c3b7",
            fontSize: "17px",
            lineHeight: 1.6,
            marginBottom: "32px",
          }}
        >
          Small steps of faith become a life of walking with God.
        </p>

        <section
          style={{
            backgroundColor: "#11110f",
            border: "1px solid rgba(216, 179, 101, 0.25)",
            borderRadius: "22px",
            padding: "28px",
            marginBottom: "18px",
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
            Prayer Journey
          </p>

          <h2 style={{ fontSize: "25px", margin: "0 0 12px" }}>
            Keep showing up.
          </h2>

          <p
            style={{
              color: "#c9c3b7",
              fontSize: "16px",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Your journey with God is built one prayer, one scripture, and one
            faithful day at a time.
          </p>
        </section>

               <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "14px",
          }}
        >
          <div
            style={{
              backgroundColor: "#11110f",
              border: "1px solid rgba(216, 179, 101, 0.25)",
              borderRadius: "18px",
              padding: "22px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                color: "#d8b365",
                fontSize: "34px",
                fontWeight: 700,
              }}
            >
              {days}
            </div>

            <div
              style={{
                color: "#c9c3b7",
                fontSize: "13px",
                marginTop: "5px",
              }}
            >
              Days with God
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#11110f",
              border: "1px solid rgba(216, 179, 101, 0.25)",
              borderRadius: "18px",
              padding: "22px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                color: "#d8b365",
                fontSize: "34px",
                fontWeight: 700,
              }}
            >
              {prayersRead}
            </div>

            <div
              style={{
                color: "#c9c3b7",
                fontSize: "13px",
                marginTop: "5px",
              }}
            >
              Prayers Read
            </div>
          </div>
        </section>
        <p
          style={{
            color: "#8c8068",
            textAlign: "center",
            fontSize: "13px",
            lineHeight: 1.6,
            marginTop: "28px",
          }}
        >
          “Draw nigh to God, and he will draw nigh to you.”
          <br />
          James 4:8 · KJV
        </p>
      </div>
    </main>
  );
}