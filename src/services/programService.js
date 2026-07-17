import { supabase } from "@/lib/supabase";

export async function getPrograms(
  page = 1,
  limit = 10
) {
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  const {
    data,
    error,
    count,
  } = await supabase
    .from("programs")
    .select("*", {
      count: "exact",
    })
    .order("created_at", {
      ascending: false,
    })
    .range(from, to);

  return {
    data,
    error,
    count,
  };
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