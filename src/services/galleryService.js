import { supabase } from "@/lib/supabase";

export async function getGalleries() {
  const { data, error } = await supabase
    .from("galleries")
    .select("*")
    .order("created_at", { ascending: false });

  return { data, error };
}

export async function getGalleryById(id) {
  const { data, error } = await supabase
    .from("galleries")
    .select("*")
    .eq("id", id)
    .single();

  return { data, error };
}

export async function createGallery(gallery) {
  const { data, error } = await supabase
    .from("galleries")
    .insert([gallery])
    .select()
    .single();

  return { data, error };
}

export async function updateGallery(id, gallery) {
  const { data, error } = await supabase
    .from("galleries")
    .update(gallery)
    .eq("id", id)
    .select()
    .single();

  return { data, error };
}

export async function deleteGallery(id) {
  const { error } = await supabase
    .from("galleries")
    .delete()
    .eq("id", id);

  return { error };
}