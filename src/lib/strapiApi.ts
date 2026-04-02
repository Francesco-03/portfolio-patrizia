import qs from "qs";
import { Opera } from "@/types/opera";
import {
  FilterOptions,
  StrapiQuery,
  StrapiFilters,
  StrapiItem,
  StrapiResponse,
  StrapiPhotoItem,
} from "@/types/api_types";

/**
 * Function to fetch data from Strapi Backend with optional filters
 */
export async function getOpere(
  filters: FilterOptions = {},
  revalidateSeconds = 60,
): Promise<Opera[]> {
  // Warm up Strapi first

  const baseUrl =
    process.env.NEXT_PUBLIC_STRAPI_URL ??
    process.env.NEXT_PUBLIC_STRAPI_API_URL;
  if (!baseUrl) {
    throw new Error(
      "Missing Strapi base URL. Set NEXT_PUBLIC_STRAPI_URL (or NEXT_PUBLIC_STRAPI_API_URL).",
    );
  }
  const path = "/api/operas";
  const url = new URL(path, baseUrl);

  const query: StrapiQuery = {
    fields: ["Titolo", "Descrizione", "slug", "documentId", "Tecnica", "Tipo"],
    populate: {
      Foto: {
        fields: ["id", "documentId", "name", "url"],
      },
    },
    sort: { createdAt: "desc" },
  };

  // Aggiungi filtri
  const strapiFilters: StrapiFilters = {};

  if (filters.search) {
    strapiFilters.$or = [
      { Titolo: { $containsi: filters.search } },
      { Descrizione: { $containsi: filters.search } },
    ];
  }

  if (filters.tecnica) {
    strapiFilters.Tecnica = { $eq: filters.tecnica };
  }

  if (filters.tipo) {
    strapiFilters.Tipo = { $eq: filters.tipo };
  }

  if (Object.keys(strapiFilters).length > 0) {
    query.filters = strapiFilters;
  }

  if (filters.max !== null && filters.max !== undefined) {
    query.pagination = { limit: filters.max };
  }

  url.search = qs.stringify(query);

  let data: StrapiItem[] = [];

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000); // 10 seconds timeout

    const res = await fetch(url.toString(), {
      next: { revalidate: revalidateSeconds },
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (!res.ok) {
      throw new Error(`Strapi fetch failed: ${res.status}`);
    }
    const json = await res.json();
    data = json?.data ?? [];
  } catch (error) {
    console.error("Strapi fetch error:", error);
    console.error(
      "Base URL was:",
      process.env.NEXT_PUBLIC_STRAPI_URL ||
        process.env.NEXT_PUBLIC_STRAPI_API_URL,
    );
    return [];
  }

  return data.map((item: StrapiItem) => {
    const attrs = item.attributes ?? item;

    return {
      id: item.id ?? attrs.id,
      documentId: attrs.documentId,
      slug: attrs.slug,
      Titolo: attrs.Titolo,
      Descrizione: attrs.Descrizione,
      Tipo: attrs.Tipo,
      Tecnica: attrs.Tecnica,
      Foto:
        ((attrs.Foto as Record<string, unknown> | undefined)?.data
          ? (attrs.Foto as Record<string, Array<StrapiPhotoItem>>).data.map(
              (f: StrapiPhotoItem) => {
                const photoUrl = f.attributes?.url ?? f.url;
                // Convert relative URLs to absolute
                return {
                  id: f.id,
                  documentId: f.attributes?.documentId ?? f.documentId,
                  name: f.attributes?.name ?? f.name,
                  url: photoUrl,
                };
              },
            )
          : attrs.Foto) || [],
    } as Opera;
  });
}

/**
 * Funzione per recuperare tutte le categorie (Tecnica e Tipo) univoche da Strapi
 */
/**
 * Funzione per recuperare una singola opera per slug
 */
export async function getOperaBySlug(slug: string): Promise<Opera | null> {
  // Warm up Strapi first

  const baseUrl =
    process.env.NEXT_PUBLIC_STRAPI_URL ??
    process.env.NEXT_PUBLIC_STRAPI_API_URL;
  if (!baseUrl) {
    throw new Error(
      "Missing Strapi base URL. Set NEXT_PUBLIC_STRAPI_URL (or NEXT_PUBLIC_STRAPI_API_URL).",
    );
  }

  const path = "/api/operas";
  const url = new URL(path, baseUrl);

  const query: StrapiQuery = {
    filters: {
      slug: { $eq: slug },
    },
    populate: {
      Foto: {
        fields: ["id", "documentId", "name", "url"],
      },
    },
  };

  url.search = qs.stringify(query);

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000); // 10 seconds timeout

    const res = await fetch(url.toString(), {
      next: { revalidate: 60 },
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (!res.ok) {
      throw new Error(`Strapi fetch failed: ${res.status}`);
    }
    const json = await res.json();
    const data = json?.data?.[0];

    if (!data) return null;

    const attrs = data.attributes ?? data;

    return {
      id: data.id ?? attrs.id,
      documentId: attrs.documentId,
      slug: attrs.slug,
      Titolo: attrs.Titolo,
      Descrizione: attrs.Descrizione,
      Tipo: attrs.Tipo,
      Tecnica: attrs.Tecnica,
      Categoria: attrs.Categoria,
      Data: attrs.Data,
      Foto:
        ((attrs.Foto as Record<string, unknown> | undefined)?.data
          ? (attrs.Foto as Record<string, Array<StrapiPhotoItem>>).data.map(
              (f: StrapiPhotoItem) => {
                const photoUrl = f.attributes?.url ?? f.url;
                return {
                  id: f.id,
                  documentId: f.attributes?.documentId ?? f.documentId,
                  name: f.attributes?.name ?? f.name,
                  url: photoUrl,
                };
              },
            )
          : attrs.Foto) || [],
    } as Opera;
  } catch (error) {
    console.error("Strapi fetch error:", error);
    return null;
  }
}
