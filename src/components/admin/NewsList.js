import NewsCard from "@/components/cards/NewsCard";

export default function NewsList({
  news = [],
}) {
  if (news.length === 0) {
    return (
      <p className="text-center text-slate-500">
        Belum ada berita.
      </p>
    );
  }

  return (
    <div className="space-y-6">
      {news.map((item) => (
        <NewsCard
          key={item.id}
          news={item}
        />
      ))}
    </div>
  );
}