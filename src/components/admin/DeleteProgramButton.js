"use client";

import { useRouter } from "next/navigation";
import { deleteProgram } from "@/services/programService";
import { swal } from "@/lib/swal";

export default function DeleteProgramButton({ id }) {
  const router = useRouter();

  async function handleDelete() {
    const result = await swal.fire({
  title: "Hapus Program?",
  text: "Data yang dihapus tidak dapat dikembalikan.",
  icon: "warning",

  showCancelButton: true,

  confirmButtonText: "Ya, Hapus",

  cancelButtonText: "Batal",
});

if (!result.isConfirmed) return;

    const { error } = await deleteProgram(id);

    if (error) {
      console.error(error);
      await swal.fire({
  icon: "error",
  title: "Gagal",
  text: "Program gagal dihapus.",
});
      return;
    }

    await swal.fire({
  icon: "success",
  title: "Berhasil",
  text: "Program berhasil dihapus.",
  timer: 1800,
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