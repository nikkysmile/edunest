import { supabase } from "@/lib/supabase";

export async function getNews() {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .order("created_at", { ascending: false });

  return { data, error };
}

export async function getNewsById(id) {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .eq("id", id)
    .single();

  return { data, error };
}

export async function getNewsBySlug(slug) {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .eq("slug", slug)
    .single();

  return { data, error };
}

export async function createNews(news) {
  console.log("DATA NEWS:", news);

  const { data, error } = await supabase
    .from("news")
    .insert([news])
    .select()
    .single();

  console.log("DATA:", data);
  console.log("ERROR:", error);

  return { data, error };
}

export async function updateNews(id, news) {
  const { data, error } = await supabase
    .from("news")
    .update(news)
    .eq("id", id)
    .select()
    .maybeSingle();

  return { data, error };
}

export async function deleteNews(id) {
  const { error } = await supabase
    .from("news")
    .delete()
    .eq("id", id);

  return { error };
}

export async function getPublishedNews() {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .eq("published", true)
    .order("created_at", {
      ascending: false,
    });

  return { data, error };
}
