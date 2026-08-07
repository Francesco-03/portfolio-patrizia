"use client";

import Image from "next/image";
import { motion, useTransform, MotionValue } from "framer-motion";

export default function StudioShow({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const y = useTransform(scrollYProgress, [0.15, 0.48], [0, 100]);

  return (
    <section className="w-full flex justify-center px-6 py-24">
      <motion.div style={{ y }} className="max-w-6xl w-full">
        {/* Titolo e testo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-12"
        >
          <p className="text-md font-semibold uppercase tracking-widest mb-4">
            Vieni a trovarmi nel mio studio!
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            IL LABORATORIO
          </h2>

          <p className="text-md leading-relaxed text-gray-700">
            Il mio laboratorio è lo spazio dove lavoro ogni giorno ai miei
            progetti e dove sarò felice di accoglierti per mostrarti più da
            vicino ciò che realizzo.
          </p>
        </motion.div>

        {/* Griglia immagini */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Prima foto */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/studio1.jpg"
              alt="Lo studio di Patrizia"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </motion.div>

          {/* Seconda foto */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/studio2.jpg"
              alt="Dettaglio del laboratorio"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
