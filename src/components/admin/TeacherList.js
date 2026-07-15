import TeacherCard from "./TeacherCard";

export default function TeacherList({ teachers }) {
  return (
    <div className="space-y-4">
      {teachers.map((teacher) => (
        <TeacherCard
          key={teacher.id}
          teacher={teacher}
        />
      ))}
    </div>
  );
}