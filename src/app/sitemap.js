import { getPublishedNews } from "@/services/newsService";

const SITE_URL = "https://edunest.vercel.app";

export default async function sitemap() {
  const { data: news } = await getPublishedNews();

  const newsRoutes =
    news?.map((item) => ({
      url: `${SITE_URL}/news/${item.slug}`,
      lastModified: item.updated_at || item.created_at,
    })) ?? [];

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/program`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/teacher`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/gallery`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/news`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
    },
    ...newsRoutes,
  ];
}