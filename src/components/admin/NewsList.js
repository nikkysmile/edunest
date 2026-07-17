"use client";

import { useMemo, useState } from "react";

import SearchInput from "@/components/ui/SearchInput";
import NewsCard from "@/components/cards/NewsCard";

export default function NewsList({
  news = [],
}) {
  const [search, setSearch] = useState("");

  const filteredNews = useMemo(() => {
    const keyword = search.toLowerCase().trim();

    if (!keyword) return news;

    return news.filter((item) => {
      return (
        item.title?.toLowerCase().includes(keyword) ||
        item.slug?.toLowerCase().includes(keyword) ||
        item.description?.toLowerCase().includes(keyword)
      );
    });
  }, [news, search]);

  return (
    <div className="space-y-6">

      <SearchInput
        value={search}
        onChange={setSearch}
        placeholder="Cari berita..."
      />

      {filteredNews.length === 0 ? (
        <p className="text-center text-slate-500">
          Berita tidak ditemukan.
        </p>
      ) : (
        filteredNews.map((item) => (
          <NewsCard
            key={item.id}
            news={item}
          />
        ))
      )}

    </div>
  );
}