"use client";

import { useMemo, useState } from "react";

import SearchInput from "@/components/ui/SearchInput";
import useSearch from "@/hooks/useSearch";

export default function MessageList({
  messages = [],
}) {
  const {
  search,
  setSearch,
  filteredData,
} = useSearch(messages, [
  "name",
  "email",
  "subject",
  "message",
]);

  return (
    <div className="space-y-6">

      <SearchInput
        value={search}
        onChange={setSearch}
        placeholder="Cari pesan..."
      />

      <div className="space-y-4">

        {filteredData.length === 0 ? (
          <p className="text-center text-slate-500">
            Pesan tidak ditemukan.
          </p>
        ) : (
          filteredData.map((message) => (
            <div
              key={message.id}
              className="rounded-xl border bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">

                <div>
                  <h3 className="font-bold">
                    {message.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {message.email}
                  </p>
                </div>

                {!message.is_read && (
                  <span className="rounded-full bg-red-100 px-3 py-1 text-xs text-red-600">
                    Baru
                  </span>
                )}

              </div>

              {message.subject && (
                <h4 className="mt-4 font-semibold">
                  {message.subject}
                </h4>
              )}

              <p className="mt-2 whitespace-pre-line text-slate-600">
                {message.message}
              </p>

            </div>
          ))
        )}

      </div>

    </div>
  );
}