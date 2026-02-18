"use client";
import { motion } from "framer-motion";
import { useTransform, MotionValue } from "framer-motion";

export default function EventsSection({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const y = useTransform(scrollYProgress, [0.66, 1], [0, 100]);

  const events = [
    {
      title: "Mostra Personale - Forme del Silenzio",
      date: "Novembre 2024 - Gennaio 2025",
      location: "Galleria Contemporanea, Milano",
      type: "upcoming",
    },
    {
      title: "Art Week Milano",
      date: "Ottobre 2024",
      location: "Fiera Milano",
      type: "past",
    },
    {
      title: "Biennale Giovani Artisti",
      date: "Settembre 2024",
      location: "Venezia, Italia",
      type: "past",
    },
  ];

  return (
    <section className="relative z-10 min-h-screen w-full flex items-center justify-center px-6 md:px-20 py-20">
      <motion.div style={{ y }} className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-sm text-arancione font-semibold uppercase tracking-widest mb-4">
            Calendario
          </p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Eventi e Mostre
          </h2>
          <p className="text-lg  max-w-2xl">
            Scopri gli eventi a cui ho partecipato e le mostre in programma.
          </p>
        </motion.div>

        <div className="space-y-6 mb-12">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`p-6 rounded-xl border-l-4 ${
                event.type === "upcoming"
                  ? "border-arancione bg-orange-50"
                  : "border-gray-300 bg-gray-50"
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold">{event.title}</h3>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    event.type === "upcoming"
                      ? "bg-arancione text-white"
                      : "bg-gray-400 text-white"
                  }`}
                >
                  {event.type === "upcoming" ? "Prossimamente" : "Passato"}
                </span>
              </div>
              <p className="text-sm  mb-1">{event.date}</p>
              <p className="text-sm ">{event.location}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
