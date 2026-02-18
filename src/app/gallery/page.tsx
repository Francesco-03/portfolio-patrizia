import { getOpere, getCategories } from "@/lib/strapiApi";
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
  // Fetcha tutte le categorie disponibili
  const categories = await getCategories();

  return <GalleryClient opere={opere} categories={categories} />;
}
