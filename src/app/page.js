import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About";
import Programs from "@/components/sections/Programs";
import Features from "@/components/sections/Features";
import Teachers from "@/components/sections/Teachers";
import Gallery from "@/components/sections/Gallery";
import News from "@/components/sections/News";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <Features />
      <Teachers />
      <Gallery />
      <News />
      <CTA />
    </>
  );
}