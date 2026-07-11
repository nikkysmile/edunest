import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-2xl font-bold text-sky-600">
          EduNest
        </h1>

        <nav className="hidden gap-8 md:flex">
          <Link href="/">Beranda</Link>
          <Link href="/tentang">Tentang</Link>
          <Link href="/program">Program</Link>
          <Link href="/guru">Guru</Link>
          <Link href="/galeri">Galeri</Link>
          <Link href="/kontak">Kontak</Link>
        </nav>
      </div>
    </header>
  );
}