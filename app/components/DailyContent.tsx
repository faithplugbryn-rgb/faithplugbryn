"use client";

const dailyPrayers = [
  {
    title: "God, guide me today.",
    paragraphs: [
      "Heavenly Father, thank You for giving me another day. Calm the things I cannot control, give me wisdom for the decisions ahead, and help me recognize Your presence in the ordinary moments.",
      "Strengthen my faith when I feel uncertain. Help me walk with patience, courage and love today. Amen.",
    ],
  },
  {
    title: "God, give me peace.",
    paragraphs: [
      "Heavenly Father, quiet my heart when worry feels louder than faith. Remind me that I do not have to carry every burden alone.",
      "Help me trust Your timing, rest in Your presence, and bring Your peace into every conversation and decision today. Amen.",
    ],
  },
  {
    title: "God, strengthen my faith.",
    paragraphs: [
      "Lord, when I cannot see what is ahead, help me trust who You are. Keep my heart steady when circumstances feel uncertain.",
      "Give me courage to take the next faithful step and confidence that You are with me wherever today leads. Amen.",
    ],
  },
  {
    title: "God, help me walk in love.",
    paragraphs: [
      "Father, shape my words, thoughts and actions today. Help me be patient with others and quick to offer grace.",
      "Teach me to love beyond convenience and to reflect Your kindness in the ordinary moments of this day. Amen.",
    ],
  },
  {
    title: "God, renew my strength.",
    paragraphs: [
      "Lord, You know where I feel tired and discouraged. Restore what feels empty and give me strength for what is in front of me.",
      "Help me move through today with perseverance, gratitude and a heart that stays close to You. Amen.",
    ],
  },
  {
    title: "God, give me wisdom.",
    paragraphs: [
      "Heavenly Father, guide the choices I make today. Keep me from rushing ahead without seeking You.",
      "Give me discernment to recognize what is good, courage to choose what is right, and humility to listen when You redirect me. Amen.",
    ],
  },
  {
    title: "God, help me be grateful.",
    paragraphs: [
      "Father, open my eyes to the blessings I often overlook. Thank You for life, for grace, and for Your presence with me.",
      "Help gratitude shape my attitude today, even when everything does not go according to plan. Amen.",
    ],
  },
];

const dailyScriptures = [
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
    verse:
      "Rejoicing in hope; patient in tribulation; continuing instant in prayer.",
    reference: "Romans 12:12 · KJV",
  },
];

function getLocalDayNumber() {
  const now = new Date();

  return Math.floor(
    Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) / 86400000
  );
}

export default function DailyContent() {
  const dayNumber = getLocalDayNumber();
  const prayer = dailyPrayers[dayNumber % dailyPrayers.length];
  const scripture = dailyScriptures[dayNumber % dailyScriptures.length];

  return (
    <>
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
          {prayer.title}
        </h2>

        <p style={{ color: "#d6d1c5", lineHeight: "1.7" }}>
          {prayer.paragraphs[0]}
        </p>

        <p style={{ color: "#d6d1c5", lineHeight: "1.7" }}>
          {prayer.paragraphs[1]}
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
      </section>
    </>
  );
}