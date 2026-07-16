import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import AppImage from "@/components/ui/AppImage";

export default function Gallery({
  galleries = [],
}) {
  return (
    <section className="bg-slate-50 py-20">
      <Container>

        <PageHeader
          title="Gallery"
          description="Mengenal lebih dekat EduNest."
        />

        {galleries.length === 0 ? (
          <p className="mt-10 text-center text-slate-500">
            Belum ada foto galeri.
          </p>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleries.map((gallery) => (
              <div
                key={gallery.id}
                className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl"
              >
                {console.log(gallery.image)}
                <AppImage
                  src={gallery.image}
                  alt={gallery.title}
                  width={600}
                  height={400}
                  className="h-64 w-full object-cover"
                />

                <div className="p-5">
                  <h3 className="text-lg font-semibold">
                    {gallery.title}
                  </h3>

                  {gallery.description && (
                    <p className="mt-2 text-sm text-slate-600">
                      {gallery.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

      </Container>
    </section>
  );
}