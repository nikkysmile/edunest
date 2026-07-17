"use client";

import { useMemo, useState } from "react";

import SearchInput from "@/components/ui/SearchInput";
import GalleryCard from "./GalleryCard";

export default function GalleryList({
  galleries = [],
}) {
  const [search, setSearch] = useState("");

  const filteredGalleries = useMemo(() => {
    const keyword = search.toLowerCase().trim();

    if (!keyword) return galleries;

    return galleries.filter((gallery) => (
      gallery.title?.toLowerCase().includes(keyword) ||
      gallery.description?.toLowerCase().includes(keyword)
    ));
  }, [galleries, search]);

  return (
    <div className="space-y-6">

      <SearchInput
        value={search}
        onChange={setSearch}
        placeholder="Cari galeri..."
      />

      {filteredGalleries.length === 0 ? (
        <p className="text-center text-slate-500">
          Galeri tidak ditemukan.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredGalleries.map((gallery) => (
            <GalleryCard
              key={gallery.id}
              gallery={gallery}
            />
          ))}
        </div>
      )}

    </div>
  );
}