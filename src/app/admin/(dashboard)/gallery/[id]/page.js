import GalleryForm from "@/components/forms/GalleryForm";

import {
  getGalleryById,
} from "@/services/galleryService";

export default async function EditGalleryPage({
  params,
}) {
  const { id } = await params;

  const { data: gallery, error } =
    await getGalleryById(id);

  if (error || !gallery) {
    return (
      <p className="text-red-500">
        Galeri tidak ditemukan.
      </p>
    );
  }

  return (
    <div className="mx-auto max-w-3xl">

      <h1 className="mb-8 text-3xl font-bold">
        Edit Galeri
      </h1>

      <GalleryForm
        initialData={gallery}
        isEdit
      />

    </div>
  );
}