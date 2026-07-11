import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

import programs from "@/data/programs";

export default function Programs() {
  return (
    <section className="bg-white py-24">
      <Container>

        <SectionTitle
          title="Program Unggulan"
          subtitle="Kami menghadirkan pengalaman belajar yang menyenangkan."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {programs.map((program) => (
            <Card key={program.id}>

              <div className="mb-6 text-5xl">
                {program.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {program.title}
              </h3>

              <p className="mt-4 text-slate-600">
                {program.description}
              </p>

            </Card>
          ))}

        </div>

      </Container>
    </section>
  );
}