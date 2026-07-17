"use client";

import { useMemo, useState } from "react";

import SearchInput from "@/components/ui/SearchInput";
import TeacherCard from "./TeacherCard";
import useSearch from "@/hooks/useSearch";

export default function TeacherList({
  teachers = [],
}) {
  const {
  search,
  setSearch,
  filteredData,
} = useSearch(teachers, [
  "name",
  "position",
]);

  return (
    <div className="space-y-6">

      <SearchInput
        value={search}
        onChange={setSearch}
        placeholder="Cari guru..."
      />

      {filteredData.length === 0 ? (
        <p className="text-center text-slate-500">
          Guru tidak ditemukan.
        </p>
      ) : (
        <div className="space-y-4">
          {filteredData.map((teacher) => (
            <TeacherCard
              key={teacher.id}
              teacher={teacher}
            />
          ))}
        </div>
      )}

    </div>
  );
}