import { supabase } from "@/lib/supabase";

export async function getTeachers(
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
    .from("teachers")
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

export async function getTeacherById(id) {
  const { data, error } = await supabase
    .from("teachers")
    .select("*")
    .eq("id", id)
    .single();

  return { data, error };
}

export async function createTeacher(teacher) {
  const { data, error } = await supabase
    .from("teachers")
    .insert([teacher])
    .select()
    .single();

  return { data, error };
}

export async function updateTeacher(id, teacher) {
  const { data, error } = await supabase
    .from("teachers")
    .update(teacher)
    .eq("id", id)
    .select()
    .maybeSingle();

  return { data, error };
}

export async function deleteTeacher(id) {
  const { error } = await supabase
    .from("teachers")
    .delete()
    .eq("id", id);

  return { error };
}