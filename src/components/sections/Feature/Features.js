import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { Palette } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { Handshake } from "lucide-react";

export default function Features() {
  return (
    <section className="bg-sky-50 py-24">
      <Container>

        <SectionTitle
          title="Mengapa Memilih Kami?"
          subtitle="Lingkungan belajar yang aman, nyaman, dan menyenangkan."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div>
            <h3 className="font-bold"><GraduationCap className="mb-6 h-12 w-12 text-sky-600" /> Guru Profesional</h3>
            <p className="mt-2 text-slate-600">
              Guru berpengalaman dan penuh perhatian.
            </p>
          </div>

          <div>
            <h3 className="font-bold"><Palette className="mb-6 h-12 w-12 text-sky-600" /> Kreatif</h3>
            <p className="mt-2 text-slate-600">
              Banyak aktivitas seni dan permainan edukatif.
            </p>
          </div>

          <div>
            <h3 className="font-bold"><ShieldCheck className="mb-6 h-12 w-12 text-sky-600" /> Aman</h3>
            <p className="mt-2 text-slate-600">
              Lingkungan yang bersih dan ramah anak.
            </p>
          </div>

          <div>
            <h3 className="font-bold"><Handshake className="mb-6 h-12 w-12 text-sky-600" /> Kolaboratif</h3>
            <p className="mt-2 text-slate-600">
              Orang tua dilibatkan dalam proses belajar.
            </p>
          </div>

        </div>

      </Container>
    </section>
  );
}