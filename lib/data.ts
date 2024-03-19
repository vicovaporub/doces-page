import cakeImg from "../public/images/cakeImg.jpg";
import paveImg from "../public/images/paveImg.jpg";
import chocolatePuddingImg from "../public/images/chocolatePuddingImg.jpg";
import blueberryCakeImg from "../public/images/blueberryCakeImg.jpg";
import brigadeiroDeOreo from "../public/images/brigadeiroDeOreoImg.jpg";
import alfajor from "../public/images/alfajorImg.jpg";
import palhaItaliana from "../public/images/palhaItalianaImg.jpg";
import cookie from "../public/images/cookieImg.jpg";

export const dessertImages = [
  {
    name: "cake",
    src: cakeImg,
    alt: "cake",
  },
  {
    name: "chocolate pudding",
    src: chocolatePuddingImg,
    alt: "chocolate pudding",
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

export const products = [
  {
    name: "brigadeiro com oreo",
    price: 5.0,
    description: "Brigadeiro com oreo é uma delícia",
    image: brigadeiroDeOreo,
  },
  {
    name: "alfajor",
    price: 3.0,
    description: "Alfajor é uma delícia",
    image: alfajor,
  },
  {
    name: "palha italiana",
    price: 4.0,
    description: "Palha italiana é uma delícia",
    image: palhaItaliana,
  },
  {
    name: "cookie",
    price: 2.0,
    description: "Cookie é uma delícia",
    image: cookie,
  },
];
