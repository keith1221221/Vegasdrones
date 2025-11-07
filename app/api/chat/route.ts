// src/app/api/chat/route.ts
import { NextResponse } from "next/server";

export const runtime = "nodejs";          // ensure Node runtime (not Edge)
export const dynamic = "force-dynamic";   // avoid static optimization

type ChatRole = "system" | "user" | "assistant";
type ChatMessage = { role: ChatRole; content: string };

// Optional: tiny helper to read JSON safely
async function readJson<T>(req: Request): Promise<T | null> {
  try { return (await req.json()) as T; } catch { return null; }
}

export async function GET() {
  // Health check (DON'T reveal the actual key)
  const hasKey = Boolean(process.env.OPENAI_API_KEY);
  return NextResponse.json({ ok: true, openai: hasKey ? "configured" : "missing" });
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.error("OPENAI_API_KEY missing");
      return NextResponse.json({ error: "Server not configured" }, { status: 500 });
    }

    const body = await readJson<{ message?: string; messages?: ChatMessage[]; model?: string }>(req);
    if (!body) {
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }

    // Accept either { message: "hi" } or { messages: [...] }
    let messages: ChatMessage[] = [];
    if (typeof body.message === "string" && body.message.trim()) {
      messages = [{ role: "user", content: body.message.trim() }];
    } else if (Array.isArray(body.messages) && body.messages.length > 0) {
      // basic validation
      messages = body.messages.filter(
        (m): m is ChatMessage =>
          m && typeof m.content === "string" && !!m.content.trim() && ["system","user","assistant"].includes(m.role)
      );
    } else {
      return NextResponse.json(
        { error: "Provide either { message: string } or { messages: ChatMessage[] }" },
        { status: 400 }
      );
    }

    // Prepend a system message if the first isn't already system
    const system: ChatMessage = {
      role: "system",
      content: "You are a helpful assistant for Vegas Drones. Be concise, friendly, and accurate.",
    };
    if (messages[0]?.role !== "system") {
      messages = [system, ...messages];
    }

    const model = body.model ?? "gpt-4o-mini";

    // Call OpenAI via fetch (no SDK needed)
    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages,
        temperature: 0.2,
      }),
    });

    if (!r.ok) {
      const text = await r.text().catch(() => "");
      console.error("OpenAI error:", r.status, text);
      // 401 is often bad/missing key in deployment env
      return NextResponse.json({ error: "Upstream error" }, { status: 502 });
    }

    const data: any = await r.json().catch(() => ({}));
    const reply: string =
      data?.choices?.[0]?.message?.content ??
      data?.choices?.[0]?.text ??
      "";

    return NextResponse.json({ reply });
  } catch (err: any) {
    const msg = err?.name === "AbortError" ? "Request timed out" : (err?.message || String(err));
    console.error("API /api/chat exception:", msg, err?.stack || "");
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
