export default function Hero() {
  return (
    <section className="bg-sky-50">
      <div className="mx-auto flex min-h-[80vh] max-w-7xl items-center px-6">
        <div>
          <h1 className="mb-6 text-5xl font-bold">
            Selamat Datang di
            <span className="text-sky-600">
              {" "}EduNest CMS
            </span>
          </h1>

          <p className="mb-8 max-w-xl text-lg text-gray-600">
            Template website modern untuk PAUD, TK,
            SD, SMP, SMA, dan lembaga pendidikan.
          </p>

          <button className="rounded-lg bg-sky-600 px-6 py-3 text-white transition hover:bg-sky-700">
            Mulai Sekarang
          </button>
        </div>
      </div>
    </section>
  );
}