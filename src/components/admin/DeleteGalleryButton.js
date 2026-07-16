"use client";

import { useRouter } from "next/navigation";

import { swal } from "@/lib/swal";
import { deleteGallery } from "@/services/galleryService";

export default function DeleteGalleryButton({ id }) {
  const router = useRouter();

  async function handleDelete() {
    const result = await swal.fire({
      title: "Hapus Galeri?",
      text: "Data galeri akan dihapus permanen.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, Hapus",
      cancelButtonText: "Batal",
    });

    if (!result.isConfirmed) return;

    const { error } = await deleteGallery(id);

    if (error) {
      await swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Galeri gagal dihapus.",
      });

      return;
    }

    await swal.fire({
      icon: "success",
      title: "Berhasil",
      text: "Galeri berhasil dihapus.",
      timer: 1500,
      showConfirmButton: false,
    });

    router.refresh();
  }

  return (
    <button
      onClick={handleDelete}
      className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
    >
      Hapus
    </button>
  );
}