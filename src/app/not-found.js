import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <h1 className="text-7xl font-bold text-sky-600">
        404
      </h1>

      <p className="mt-4 text-xl text-slate-600">
        Halaman tidak ditemukan.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-xl bg-sky-600 px-6 py-3 text-white"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}