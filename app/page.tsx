import DailyReflection from "./components/DailyReflection";const dailyScriptures = [
  {
    verse: "What time I am afraid, I will trust in thee.",
    reference: "Psalm 56:3 · KJV",
  },
  {
    verse: "I can do all things through Christ which strengtheneth me.",
    reference: "Philippians 4:13 · KJV",
  },
  {
    verse: "The Lord is my shepherd; I shall not want.",
    reference: "Psalm 23:1 · KJV",
  },
  {
    verse: "Be still, and know that I am God.",
    reference: "Psalm 46:10 · KJV",
  },
  {
    verse: "For we walk by faith, not by sight.",
    reference: "2 Corinthians 5:7 · KJV",
  },
  {
    verse: "Pray without ceasing.",
    reference: "1 Thessalonians 5:17 · KJV",
  },
  {
    verse: "Rejoicing in hope; patient in tribulation; continuing instant in prayer.",
    reference: "Romans 12:12 · KJV",
  },
];export default function Home() {
   const dayNumber = Math.floor(Date.now() / 86400000);
  const scripture = dailyScriptures[dayNumber % dailyScriptures.length]; return (
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

        <section
          style={{
            background: "#15130f",
            border: "1px solid #3c3425",
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
            TODAY&apos;S PRAYER
          </p>

          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "28px",
            }}
          >
            God, guide me today.
          </h2>

          <p style={{ color: "#d6d1c5", lineHeight: "1.7" }}>
            Heavenly Father, thank You for giving me another day.
            Calm the things I cannot control, give me wisdom for the
            decisions ahead, and help me recognize Your presence in
            the ordinary moments.
          </p>

          <p style={{ color: "#d6d1c5", lineHeight: "1.7" }}>
            Strengthen my faith when I feel uncertain. Help me walk
            with patience, courage and love today. Amen.
          </p>
        </section>

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
            TODAY&apos;S SCRIPTURE
          </p>

          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "21px",
              lineHeight: "1.6",
            }}
          >
                        &ldquo;{scripture.verse}&rdquo;
          </p>

         <p style={{ color: "#d8b365" }}>{scripture.reference}</p>
        </section>        <DailyReflection />

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