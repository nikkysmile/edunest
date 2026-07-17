import Link from "next/link";

import NewsList from "@/components/admin/NewsList";
import { getNews } from "@/services/newsService";

export default async function NewsPage() {
  const { data: news, error } = await getNews();

  if (error) {
    return (
      <p className="text-red-500">
        Gagal mengambil data berita.
      </p>
    );
  }

  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between">

        <h1 className="text-3xl font-bold">
          News
        </h1>

        <Link
          href="/admin/news/new"
          className="rounded-xl bg-sky-600 px-5 py-3 text-white hover:bg-sky-700"
        >
          + Tambah Berita
        </Link>

      </div>

      <NewsList news={news} />

    </div>
  );
}