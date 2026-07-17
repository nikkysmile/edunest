import Link from "next/link";

import AppImage from "@/components/ui/AppImage";

export default function NewsItem({ news }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow transition hover:shadow-lg">

      <AppImage
        src={news.image}
        alt={news.title}
        width={600}
        height={400}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">

        <h3 className="text-xl font-bold text-slate-900">
          {news.title}
        </h3>

        {news.excerpt && (
          <p className="mt-3 line-clamp-3 text-slate-600">
            {news.excerpt}
          </p>
        )}

        <Link
          href={`/news/${news.slug}`}
          className="mt-5 inline-flex font-semibold text-sky-600 hover:text-sky-700"
        >
          Baca Selengkapnya →
        </Link>

      </div>
    </article>
  );
}