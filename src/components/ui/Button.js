import { theme } from "@/constants/theme";

export default function Button({
  children,
  variant = "primary",
}) {
  return (
    <button
      className={`${theme.button.base} ${theme.button[variant]}`}
    >
      {children}
    </button>
  );
}