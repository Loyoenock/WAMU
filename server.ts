import "dotenv/config";
import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { createClient } from "@supabase/supabase-js";

const wishlist: any[] = [];

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Initialize Supabase Admin Client for secure backend operations
  // This bypasses RLS, so be careful to enforce business logic here
  const rawUrl = process.env.VITE_SUPABASE_URL || "";
  const rawServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
  const rawAnonKey = process.env.VITE_SUPABASE_ANON_KEY || "";
  
  const isValidUrl = (url: string) => {
    try {
      return new URL(url).protocol.startsWith('http');
    } catch {
      return false;
    }
  };

  let supabaseAdmin: any = null;
  if (isValidUrl(rawUrl)) {
    const keyToUse = (rawServiceKey && rawServiceKey !== 'YOUR_SUPABASE_SERVICE_ROLE_KEY') 
      ? rawServiceKey 
      : (rawAnonKey && rawAnonKey !== 'YOUR_SUPABASE_ANON_KEY') ? rawAnonKey : null;
      
    if (keyToUse) {
      supabaseAdmin = createClient(rawUrl, keyToUse);
    }
  }

  app.use(express.json());

  // API routes FIRST
  app.post("/api/wishlist", async (req, res) => {
    const data = req.body;
    
    if (!supabaseAdmin) {
      console.error("Supabase client is not initialized on the server.");
      return res.status(500).json({ error: "Server database configuration missing" });
    }

    try {
      const { name, email, phone, organization, country, interest, message } = data;
      
      // Check for duplicate
      const { data: existingData, error: searchError } = await supabaseAdmin
        .from('wamu')
        .select('email')
        .eq('email', email)
        .limit(1);

      if (searchError) {
        console.error("Supabase search error:", searchError);
        return res.status(500).json({ error: searchError.message });
      }

      if (existingData && existingData.length > 0) {
        return res.status(400).json({ error: "An entry with this email already exists." });
      }

      const { error } = await supabaseAdmin
        .from('wamu')
        .insert([{ name, email, phone, organization, country, interest, message }]);
      
      if (error) {
        console.error("Supabase insert error:", error);
        return res.status(500).json({ error: error.message });
      }
      
      res.json({ success: true, message: "Added to wishlist" });
    } catch (err) {
      console.error("Server error:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.get("/api/wishlist", async (req, res) => {
    if (supabaseAdmin) {
      const { data, error } = await supabaseAdmin.from('wamu').select('*');
      if (!error && data) {
        return res.json(data);
      }
    }
    res.json([]);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { 
        middlewareMode: true,
        hmr: false
      },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
