export default function Button({
  children,
  variant = "primary",
}) {
  const styles = {
    primary:
      "bg-sky-600 text-white hover:bg-sky-700",

    secondary:
      "border border-slate-300 bg-white hover:bg-slate-100",
  };

  return (
    <button
      className={`rounded-lg px-6 py-3 font-medium transition ${styles[variant]}`}
    >
      {children}
    </button>
  );
}