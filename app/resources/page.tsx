import Link from "next/link";

export default function ResourcesPage() {
    const guides = [
        {
            title: "When You Feel Anxious",
            description:
                "Scripture and prayer to help you turn worry over to God.",
            verse: "Philippians 4:6–7",
        },
        {
            title: "Trusting God in the Waiting",
            description:
                "A guide for seasons when answers seem slow and the way forward is unclear.",
            verse: "Psalm 27:14",
        },
        {
            title: "Praying for Strength",
            description:
                "Turn to God when you feel tired, overwhelmed, or discouraged.",
            verse: "Isaiah 40:31",
        },
        {
            title: "Starting Your Day With God",
            description:
                "A simple prayer rhythm to put God first at the beginning of your day.",
            verse: "Psalm 5:3",
        },
    ];

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
                    Prayer Guides
                </h1>

                <p
                    style={{
                        color: "#c9c3b7",
                        fontSize: "17px",
                        lineHeight: 1.6,
                        marginBottom: "32px",
                    }}
                >
                    Biblical encouragement and practical prayer guides for every season
                    of life.
                </p>

                <div
                    style={{
                        display: "grid",
                        gap: "16px",
                    }}
                >
                    {guides.map((guide) => (
                        <article
                            key={guide.title}
                            style={{
                                backgroundColor: "#11110f",
                                border: "1px solid rgba(216, 179, 101, 0.25)",
                                borderRadius: "20px",
                                padding: "24px",
                            }}
                        >
                            <p
                                style={{
                                    color: "#d8b365",
                                    fontSize: "12px",
                                    letterSpacing: "1.5px",
                                    textTransform: "uppercase",
                                    margin: "0 0 10px",
                                }}
                            >
                                {guide.verse}
                            </p>

                            <h2
                                style={{
                                    color: "#ffffff",
                                    fontSize: "21px",
                                    margin: "0 0 10px",
                                }}
                            >
                                {guide.title}
                            </h2>

                            <p
                                style={{
                                    color: "#c9c3b7",
                                    fontSize: "15px",
                                    lineHeight: 1.7,
                                    margin: 0,
                                }}
                            >
                                {guide.description}
                            </p>
                        </article>
                    ))}
                </div>

                <section
                    style={{
                        backgroundColor: "#d8b365",
                        color: "#080807",
                        borderRadius: "20px",
                        padding: "26px",
                        marginTop: "28px",
                    }}
                >
                    <p
                        style={{
                            fontSize: "12px",
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                            fontWeight: 700,
                            margin: "0 0 8px",
                        }}
                    >
                        FaithPlugBryn Store
                    </p>

                    <h2
                        style={{
                            fontSize: "22px",
                            margin: "0 0 10px",
                        }}
                    >
                        Go deeper in prayer
                    </h2>

                    <p
                        style={{
                            lineHeight: 1.6,
                            margin: "0 0 20px",
                        }}
                    >
                        Explore more FaithPlugBryn prayer resources and guides.
                    </p>

                    <Link
                        href="https://ko-fi.com/faithplugbryn"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "block",
                            backgroundColor: "#080807",
                            color: "#d8b365",
                            textDecoration: "none",
                            textAlign: "center",
                            borderRadius: "12px",
                            padding: "15px",
                            fontWeight: 700,
                        }}
                    >
                        Visit the Store →
                    </Link>
                </section>
            </div>
        </main>
    );
}