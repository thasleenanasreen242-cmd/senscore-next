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

Answer visitor questions helpfully and concisely based on this information. If asked something outside SensCore's scope, politely redirect to contacting the team via the Contact page. Keep responses brief and conversational — this is a website chat widget, not a report.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("GEMINI_API_KEY is not set");
      return NextResponse.json({ reply: "Sorry, I'm having trouble connecting right now." }, { status: 200 });
    }

    const contents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents,
          systemInstruction: { parts: [{ text: SYSTEM_CONTEXT }] },
        }),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error("Gemini API error:", response.status, errText);
      return NextResponse.json({ reply: "Sorry, I'm having trouble connecting right now." }, { status: 200 });
    }

    const data = await response.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "Sorry, I couldn't generate a response.";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat route error:", err);
    return NextResponse.json({ reply: "Sorry, something went wrong. Please try again." }, { status: 200 });
  }
}
