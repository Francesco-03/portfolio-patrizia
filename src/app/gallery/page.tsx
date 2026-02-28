import { getOpere } from "@/lib/strapiApi";
import GalleryClient from "@/components/GalleryClient";

interface GalleryPageProps {
  searchParams: Promise<{
    search?: string;
    tecnica?: string;
    tipo?: string;
    anno?: string;
  }>;
}

export default async function Gallery({ searchParams }: GalleryPageProps) {
  // const params = await searchParams;

  // const opere = await getOpere({
  //   search: params.search,
  //   tecnica: params.tecnica,
  //   tipo: params.tipo,
  // });

  const opere = await getOpere();

  // Tecniche legate ai tipi di opera
  const categories = {
    tipo: ["Pittura", "Scultura"],
    tecnichePerTipo: {
      Pittura: ["Olio su tela", "Acquerello", "Disegno"],
      Scultura: ["Terracotta", "Terracotta Smaltata", "Tecnica mista"],
    },
  };

  return <GalleryClient opere={opere} categories={categories} />;
}
