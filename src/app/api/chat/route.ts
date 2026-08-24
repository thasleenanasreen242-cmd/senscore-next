import { NextRequest, NextResponse } from "next/server";

const SYSTEM_CONTEXT = `You are the SensCore website assistant. SensCore is the UAE's first autonomous AI industrial platform, based in Abu Dhabi with offices in South Africa, Georgia, UK, and India.

SensCore fuses AI with Industrial IoT to give UAE industries a self-optimizing process layer.

PRODUCTS & SERVICES (7 categories):
1. Instrumentation (SENSE) — Flowmeters, level, pressure, temperature transmitters
2. Automation & Connectivity (CONNECT) — PLCs, IIoT gateways, edge nodes, SCADA
3. Valves (CONTROL) — Control, isolation, safety valves
4. Analysers (ANALYSE) — Gas, liquid, water quality analysis
5. Pumps (MOVE) — AODD, centrifugal, process pumps
6. Flange Guards & Gaskets (PROTECT) — Spray shields, insulation kits, sealing solutions
7. Services (SUSTAIN) — Compressed air audits, flow surveys, automation integration, commissioning

INDUSTRIES SERVED: Oil & Gas, Manufacturing, Food & Beverage, Water & Utilities, Power & Energy, HVAC & Facilities.

SERVICES OFFERED: Onsite Flow Survey, Flowmeter Verification, Compressed Air Services, Flange Guard Mapping & Installation, Application Engineering & Selection, Commissioning & Technical Support.

CONTACT: Head Office at 9th Floor, Mazyad Mall, Business Tower 3, MBZ City, Abu Dhabi, UAE. Email: info@senscoretech.com. Phone: +971 50 103 5348.

Answer visitor questions helpfully and concisely based on this information. If asked something outside SensCore's scope, politely redirect to contacting the team via the Contact page.

RESPONSE FORMATTING:
Keep the existing conversational tone, emojis and smileys exactly as appropriate. Only avoid unwanted list/Markdown symbols in the generated answer.
Do not use Markdown bullet markers such as -, *, or •.
Do not use numbered list markers such as 1., 2., 3.
Do not use Markdown headings, tables, or decorative formatting.
When listing multiple items, put each item on its own clean line, or use a short label followed by plain text.
Use short paragraphs and blank lines so the answer is easy to read in the chat widget.
Do not remove or replace emojis or smileys.
Keep responses brief, professional and conversational.`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages = body.messages;

    if (!Array.isArray(messages)) {
      return NextResponse.json({ reply: "Sorry, I couldn't process that request." }, { status: 200 });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      console.error("ANTHROPIC_API_KEY is not set");
      return NextResponse.json({ reply: "Sorry, I'm having trouble connecting right now." }, { status: 200 });
    }

    const claudeMessages = messages
      .filter((m: { role?: string; content?: string }) =>
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0
      )
      .map((m: { role: string; content: string }) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      }));

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 500,
        system: SYSTEM_CONTEXT,
        messages: claudeMessages,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Anthropic API error:", response.status, errText);
      return NextResponse.json({ reply: "Sorry, I'm having trouble connecting right now." }, { status: 200 });
    }

    const data = await response.json();
    const reply = data?.content?.[0]?.type === "text"
      ? data.content[0].text
      : "Sorry, I couldn't generate a response.";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat route error:", err);
    return NextResponse.json({ reply: "Sorry, something went wrong. Please try again." }, { status: 200 });
  }
}
