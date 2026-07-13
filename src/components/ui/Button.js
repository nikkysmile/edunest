export default function Button({
  children,
  variant = "primary",
}) {
  const variants = {
    primary:
      "bg-sky-600 text-white hover:bg-sky-700",

    secondary:
      "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100",
  };

  return (
    <button
      className={`rounded-xl px-6 py-3 font-semibold transition ${variants[variant]}`}
    >
      {children}
    </button>
  );
}