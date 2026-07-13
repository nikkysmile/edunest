import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import EmptyState from "@/components/ui/EmptyState";
import { iconMap } from "@/constants/icons";

export default function Programs({ programs = [] }) {
  if (programs.length === 0) {
    return (
      <EmptyState
        title="Belum ada program"
        description="Program akan muncul setelah ditambahkan."
      />
    );
  }

  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          title="Program Unggulan"
          subtitle="Kami menghadirkan pengalaman belajar yang menyenangkan."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
         {programs.map((program) => {
  const Icon = iconMap[program.icon];

  return (
    <Card key={program.id}>
      <div className="mb-6">
        {Icon && (
          <Icon
            size={48}
            className="text-sky-600"
          />
        )}
      </div>

      <h3 className="text-2xl font-bold">
        {program.title}
      </h3>

      <p className="mt-4 text-slate-600">
        {program.description}
      </p>
    </Card>
  );
 })}
        </div>
      </Container>
    </section>
  );
}