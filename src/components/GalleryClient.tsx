"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import OperaCard from "./OperaCard";
import { Opera } from "@/types/opera";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface GalleryClientProps {
  opere: Opera[];
  categories: {
    tecnica: string[];
    tipo: string[];
  };
}

// Dati finti per test
// const fakeOpere: Opera[] = [
//   {
//     id: 1,
//     documentId: "fake-1",
//     slug: "alba-sulla-montagna",
//     Titolo: "Alba sulla Montagna",
//     Descrizione:
//       "Un'affascinante rappresentazione della luce all'alba sulle pendici montane",
//     Categoria: "Paesaggio",
//     Tecnica: "Olio su tela",
//     Data: "2023",
//     Tipo: "Pittura",
//     Foto: [
//       {
//         id: 1,
//         documentId: "photo-1",
//         name: "alba",
//         url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop",
//       },
//     ],
//   },
//   {
//     id: 2,
//     documentId: "fake-2",
//     slug: "fiori-primavera",
//     Titolo: "Fiori di Primavera",
//     Descrizione:
//       "Una composizione delicata che cattura l'essenza della stagione",
//     Categoria: "Natura morta",
//     Tecnica: "Acquerello",
//     Data: "2023",
//     Tipo: "Pittura",
//     Foto: [
//       {
//         id: 2,
//         documentId: "photo-2",
//         name: "fiori",
//         url: "https://images.unsplash.com/photo-1490086690971-f8cdef2f3992?w=400&h=500&fit=crop",
//       },
//     ],
//   },
//   {
//     id: 3,
//     documentId: "fake-3",
//     slug: "mare-tempestoso",
//     Titolo: "Mare Tempestoso",
//     Descrizione:
//       "La forza bruta della natura espressa con colori intensi e movimenti dinamici",
//     Categoria: "Paesaggio",
//     Tecnica: "Olio su tela",
//     Data: "2024",
//     Tipo: "Pittura",
//     Foto: [
//       {
//         id: 3,
//         documentId: "photo-3",
//         name: "mare",
//         url: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=500&fit=crop",
//       },
//     ],
//   },
//   {
//     id: 4,
//     documentId: "fake-4",
//     slug: "abstract-blu",
//     Titolo: "Astrazione in Blu",
//     Descrizione:
//       "Un'esplorazione astratta dei toni blu e delle forme geometriche",
//     Categoria: "Astratto",
//     Tecnica: "Acrilico su tela",
//     Data: "2023",
//     Tipo: "Pittura",
//     Foto: [
//       {
//         id: 4,
//         documentId: "photo-4",
//         name: "abstract",
//         url: "https://images.unsplash.com/photo-1578321272176-b04a17d68da9?w=400&h=500&fit=crop",
//       },
//     ],
//   },
//   {
//     id: 5,
//     documentId: "fake-5",
//     slug: "contemplazione",
//     Titolo: "Contemplazione",
//     Descrizione: "Un ritratto che esprime profondità emotiva e introspezione",
//     Categoria: "Ritratto",
//     Tecnica: "Mista",
//     Data: "2024",
//     Tipo: "Pittura",
//     Foto: [
//       {
//         id: 5,
//         documentId: "photo-5",
//         name: "ritratto",
//         url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=500&fit=crop",
//       },
//     ],
//   },
// ];

export default function GalleryClient({
  opere,
  categories,
}: GalleryClientProps) {
  // const router = useRouter();
  // const searchParams = useSearchParams();

  // const [selectedTecnica, setSelectedTecnica] = useState(
  //   searchParams.get("tecnica") || "",
  // );
  // const [selectedTipo, setSelectedTipo] = useState(
  //   searchParams.get("tipo") || "",
  // );

  const [selectedTecnica, setSelectedTecnica] = useState("");
  const [selectedTipo, setSelectedTipo] = useState("");
  // Aggiorna l'URL con i nuovi filtri
  // const updateFilters = (search: string, tecnica: string, tipo: string) => {
  //   const params = new URLSearchParams();
  //   if (tecnica) params.set("tecnica", tecnica);
  //   if (tipo) params.set("tipo", tipo);

  //   const queryString = params.toString();
  //   router.push(queryString ? `/gallery?${queryString}` : "/gallery");
  // };

  const filteredOpere = opere.filter((opera) => {
    const matchesTecnica =
      !selectedTecnica || opera.Tecnica === selectedTecnica;
    const matchesTipo = !selectedTipo || opera.Tipo === selectedTipo;

    return matchesTecnica && matchesTipo;
  });

  const handleTecnicaChange = (value: string) => {
    setSelectedTecnica(value);
    // updateFilters(searchQuery, value, selectedTipo);
  };

  const handleTipoChange = (value: string) => {
    setSelectedTipo(value);
    // updateFilters(searchQuery, selectedTecnica, value);
  };

  const resetFilters = () => {
    setSelectedTecnica("");
    setSelectedTipo("");
    // router.push("/gallery");
  };

  const hasActiveFilters = selectedTecnica || selectedTipo;

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main layout - Sidebar + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filtri */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4"
          >
            <div className="bg-sfondo-card rounded-lg p-6 sticky top-20">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Filtri</h2>

              <div className="lg:flex lg:w-full lg:gap-x-10">
                {/* Filtro Tipo */}
                <div className="mb-6 flex-1">
                  <label className="block text-sm font-semibold mb-3 text-gray-700">
                    Tipo
                  </label>
                  <select
                    value={selectedTipo}
                    onChange={(e) => handleTipoChange(e.target.value)}
                    className="w-full px-3 py-2 border-2 border-verde rounded-lg focus:outline-none focus:border-arancione transition-colors duration-300 text-sm"
                  >
                    <option value="">Tutti i tipi</option>
                    {categories.tipo.map((tipo) => (
                      <option key={tipo} value={tipo}>
                        {tipo}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Filtro Tecnica */}
                <div className="mb-6 flex-1">
                  <label className="block text-sm font-semibold mb-3 text-gray-700">
                    Tecnica
                  </label>
                  <select
                    value={selectedTecnica}
                    onChange={(e) => handleTecnicaChange(e.target.value)}
                    className="w-full px-3 py-2 border-2 border-verde rounded-lg focus:outline-none focus:border-arancione transition-colors duration-300 text-sm"
                  >
                    <option value="">Tutte le tecniche</option>
                    {categories.tecnica.map((tecnica) => (
                      <option key={tecnica} value={tecnica}>
                        {tecnica}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Reset Filtri */}
              {hasActiveFilters && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={resetFilters}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 text-verde border-2 border-verde rounded-lg font-medium hover:bg-verde hover:text-sfondo transition-all duration-300"
                >
                  <X className="w-4 h-4" />
                  Ripristina
                </motion.button>
              )}
            </div>
          </motion.div>

          {/* Content - Galleria */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4"
          >
            {/* Galleria Grid */}
            {opere.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* {opere.map((opera, index) => (
                  <OperaCard
                    key={opera.documentId}
                    opera={opera}
                    index={index}
                    variant="gallery"
                  />
                ))} */}
                {filteredOpere.map((opera, index) => (
                  <OperaCard
                    key={opera.documentId}
                    opera={opera}
                    index={index}
                    variant="gallery"
                  />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-16 px-8"
              >
                <div className="text-center">
                  <p className="text-gray-500 text-lg mb-6">
                    Nessuna opera trovata con i filtri selezionati.
                  </p>
                  <button
                    onClick={resetFilters}
                    className="px-6 py-2 text-verde border-2 border-verde rounded-lg font-medium hover:bg-verde hover:text-sfondo transition-all duration-300"
                  >
                    Ripristina filtri
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
