import PageHeader from "@/components/ui/PageHeader";
import Programs from "@/components/sections/Programs";
import { getPrograms } from "@/services/programService";

export default async function ProgramPage() {
  const { data: programs, error } = await getPrograms();

  if (error) {
    console.error(error);
  }

  return (
    <>
      <PageHeader
        title="Program"
        subtitle="Program unggulan sekolah kami."
      />

      <Programs programs={programs} />
    </>
  );
}