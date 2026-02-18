"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTransform, MotionValue } from "framer-motion";

export default function PresentationSection({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const y = useTransform(scrollYProgress, [0, 0.33], [0, 100]);

  return (
    <section className="relative z-10 min-h-screen w-full flex items-center justify-center px-6 md:px-20 py-20">
      <motion.div
        style={{ y }}
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-md  font-semibold uppercase tracking-widest pl-1">
            Pittura e scultura
          </p>
          <h1 className="text-6xl  md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Patrizia Pellegrini
          </h1>
          <p className="text-lg leading-relaxed mb-8 pl-1">
            Spaziare e perdersi nell&apos;arte per ritrovarsi...
          </p>
          <Link
            href="/gallery"
            className="inline-block px-8 py-4 bg-verde text-white font-bold rounded-lg hover:bg-green-800 transition-colors"
          >
            Scopri le Mie Opere
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full aspect-10/9 rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/Homepage_cropped.png"
            alt="Patrizia Pellegrini"
            fill
            className="object-cover transition-transform duration-500"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
