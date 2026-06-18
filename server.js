// This file is an entry point designed for hosting providers like Hostinger or cPanel
// which by default look for a server.js or app.js file in the root directory.
import('./dist/server.cjs').catch(err => {
  console.error("Failed to load server:", err);
});
