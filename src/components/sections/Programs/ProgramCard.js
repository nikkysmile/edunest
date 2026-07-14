import Card from "@/components/ui/Card";
import { iconMap } from "@/lib/iconMap";

export default function ProgramCard({ program }) {
  const Icon = iconMap[program.icon];

  return (
    <Card>
      <div className="mb-6">
        {Icon && <Icon className="h-12 w-12 text-sky-600" />}
      </div>

      <h3 className="text-2xl font-bold">
        {program.title}
      </h3>

      <p className="mt-4 text-slate-600">
        {program.description}
      </p>
    </Card>
  );
}