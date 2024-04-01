"use client";
import Image from "next/image";
import { products } from "../../../lib/data";
import { AddToCartButton } from "../buttons/AddToCartButton";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cartSlice";
import { ProductType } from "@/types/ProductType";

export const Products = () => {
  const dispatch = useDispatch();

  const onAddToCartClick = (product: ProductType) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="sm:flex justify-center">
      <div className="grid grid-cols-2 gap-40 justify-center sm:justify-center items-center">
        {products.map((product) => {
          return (
            <div
              key={product.name}
              className="flex flex-col items-center m-4 p-4 gap-4 "
            >
              <Image
                src={product.image}
                alt={product.name}
                className="sm:w-80 sm:h-80 w-52 h-52 rounded-full object-cover object-center m-2"
              />
              <h1 className="text-2xl font-bold capitalize">{product.name}</h1>
              <h2 className="text-xl font-bold">
                R$ {product.price.toFixed(2)}
              </h2>
              <p className="text-center">{product.description}</p>
              <AddToCartButton onClick={() => onAddToCartClick(product)} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
