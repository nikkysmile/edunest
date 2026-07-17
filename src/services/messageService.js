import { supabase } from "@/lib/supabase";

export async function getMessages(
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
    .from("messages")
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

export async function getMessageById(id) {
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .eq("id", id)
    .single();

  return { data, error };
}

export async function createMessage(message) {
  const { data, error } = await supabase
    .from("messages")
    .insert([message])
    .select()
    .single();

  return { data, error };
}

export async function markAsRead(id) {
  const { data, error } = await supabase
    .from("messages")
    .update({
      is_read: true,
    })
    .eq("id", id)
    .select()
    .single();

  return { data, error };
}

export async function deleteMessage(id) {
  const { error } = await supabase
    .from("messages")
    .delete()
    .eq("id", id);

  return { error };
}