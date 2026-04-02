"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Opera } from "@/types/opera";

interface OperaDetailProps {
  opera: Opera;
}

export default function OperaDetail({ opera }: OperaDetailProps) {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Bottone indietro */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Link
            href="/gallery"
            className="flex items-center gap-2 text-verde font-semibold hover:text-arancione transition-colors duration-300 w-fit"
          >
            <ArrowLeft className="w-5 h-5" />
            Torna alla galleria
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Galleria Foto Grid */}
          {opera.foto && opera.foto.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {opera.foto.map((photo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="relative aspect-3/4 bg-sfondo rounded-lg overflow-hidden shadow-lg"
                  >
                    <Image
                      src={photo.url}
                      alt={`${opera.titolo} - foto ${index + 1}`}
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Informazioni */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-sfondo-card rounded-lg p-8 space-y-6 shadow-lg"
          >
            <div>
              <h1 className="text-4xl font-bold mb-2 text-gray-900">
                {opera.titolo}
              </h1>
              {/* {opera.data && (
                <p className="text-lg text-verde font-semibold">{opera.data}</p>
              )} */}
            </div>

            {opera.descrizione && (
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Descrizione
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {opera.descrizione}
                </p>
              </div>
            )}

            {/* Grid di informazioni */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
              {opera.tipo && (
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    Categoria
                  </p>
                  <p className="text-lg text-verde font-semibold">
                    {opera.tipo}
                  </p>
                </div>
              )}
            </div>

            {/* Bottone torna alla galleria */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/gallery"
                className="w-full block text-center px-6 py-3 bg-verde text-white font-semibold rounded-lg hover:bg-arancione transition-colors duration-300"
              >
                Torna alla galleria
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
