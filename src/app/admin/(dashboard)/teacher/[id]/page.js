import TeacherForm from "@/components/forms/TeacherForm";

import {
  getTeacherById,
} from "@/services/teacherService";

export default async function EditTeacherPage({ params }) {
  const { id } = await params;

  const { data: teacher, error } =
    await getTeacherById(id);


  if (error) {
    return (
      <p className="text-red-500">
        Guru tidak ditemukan.
      </p>
    );
  }

  return (
    <div className="mx-auto max-w-3xl">

      <h1 className="mb-8 text-3xl font-bold">
        Edit Guru
      </h1>

      <TeacherForm
        initialData={teacher}
        isEdit
      />

    </div>
  );
}