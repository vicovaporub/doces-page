import { StaticImageData } from "next/image";

export interface ProductType {
  name: string;
  price: number;
  description: string;
  image: StaticImageData;
}
