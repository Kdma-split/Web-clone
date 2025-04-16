// import { supabase } from './SupabaseClientInit.js';

// async function createTableIfNotExists(tableName) {
//   const createTableSQL = `
//     CREATE TABLE IF NOT EXISTS public.${tableName} (
//       id serial PRIMARY KEY,
//       email text NOT NULL,
//       username text NOT NULL,
//       message text,
//       inserted_at timestamp with time zone DEFAULT timezone('utc'::text, now())
//     );
//   `;

//   // Ensure you are using Supabase's Admin SQL RPC function
//   const { data, error } = await supabase.rpc('execute_sql', { sql: createTableSQL });

//   if (error) {
//     console.error("Table creation error:", error);
//     return false;
//   } else {
//     console.log("Table created or already exists.");
//     return true;
//   }
// }

// export const insertContactMessage = async ({ username, email, message }) => {
//   const tableCreated = await createTableIfNotExists("contact_messages");

//   if (tableCreated) {
//     const { data, error } = await supabase
//       .from('contact_messages')
//       .insert([{ username, email, message }]);

//     if (error) {
//       console.error("Insert error:", error);
//     }

//     return { data, error };
//   }
// };






import { supabase } from './SupabaseClientInit.js';

export const insertContactMessage = async ({ username, email, message }) => {
  const { data, error } = await supabase
    .from('contact_messages')
    .insert([{ username, email, message }]);

  if (error) {
    console.error("Insert error:", error);
  }

  return { data, error };
};
