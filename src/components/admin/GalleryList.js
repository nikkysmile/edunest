"use client";

import { useMemo, useState } from "react";

import SearchInput from "@/components/ui/SearchInput";
import GalleryCard from "./GalleryCard";
import useSearch from "@/hooks/useSearch";

export default function GalleryList({
  galleries = [],
}) {
  const {
  search,
  setSearch,
  filteredData,
} = useSearch(galleries, [
  "title",
  "description",
]);

  return (
    <div className="space-y-6">

      <SearchInput
        value={search}
        onChange={setSearch}
        placeholder="Cari galeri..."
      />

      {filteredData.length === 0 ? (
        <p className="text-center text-slate-500">
          Galeri tidak ditemukan.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredData.map((gallery) => (
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