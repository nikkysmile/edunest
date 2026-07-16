import Link from "next/link";

import DeleteGalleryButton from "./DeleteGalleryButton";

export default function GalleryCard({ gallery }) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">

      <img
        src={gallery.image}
        alt={gallery.title}
        className="h-48 w-full rounded-lg object-cover"
      />

      <h3 className="mt-4 text-lg font-semibold">
        {gallery.title}
      </h3>

      {gallery.description && (
        <p className="mt-2 text-sm text-slate-600">
          {gallery.description}
        </p>
      )}

      <div className="mt-4 flex gap-2">

        <Link
          href={`/admin/gallery/${gallery.id}`}
          className="rounded-lg bg-sky-600 px-4 py-2 text-white hover:bg-sky-700"
        >
          Edit
        </Link>

        <DeleteGalleryButton id={gallery.id} />

      </div>

    </div>
  );
}