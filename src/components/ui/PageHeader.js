import Container from "./Container";

export default function PageHeader({
  title,
  description,
}) {
  return (
    <section className="bg-sky-50 py-20">
      <Container>

        <h1 className="text-5xl font-bold">
          {title}
        </h1>

        <p className="mt-5 max-w-2xl text-slate-600">
          {description}
        </p>

      </Container>
    </section>
  );
}