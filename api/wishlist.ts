import { createClient } from "@supabase/supabase-js";

export default async function handler(req: any, res: any) {
  const rawUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || "";
  const rawServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
  const rawAnonKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || "";
  
  const keyToUse = rawServiceKey ? rawServiceKey : rawAnonKey;

  if (!rawUrl || !keyToUse) {
    console.error("Supabase client is not initialized on the server.");
    return res.status(500).json({ error: "Server database configuration missing" });
  }

  const supabaseAdmin = createClient(rawUrl, keyToUse);

  if (req.method === 'GET') {
    const { data, error } = await supabaseAdmin.from('wamu').select('*');
    if (!error && data) {
      return res.status(200).json(data);
    }
    return res.status(200).json([]);
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const data = req.body;

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
    
    res.status(200).json({ success: true, message: "Added to wishlist" });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}
