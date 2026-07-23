import { NextResponse } from "next/server";

// Stub endpoint. Wire this up to an email provider (e.g. Resend, SendGrid)
// or forward to a CRM. Currently validates and logs the submission.
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    // TODO: send email / push to CRM here.
    console.log("New SensCore contact submission:", body);

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }
}
