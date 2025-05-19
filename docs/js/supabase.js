// js/supabase.js
const { createClient } = supabase
const supabaseUrl = 'https://YOUR_PROJECT_ID.supabase.co'
const supabaseKey = 'YOUR_PUBLIC_ANON_KEY'
const supabase = createClient(supabaseUrl, supabaseKey)