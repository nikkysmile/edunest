import { getPrograms } from "@/services/programService";
import { getTeachers } from "@/services/teacherService";
import { getGalleries } from "@/services/galleryService";
import { getNews } from "@/services/newsService";
import { getMessages } from "@/services/messageService";
import QuickActions from "@/components/admin/dashboard/QuickActions";

export default async function DashboardPage() {

  const [
    { data: programs },
    { data: teachers },
    { data: gallery },
    { data: news },
    { data: messages },
  ] = await Promise.all([
    getPrograms(),
    getTeachers(),
    getGalleries(),
    getNews(),
    getMessages(),
  ]);

  const latestNews = news?.slice(0, 5) ?? [];
  const latestMessages = messages?.slice(0, 5) ?? [];

  const stats = [
    {
      title: "Program",
      value: programs?.length ?? 0,
      color: "bg-sky-500",
    },
    {
      title: "Guru",
      value: teachers?.length ?? 0,
      color: "bg-emerald-500",
    },
    {
      title: "Galeri",
      value: gallery?.length ?? 0,
      color: "bg-amber-500",
    },
    {
      title: "Berita",
      value: news?.length ?? 0,
      color: "bg-violet-500",
    },
    {
      title: "Pesan",
      value: messages?.length ?? 0,
      color: "bg-rose-500",
    },
  ];

  return (
    <>
      <h1 className="mb-8 text-3xl font-bold text-slate-900">
        Dashboard
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
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
<div className="mt-10 grid gap-6 lg:grid-cols-2">

  <div className="rounded-2xl bg-white p-6 shadow-sm">

    <h2 className="mb-5 text-xl font-bold">
      📰 Berita Terbaru
    </h2>

    <div className="space-y-4">

      {latestNews.length === 0 ? (
        <p className="text-slate-500">
          Belum ada berita.
        </p>
      ) : (
        latestNews.map((item) => (
          <div
            key={item.id}
            className="border-b pb-3 last:border-none"
          >
            <h3 className="font-semibold">
              {item.title}
            </h3>

            <p className="text-sm text-slate-500">
              {new Date(item.created_at)
                .toLocaleDateString("id-ID")}
            </p>

          </div>
        ))
      )}

    </div>

  </div>

  <div className="rounded-2xl bg-white p-6 shadow-sm">

    <h2 className="mb-5 text-xl font-bold">
      📩 Pesan Terbaru
    </h2>

    <div className="space-y-4">

      {latestMessages.length === 0 ? (
        <p className="text-slate-500">
          Belum ada pesan.
        </p>
      ) : (
        latestMessages.map((item) => (
          <div
            key={item.id}
            className="border-b pb-3 last:border-none"
          >
            <h3 className="font-semibold">
              {item.name}
            </h3>

            <p className="text-sm text-slate-500">
              {item.subject || "(Tanpa Subjek)"}
            </p>

          </div>
        ))
      )}

    </div>

  </div>

</div>

<div className="mt-8">
  <QuickActions />
</div>
      
    </>

  );
}