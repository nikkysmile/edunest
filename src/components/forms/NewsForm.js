"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { swal } from "@/lib/swal";

import {
  createNews,
  updateNews,
} from "@/services/newsService";

import { uploadImage } from "@/services/storageService";

import ImageUploader from "@/components/ui/ImageUploader";

export default function NewsForm({
  initialData,
  isEdit = false,
}) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [imageFile, setImageFile] = useState(null);

  const [form, setForm] = useState({
    title: initialData?.title ?? "",
    slug: initialData?.slug ?? "",
    image: initialData?.image ?? "",
    excerpt: initialData?.excerpt ?? "",
    content: initialData?.content ?? "",
    published: initialData?.published ?? true,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    let imageUrl = form.image;

    if (imageFile) {
      const {
        data,
        error: uploadError,
      } = await uploadImage(imageFile, "news");

      if (uploadError) {
        setLoading(false);

        await swal.fire({
          icon: "error",
          title: "Upload Gagal",
          text: uploadError.message,
        });

        return;
      }

      imageUrl = data;
    }

    const payload = {
      ...form,
      image: imageUrl,
    };

    let error;

    if (isEdit) {
      ({ error } = await updateNews(
        initialData.id,
        payload
      ));
    } else {
        console.log(payload);
      ({ error } = await createNews(
        payload
      ));
    }

    if (error) {
      setLoading(false);

      await swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Berita gagal disimpan.",
      });

      return;
    }

    await swal.fire({
      icon: "success",
      title: "Berhasil",
      text: isEdit
        ? "Berita berhasil diperbarui."
        : "Berita berhasil ditambahkan.",
      timer: 1500,
      showConfirmButton: false,
    });

    router.push("/admin/news");
    router.refresh();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <label className="mb-2 block font-medium">
          Judul
        </label>

        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Slug
        </label>

        <input
          name="slug"
          value={form.slug}
          onChange={handleChange}
          className="w-full rounded-xl border p-3"
          placeholder="contoh-judul-berita"
        />
      </div>

      <ImageUploader
        label="Upload Gambar"
        value={imageFile || form.image}
        onChange={setImageFile}
      />

      <div>
        <label className="mb-2 block font-medium">
          Ringkasan
        </label>

        <textarea
          name="excerpt"
          value={form.excerpt}
          onChange={handleChange}
          rows={3}
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Isi Berita
        </label>

        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          rows={8}
          className="w-full rounded-xl border p-3"
        />
      </div>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="published"
          checked={form.published}
          onChange={handleChange}
        />
        <span>Publish berita</span>
      </label>

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-sky-600 px-6 py-3 text-white hover:bg-sky-700 disabled:opacity-50"
      >
        {loading
          ? "Menyimpan..."
          : isEdit
          ? "Update Berita"
          : "Simpan Berita"}
      </button>
    </form>
  );
}