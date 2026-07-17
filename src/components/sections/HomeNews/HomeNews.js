import Link from "next/link";

import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";

import HomeNewsCard from "./HomeNewsCard";

import { getLatestNews } from "@/services/newsService";

export default async function HomeNews() {
  const {
    data: news,
  } = await getLatestNews();

  if (!news?.length) return null;

  return (
    <section className="bg-slate-50 py-20">
      <Container>

        <PageHeader
          title="Berita Terbaru"
          description="Ikuti informasi terbaru dari EduNest."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <HomeNewsCard
              key={item.id}
              news={item}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/news"
            className="rounded-xl bg-sky-600 px-6 py-3 text-white hover:bg-sky-700"
          >
            Lihat Semua Berita
          </Link>
        </div>

      </Container>
    </section>
  );
}