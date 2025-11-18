import "dotenv/config";
import OpenAI from "openai";
import { supabaseServer } from "../lib/supabaseServer";

async function main() {
  const { data, error } = await supabaseServer.from("documents").select("id").limit(1);
  if (error) throw error;
  console.log("✅ Supabase OK. Sample rows:", data?.length ?? 0);
}

main().catch((e) => {
  console.error("❌ Connection test failed:", e.message);
  process.exit(1);
});
