"use client";
import Image from "next/image";
import { products } from "../../../lib/data";
import { AddToCartButton } from "../sub-components/AddToCartButton";

export const Products = () => {
  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  return (
    <div className="bg-[url('/images/bakery.jpg')] bg-cover bg-center sm:flex justify-between">
      <div className="sm:flex grid gap-2 justify-center sm:justify-center items-center flex-1">
        {products.map((product) => {
          return (
            <div
              key={product.name}
              className="flex flex-col bg-white bg-opacity-70 items-center m-4 p-4 rounded-xl"
            >
              <Image
                src={product.image}
                alt={product.name}
                className="sm:w-80 sm:h-80 w-52 h-52 rounded-full object-cover object-center m-2"
              />
              <h1 className="text-2xl font-bold">{product.name}</h1>
              <h2 className="text-xl font-bold">
                R$ {product.price.toFixed(2)}
              </h2>
              <p className="text-center">{product.description}</p>
              <AddToCartButton onClick={handleButtonClick} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
