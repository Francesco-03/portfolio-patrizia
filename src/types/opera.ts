export interface Foto {
  id: number;
  documentId: string;
  name: string;
  url: string;
}

export interface Opera {
  _id: string;
  slug: string;
  titolo: string;
  descrizione: string;
  tipo: string;
  foto: Foto[];
}
