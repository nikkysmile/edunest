import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";

export default function CTA() {
  return (
    <>
      <PageHeader
        title="CTA"
        description="Mengenal lebih dekat EduNest."
      />

      <Container>
        <section className="py-20">
          <p>
            EduNest adalah platform website modern
            untuk sekolah yang cepat, aman,
            dan mudah dikelola.
          </p>
        </section>
      </Container>
    </>
  );
}