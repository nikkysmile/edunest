import Link from "next/link";

import Loading from "@/components/ui/Loading";
import ErrorState from "@/components/ui/ErrorState";
import EmptyState from "@/components/ui/EmptyState";
import DeleteProgramButton from "@/components/admin/DeleteProgramButton";

import { getPrograms } from "@/services/programService";

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

      <div className="mb-8 flex items-center justify-between">

        <h1 className="text-3xl font-bold">
          Program
        </h1>

        <Link
          href="/admin/program/new"
          className="rounded-xl bg-sky-600 px-5 py-3 text-white"
        >
          + Tambah Program
        </Link>

      </div>

      <div className="space-y-4">

  {programs.map((program) => (

    <div
      key={program.id}
      className="rounded-xl border bg-white p-6 shadow"
    >

      <h2 className="text-xl font-bold">
        {program.title}
      </h2>

      <p className="mt-2 text-slate-600">
        {program.description}
      </p>

      <p className="mt-4 text-sm text-slate-400">
        Icon : {program.icon}
      </p>

      <div className="mt-6 flex gap-3">

        <Link
          href={`/admin/program/${program.id}`}
          className="rounded-lg bg-amber-500 px-4 py-2 text-white hover:bg-amber-600"
        >
          Edit
        </Link>

        <DeleteProgramButton id={program.id} />

      </div>

    </div>

  ))}

  </div>

    </div>
  );
}