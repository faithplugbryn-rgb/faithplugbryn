import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || "Anonymous").trim() || "Anonymous";
    const prayerRequest = String(body.request || "").trim();

    if (!prayerRequest) {
      return NextResponse.json(
        { error: "Prayer request is required." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "FaithPlugBryn Prayer Requests <onboarding@resend.dev>",
      to: ["godshustle01@gmail.com"],
      subject: `Prayer Request from ${name}`,
      text: `Name: ${name}\n\nPrayer Request:\n${prayerRequest}`,
    });

    if (error) {
      console.error(error);
      return NextResponse.json(
        { error: "Could not send prayer request." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Could not send prayer request." },
      { status: 500 }
    );
  }
}