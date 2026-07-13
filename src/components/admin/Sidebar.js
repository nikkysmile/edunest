"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  { name: "Dashboard", href: "/admin/dashboard", icon: "📊" },
  { name: "Program", href: "/admin/program", icon: "📚" },
  { name: "Guru", href: "/admin/guru", icon: "👩‍🏫" },
  { name: "Galeri", href: "/admin/galeri", icon: "🖼️" },
  { name: "Berita", href: "/admin/berita", icon: "📰" },
  { name: "Pengaturan", href: "/admin/pengaturan", icon: "⚙️" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-white">
      <div className="border-b p-6">
        <h2 className="text-2xl font-bold text-sky-600">
          EduNest CMS
        </h2>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menus.map((menu) => (
          <Link
            key={menu.href}
            href={menu.href}
            className={`flex items-center gap-3 rounded-lg px-4 py-3 transition ${
              pathname === menu.href
                ? "bg-sky-600 text-white"
                : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            <span>{menu.icon}</span>
            <span>{menu.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}