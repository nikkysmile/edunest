"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { swal } from "@/lib/swal";

import {
  createGallery,
  updateGallery,
} from "@/services/galleryService";

import {
  uploadImage,
} from "@/services/storageService";

import ImageUploader from "@/components/ui/ImageUploader";

export default function GalleryForm({
  initialData,
  isEdit = false,
}) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [imageFile, setImageFile] = useState(null);

  const [form, setForm] = useState({
    title: initialData?.title ?? "",
    image: initialData?.image ?? "",
    description: initialData?.description ?? "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
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
      } = await uploadImage(
        imageFile,
        "gallery"
      );

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
      ({ error } = await updateGallery(
        initialData.id,
        payload
      ));
    } else {
      ({ error } = await createGallery(
        payload
      ));
    }

    if (error) {
      setLoading(false);

      await swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Galeri gagal disimpan.",
      });

      return;
    }

    await swal.fire({
      icon: "success",
      title: "Berhasil",
      text: isEdit
        ? "Galeri berhasil diperbarui."
        : "Galeri berhasil ditambahkan.",
      timer: 1500,
      showConfirmButton: false,
    });

    router.push("/admin/gallery");
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

     <ImageUploader
  label="Upload Gambar"
  value={imageFile || form.image}
  onChange={setImageFile}
/>

      <div>
        <label className="mb-2 block font-medium">
          Deskripsi
        </label>

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          rows={5}
          className="w-full rounded-xl border p-3"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-sky-600 px-6 py-3 text-white hover:bg-sky-700 disabled:opacity-50"
      >
        {loading
          ? "Menyimpan..."
          : isEdit
          ? "Update Galeri"
          : "Simpan Galeri"}
      </button>
    </form>
  );
}