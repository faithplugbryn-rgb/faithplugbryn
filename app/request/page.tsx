"use client";

import { FormEvent, useState } from "react";

export default function PrayerRequestPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/prayer-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          request: formData.get("request"),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      setSubmitted(true);
      form.reset();
    } catch {
      setError("Your prayer request could not be sent. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <main>
        <h1>Prayer Request</h1>
        <p>Thank you. Your prayer request has been sent.</p>
      </main>
    );
  }

  return (
    <main>
      <h1>Prayer Request</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" type="text" />
        </label>

        <label>
          Prayer Request
          <textarea name="request" required />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Prayer Request"}
        </button>

        {error && <p>{error}</p>}
      </form>
    </main>
  );
}