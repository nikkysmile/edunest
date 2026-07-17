import { notFound } from "next/navigation";

import Container from "@/components/ui/Container";
import NewsDetail from "@/components/sections/News/NewsDetail";

import {
  getNewsBySlug,
} from "@/services/newsService";

export async function generateMetadata({
  params,
}) {
  const { slug } = await params;

  const {
    data: news,
  } = await getNewsBySlug(slug);

  if (!news) {
    return {
      title: "Berita Tidak Ditemukan",
    };
  }

  return {
    title: news.title,
    description: news.excerpt,
    openGraph: {
      title: news.title,
      description: news.excerpt,
      images: [news.image],
    },
  };
}

export default async function NewsDetailPage({
  params,
}) {
  const { slug } = await params;

  const {
    data: news,
    error,
  } = await getNewsBySlug(slug);

  if (error || !news) {
    notFound();
  }

  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <NewsDetail news={news} />
      </Container>
    </section>
  );
}