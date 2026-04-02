import { createClient } from "next-sanity";
import { defineLive } from "next-sanity/live";
import { createImageUrlBuilder, SanityImageSource } from "@sanity/image-url";
import { Opera } from "@/types/opera";

type SanityOpera = {
  _id: string;
  slug: string | { current?: string };
  titolo: string;
  descrizione: string;
  tipo: string;
  foto?: Array<{ _key: string; asset: unknown }>;
};

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2026-04-01",
  useCdn: true,
});

const builder = createImageUrlBuilder(client);
const urlFor = (source: SanityImageSource) => builder.image(source);

const opereQuery = `
    *[_type=="opera"
    && (!defined($tipo) || tipo == $tipo)] 
    | order(_createdAt desc)[0...$limit]{
        _id, titolo, descrizione, "slug": slug.current, tipo, foto
    }
`;

const operaQuery = `
    *[_type=="opera"
    && slug.current == $slug][0]{
      _id, titolo, descrizione, "slug": slug.current, tipo, foto
    }
`;

export async function getOpereSanity(
  filters: { tipo?: string; max?: number } = {},
): Promise<Opera[]> {
  const data = await client.fetch<SanityOpera[]>(
    opereQuery,
    {
      tipo: filters.tipo ?? null,
      limit: filters.max ?? 100,
    },
    {
      next: { revalidate: 60 },
    },
  );

  return data.map((o) => ({
    _id: o._id,
    slug: typeof o.slug === "string" ? o.slug : (o.slug?.current ?? ""),
    titolo: o.titolo,
    descrizione: o.descrizione,
    tipo: o.tipo,
    foto: (o.foto ?? [])
      .filter((f): f is { _key: string; asset: SanityImageSource } =>
        Boolean(f?.asset),
      )
      .map((f, i) => ({
        id: i + 1,
        documentId: f._key,
        name: `opera-${i + 1}`,
        url: urlFor(f.asset).fit("max").url(),
      })),
  }));
}

export async function getOperaBySlugSanity(slug: string): Promise<Opera> {
  const o = await client.fetch<SanityOpera>(
    operaQuery,
    {
      slug: slug,
    },

    {
      next: { revalidate: 60 },
    },
  );
  return {
    _id: o._id,
    slug: typeof o.slug === "string" ? o.slug : (o.slug?.current ?? ""),
    titolo: o.titolo,
    descrizione: o.descrizione || "",
    tipo: o.tipo,
    foto: (o.foto ?? [])
      .filter((f): f is { _key: string; asset: SanityImageSource } =>
        Boolean(f?.asset),
      )
      .map((f, i) => ({
        id: i + 1,
        documentId: f._key,
        name: `opera-${i + 1}`,
        url: urlFor(f.asset).fit("max").url(),
      })),
  };
}
