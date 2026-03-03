import { getOpere } from "@/lib/strapiApi";
import GalleryClient from "@/components/GalleryClient";

// interface GalleryPageProps {
//   searchParams: Promise<{
//     tipo?: string;
//   }>;
// }

export default async function Gallery() {
  // const params = await searchParams;

  // const opere = await getOpere({
  //   search: params.search,
  //   tipo: params.tipo,
  // });

  const opere = await getOpere();

  const categories = {
    tipo: ["Pittura", "Scultura", "Altro"],
  };

  return <GalleryClient opere={opere} categories={categories} />;
}
