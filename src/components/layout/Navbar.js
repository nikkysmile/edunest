import Link from "next/link";
import navigation from "@/config/navigation";
import site from "@/config/site";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-2xl font-bold text-sky-600">
          {site.name}
        </Link>

        <nav className="hidden gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-sky-600"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}