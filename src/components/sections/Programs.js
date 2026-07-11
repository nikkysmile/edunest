import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

import programs from "@/data/programs";

export default function Programs() {
  return (
    <section className="py-24">
      <Container>

        <SectionTitle
          title="Program Unggulan"
          subtitle="Program terbaik yang kami tawarkan."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {programs.map((program) => (

            <Card key={program.id}>

              <h3 className="text-2xl font-semibold">
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