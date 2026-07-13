import Container from "./Container";

export default function PageHeader({ title, subtitle }) {
  return (
    <section className="bg-sky-50py-20">
      <Container>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}