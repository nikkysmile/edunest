import Link from "next/link";

export default function EmptyState({
  title = "Belum ada data",
  description = "Silakan tambahkan data terlebih dahulu.",
  actionLabel,
  actionHref,
}) {
  return (
    <div className="py-20 text-center">

      <h3 className="text-2xl font-bold text-slate-700">
        {title}
      </h3>

      <p className="mt-3 text-slate-500">
        {description}
      </p>

      {actionLabel && actionHref && (
        <Link
          href={actionHref}
          className="mt-8 inline-flex rounded-xl bg-sky-600 px-6 py-3 font-medium text-white transition hover:bg-sky-700"
        >
          + {actionLabel}
        </Link>
      )}

    </div>
  );
}