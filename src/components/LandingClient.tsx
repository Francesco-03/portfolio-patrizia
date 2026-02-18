"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { Opera } from "@/types/opera";
import OperaCard from "@/components/OperaCard";
import Header from "./Header";

export default function LandingPageClient({ opere }: { opere: Opera[] }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      {/* Forma sinuosa arancione a sinistra */}

      {/* SEZIONE 1: Presentazione Artista */}
      <PresentationSection scrollYProgress={scrollYProgress} />

      {/* SEZIONE 1.5: Biografia Artista */}
      <BiographySection scrollYProgress={scrollYProgress} />

      {/* SEZIONE 2: Opere */}
      <WorksSection scrollYProgress={scrollYProgress} opere={opere} />

      {/* SEZIONE 3: Eventi */}
      {/* <EventsSection scrollYProgress={scrollYProgress} /> */}
    </div>
  );
}

// ===== SEZIONE 1: PRESENTAZIONE ARTISTA =====
function PresentationSection({
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

// ===== SEZIONE 1.5: BIOGRAFIA ARTISTA =====
function BiographySection({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const y = useTransform(scrollYProgress, [0.15, 0.48], [0, 100]);

  return (
    <section className="relative z-10 min-h-screen w-full flex items-center justify-center px-6 md:px-20 py-20">
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
            src="/Homepage_cropped.png"
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
          <p className="text-md font-semibold uppercase tracking-widest text-arancione mb-4">
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

// ===== SEZIONE 2: OPERE =====
function WorksSection({
  scrollYProgress,
  opere,
}: {
  scrollYProgress: MotionValue<number>;
  opere: Opera[];
}) {
  const y = useTransform(scrollYProgress, [0.33, 0.66], [0, 100]);
  return (
    <section className="relative z-10 min-h-screen w-full flex items-center justify-center px-6 md:px-20 py-20">
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

// ===== SEZIONE 3: EVENTI =====
// function EventsSection({
//   scrollYProgress,
// }: {
//   scrollYProgress: MotionValue<number>;
// }) {
//   const y = useTransform(scrollYProgress, [0.66, 1], [0, 100]);

//   const events = [
//     {
//       title: "Mostra Personale - Forme del Silenzio",
//       date: "Novembre 2024 - Gennaio 2025",
//       location: "Galleria Contemporanea, Milano",
//       type: "upcoming",
//     },
//     {
//       title: "Art Week Milano",
//       date: "Ottobre 2024",
//       location: "Fiera Milano",
//       type: "past",
//     },
//     {
//       title: "Biennale Giovani Artisti",
//       date: "Settembre 2024",
//       location: "Venezia, Italia",
//       type: "past",
//     },
//   ];

//   return (
//     <section className="relative z-10 min-h-screen w-full flex items-center justify-center px-6 md:px-20 py-20">
//       <motion.div style={{ y }} className="max-w-6xl w-full">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="mb-12"
//         >
//           <p className="text-sm text-arancione font-semibold uppercase tracking-widest mb-4">
//             Calendario
//           </p>
//           <h2 className="text-5xl md:text-6xl font-bold mb-6">
//             Eventi e Mostre
//           </h2>
//           <p className="text-lg  max-w-2xl">
//             Scopri gli eventi a cui ho partecipato e le mostre in programma.
//           </p>
//         </motion.div>

//         <div className="space-y-6 mb-12">
//           {events.map((event, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: i * 0.1 }}
//               className={`p-6 rounded-xl border-l-4 ${
//                 event.type === "upcoming"
//                   ? "border-arancione bg-orange-50"
//                   : "border-gray-300 bg-gray-50"
//               }`}
//             >
//               <div className="flex items-start justify-between mb-2">
//                 <h3 className="text-xl font-bold">{event.title}</h3>
//                 <span
//                   className={`text-xs font-semibold px-3 py-1 rounded-full ${
//                     event.type === "upcoming"
//                       ? "bg-arancione text-white"
//                       : "bg-gray-400 text-white"
//                   }`}
//                 >
//                   {event.type === "upcoming" ? "Prossimamente" : "Passato"}
//                 </span>
//               </div>
//               <p className="text-sm  mb-1">{event.date}</p>
//               <p className="text-sm ">{event.location}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// }
