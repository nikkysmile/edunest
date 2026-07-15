import Link from "next/link";

import DeleteTeacherButton from "./DeleteTeacherButton";

export default function TeacherCard({ teacher }) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between">

        <div>
          <h3 className="text-lg font-semibold">
            {teacher.name}
          </h3>

          <p className="mt-1 text-slate-600">
            {teacher.position}
          </p>

          {teacher.bio && (
            <p className="mt-3 text-sm text-slate-500 line-clamp-3">
              {teacher.bio}
            </p>
          )}
        </div>

        <div className="flex gap-2">
          <Link
            href={`/admin/teacher/${teacher.id}`}
            className="rounded-lg bg-sky-600 px-4 py-2 text-white hover:bg-sky-700"
          >
            Edit
          </Link>

          <DeleteTeacherButton id={teacher.id} />
        </div>

      </div>
    </div>
  );
}