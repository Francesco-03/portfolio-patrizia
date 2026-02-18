"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Opera } from "@/types/opera";

interface OperaCardProps {
  opera: Opera;
  index?: number;
  variant?: "default" | "gallery";
}

/**
 *
 * @param param0 opera, index, variant (per ora non utilizzata)
 * @returns OperaCard
 */
export default function OperaCard({
  opera,
  index = 0,
  variant = "default",
}: OperaCardProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const hasMultiplePhotos = opera.Foto && opera.Foto.length > 1;
  const photoToShow = opera.Foto && opera.Foto[currentPhotoIndex];

  const handleDotClick = (photoIndex: number) => {
    setCurrentPhotoIndex(photoIndex);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-sfondo-card rounded-lg p-5 hover:shadow-lg transition-shadow shadow-sm"
    >
      <Link href={`/gallery/${opera.slug}`}>
        <div className="w-full relative aspect-3/4 bg-sfondo rounded-md mb-4 overflow-hidden">
          {photoToShow && (
            <motion.div
              key={currentPhotoIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full"
            >
              <Image
                src={photoToShow.url}
                // src={"http://localhost:1337" + photoToShow.url}
                alt={opera.Titolo}
                fill
                className="object-cover rounded-md"
              />
            </motion.div>
          )}
        </div>
      </Link>

      {/* Dots indicatori - solo in gallery con più foto */}
      {hasMultiplePhotos && (
        <div className="flex justify-center gap-2 mb-4">
          {opera.Foto.map((_, photoIndex) => (
            <motion.button
              key={photoIndex}
              onClick={() => handleDotClick(photoIndex)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                photoIndex === currentPhotoIndex
                  ? "bg-arancione w-6"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Foto ${photoIndex + 1}`}
            />
          ))}
        </div>
      )}

      <Link href={`/gallery/${opera.slug}`}>
        <h3 className="text-2xl font-bold mb-2">{opera.Titolo}</h3>
        {/* {opera.Descrizione && (
          <p className="text-md text-verde font-semibold mb-2 line-clamp-2">
            {opera.Descrizione}
          </p>
        )} */}
      </Link>
    </motion.div>
  );
}
