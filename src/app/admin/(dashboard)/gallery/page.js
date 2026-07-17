import {
  getGalleries,
} from "@/services/galleryService";
import { redirect } from "next/navigation";
import {
  PageHeader,
  GalleryList,
} from "@/components/admin";

import Link from "next/link";

import Pagination from "@/components/ui/Pagination";
import EmptyState from "@/components/ui/EmptyState";

export default async function GalleryPage({
  searchParams,
}) {
  const params = await searchParams;

  const page =
    Number(params?.page) || 1;

  const limit = 10;

  const {
    data: galleries,
    count,
    error,
  } = await getGalleries(page, limit);

  const totalPages = Math.ceil(
    (count ?? 0) / limit
  );

  if ((count ?? 0) > 0 && page > totalPages) {
  redirect(`/admin/gallery?page=${totalPages}`);
}

  if (error) {
    return (
      <p className="text-red-500">
        Gagal mengambil data galeri.
      </p>
    );
  }

  if ((count ?? 0) === 0) {
    return (
      <EmptyState
        title="Belum ada galeri"
        description="Silakan tambahkan galeri pertama."
        actionLabel="Tambah Galeri"
        actionHref="/admin/gallery/new"
      />
    );
  }

  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between">

        <h1 className="text-3xl font-bold">
          Galeri
        </h1>

        <Link
          href="/admin/gallery/new"
          className="rounded-xl bg-sky-600 px-5 py-3 text-white hover:bg-sky-700"
        >
          + Tambah Galeri
        </Link>

      </div>

      <GalleryList galleries={galleries} />

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        basePath="/admin/gallery"
      />

    </div>
  );
}