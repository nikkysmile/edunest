import Link from "next/link";

import { getTeachers } from "@/services/teacherService";

import {
  PageHeader,
  TeacherList,
} from "@/components/admin";
import Pagination from "@/components/ui/Pagination";

export default async function TeachersPage({
  searchParams,
}) {
  const params = await searchParams;

  const page =
    Number(params?.page) || 1;

  const limit = 10;

  const {
  data: teachers,
  count,
  error,
} = await getTeachers(page, limit);

const totalPages = Math.ceil(
  (count ?? 0) / limit
);

  if (error) {
    return (
      <p className="text-red-500">
        Gagal mengambil data guru.
      </p>
    );
  }

  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between">

        <h1 className="text-3xl font-bold">
          Guru
        </h1>

        <Link
          href="/admin/teacher/new"
          className="rounded-xl bg-sky-600 px-5 py-3 text-white hover:bg-sky-700"
        >
          + Tambah Guru
        </Link>

      </div>

     <TeacherList teachers={teachers} />

<Pagination
  currentPage={page}
  totalPages={totalPages}
  basePath="/admin/teacher"
/>

    </div>
  );
}