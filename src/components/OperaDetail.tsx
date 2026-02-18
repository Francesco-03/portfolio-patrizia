// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
// import { Opera } from "@/types/opera";
// import { useState } from "react";

// interface OperaDetailProps {
//   opera: Opera;
// }

// export default function OperaDetail({ opera }: OperaDetailProps) {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const goToPrevious = () => {
//     if (opera.Foto) {
//       setCurrentImageIndex(
//         (prevIndex) =>
//           (prevIndex - 1 + opera.Foto!.length) % opera.Foto!.length,
//       );
//     }
//   };

//   const goToNext = () => {
//     if (opera.Foto) {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % opera.Foto!.length);
//     }
//   };

//   const goToSlide = (index: number) => {
//     setCurrentImageIndex(index);
//   };
//   return (
//     <div className="h-screen overflow-hidden">
//       <div className="h-full flex flex-col">
//         {/* Bottone indietro */}
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.3 }}
//           className="px-6 py-4"
//         >
//           <Link
//             href="/gallery"
//             className="flex items-center gap-2 text-verde font-semibold hover:text-arancione transition-colors duration-300 w-fit"
//           >
//             <ArrowLeft className="w-5 h-5" />
//             Torna alla galleria
//           </Link>
//         </motion.div>

//         {/* Layout principale: immagini a sinistra, descrizione a destra */}
//         <div className="flex-1 flex gap-6 overflow-hidden px-6 py-6">
//           {/* Immagini a SINISTRA */}
//           {opera.Foto && opera.Foto.length > 0 && (
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//               className="w-1/2 flex flex-col gap-4 overflow-hidden"
//             >
//               <div className="relative w-full h-3/4 bg-sfondo rounded-lg overflow-hidden shadow-lg">
//                 {/* Immagine principale */}
//                 <Image
//                   src={
//                     "http://localhost:1337" + opera.Foto[currentImageIndex].url
//                   }
//                   alt={`${opera.Titolo} - foto ${currentImageIndex + 1}`}
//                   fill
//                   className="object-cover"
//                   priority
//                 />

//                 {/* Pulsanti frecce */}
//                 {opera.Foto.length > 1 && (
//                   <>
//                     <button
//                       onClick={goToPrevious}
//                       className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-colors duration-300 z-10"
//                     >
//                       <ChevronLeft className="w-6 h-6" />
//                     </button>
//                     <button
//                       onClick={goToNext}
//                       className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-colors duration-300 z-10"
//                     >
//                       <ChevronRight className="w-6 h-6" />
//                     </button>
//                   </>
//                 )}

//                 {/* Contatore foto */}
//                 {opera.Foto.length > 1 && (
//                   <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-semibold">
//                     {currentImageIndex + 1} / {opera.Foto.length}
//                   </div>
//                 )}
//               </div>

//               {/* Miniature */}
//               {opera.Foto.length > 1 && (
//                 <div className="flex gap-2 overflow-x-auto pb-2">
//                   {opera.Foto.map((photo, index) => (
//                     <motion.button
//                       key={index}
//                       onClick={() => goToSlide(index)}
//                       whileHover={{ scale: 1.05 }}
//                       className={`relative shrink-0 w-20 h-20 rounded-lg overflow-hidden shadow-md transition-all duration-300 ${
//                         currentImageIndex === index
//                           ? "ring-2 ring-verde opacity-100"
//                           : "opacity-60 hover:opacity-80"
//                       }`}
//                     >
//                       <Image
//                         src={"http://localhost:1337" + photo.url}
//                         alt={`${opera.Titolo} - miniatura ${index + 1}`}
//                         fill
//                         className="object-cover"
//                       />
//                     </motion.button>
//                   ))}
//                 </div>
//               )}
//             </motion.div>
//           )}

//           {/* Descrizione a DESTRA */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="w-1/2 bg-sfondo-card rounded-lg p-8 shadow-lg overflow-y-auto h-3/4"
//           >
//             <div className="space-y-6">
//               <div>
//                 <h1 className="text-4xl font-bold mb-2 text-gray-900">
//                   {opera.Titolo}
//                 </h1>
//                 {opera.Data && (
//                   <p className="text-lg text-verde font-semibold">
//                     {opera.Data}
//                   </p>
//                 )}
//               </div>

