import "dotenv/config";
import OpenAI from "openai";
import { supabaseServer } from "../lib/supabaseServer";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

async function addKnowledge(
  content: string,
  priority: "low" | "normal" | "high" = "normal",
  metadata: Record<string, any> = {},
  title?: string
) {
  const embeddingRes = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: content,
  });

  const embedding = embeddingRes.data[0]?.embedding;
  if (!embedding) throw new Error("Failed to generate embedding");

  const { data, error } = await supabaseServer
    .from("documents")
    .insert([{ content, priority, metadata, embedding, title }])
    .select("*");

  if (error) throw error;

  console.log("Inserted:", data);
}

addKnowledge(
  "Vegas Drones offers 24/7 customer support via phone and email. Our support team is available at support@vegasdrones.com or call 1-800-DRONES.",
  "high",
  { category: "support", topic: "contact" },
  "Support Contact"
).catch(console.error);
