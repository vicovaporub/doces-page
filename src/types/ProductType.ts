import { StaticImageData } from "next/image";

export interface ProductType {
  id: number;
  name: string;
  price: number;
  description: string;
  image: StaticImageData;
  quantity?: number;
}
