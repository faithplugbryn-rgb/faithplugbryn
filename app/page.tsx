import DailyContent from "./components/DailyContent";
import DailyReflection from "./components/DailyReflection";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#080807",
        color: "#f8f4e8",
        fontFamily: "Arial, sans-serif",
        padding: "40px 20px 100px",
      }}
    >
      <div
        style={{
          maxWidth: "550px",
          margin: "0 auto",
        }}
      >
        <header style={{ textAlign: "center", marginBottom: "50px" }}>
          <div
            style={{
              color: "#d8b365",
              fontSize: "42px",
              fontFamily: "Georgia, serif",
            }}
          >
            †
          </div>

          <div
            style={{
              color: "#d8b365",
              fontSize: "24px",
              fontFamily: "Georgia, serif",
            }}
          >
            FaithPlugBryn
          </div>
        </header>

        <section style={{ textAlign: "center", marginBottom: "40px" }}>
          <p
            style={{
              color: "#d8b365",
              fontSize: "12px",
              letterSpacing: "2px",
            }}
          >
            FAITH FOR EVERY DAY
          </p>

          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "42px",
              lineHeight: "1.1",
            }}
          >
            Come as you are.
            <br />
            God is listening.
          </h1>

          <p style={{ color: "#aaa69c", lineHeight: "1.7" }}>
            A quiet place to pray, reflect and grow closer to God.
          </p>
        </section>

        <DailyContent />

        <DailyReflection />

        <section
          style={{
            background: "#15130f",
            border: "1px solid #3c3425",
            borderRadius: "20px",
            padding: "25px",
          }}
        >
          <p
            style={{
              color: "#d8b365",
              fontSize: "12px",
              letterSpacing: "2px",
            }}
          >
            PRAYER RESOURCES
          </p>

          <h2 style={{ fontFamily: "Georgia, serif" }}>
            Go deeper with FaithPlugBryn
          </h2>

          <p style={{ color: "#aaa69c", lineHeight: "1.6" }}>
            Explore prayer guides created to help you grow closer to
            God through every season of life.
          </p>

          <a
            href="https://ko-fi.com/faithplugbryn"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              textAlign: "center",
              background: "#d8b365",
              color: "#151108",
              padding: "16px",
              borderRadius: "12px",
              marginTop: "20px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Explore Prayer Guides →
          </a>
        </section>
      </div>
    </main>
  );
}