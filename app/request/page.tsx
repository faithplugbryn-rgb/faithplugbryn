"use client";

import { FormEvent, useState } from "react";

export default function RequestPage() {
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setSubmitted(true);
    }

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
                    Prayer Request
                </h1>

                <p
                    style={{
                        color: "#c9c3b7",
                        fontSize: "17px",
                        lineHeight: 1.6,
                        marginBottom: "32px",
                    }}
                >
                    Whatever you&apos;re carrying today, you don&apos;t have to carry it
                    alone. Share your prayer request below.
                </p>

                {!submitted ? (
                    <form
                        onSubmit={handleSubmit}
                        style={{
                            backgroundColor: "#11110f",
                            border: "1px solid rgba(216, 179, 101, 0.25)",
                            borderRadius: "22px",
                            padding: "26px",
                        }}
                    >
                        <label
                            htmlFor="name"
                            style={{
                                display: "block",
                                color: "#d8b365",
                                fontSize: "13px",
                                marginBottom: "8px",
                            }}
                        >
                            Your name (optional)
                        </label>

                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your name"
                            style={{
                                width: "100%",
                                boxSizing: "border-box",
                                backgroundColor: "#080807",
                                color: "#ffffff",
                                border: "1px solid #3b3427",
                                borderRadius: "12px",
                                padding: "14px",
                                fontSize: "16px",
                                marginBottom: "22px",
                                outline: "none",
                            }}
                        />

                        <label
                            htmlFor="prayer"
                            style={{
                                display: "block",
                                color: "#d8b365",
                                fontSize: "13px",
                                marginBottom: "8px",
                            }}
                        >
                            How can we pray for you?
                        </label>

                        <textarea
                            id="prayer"
                            name="prayer"
                            required
                            rows={7}
                            placeholder="Write your prayer request here..."
                            style={{
                                width: "100%",
                                boxSizing: "border-box",
                                resize: "vertical",
                                backgroundColor: "#080807",
                                color: "#ffffff",
                                border: "1px solid #3b3427",
                                borderRadius: "12px",
                                padding: "14px",
                                fontSize: "16px",
                                lineHeight: 1.6,
                                marginBottom: "22px",
                                outline: "none",
                            }}
                        />

                        <button
                            type="submit"
                            style={{
                                width: "100%",
                                border: "none",
                                borderRadius: "14px",
                                backgroundColor: "#d8b365",
                                color: "#080807",
                                padding: "16px",
                                fontSize: "16px",
                                fontWeight: 700,
                                cursor: "pointer",
                            }}
                        >
                            Send Prayer Request
                        </button>
                    </form>
                ) : (
                    <section
                        style={{
                            backgroundColor: "#11110f",
                            border: "1px solid rgba(216, 179, 101, 0.35)",
                            borderRadius: "22px",
                            padding: "36px 26px",
                            textAlign: "center",
                        }}
                    >
                        <div
                            style={{
                                color: "#d8b365",
                                fontSize: "38px",
                                marginBottom: "15px",
                            }}
                        >
                            ♡
                        </div>

                        <h2
                            style={{
                                color: "#d8b365",
                                fontSize: "24px",
                                margin: "0 0 12px",
                            }}
                        >
                            Request Received
                        </h2>

                        <p
                            style={{
                                color: "#c9c3b7",
                                fontSize: "16px",
                                lineHeight: 1.7,
                                margin: 0,
                            }}
                        >
                            Thank you for sharing what&apos;s on your heart.
                        </p>
                    </section>
                )}

                <p
                    style={{
                        color: "#8c8068",
                        textAlign: "center",
                        fontSize: "13px",
                        lineHeight: 1.6,
                        marginTop: "28px",
                    }}
                >
                    “The effectual fervent prayer of a righteous man availeth much.”
                    <br />
                    James 5:16 · KJV
                </p>
            </div>
        </main>
    );
}