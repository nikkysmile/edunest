"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="relative"
    >
      <Image
        src="/images/hero.jpg"
        alt="Anak-anak belajar"
        width={600}
        height={500}
        priority
        className="rounded-3xl shadow-2xl"
      />
    </motion.div>
  );
}