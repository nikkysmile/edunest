import Link from "next/link";

import NewsList from "@/components/admin/NewsList";
import { getNews } from "@/services/newsService";
import Pagination from "@/components/ui/Pagination";


export default async function NewsPage({
  searchParams,
}) {
  const params = await searchParams;

  const page =
    Number(params?.page) || 1;

  const limit = 10;

  const {
    data: news,
    count,
    error,
  } = await getNews(page, limit);

  const totalPages = Math.ceil(
    (count ?? 0) / limit
  );

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

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        basePath="/admin/news"
      />

    </div>
  );
}