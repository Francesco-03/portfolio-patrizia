import GalleryClient from "@/components/GalleryClient";
import { getOpereSanity } from "@/lib/saniti_apis";

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

  const opere = await getOpereSanity();

  const categories = {
    tipo: ["Pittura", "Scultura", "Altro"],
  };

  return <GalleryClient opere={opere} categories={categories} />;
}
