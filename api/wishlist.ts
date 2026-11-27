import crypto from "crypto";
import { createClient } from "@supabase/supabase-js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function cleanString(value: unknown, maxLen: number): string {
  return typeof value === "string" ? value.trim().slice(0, maxLen) : "";
}

function isAuthorizedAdmin(authHeader: string | undefined): boolean {
  const adminKey = process.env.ADMIN_API_KEY;
  if (!adminKey || !authHeader || !authHeader.startsWith("Bearer ")) {
    return false;
  }
  const provided = authHeader.slice("Bearer ".length).trim();
  if (provided.length !== adminKey.length) return false;
  return crypto.timingSafeEqual(Buffer.from(provided), Buffer.from(adminKey));
}

export default async function handler(req: any, res: any) {
  const rawUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || "";
  const rawServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
  const rawAnonKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || "";

  const keyToUse = rawServiceKey || rawAnonKey;

  if (!rawUrl || !keyToUse) {
    console.error("Supabase client is not initialized on the server.");
    return res.status(500).json({ error: "Server database configuration missing" });
  }

  const supabaseAdmin = createClient(rawUrl, keyToUse);

  if (req.method === "GET") {
    if (!isAuthorizedAdmin(req.headers?.authorization)) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const { data, error } = await supabaseAdmin.from("wamu").select("*");
    if (!error && data) {
      return res.status(200).json(data);
    }
    return res.status(500).json({ error: "Unable to fetch records" });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const data = req.body && typeof req.body === "object" ? req.body : {};

  try {
    const name = cleanString(data.name, 120);
    const email = cleanString(data.email, 254).toLowerCase();
    const phone = cleanString(data.phone, 40);
    const organization = cleanString(data.organization, 140);
    const country = cleanString(data.country, 80) || "Uganda";
    const interest = cleanString(data.interest, 100);
    const message = cleanString(data.message, 2000);

    if (!name || !email || !phone) {
      return res.status(400).json({ error: "Name, email, and WhatsApp number are required." });
    }

    if (!EMAIL_RE.test(email)) {
      return res.status(400).json({ error: "Please enter a valid email address." });
    }

    if (phone.replace(/\D/g, "").length < 7) {
      return res.status(400).json({ error: "Please enter a valid WhatsApp phone number." });
    }

    const { data: existingData, error: searchError } = await supabaseAdmin
      .from("wamu")
      .select("email")
      .eq("email", email)
      .limit(1);

    if (searchError) {
      console.error("Supabase search error:", searchError);
      return res.status(500).json({ error: "Unable to verify submission right now." });
    }

    if (existingData && existingData.length > 0) {
      return res.status(400).json({ error: "An entry with this email already exists." });
    }

    const { error } = await supabaseAdmin
      .from("wamu")
      .insert([{ name, email, phone, organization, country, interest, message }]);

    if (error) {
      console.error("Supabase insert error:", error);
      return res.status(500).json({ error: "Unable to save your request right now." });
    }

    return res.status(200).json({ success: true, message: "Added to wishlist" });
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
