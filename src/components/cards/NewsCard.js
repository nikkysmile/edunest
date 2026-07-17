"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { swal } from "@/lib/swal";

import { deleteNews } from "@/services/newsService";

export default function NewsCard({ news }) {
  const router = useRouter();

  async function handleDelete() {
    const result = await swal.fire({
      icon: "warning",
      title: "Hapus berita?",
      text: "Data tidak dapat dikembalikan.",
      showCancelButton: true,
      confirmButtonText: "Ya",
      cancelButtonText: "Batal",
    });

    if (!result.isConfirmed) return;

    const { error } = await deleteNews(news.id);

    if (error) {
      await swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Berita gagal dihapus.",
      });

      return;
    }

    await swal.fire({
      icon: "success",
      title: "Berhasil",
      text: "Berita berhasil dihapus.",
      timer: 1500,
      showConfirmButton: false,
    });

    router.refresh();
  }

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">

      <div className="flex items-start justify-between gap-4">

        <div className="flex-1">

          <h3 className="text-lg font-semibold">
            {news.title}
          </h3>

          {news.excerpt && (
            <p className="mt-2 line-clamp-3 text-sm text-slate-600">
              {news.excerpt}
            </p>
          )}

          <div className="mt-3">
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                news.published
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {news.published ? "Published" : "Draft"}
            </span>
          </div>

        </div>

        <div className="flex gap-2">

          <Link
            href={`/admin/news/${news.id}`}
            className="rounded-lg bg-sky-600 px-4 py-2 text-white hover:bg-sky-700"
          >
            Edit
          </Link>

          <button
            onClick={handleDelete}
            className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}