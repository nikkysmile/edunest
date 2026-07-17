import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r bg-slate-900 p-6 text-white">

      <h2 className="mb-8 text-2xl font-bold">
        EduNest
      </h2>

      <nav className="space-y-3">

        <Link
          href="/admin/dashboard"
          className="block rounded-lg px-3 py-2 hover:bg-slate-800"
        >
          Dashboard
        </Link>

        <Link
          href="/admin/program"
          className="block rounded-lg px-3 py-2 hover:bg-slate-800"
        >
          Program
        </Link>

        <Link
          href="/admin/teacher"
          className="block rounded-lg px-3 py-2 hover:bg-slate-800"
        >
          Guru
        </Link>

        <Link
          href="/admin/gallery"
          className="block rounded-lg px-3 py-2 hover:bg-slate-800"
        >
          Galeri
        </Link>

        <Link
          href="/admin/news"
          className="block rounded-lg px-3 py-2 hover:bg-slate-800"
        >
          Berita
        </Link>

        <Link
          href="/admin/messages"
          className="block rounded-lg px-3 py-2 hover:bg-slate-800"
        >
          Pesan
        </Link>

        <Link
          href="/admin/settings"
          className="block rounded-lg px-3 py-2 hover:bg-slate-800"
        >
          Pengaturan
        </Link>

      </nav>
    </aside>
  );
}