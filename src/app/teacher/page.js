import PageHeader from "@/components/ui/PageHeader";
import Teacher from "@/components/sections/Teachers";
import { getTeachers } from "@/services/teacherService";

export default async function TeacherPage() {
  const { data: teachers, error } = await getTeachers();

  if (error) {
    console.error(error);
  }

  return (
    <>
      <PageHeader
       
      />

      <Teacher teachers={teachers} />
    </>
  );
}