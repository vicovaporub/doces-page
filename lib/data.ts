import paveImg from "../public/images/paveImg.jpg";
import blueberryCakeImg from "../public/images/blueberryCakeImg.jpg";
import brigadeiroDeOreo from "../public/images/brigadeiroDeOreoImg.jpg";
import alfajor from "../public/images/alfajorImg.jpg";
import palhaItaliana from "../public/images/palhaItalianaImg.jpg";
import cookie from "../public/images/cookieImg.jpg";
import aquelaPalha from "../public/images/aquelaPalha.jpg";
import { ProductType } from "@/types/ProductType";
import boloCortado from "../public/images/boloCortado.jpg";
import boloFruta from "../public/images/boloFruta.jpg";
import cheesecake from "../public/images/cheesecake.jpg";

export const dessertImages = [
  {
    name: "aquela palha",
    src: aquelaPalha,
    alt: "aquela palha",
  },
  {
    name: "bolo cortado",
    src: boloCortado,
    alt: "bolo cortado",
  },
  {
    name: "cheesecake",
    src: cheesecake,
    alt: "cheesecake",
  },
  {
    name: "bolo fruta",
    src: boloFruta,
    alt: "bolo fruta",
  },
  {
    name: "pave",
    src: paveImg,
    alt: "pave",
  },
  {
    name: "blueberry cake",
    src: blueberryCakeImg,
    alt: "blueberry cake",
  },
];

export const products: ProductType[] = [
  {
    id: 1,
    name: "brigadeiro com oreo",
    price: 5.0,
    description: "Brigadeiro com oreo é uma delícia",
    image: brigadeiroDeOreo,
  },
  {
    id: 2,
    name: "alfajor",
    price: 3.0,
    description: "Alfajor é uma delícia",
    image: alfajor,
  },
  {
    id: 3,
    name: "palha italiana",
    price: 4.0,
    description: "Palha italiana é uma delícia",
    image: palhaItaliana,
  },
  {
    id: 4,
    name: "cookie",
    price: 2.0,
    description: "Cookie é uma delícia",
    image: cookie,
  },
];
