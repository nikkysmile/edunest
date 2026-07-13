import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";

export default function TentangPage() {
  return (
    <>
      <PageHeader
        title="Tentang Kami"
        subtitle="Mengenal lebih dekat EduNest."
      />

      <section className="bg-white py-20">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                EduNest CMS
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                EduNest adalah platform website sekolah modern yang
                membantu lembaga pendidikan memiliki website profesional
                yang mudah dikelola.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-200 p-24 text-center">
              Gambar Sekolah
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}