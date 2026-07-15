import Link from "next/link";

export default function PageHeader({
  title,
  buttonLabel,
  buttonHref,
}) {
  return (
    <div className="mb-8 flex items-center justify-between">

      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          {title}
        </h1>
      </div>

      {buttonLabel && buttonHref && (
        <Link
          href={buttonHref}
          className="rounded-xl bg-sky-600 px-5 py-3 font-semibold text-white transition hover:bg-sky-700"
        >
          {buttonLabel}
        </Link>
      )}

    </div>
  );
}