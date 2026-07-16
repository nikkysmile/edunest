import GalleryForm from "@/components/forms/GalleryForm";

export default function NewGalleryPage() {
  return (
    <div className="mx-auto max-w-3xl">

      <h1 className="mb-8 text-3xl font-bold">
        Tambah Galeri
      </h1>

      <GalleryForm />

    </div>
  );
}