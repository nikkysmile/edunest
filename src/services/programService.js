import { supabase } from "@/lib/supabase";

export async function getPrograms() {
  const { data, error } = await supabase
    .from("programs")
    .select("*")
    .order("created_at", { ascending: false });

  return { data, error };
}

export async function createProgram(program) {
  const { data, error } = await supabase
    .from("programs")
    .insert([program])
    .select()
    .single();

  return { data, error };
}