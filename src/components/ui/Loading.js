export default function Loading({
  text = "Memuat...",
}) {
  return (
    <div className="flex min-h-[300px] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-300 border-t-sky-600 animate-spin" />
        <p className="mt-4 text-slate-600">{text}</p>
      </div>
    </div>
  );
}