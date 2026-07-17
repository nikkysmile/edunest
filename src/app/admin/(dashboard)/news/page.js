import Link from "next/link";
import { redirect } from "next/navigation";
import NewsList from "@/components/admin/NewsList";
import { getNews } from "@/services/newsService";
import Pagination from "@/components/ui/Pagination";
import EmptyState from "@/components/ui/EmptyState";


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

  if ((count ?? 0) > 0 && page > totalPages) {
  redirect(`/admin/news?page=${totalPages}`);
}

  if (error) {
    return (
      <p className="text-red-500">
        Gagal mengambil data berita.
      </p>
    );
  }

  if ((count ?? 0) === 0) {
  return (
   <EmptyState
  title="Belum ada berita"
  description="Silakan tambahkan berita pertama."
  actionLabel="Tambah Berita"
  actionHref="/admin/news/new"
/>
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