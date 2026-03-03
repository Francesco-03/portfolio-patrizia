"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTransform, MotionValue } from "framer-motion";

export default function BiographySection({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const y = useTransform(scrollYProgress, [0.15, 0.48], [0, 100]);

  return (
    <section
      id="biography"
      className="relative z-10 min-h-screen w-full flex items-center justify-center px-6 md:px-20 py-20"
    >
      <motion.div
        style={{ y }}
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Testo a sinistra */}

        {/* Foto a sinistra */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full aspect-4/5 rounded-2xl overflow-hidden shadow-2xl order-1 md:order-1"
        >
          <Image
            src="/biopic.jpeg"
            alt="Autobiografia di Patrizia"
            fill
            className="object-cover transition-transform duration-500"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-2"
        >
          <p className="text-md font-semibold uppercase tracking-widest mb-4">
            Chi sono
          </p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            La Mia Storia
          </h2>
          <p className="text-md leading-relaxed text-gray-700 mb-4">
            Sono cresciuta nella provincia di Grosseto, a Poggioferro, un
            piccolo borgo immerso nella natura. Da grande mi sono trasferita a
            Istia d&apos;Ombrone, un antico centro medievale che mi ha adottata
            e al quale sono legata da un affetto profondo e incondizionato. Fin
            da bambina amavo viaggiare con la fantasia e sperimentare con le
            mani; è in questa naturale inclinazione che ha radice la mia
            passione per l&apos;arte. E molto più avanti mi sono concessa la
            libertà di fare ciò che mi fa stare bene, così ho abbracciato questo
            mondo. Ho perfezionato la mia formazione presso il Liceo Artistico
            di Grosseto e, spinta dal desiderio di esprimermi attraverso pittura
            e scultura, ho dedicato alla creazione delle mie opere un impegno
            costante e organizzato. Ascoltarmi e tradurre su tela, carta o
            argilla la mia visione del mondo è per me una sfida continua che mi
            fa sentire viva. Sono affascinata dalla profondità cromatica e
            dall&apos;effetto della luce nei dipinti di Caravaggio, dalla forza
            delle ampie campiture piatte di Gauguin e dall&apos;astrazione
            geometrica di Kandinskij. Tra gli scultori, la poetica di Henry
            Moore mi ispira per la sua raffinata sintesi formale e
            l&apos;equilibrio tra pieni e vuoti. Preferisco lavorare con
            materiali plastici, quali argilla e gesso, mentre in pittura amo
            sperimentare soprattutto con olio e acquerello. I miei soggetti
            nascono quasi sempre dall&apos;incontro con forme e colori che
            suscitano in me un senso di bellezza e stimolano la mia creatività.
            Le linee sinuose della figura umana, rimangono un riferimento
            centrale nella mia ricerca artistica.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
