import { supabase } from "@/lib/supabase";

export async function getNews(
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
    .from("news")
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

export async function getLatestNews(limit = 3) {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .eq("published", true)
    .order("created_at", {
      ascending: false,
    })
    .limit(limit);

  return { data, error };
}
