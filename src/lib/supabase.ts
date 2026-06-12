import { createClient } from '@supabase/supabase-js';

const rawUrl = import.meta.env.VITE_SUPABASE_URL;
const rawKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const isValidUrl = (url: string | boolean | undefined) => {
  try {
    return typeof url === 'string' && new URL(url).protocol.startsWith('http');
  } catch (e) {
    return false;
  }
};

const supabaseUrl = isValidUrl(rawUrl) ? rawUrl as string : 'https://placeholder.supabase.co';
const supabaseAnonKey = rawKey && rawKey !== 'YOUR_SUPABASE_ANON_KEY' ? rawKey : 'placeholder-key';

if (!isValidUrl(rawUrl) || !rawKey || rawKey === 'YOUR_SUPABASE_ANON_KEY') {
  console.warn('Missing or invalid Supabase environment variables! Please configure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your settings.');
}

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);