//               {opera.Descrizione && (
//                 <div>
//                   <h2 className="text-lg font-semibold text-gray-800 mb-2">
//                     Descrizione
//                   </h2>
//                   <p className="text-gray-700 leading-relaxed">
//                     {opera.Descrizione}
//                   </p>
//                 </div>
//               )}

//               {/* Grid di informazioni */}
//               <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
//                 {opera.Tipo && (
//                   <div>
//                     <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
//                       Tecnica
//                     </p>
//                     <p className="text-lg text-verde font-semibold">
//                       {opera.Tipo}
//                     </p>
//                   </div>
//                 )}

//                 {opera.Tecnica && (
//                   <div>
//                     <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
//                       Materiali
//                     </p>
//                     <p className="text-lg text-verde font-semibold">
//                       {opera.Tecnica}
//                     </p>
//                   </div>
//                 )}

//                 {opera.Categoria && (
//                   <div>
//                     <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
//                       Categoria
//                     </p>
//                     <p className="text-lg text-verde font-semibold">
//                       {opera.Categoria}
//                     </p>
//                   </div>
//                 )}
//               </div>

//               {/* Bottone torna alla galleria */}
//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="pt-4"
//               >
//                 <Link
//                   href="/gallery"
//                   className="w-full block text-center px-6 py-3 bg-verde text-white font-semibold rounded-lg hover:bg-arancione transition-colors duration-300"
//                 >
//                   Torna alla galleria
//                 </Link>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Opera } from "@/types/opera";
import { useState } from "react";

interface OperaDetailProps {
  opera: Opera;
}

export default function OperaDetail({ opera }: OperaDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    if (opera.Foto) {
      setCurrentImageIndex(
        (prevIndex) =>
          (prevIndex - 1 + opera.Foto!.length) % opera.Foto!.length,
      );
    }
  };

  const goToNext = () => {
    if (opera.Foto) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % opera.Foto!.length);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };
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
          {/* Slider Foto */}
          {opera.Foto && opera.Foto.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full"
            >
              <div className="relative w-full bg-sfondo rounded-lg overflow-hidden shadow-lg">
                {/* Immagine principale */}
                <div className="relative w-full aspect-video">
                  <Image
                    src={
                      "http://localhost:1337" +
                      opera.Foto[currentImageIndex].url
                    }
                    alt={`${opera.Titolo} - foto ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Pulsanti frecce */}
                {opera.Foto.length > 1 && (
                  <>
                    <button
                      onClick={goToPrevious}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-colors duration-300 z-10"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={goToNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-colors duration-300 z-10"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                {/* Contatore foto */}
                {opera.Foto.length > 1 && (
                  <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {currentImageIndex + 1} / {opera.Foto.length}
                  </div>
                )}
              </div>

              {/* Miniature */}
              {opera.Foto.length > 1 && (
                <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                  {opera.Foto.map((photo, index) => (
                    <motion.button
                      key={index}
                      onClick={() => goToSlide(index)}
                      whileHover={{ scale: 1.05 }}
                      className={`relative shrink-0 w-20 h-20 rounded-lg overflow-hidden shadow-md transition-all duration-300 ${
                        currentImageIndex === index
                          ? "ring-2 ring-verde opacity-100"
                          : "opacity-60 hover:opacity-80"
                      }`}
                    >
                      <Image
                        src={"http://localhost:1337" + photo.url}
                        alt={`${opera.Titolo} - miniatura ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </motion.button>
                  ))}
                </div>
              )}
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
                {opera.Titolo}
              </h1>
              {opera.Data && (
                <p className="text-lg text-verde font-semibold">{opera.Data}</p>
              )}
            </div>

            {opera.Descrizione && (
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Descrizione
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {opera.Descrizione}
                </p>
              </div>
            )}

            {/* Grid di informazioni */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
              {opera.Tipo && (
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    Tecnica
                  </p>
                  <p className="text-lg text-verde font-semibold">
                    {opera.Tipo}
                  </p>
                </div>
              )}

              {opera.Tecnica && (
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    Materiali
                  </p>
                  <p className="text-lg text-verde font-semibold">
                    {opera.Tecnica}
                  </p>
                </div>
              )}

              {opera.Categoria && (
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    Categoria
                  </p>
                  <p className="text-lg text-verde font-semibold">
                    {opera.Categoria}
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
