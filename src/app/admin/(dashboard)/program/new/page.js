import PageHeader from "@/components/ui/PageHeader";
import ProgramForm from "@/components/forms/ProgramForm";

export default function NewProgramPage() {
  return (
    <>
      <PageHeader
        title="Tambah Program"
        subtitle="Tambahkan program baru."
      />

      <ProgramForm />
    </>
  );
}