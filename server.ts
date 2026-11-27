import "dotenv/config";
import crypto from "crypto";
import express from "express";
import { createServer as createHttpServer } from "http";
import path from "path";
import { createServer as createViteServer } from "vite";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

type WishlistEntry = {
  id: number;
  name: string;
  email: string;
  phone: string;
  organization: string;
  country: string;
  interest: string;
  message: string;
  created_at: string;
};

const wishlist: WishlistEntry[] = [];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function cleanString(value: unknown, maxLen: number): string {
  return typeof value === "string" ? value.trim().slice(0, maxLen) : "";
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
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

async function startServer() {
  const app = express();
  const httpServer = createHttpServer(app);
  const PORT = 3000;

  const rawUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || "";
  const rawServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
  const rawAnonKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || "";

  const resendApiKey = process.env.RESEND_API_KEY || "";
  const resend = resendApiKey ? new Resend(resendApiKey) : null;

  const isValidUrl = (url: string) => {
    try {
      return new URL(url).protocol.startsWith("http");
    } catch {
      return false;
    }
  };

  let supabaseAdmin: ReturnType<typeof createClient> | null = null;
  if (isValidUrl(rawUrl)) {
    const keyToUse =
      rawServiceKey && rawServiceKey !== "YOUR_SUPABASE_SERVICE_ROLE_KEY"
        ? rawServiceKey
        : rawAnonKey && rawAnonKey !== "YOUR_SUPABASE_ANON_KEY"
          ? rawAnonKey
          : null;

    if (keyToUse) {
      supabaseAdmin = createClient(rawUrl, keyToUse);
    }
  }

  app.use(express.json({ limit: "32kb" }));

  app.post("/api/wishlist", async (req, res) => {
    const data = req.body && typeof req.body === "object" ? req.body : {};
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

    if (!supabaseAdmin) {
      const duplicate = wishlist.some((entry) => entry.email === email);
      if (duplicate) {
        return res.status(400).json({ error: "An entry with this email already exists." });
      }
      wishlist.push({
        id: wishlist.length + 1,
        name,
        email,
        phone,
        organization,
        country,
        interest,
        message,
        created_at: new Date().toISOString(),
      });
      return res.json({ success: true, message: "Added to wishlist" });
    }

    try {
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
        .insert([{ name, email, phone, organization, country, interest, message }] as never);

      if (error) {
        console.error("Supabase insert error:", error);
        return res.status(500).json({ error: "Unable to save your request right now." });
      }

      if (resend) {
        try {
          const resendFromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
          const safeName = escapeHtml(name);
          const resendResponse = await resend.emails.send({
            from: resendFromEmail,
            to: [email],
            subject: "Welcome to WAMU",
            html: `
              <div style="font-family: sans-serif; color: #0D1A12;">
                <h2 style="color: #0F6E56;">Welcome to WAMU, ${safeName}!</h2>
                <p>Thank you for reaching out to WAMU.</p>
                <p>We've received your details and our team will be in touch soon.</p>
                <br />
                <p>Best regards,<br />The WAMU Team</p>
              </div>
            `,
          });

          if (resendResponse.error) {
            console.error("Failed to send welcome email. Resend error:", resendResponse.error);
          }
        } catch (emailError) {
          console.error("Failed to send welcome email exception:", emailError);
        }
      }

      res.json({ success: true, message: "Added to wishlist" });
    } catch (err) {
      console.error("Server error:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.get("/api/wishlist", async (req, res) => {
    if (!isAuthorizedAdmin(req.headers.authorization)) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    if (supabaseAdmin) {
      const { data, error } = await supabaseAdmin.from("wamu").select("*");
      if (!error && data) {
        return res.json(data);
      }
      return res.status(500).json({ error: "Unable to fetch records" });
    }
    return res.json(wishlist);
  });

  if (process.env.NODE_ENV !== "production") {
    const isAiStudioHmrDisabled =
      (process.env.DISABLE_HMR === "true" ||
        process.env.AI_STUDIO_NO_AUTORELOAD === "true" ||
        Boolean(process.env.APPLET_ID)) &&
      process.env.AI_STUDIO_NO_AUTORELOAD !== "false";

    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        ...(isAiStudioHmrDisabled
          ? { hmr: false, ws: false }
          : { hmr: { server: httpServer } }),
      },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  httpServer.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
