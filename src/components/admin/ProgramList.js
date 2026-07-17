"use client";

import { useMemo, useState } from "react";

import SearchInput from "@/components/ui/SearchInput";
import ProgramCard from "./ProgramCard";

export default function ProgramList({
  programs = [],
}) {
  const [search, setSearch] = useState("");

  const filteredPrograms = useMemo(() => {
    const keyword = search.toLowerCase().trim();

    if (!keyword) return programs;

    return programs.filter((program) => {
      return (
        program.name?.toLowerCase().includes(keyword) ||
        program.description?.toLowerCase().includes(keyword)
      );
    });
  }, [programs, search]);

  return (
    <div className="space-y-6">

      <SearchInput
        value={search}
        onChange={setSearch}
        placeholder="Cari program..."
      />

      {filteredPrograms.length === 0 ? (
        <p className="text-center text-slate-500">
          Program tidak ditemukan.
        </p>
      ) : (
        <div className="space-y-4">
          {filteredPrograms.map((program) => (
            <ProgramCard
              key={program.id}
              program={program}
            />
          ))}
        </div>
      )}

    </div>
  );
}