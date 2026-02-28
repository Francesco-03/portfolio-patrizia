"use client";
import { Opera } from "@/types/opera";
import OperaCard from "./OperaCard";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTransform, MotionValue } from "framer-motion";

export default function WorksSection({
  scrollYProgress,
  opere,
}: {
  scrollYProgress: MotionValue<number>;
  opere: Opera[];
}) {
  const y = useTransform(scrollYProgress, [0.33, 0.66], [0, 100]);
  return (
    <section
      id="works"
      className="relative z-10 min-h-screen w-full flex items-center justify-center px-6 md:px-20 py-20"
    >
      <motion.div style={{ y }} className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-md  font-semibold uppercase tracking-widest mb-4">
            Portfolio
          </p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Le Mie Opere</h2>
          <p className="text-lg  max-w-2xl">
            Una selezione delle mie creazioni recenti che riflettono il mio
            percorso artistico e la ricerca continua di nuove forme espressive.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {opere.map((opera, i) => (
            <OperaCard key={opera.id} opera={opera} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Link
            href="/gallery"
            className="inline-block mb-10 px-8 py-4 border-2 border-arancione text-arancione font-bold rounded-lg hover:bg-orange-50 transition-colors"
          >
            Visita la Galleria Completa
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
