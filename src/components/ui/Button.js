export default function Button({
  children,
  variant = "primary",
  disabled = false,
  type = "button",
}) {
  const variants = {
    primary:
      "bg-sky-600 text-white hover:bg-sky-700",

    secondary:
      "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={`
        rounded-xl px-6 py-3 font-semibold transition
        ${variants[variant]}
        ${disabled ? "cursor-not-allowed opacity-50" : ""}
      `}
    >
      {children}
    </button>
  );
}