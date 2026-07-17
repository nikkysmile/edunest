import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";

import NewsGrid from "@/components/sections/News/NewsGrid";

import {
  getPublishedNews,
} from "@/services/newsService";

export default async function NewsPage() {
  const {
    data: news,
    error,
  } = await getPublishedNews();

  if (error) {
    return (
      <p className="text-center text-red-500">
        Gagal memuat berita.
      </p>
    );
  }

  return (
    <section className="bg-slate-50 py-20">
      <Container>

        <PageHeader
          title="News"
          description="Berita dan informasi terbaru dari EduNest."
        />

        <NewsGrid news={news} />

      </Container>
    </section>
  );
}