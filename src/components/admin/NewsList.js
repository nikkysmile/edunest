"use client";

import { useMemo, useState } from "react";

import SearchInput from "@/components/ui/SearchInput";
import NewsCard from "@/components/cards/NewsCard";
import useSearch from "@/hooks/useSearch";

export default function NewsList({
  news = [],
}) {

  const {
  search,
  setSearch,
  filteredData,
} = useSearch(news, [
  "title",
  "slug",
  "description",
]);

  return (
    <div className="space-y-6">

      <SearchInput
        value={search}
        onChange={setSearch}
        placeholder="Cari berita..."
      />

      {filteredData.length === 0 ? (
        <p className="text-center text-slate-500">
          Berita tidak ditemukan.
        </p>
      ) : (
        filteredData.map((item) => (
          <NewsCard
            key={item.id}
            news={item}
          />
        ))
      )}

    </div>
  );
}