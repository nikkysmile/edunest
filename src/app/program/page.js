import PageHeader from "@/components/ui/PageHeader";
import Programs from "@/components/sections/Programs/Programs";
import { getPrograms } from "@/services/programService";

export default async function ProgramPage() {
  const programs = await getPrograms();

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