export default function Select({
  children,
  ...props
}) {
  return (
    <select
      {...props}
      className={`
        w-full rounded-xl border border-slate-300
        px-4 py-3
        outline-none
        transition
        focus:border-sky-500
        focus:ring-2
        focus:ring-sky-200
        ${props.className || ""}
      `}
    >
      {children}
    </select>
  );
}