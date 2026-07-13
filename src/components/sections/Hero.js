"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Image from "next/image";


export default function Hero() {
  
  return (
    <motion.div

      initial={{
      opacity:0,
      y:50
      }}

      animate={{
      opacity:1,
      y:0
      }}

      transition={{
      duration:0.8
      }}

>
    <section className="bg-sky-50 py-24">
      <Container>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <h1 className="text-6xl font-bold leading-tight">

              Membangun

             <br/>

              Generasi Hebat

            </h1>

            <p className="mt-6 text-lg text-slate-600">

              Website modern yang membantu sekolah
              menampilkan profil, berita,
              galeri dan PPDB Online.

            </p>

            <div className="mt-8 flex gap-4">

              <Button>Daftar Sekarang</Button>

              <Button variant="secondary">
               Lihat Demo
              </Button>

            </div>

          </div>

          <div className="flex justify-center">

          <Image
            src="/images/hero.jpg"
            width={550}
            height={550}
            alt="Hero"
            className="rounded-3xl shadow-xl"
          />

          </div>

        </div>

      </Container>
    </section>
    </motion.div>
  );
}