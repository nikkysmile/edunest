export default function Loading({
  text = "Memuat...",
}) {
  return (
   <div className="mx-auto h-10 w-10 rounded-full border-4 border-slate-300 border-t-sky-600 animate-spin" />
  );
}