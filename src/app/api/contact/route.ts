import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, company, email, phone, industry, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json({ ok: false, error: "Email service is not configured." }, { status: 500 });
    }

    const emailHtml = `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#17202a;max-width:700px;margin:0 auto">
        <h2>New SensCore Website Enquiry</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;font-weight:600;width:140px">Name</td><td style="padding:8px 0">${escapeHtml(name)}</td></tr>
          <tr><td style="padding:8px 0;font-weight:600">Company</td><td style="padding:8px 0">${escapeHtml(company || "Not provided")}</td></tr>
          <tr><td style="padding:8px 0;font-weight:600">Email</td><td style="padding:8px 0">${escapeHtml(email)}</td></tr>
          <tr><td style="padding:8px 0;font-weight:600">Phone</td><td style="padding:8px 0">${escapeHtml(phone || "Not provided")}</td></tr>
          <tr><td style="padding:8px 0;font-weight:600">Industry</td><td style="padding:8px 0">${escapeHtml(industry || "Not provided")}</td></tr>
        </table>
        <div style="margin-top:24px;padding:18px;background:#f5f7f8;border-radius:8px">
          <div style="font-weight:600;margin-bottom:8px">Message</div>
          <div style="white-space:pre-wrap">${escapeHtml(message)}</div>
        </div>
      </div>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "SensCore Website <enquiries@senscoretech.com>",
        to: ["enquiries@senscoretech.com"],
        reply_to: email,
        subject: `New Website Enquiry${industry ? ` — ${industry}` : ""}`,
        html: emailHtml,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Resend API error:", response.status, errorText);
      return NextResponse.json({ ok: false, error: "Unable to send your message right now." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
