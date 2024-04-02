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
    <div id="products" className="flex justify-center">
      <div className="grid sm:grid-cols-2 sm:gap-40 justify-center items-center">
        {products.map((product) => {
          return (
            <>
              <div
                key={product.name}
                className="flex flex-col items-center sm:m-6 sm:p-6 m-2 p-2 gap-2 sm:gap-4 "
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  className="md:w-80 md:h-80 sm:w-64 sm:h-64 w-48 h-48  rounded-full object-cover object-center m-4"
                />
                <div className="flex flex-col items-center text-center sm:gap-4">
                  <h1 className="text-xl font-bold capitalize">
                    {product.name}
                  </h1>
                  <h2 className="text-lg font-bold">
                    R$ {product.price.toFixed(2)}
                  </h2>
                  <p className="sm:text-base text-sm text-center">
                    {product.description}
                  </p>
                </div>
                <AddToCartButton onClick={() => onAddToCartClick(product)} />
              </div>
              <div className="sm:hidden border-b border-gray-300 my-2 "></div>
            </>
          );
        })}
      </div>
    </div>
  );
};
