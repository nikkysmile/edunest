"use client";

import { useRouter } from "next/navigation";
import { deleteProgram } from "@/services/programService";

export default function DeleteProgramButton({ id }) {
  const router = useRouter();

  async function handleDelete() {
    const confirmed = window.confirm(
      "Yakin ingin menghapus program ini?"
    );

    if (!confirmed) return;

    const { error } = await deleteProgram(id);

    if (error) {
      console.error(error);
      alert("Gagal menghapus program.");
      return;
    }

    alert("Program berhasil dihapus.");

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