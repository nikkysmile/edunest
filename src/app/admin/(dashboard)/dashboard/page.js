const stats = [
  {
    title: "Program",
    value: 6,
    color: "bg-sky-500",
  },
  {
    title: "Guru",
    value: 12,
    color: "bg-emerald-500",
  },
  {
    title: "Galeri",
    value: 48,
    color: "bg-amber-500",
  },
  {
    title: "Berita",
    value: 8,
    color: "bg-violet-500",
  },
];

export default function DashboardPage() {
  return (
    <>
      <h1 className="mb-8 text-3xl font-bold text-slate-900">
        Dashboard
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl bg-white p-6 shadow-sm"
          >
            <div
              className={`mb-4 h-3 w-16 rounded-full ${item.color}`}
            />

            <h2 className="text-slate-500">
              {item.title}
            </h2>

            <p className="mt-2 text-4xl font-bold text-slate-900">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}