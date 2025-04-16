import { createClient } from '@supabase/supabase-js'

console.log (import.meta.env.VITE_SUPABASE_URI)
console.log (import.meta.env.VITE_SUPABASE_KEY)

const supabaseUrl = import.meta.env.VITE_SUPABASE_URI;       
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;                            

export const supabase = createClient(supabaseUrl, supabaseKey)
