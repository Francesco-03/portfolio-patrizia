import OperaDetail from "@/components/OperaDetail";
import { notFound } from "next/navigation";
import { getOperaBySlugSanity } from "@/lib/saniti_apis";

interface OperaDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function OperaDetailPage({
  params,
}: OperaDetailPageProps) {
  const { slug } = await params;
  const opera = await getOperaBySlugSanity(slug);

  if (!opera) {
    notFound();
  }

  return <OperaDetail opera={opera} />;
}
