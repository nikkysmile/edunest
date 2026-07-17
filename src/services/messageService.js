import { supabase } from "@/lib/supabase";

export async function getMessages() {
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  return { data, error };
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