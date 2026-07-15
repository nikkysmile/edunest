import ProgramCard from "./ProgramCard";

export default function ProgramList({ programs }) {
  return (
    <div className="space-y-4">
      {programs.map((program) => (
        <ProgramCard
          key={program.id}
          program={program}
        />
      ))}
    </div>
  );
}