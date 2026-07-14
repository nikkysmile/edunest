import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Programs from "@/components/sections/Programs";
import Features from "@/components/sections/Feature";
import Teachers from "@/components/sections/Teacher";
import Gallery from "@/components/sections/Gallery";
import News from "@/components/sections/News";
import CTA from "@/components/sections/CTA";

import { getPrograms } from "@/services/programService";

export default async function Home() {
  const { data: programs, error } = await getPrograms();

  if (error) {
    console.error(error);
  }

  return (
    <>
      <Hero />
      <About />
      <Programs programs={programs} />
      <Features />
      <Teachers />
      <Gallery />
      <News />
      <CTA />
    </>
  );
}