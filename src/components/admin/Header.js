export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-8">
      <h1 className="text-xl font-semibold text-slate-800">
        Dashboard Admin
      </h1>

      <div className="rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700">
        Admin
      </div>
    </header>
  );
}