import GalleryCard from "./GalleryCard";

export default function GalleryList({
  galleries,
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {galleries.map((gallery) => (
        <GalleryCard
          key={gallery.id}
          gallery={gallery}
        />
      ))}
    </div>
  );
}