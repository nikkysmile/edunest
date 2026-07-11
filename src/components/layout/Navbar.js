export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-sky-600">
          EduNest CMS
        </h1>

        <ul className="hidden gap-8 font-medium md:flex">
          <li><a href="#">Beranda</a></li>
          <li><a href="#">Tentang</a></li>
          <li><a href="#">Program</a></li>
          <li><a href="#">Guru</a></li>
          <li><a href="#">Kontak</a></li>
        </ul>
      </nav>
    </header>
  );
}