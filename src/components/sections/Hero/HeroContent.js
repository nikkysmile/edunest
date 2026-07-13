"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
    >
      <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
        Selamat Datang di EduNest
      </span>

      <h1 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
        Tempat Terbaik untuk
        <span className="text-sky-600"> Tumbuh dan Belajar</span>
      </h1>

      <p className="mt-6 text-lg text-slate-600">
        Kami menghadirkan pendidikan usia dini yang menyenangkan,
        aman, kreatif, dan berorientasi pada perkembangan karakter anak.
      </p>

      <div className="mt-8 flex gap-4">
        <Button>Daftar Sekarang</Button>

        <Button variant="secondary">
          Lihat Program
        </Button>
      </div>
    </motion.div>
  );
}