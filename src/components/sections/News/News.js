import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";

export default function News() {
  return (
    <section className="bg-sky-50 py-20">
      <Container>
        <PageHeader
           title="Berita"
           description="Mengenal lebih dekat EduNest."
        />                
        </Container>
    </section>
  );
}