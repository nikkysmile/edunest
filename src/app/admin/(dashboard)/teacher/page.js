import Link from "next/link";

import { getTeachers } from "@/services/teacherService";

import {
  PageHeader,
  TeacherList,
} from "@/components/admin";

export default async function TeacherPage() {
  const { data: teachers, error } =
    await getTeachers();

  if (error) {
    return (
      <p className="text-red-500">
        Gagal mengambil data guru.
      </p>
    );
  }

  return (
    <div className="space-y-6">

      <PageHeader
        title="Guru"
        buttonLabel="Tambah Guru"
        buttonHref="/admin/teacher/new"
      />

      {teachers.length === 0 ? (

        <p>Belum ada guru.</p>

      ) : (

        <TeacherList teachers={teachers} />

      )}

    </div>
  );
}