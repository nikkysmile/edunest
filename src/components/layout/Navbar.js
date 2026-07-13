import Link from "next/link";
import navigation from "@/config/navigation";
import site from "@/config/site";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-sky-600"
        >
          {site.name}
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-medium text-slate-700 transition-colors duration-200 hover:text-sky-600"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}