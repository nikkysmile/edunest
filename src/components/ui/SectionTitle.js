import { theme } from "@/constants/theme";

export default function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <div className="mb-12 text-center">
      <h2
        className={`text-4xl font-bold tracking-tight text-slate-900`}
      >
        {title}
      </h2>

      <p
        className={`mx-auto mt-4 max-w-2xl text-lg text-slate-600`}
      >
        {subtitle}
      </p>
    </div>
  );
}