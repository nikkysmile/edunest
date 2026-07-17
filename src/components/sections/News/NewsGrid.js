import NewsItem from "./NewsItem";

export default function NewsGrid({
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
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {news.map((item) => (
        <NewsItem
          key={item.id}
          news={item}
        />
      ))}
    </div>
  );
}