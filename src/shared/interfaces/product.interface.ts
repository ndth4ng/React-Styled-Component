export interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  sizes: Size[];
  colors: string[];
  categories: string[];
  // TODO: Multiple images string[]
  images: string;
  createdAt: Date;
  updatedAt: Date;
}

type Size = "S" | "M" | "L" | "XL" | "XXL";
