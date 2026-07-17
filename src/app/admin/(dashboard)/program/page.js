import Link from "next/link";
import { redirect } from "next/navigation";

import {
  PageHeader,
  ProgramList,
} from "@/components/admin";
import ErrorState from "@/components/ui/ErrorState";
import EmptyState from "@/components/ui/EmptyState";
import DeleteProgramButton from "@/components/admin/DeleteProgramButton";

import { getPrograms } from "@/services/programService";
import Pagination from "@/components/ui/Pagination";


export default async function ProgramPage({
  searchParams,
}) {
  const params = await searchParams;

  const page =
    Number(params?.page) || 1;

  const limit = 10;

  const {
    data: programs,
    count,
    error,
  } = await getPrograms(page, limit);

  const totalPages = Math.ceil(
    (count ?? 0) / limit
  );

  if ((count ?? 0) > 0 && page > totalPages) {
  redirect(`/admin/program?page=${totalPages}`);
}

  if (error) {
    return (
      <ErrorState
        title="Gagal memuat program"
        description="Silakan coba beberapa saat lagi."
      />
    );
  }

  if ((count ?? 0) === 0) {
    return (
      <EmptyState
  title="Belum ada program"
  description="Silakan tambahkan program pertama."
  actionLabel="Tambah Program"
  actionHref="/admin/program/new"
/>
    );
  }

 return (
  <div>

    <PageHeader
      title="Program"
      buttonLabel="Tambah Program"
      buttonHref="/admin/program/new"
    />

    <ProgramList
      programs={programs}
    />

    <Pagination
      currentPage={page}
      totalPages={totalPages}
      basePath="/admin/program"
    />

  </div>
);
}