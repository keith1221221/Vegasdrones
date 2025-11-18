
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceKey) {
  throw new Error(
    "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY. " +
    "Add them to .env.local (and Vercel env) and restart."
  );
}

export const supabaseServer = createClient(supabaseUrl, serviceKey, {
  auth: { persistSession: false },
});
