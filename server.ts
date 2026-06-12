import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

const wishlist: any[] = [];

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes FIRST
  app.post("/api/wishlist", (req, res) => {
    const data = req.body;
    wishlist.push({ ...data, timestamp: new Date().toISOString() });
    res.json({ success: true, message: "Added to wishlist" });
  });

  app.get("/api/wishlist", (req, res) => {
    // Hidden endpoint for testing
    res.json(wishlist);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
