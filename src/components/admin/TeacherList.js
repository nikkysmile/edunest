"use client";

import { useMemo, useState } from "react";

import SearchInput from "@/components/ui/SearchInput";
import TeacherCard from "./TeacherCard";

export default function TeacherList({
  teachers = [],
}) {
  const [search, setSearch] = useState("");

  const filteredTeachers = useMemo(() => {
    const keyword = search.toLowerCase().trim();

    if (!keyword) return teachers;

    return teachers.filter((teacher) => {
      return (
        teacher.name?.toLowerCase().includes(keyword) ||
        teacher.position?.toLowerCase().includes(keyword) 
      );
    });
  }, [teachers, search]);

  return (
    <div className="space-y-6">

      <SearchInput
        value={search}
        onChange={setSearch}
        placeholder="Cari guru..."
      />

      {filteredTeachers.length === 0 ? (
        <p className="text-center text-slate-500">
          Guru tidak ditemukan.
        </p>
      ) : (
        <div className="space-y-4">
          {filteredTeachers.map((teacher) => (
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