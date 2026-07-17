import PageHeader from "@/components/ui/PageHeader";
import ContactForm from "@/components/forms/ContactForm";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Kontak"
        subtitle="Hubungi kami."
      />

      <section className="mx-auto max-w-4xl px-6 py-20">

        <p className="mb-10 text-center text-slate-600">
          Silakan kirim pertanyaan, saran, atau informasi yang ingin Anda
          sampaikan kepada EduNest.
        </p>

        <ContactForm />

      </section>
    </>
  );
}