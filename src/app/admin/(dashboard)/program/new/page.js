import ProgramForm from "@/components/forms/ProgramForm";

export default function NewProgramPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-8 text-3xl font-bold">
        Tambah Program
      </h1>

      <ProgramForm />
    </div>
  );
}