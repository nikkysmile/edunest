"use client";

import { useMemo, useState } from "react";

import SearchInput from "@/components/ui/SearchInput";

export default function MessageList({
  messages = [],
}) {
  const [search, setSearch] = useState("");

  const filteredMessages = useMemo(() => {
    const keyword = search.toLowerCase().trim();

    if (!keyword) return messages;

    return messages.filter((message) =>
      message.name?.toLowerCase().includes(keyword) ||
      message.email?.toLowerCase().includes(keyword) ||
      message.subject?.toLowerCase().includes(keyword) ||
      message.message?.toLowerCase().includes(keyword)
    );
  }, [messages, search]);

  return (
    <div className="space-y-6">

      <SearchInput
        value={search}
        onChange={setSearch}
        placeholder="Cari pesan..."
      />

      <div className="space-y-4">

        {filteredMessages.length === 0 ? (
          <p className="text-center text-slate-500">
            Pesan tidak ditemukan.
          </p>
        ) : (
          filteredMessages.map((message) => (
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