import { supabase } from "@/lib/supabase";

export async function uploadImage(file, bucket = "gallery", folder = "") {
  if (!file) {
    return {
      data: null,
      error: {
        message: "File tidak ditemukan.",
      },
    };
  }

  const fileExt = file.name.split(".").pop();

  const fileName = `${Date.now()}-${Math.random()
    .toString(36)
    .substring(2, 8)}.${fileExt}`;

  const filePath = folder
    ? `${folder}/${fileName}`
    : fileName;

  const { error } = await supabase.storage
    .from(bucket)
    .upload(filePath, file);

  if (error) {
    return {
      data: null,
      error,
    };
  }

  const {
    data: { publicUrl },
  } = supabase.storage
    .from(bucket)
    .getPublicUrl(filePath);

  return {
    data: publicUrl,
    error: null,
  };
}

export async function deleteImage(url, bucket = "gallery") {
  if (!url) return;

  const marker = `/storage/v1/object/public/${bucket}/`;

  const index = url.indexOf(marker);

  if (index === -1) return;

  const filePath = url.substring(index + marker.length);

  return await supabase.storage
    .from(bucket)
    .remove([filePath]);
}