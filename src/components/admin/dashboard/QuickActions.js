import Link from "next/link";

const actions = [
  {
    title: "Tambah Program",
    href: "/admin/program/new",
    color: "bg-sky-500",
  },
  {
    title: "Tambah Guru",
    href: "/admin/teacher/new",
    color: "bg-emerald-500",
  },
  {
    title: "Tambah Galeri",
    href: "/admin/gallery/new",
    color: "bg-amber-500",
  },
  {
    title: "Tambah Berita",
    href: "/admin/news/new",
    color: "bg-violet-500",
  },
  {
    title: "Lihat Pesan",
    href: "/admin/messages",
    color: "bg-rose-500",
  },
];

export default function QuickActions() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold">
        ⚡ Aksi Cepat
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {actions.map((action) => (
          <Link
            key={action.title}
            href={action.href}
            className={`${action.color} rounded-xl p-4 text-white transition hover:scale-105`}
          >
            <p className="font-semibold">
              {action.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}