import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import EmptyState from "@/components/ui/EmptyState";

import ProgramCard from "./ProgramCard";

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
          {programs.map((program) => (
            <ProgramCard
              key={program.id}
              program={program}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}