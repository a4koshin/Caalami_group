import { supabase } from "./supabaseClient";

export async function submitContact({ name, email, message }) {
  const { error } = await supabase
    .from("contacts")
    .insert([{ name, email, message }]);

  if (error) throw error;
}
