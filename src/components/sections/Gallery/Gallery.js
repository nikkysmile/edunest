import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";

export default function Gallery() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <PageHeader
           title="Gallery"
           description="Mengenal lebih dekat EduNest."
        />                
        </Container>
    </section>
  );
}