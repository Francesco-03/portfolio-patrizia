export interface Foto {
  id: number;
  documentId: string;
  name: string;
  url: string;
}

export interface Opera {
  id: number;
  documentId: string;
  slug: string;
  Titolo: string;
  Descrizione: string;
  Categoria?: string;
  Tecnica?: string;
  Data?: string;
  Tipo?: string;
  Foto: Foto[];
}
