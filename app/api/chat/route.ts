import OpenAI from "openai";
import { NextRequest } from "next/server";

const openai = new OpenAI();

const ASSISTANT_ID = process.env.OPENAI_ASSISTANT_ID!;
if (!ASSISTANT_ID) throw new Error("Missing OPENAI_ASSISTANT_ID");

export async function POST(req: NextRequest) {
  try {
    const { messages, thread_id } = await req.json();
    const userMessage = messages?.[messages.length - 1]?.content?.trim();
    if (!userMessage) return new Response("Empty message", { status: 400 });

    const thread = thread_id ? { id: thread_id } : await openai.beta.threads.create();

    await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: userMessage,
    });

    const stream = openai.beta.threads.runs.stream(thread.id, {
      assistant_id: ASSISTANT_ID,
    });

    const readable = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        try {
          for await (const part of stream) {
            const delta = part.event === "thread.message.delta" ? part.data.delta?.content?.[0]?.text?.value : null;
            if (delta) controller.enqueue(encoder.encode(delta));
          }
          controller.close();
        } catch (e: any) {
          controller.error(e);
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
        "x-thread-id": thread.id,
      },
    });
  } catch (error: any) {
    console.error("[Chat API error]", error);
    return new Response(`Error: ${error.message}`, { status: 500 });
  }
}

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
