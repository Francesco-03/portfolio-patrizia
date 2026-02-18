import { getOperaBySlug } from "@/lib/strapiApi";
import OperaDetail from "@/components/OperaDetail";
import { notFound } from "next/navigation";

interface OperaDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function OperaDetailPage({
  params,
}: OperaDetailPageProps) {
  const { slug } = await params;
  const opera = await getOperaBySlug(slug);

  if (!opera) {
    notFound();
  }

  return <OperaDetail opera={opera} />;
}
