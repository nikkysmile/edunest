import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Programs from "@/components/sections/Programs";
import Features from "@/components/sections/Features";
import Teachers from "@/components/sections/Teachers";
import Gallery from "@/components/sections/Gallery";
import News from "@/components/sections/News";
import CTA from "@/components/sections/CTA";

import { getPrograms } from "@/services/programService";
import { getTeachers } from "@/services/teacherService";

export default async function Home() {
  const { data: programs } = await getPrograms();
  const { data: teachers } = await getTeachers();

  return (
    <>
      <Hero />
      <About />
      <Programs programs={programs ?? []} />
      <Features />
      <Teachers teachers={teachers ?? []} />
      <Gallery />
      <News />
      <CTA />
    </>
  );
}