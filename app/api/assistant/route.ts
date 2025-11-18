// app/api/assistant/route.ts
export const runtime = "nodejs";       // ensure Node runtime (not Edge)
export const dynamic = "force-dynamic";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
  // If you're using "Projects" in the OpenAI dashboard, optionally add:
  // project: process.env.OPENAI_PROJECT,
  // organization: process.env.OPENAI_ORG,
});

type JsonBody = { message?: string; threadId?: string | null };

export async function POST(req: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return new Response(JSON.stringify({ error: "Missing OPENAI_API_KEY" }), { status: 500 });
    }
    if (!process.env.ASSISTANT_ID) {
      return new Response(JSON.stringify({ error: "Missing ASSISTANT_ID" }), { status: 500 });
    }

    const { message, threadId }: JsonBody = await req.json();
    if (!message || !message.trim()) {
      return new Response(JSON.stringify({ error: "Empty message" }), { status: 400 });
    }

    // 1) Ensure we have a valid thread id
    let tid: string | undefined = (threadId || undefined) as string | undefined;
    if (!tid) {
      const thread = await openai.beta.threads.create();
      tid = thread.id;                        // must look like "thread_..."
    }

    // 2) Append user message
    await openai.beta.threads.messages.create(tid, {
      role: "user",
      content: message,
    });

    // 3) Start a run for this thread
    const createdRun: any = await openai.beta.threads.runs.create(tid, {
      assistant_id: process.env.ASSISTANT_ID!,
    });

    // Extract the *actual* run id and thread id from the run
    const runId: string | undefined = createdRun?.id;
    const runThreadId: string | undefined = createdRun?.thread_id || tid;

    // Guard against the common mixup where runId is accidentally a thread id
    if (!runId || !String(runId).startsWith("run_")) {
      return new Response(
        JSON.stringify({
          error: `Unexpected run id returned: ${runId ?? "undefined"}`,
          details: createdRun,
        }),
        { status: 500 }
      );
    }
    if (!runThreadId || !String(runThreadId).startsWith("thread_")) {
      return new Response(
        JSON.stringify({
          error: `Unexpected thread id returned: ${runThreadId ?? "undefined"}`,
          details: createdRun,
        }),
        { status: 500 }
      );
    }

    // 4) Poll until the run completes
    //    (If your Assistant uses tools and returns "requires_action", we can add a handler later.)
    while (true) {
      const r: any = await openai.beta.threads.runs.retrieve(runThreadId, runId);
      if (r.status === "completed") break;
      if (["failed", "cancelled", "expired"].includes(r.status)) {
        return new Response(
          JSON.stringify({ threadId: runThreadId, error: `Run ${r.status}` }),
          { status: 500 }
        );
      }
      await new Promise((res) => setTimeout(res, 800));
    }

    // 5) Grab the latest assistant message
    const msgs = await openai.beta.threads.messages.list(runThreadId, {
      order: "desc",
      limit: 1,
    });

    const top = msgs.data[0];
    const text =
      (top?.content ?? [])
        .map((c: any) => (c.type === "text" ? c.text.value : ""))
        .join("\n")
        .trim() || "(No text returned)";

    return new Response(JSON.stringify({ threadId: runThreadId, text }), {
      headers: { "content-type": "application/json" },
      status: 200,
    });
  } catch (err: any) {
    console.error("Assistant route error:", err);
    const msg =
      err?.response?.data?.error?.message ||
      err?.error?.message ||
      err?.message ||
      String(err);
    return new Response(JSON.stringify({ error: msg }), { status: 500 });
  }
}