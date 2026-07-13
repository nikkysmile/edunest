import Card from "@/components/ui/Card";
import { iconMap } from "@/constants/icons";

export default function ProgramCard({ program }) {
  const Icon = iconMap[program.icon];

  return (
    <Card>
      <div className="mb-6">
        {Icon && (
          <Icon
            size={48}
            className="text-sky-600"
          />
        )}
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