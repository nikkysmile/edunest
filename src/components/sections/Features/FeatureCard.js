export default function FeatureCard({
  icon: Icon,
  title,
  description,
}) {
  return (
    <div>
      <Icon className="mb-6 h-12 w-12 text-sky-600" />

      <h3 className="font-bold">
        {title}
      </h3>

      <p className="mt-2 text-slate-600">
        {description}
      </p>
    </div>
  );
}