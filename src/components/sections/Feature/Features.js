import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FeatureCard from "./FeatureCard";

import {
  Palette,
  GraduationCap,
  ShieldCheck,
  Handshake,
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Guru Profesional",
    description: "Guru berpengalaman dan penuh perhatian.",
  },
  {
    icon: Palette,
    title: "Kreatif",
    description: "Banyak aktivitas seni dan permainan edukatif.",
  },
  {
    icon: ShieldCheck,
    title: "Aman",
    description: "Lingkungan yang bersih dan ramah anak.",
  },
  {
    icon: Handshake,
    title: "Kolaboratif",
    description: "Orang tua dilibatkan dalam proses belajar.",
  },
];

export default function Features() {
  return (
    <section className="bg-sky-50 py-24">
      <Container>
        <SectionTitle
          title="Mengapa Memilih Kami?"
          subtitle="Lingkungan belajar yang aman, nyaman, dan menyenangkan."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}