import {
  getGalleries,
} from "@/services/galleryService";

import {
  PageHeader,
  GalleryList,
} from "@/components/admin";

export default async function GalleryPage() {
  const { data: galleries, error } =
    await getGalleries();

  if (error) {
    return (
      <p className="text-red-500">
        Gagal mengambil data galeri.
      </p>
    );
  }

  return (
    <div className="space-y-6">

      <PageHeader
        title="Galeri"
        buttonLabel="Tambah Galeri"
        buttonHref="/admin/gallery/new"
      />

      <GalleryList
        galleries={galleries ?? []}
      />

    </div>
  );
}