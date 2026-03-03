export interface FilterOptions {
  search?: string;
  tecnica?: string;
  tipo?: string;
  max?: number | null;
}

export interface StrapiFilters {
  $or?: Array<Record<string, unknown>>;
  [key: string]: unknown;
}

export interface StrapiQuery {
  fields?: string[];
  populate?: Record<string, unknown>;
  sort?: Record<string, string>;
  filters?: Record<string, unknown>;
  pagination?: Record<string, number>;
}

export interface StrapiResponse {
  data: StrapiItem[];
}

export interface StrapiItem {
  id: number | string;
  attributes?: Record<string, unknown>;
  documentId?: string;
  slug?: string;
  Titolo?: string;
  Descrizione?: string;
  Tipo?: string;
  Tecnica?: string;
  Categoria?: string;
  Data?: string;
  Foto?: Record<string, unknown>;
}

export interface StrapiPhotoItem {
  id: number | string;
  attributes?: Record<string, unknown>;
  documentId?: string;
  name?: string;
  url?: string;
}
