import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="bg-sky-50 py-24">
      <Container>

        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>

            <p className="font-semibold text-sky-600">
              EduNest CMS
            </p>

            <h1 className="mt-4 text-5xl font-bold leading-tight">

              Website Modern

              <br />

              untuk Sekolah

            </h1>

            <p className="mt-6 text-lg text-gray-600">

              Solusi website profesional
              untuk PAUD, TK, SD,
              SMP, SMA hingga lembaga pendidikan.

            </p>

            <div className="mt-8 flex gap-4">

              <button className="rounded-lg bg-sky-600 px-6 py-3 text-white">

                Daftar Sekarang

              </button>

              <button className="rounded-lg border px-6 py-3">

                Lihat Demo

              </button>

            </div>

          </div>

          <div className="flex justify-center">

            <div className="flex h-80 w-80 items-center justify-center rounded-3xl bg-white shadow-xl">

              Ilustrasi

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}