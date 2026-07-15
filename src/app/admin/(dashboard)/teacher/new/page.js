import TeacherForm from "@/components/forms/TeacherForm";

export default function NewTeacherPage() {
  return (
    <div className="mx-auto max-w-3xl">

      <h1 className="mb-8 text-3xl font-bold">
        Tambah Guru
      </h1>

      <TeacherForm />

    </div>
  );
}