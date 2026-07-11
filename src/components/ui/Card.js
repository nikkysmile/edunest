export default function Card({ children }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {children}
    </div>
  );
}