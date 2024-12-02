export interface IProduct {
  name: string;
  brand: string;
  price: number;
  category: string;
  description: string;
  quantity: number;
  inStock: boolean;
}

export interface SearchTerm {
  brand?: string | number | null;
  category?: string | number | null;
}
