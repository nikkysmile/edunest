export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-2xl font-bold text-sky-600">
          EduNest
        </h1>

        <nav className="hidden gap-8 md:flex">
          <a href="#">Beranda</a>
          <a href="#">Tentang</a>
          <a href="#">Program</a>
          <a href="#">Guru</a>
          <a href="#">Kontak</a>
        </nav>
      </div>
    </header>
  );
}