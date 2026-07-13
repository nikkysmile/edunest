export default function EmptyState({
  title = "Belum ada data",
  description = "Silakan tambahkan data terlebih dahulu.",
}) {
  return (
    <div className="py-20 text-center">
      <h3 className="text-2xl font-bold text-slate-700">
        {title}
      </h3>

      <p className="mt-3 text-slate-500">
        {description}
      </p>
    </div>
  );
}