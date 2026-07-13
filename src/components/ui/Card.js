import { theme } from "@/constants/theme";

export default function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`${theme.card.base} ${className}`}
    >
      {children}
    </div>
  );
}