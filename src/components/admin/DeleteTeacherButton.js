"use client";

import { useRouter } from "next/navigation";

import { swal } from "@/lib/swal";
import { deleteTeacher } from "@/services/teacherService";

export default function DeleteTeacherButton({ id }) {
  const router = useRouter();

  async function handleDelete() {
    const result = await swal.fire({
      title: "Hapus Guru?",
      text: "Data guru akan dihapus permanen.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, Hapus",
      cancelButtonText: "Batal",
    });

    if (!result.isConfirmed) return;

    const { error } = await deleteTeacher(id);

    if (error) {
      await swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Guru gagal dihapus.",
      });

      return;
    }

    await swal.fire({
      icon: "success",
      title: "Berhasil",
      text: "Guru berhasil dihapus.",
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