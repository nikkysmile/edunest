"use client";

import { useMemo, useState } from "react";

export default function useSearch(
  items = [],
  fields = []
) {
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    const keyword = search
      .toLowerCase()
      .trim();

    if (!keyword) return items;

    return items.filter((item) =>
      fields.some((field) =>
        item[field]
          ?.toString()
          .toLowerCase()
          .includes(keyword)
      )
    );
  }, [items, fields, search]);

  return {
    search,
    setSearch,
    filteredData,
  };
}