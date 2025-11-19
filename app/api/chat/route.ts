// app/api/chat/route.ts
import OpenAI from "openai";
import { NextRequest } from "next/server";

const openai = new OpenAI(); // Vercel injects your API key from env vars

const ASSISTANT_ID = process.env.OPENAI_ASSISTANT_ID!;
if (!ASSISTANT_ID) {
  throw new Error("OPENAI_ASSISTANT_ID is not set in Vercel environment variables");
}

export async function POST(req: NextRequest) {
  try {
    const { messages, thread_id } = await req.json();

    const userMessage = messages?.[messages.length - 1]?.content?.trim();
    if (!userMessage) {
      return new Response("No message provided", { status: 400 });
    }

    // Reuse existing thread or create a new one
    const thread = thread_id
      ? { id: thread_id }
      : await openai.beta.threads.create();

    // Add the user's message
    await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: userMessage,
    });

    // Stream the assistant's response
    const stream = openai.beta.threads.runs.stream(thread.id, {
      assistant_id: ASSISTANT_ID,
    });

    const readable = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();

        for await (const event of stream) {
          if (
            event.event === "thread.message.delta" &&
            event.data.delta.content?.[0]?.type === "text" &&
            event.data.delta.content[0].text?.value
          ) {
            const text = event.data.delta.content[0].text.value;
            controller.enqueue(encoder.encode(text));
          }
        }
        controller.close();
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
    console.error("Chat API error:", error);
    return new Response(`Error: ${error.message}`, { status: 500 });
  }
}

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
