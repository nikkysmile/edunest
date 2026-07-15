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

export async function getProgramById(id) {
  const { data, error } = await supabase
    .from("programs")
    .select("*")
    .eq("id", id)
    .single();

  return { data, error };
}

export async function updateProgram(id, program) {
  const { data, error } = await supabase
    .from("programs")
    .update(program)
    .eq("id", id)
    .select()
    .single();

  return { data, error };
}

export async function deleteProgram(id) {
  const { error } = await supabase
    .from("programs")
    .delete()
    .eq("id", id);

  return { error };
}