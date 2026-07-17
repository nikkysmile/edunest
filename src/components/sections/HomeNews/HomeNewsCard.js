import Link from "next/link";

import AppImage from "@/components/ui/AppImage";

export default function HomeNewsCard({ news }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow transition hover:-translate-y-1 hover:shadow-lg">

      <AppImage
        src={news.image}
        alt={news.title}
        width={500}
        height={320}
        className="h-52 w-full object-cover"
      />

      <div className="p-6">

        <h3 className="line-clamp-2 text-xl font-bold">
          {news.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-slate-600">
          {news.excerpt}
        </p>

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