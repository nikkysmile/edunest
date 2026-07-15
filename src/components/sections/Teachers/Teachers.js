import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import EmptyState from "@/components/ui/EmptyState";

import TeacherCard from "./TeacherCard";

export default function Teachers({ teachers = [] }) {
  if (teachers.length === 0) {
    return (
      <EmptyState
        title="Belum ada guru"
        description="Guru akan muncul setelah ditambahkan."
      />
    );
  }

  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          title="Guru Kami"
          subtitle="Kami memiliki tim guru yang berpengalaman dan berdedikasi."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
  {teachers.map((teacher) => (
    <TeacherCard
      key={teacher.id}
      teacher={teacher}
    />
  ))}
</div>
      </Container>
    </section>
  );
}