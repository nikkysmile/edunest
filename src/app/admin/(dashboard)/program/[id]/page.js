import ProgramForm from "@/components/forms/ProgramForm";

import {
  getProgramById,
} from "@/services/programService";

export default async function EditProgramPage({ params }) {
  const { id } = await params;

  const { data: program, error } =
    await getProgramById(id);


  if (error) {
    return (
      <p className="text-red-500">
        Program tidak ditemukan.
      </p>
    );
  }

  return (
    <div className="mx-auto max-w-3xl">

      <h1 className="mb-8 text-3xl font-bold">
        Edit Program
      </h1>

      <ProgramForm
        initialData={program}
        isEdit
      />

    </div>
  );
}