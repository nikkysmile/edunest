import NewsForm from "@/components/forms/NewsForm";

export default function NewNewsPage() {
  return (
    <div className="mx-auto max-w-3xl">

      <h1 className="mb-8 text-3xl font-bold">
        Tambah Berita
      </h1>

      <NewsForm />

    </div>
  );
}