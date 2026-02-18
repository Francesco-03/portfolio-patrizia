import { Opera } from "@/types/opera";
import qs from "qs";
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function fetchOpere(revalidateSeconds = 60): Promise<Opera[]> {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
  const path = "/api/operas";
  console.log(baseUrl);
  const url = new URL(path, baseUrl);
  url.search = qs.stringify({
    fields: ["Titolo", "Descrizione", "slug", "documentId", "Tipo"],
    populate: {
      Foto: {
        fields: ["id", "documentId", "name", "url"],
      },
    },
    sort: { createdAt: "desc" },
  });

  const res = await fetch(url.toString(), {
    next: { revalidate: revalidateSeconds },
  });
  if (!res.ok) throw new Error(`Strapi fetch failed: ${res.status}`);
  const json = await res.json();
  const data = json?.data ?? [];

  return data;
  //   .data.map(mapOpera);
}
