"use client";

import Link from "next/link";

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
}) {
  if (totalPages <= 1) return null;

  const pages = Array.from(
    { length: totalPages },
    (_, i) => i + 1
  );

  return (
    <div className="mt-8 flex items-center justify-center gap-2">

      <Link
        href={`${basePath}?page=${currentPage - 1}`}
        className={`rounded-lg border px-4 py-2 ${
          currentPage === 1
            ? "pointer-events-none opacity-50"
            : ""
        }`}
      >
        ← Prev
      </Link>

      {pages.map((page) => (
        <Link
          key={page}
          href={`${basePath}?page=${page}`}
          className={`rounded-lg px-4 py-2 ${
            page === currentPage
              ? "bg-sky-600 text-white"
              : "border"
          }`}
        >
          {page}
        </Link>
      ))}

      <Link
        href={`${basePath}?page=${currentPage + 1}`}
        className={`rounded-lg border px-4 py-2 ${
          currentPage === totalPages
            ? "pointer-events-none opacity-50"
            : ""
        }`}
      >
        Next →
      </Link>

    </div>
  );
}