import Card from "@/components/ui/Card";
import { iconMap } from "@/lib/iconMap";

export default function TeacherCard({ teacher }) {
  const Icon = iconMap[teacher.icon];

  return (
    <Card>
      <div className="mb-6">
        {Icon && <Icon className="h-12 w-12 text-sky-600" />}
      </div>

      <h3 className="text-2xl font-bold">
        {teacher.name}
      </h3>

      <p className="mt-4 text-slate-600">
        {teacher.bio}
      </p>
    </Card>
  );
}