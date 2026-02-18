import qs from "qs";
import { Opera } from "@/types/opera";

interface FilterOptions {
  search?: string;
  tecnica?: string;
  tipo?: string;
  max?: number | null;
}

/**
 * Function to fetch data from Strapi Backend with optional filters
 */
export async function getOpere(
  filters: FilterOptions = {},
  revalidateSeconds = 60,
): Promise<Opera[]> {
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

  const query: any = {
    fields: ["Titolo", "Descrizione", "slug", "documentId", "Tecnica", "Tipo"],
    populate: {
      Foto: {
        fields: ["id", "documentId", "name", "url"],
      },
    },
    sort: { createdAt: "desc" },
  };

  // Aggiungi filtri
  const strapiFilters: any = {};

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

  let data: any[] = [];

  try {
    const res = await fetch(url.toString(), {
      next: { revalidate: revalidateSeconds },
    });
    if (!res.ok) {
      throw new Error(`Strapi fetch failed: ${res.status}`);
    }
    const json = await res.json();
    data = json?.data ?? [];
  } catch (error) {
    console.error("Strapi fetch error:", error);
    return [];
  }

  return data.map((item: any) => {
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
        (attrs.Foto?.data
          ? attrs.Foto.data.map((f: any) => {
              const photoUrl = f.attributes?.url ?? f.url;
              // Convert relative URLs to absolute
              return {
                id: f.id,
                documentId: f.attributes?.documentId ?? f.documentId,
                name: f.attributes?.name ?? f.name,
                url: photoUrl,
              };
            })
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

  const query: any = {
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
    const res = await fetch(url.toString(), {
      next: { revalidate: 60 },
    });
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
        (attrs.Foto?.data
          ? attrs.Foto.data.map((f: any) => {
              const photoUrl = f.attributes?.url ?? f.url;
              return {
                id: f.id,
                documentId: f.attributes?.documentId ?? f.documentId,
                name: f.attributes?.name ?? f.name,
                url: photoUrl,
              };
            })
          : attrs.Foto) || [],
    } as Opera;
  } catch (error) {
    console.error("Strapi fetch error:", error);
    return null;
  }
}

export async function getCategories(): Promise<{
  tecnica: string[];
  tipo: string[];
}> {
  const baseUrl =
    process.env.NEXT_PUBLIC_STRAPI_URL ??
    process.env.NEXT_PUBLIC_STRAPI_API_URL;
  if (!baseUrl) {
    throw new Error(
      "Missing Strapi base URL. Set NEXT_PUBLIC_STRAPI_URL (or NEXT_PUBLIC_STRAPI_API_URL).",
    );
  }

  try {
    // Recupera tutte le opere senza paginazione per avere l'intera lista
    const path = "/api/operas";
    const url = new URL(path, baseUrl);

    const query = {
      fields: ["Tecnica", "Tipo"],
      pagination: { limit: 50 }, // Aumenta il limite se necessario
    };

    url.search = qs.stringify(query);

    const res = await fetch(url.toString(), {
      next: { revalidate: 3600 }, // Cache per 1 ora
    });

    if (!res.ok) {
      throw new Error(`Strapi fetch failed: ${res.status}`);
    }

    const json = await res.json();
    const data = json?.data ?? [];

    // Estrai categorie univoche
    const tecnicaSet = new Set<string>();
    const tipoSet = new Set<string>();

    data.forEach((item: any) => {
      const attrs = item.attributes ?? item;
      if (attrs.Tecnica) tecnicaSet.add(attrs.Tecnica);
      if (attrs.Tipo) tipoSet.add(attrs.Tipo);
    });

    return {
      tecnica: Array.from(tecnicaSet).sort(),
      tipo: Array.from(tipoSet).sort(),
    };
  } catch (error) {
    console.error("Error fetching categories from Strapi:", error);
    return {
      tecnica: [],
      tipo: [],
    };
  }
}
