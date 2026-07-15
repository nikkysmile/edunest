import Link from "next/link";

import Loading from "@/components/ui/Loading";
import {
  PageHeader,
  ProgramList,
} from "@/components/admin";
import ErrorState from "@/components/ui/ErrorState";
import EmptyState from "@/components/ui/EmptyState";
import DeleteProgramButton from "@/components/admin/DeleteProgramButton";

import { getPrograms } from "@/services/programService";

await new Promise((resolve) =>
  setTimeout(resolve, 2000)
);

export default async function ProgramPage() {
  const { data: programs, error } = await getPrograms();

  if (error) {
    return (
      <ErrorState
        title="Gagal memuat program"
        description="Silakan coba beberapa saat lagi."
      />
    );
  }

  if (!programs || programs.length === 0) {
    return (
      <EmptyState
        title="Belum ada program"
        description="Silakan tambahkan program pertama."
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


      <ProgramList programs={programs} />

    </div>
  );
}