import NewsForm from "@/components/forms/NewsForm";

import {
  getNewsById,
} from "@/services/newsService";

export default async function EditNewsPage({
  params,
}) {
  const { id } = await params;

  const { data: news, error } =
    await getNewsById(id);

  if (error || !news) {
    return (
      <p className="text-red-500">
        Berita tidak ditemukan.
      </p>
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-8 text-3xl font-bold">
        Edit Berita
      </h1>

      <NewsForm
        initialData={news}
        isEdit
      />
    </div>
  );
}