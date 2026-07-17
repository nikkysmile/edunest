import AppImage from "@/components/ui/AppImage";

export default function NewsDetail({
  news,
}) {
  return (
    <article className="mx-auto max-w-4xl">

      <AppImage
        src={news.image}
        alt={news.title}
        width={1200}
        height={700}
        className="mb-8 h-[420px] w-full rounded-2xl object-cover"
      />

      <h1 className="text-4xl font-bold text-slate-900">
        {news.title}
      </h1>

      <p className="mt-3 text-sm text-slate-500">
        {new Date(news.created_at).toLocaleDateString(
          "id-ID",
          {
            day: "numeric",
            month: "long",
            year: "numeric",
          }
        )}
      </p>

      {news.excerpt && (
        <p className="mt-6 text-xl text-slate-600">
          {news.excerpt}
        </p>
      )}

      <div className="prose prose-slate mt-10 max-w-none">
        <p className="whitespace-pre-line">
          {news.content}
        </p>
      </div>

    </article>
  );
}