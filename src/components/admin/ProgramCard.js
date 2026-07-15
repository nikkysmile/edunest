import Link from "next/link";

import DeleteProgramButton from "./DeleteProgramButton";

export default function ProgramCard({ program }) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow">

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
  );
}