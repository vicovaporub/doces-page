"use client";
import { useState } from "react";
import { CartButton } from "../buttons/CartButton";
import { useAppSelector } from "@/redux/store";
import { ClearCartButton } from "../buttons/ClearCartButton";
import { useDispatch } from "react-redux";
import {
  clearCart,
  decreaseProductQuantityFromCart,
  increaseProductQuantityFromCart,
  removeProductFromCart,
} from "@/redux/features/cartSlice";
import Image from "next/image";
import { PlaceOrderButton } from "../buttons/PlaceOrderButton";
import { ProductType } from "@/types/ProductType";
import { ManageProductQuantityInCartButton } from "../buttons/ManageProductQuantityInCartButton";

export const CartContainer = () => {
  const [isCartContainerHidden, setIsCartContainerHidden] = useState(true);

  const dispatch = useDispatch();

  const products = useAppSelector((state) => state.cartReducer.products);

  const onCartButtonClick = () => {
    setIsCartContainerHidden(!isCartContainerHidden);
  };

  const onClearCartClick = () => {
    dispatch(clearCart());
  };

  const onPlaceOrderClick = () => {
    console.log("Place order");
  };

  const productBundlePrice = (product: ProductType) =>
    (product.price * (product.quantity || 0)).toFixed(2);

  const totalOrderPrice = products
    .reduce(
      (total, product) => total + product.price * (product.quantity || 0),
      0
    )
    .toFixed(2);

  const onIncreaseButtonClick = (product: ProductType) => {
    dispatch(increaseProductQuantityFromCart(product));
  };

  const onDecreaseButtonClick = (product: ProductType) => {
    dispatch(decreaseProductQuantityFromCart(product));
  };

  const onRemoveProductClick = (product: ProductType) => {
    dispatch(removeProductFromCart(product));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <CartButton onClick={onCartButtonClick} />
      {!isCartContainerHidden && (
        <div className="fixed top-12 right-1 h-[80vh] w-[40vh] bg-white p-4 bg-opacity-90 overflow-auto rounded-lg shadow-lg">
          <ul className="space-y-4">
            {products.map((product, index) => {
              return (
                <li
                  className="relative flex justify-between items-start border border-gray-900 rounded-xl p-4"
                  key={index}
                >
                  <div
                    className="border border-gray-900 rounded-xl h-[13rem] w-[8rem] grid 
      items-center justify-center p-2 text-center m-2 bg-gray-100"
                  >
                    <h1 className="capitalize text-lg font-bold">
                      {product.name}
                    </h1>
                    <Image
                      className="rounded-full object-cover object-center w-24 h-24"
                      src={product.image}
                      alt={product.name}
                    />
                    <h2 className="text-lg font-medium mt-2">
                      R$ {product.price.toFixed(2)}
                    </h2>
                  </div>
                  <div className="flex flex-col space-y-2 absolute top-20 right-4 items-center ">
                    <div className="flex gap-6">
                      <div className="bg-yellow-500 text-white rounded-full mt-6 w-8 text-center items-center justify-center font-bold text-xl">
                        <ManageProductQuantityInCartButton
                          onClick={() => onDecreaseButtonClick(product)}
                        >
                          -
                        </ManageProductQuantityInCartButton>
                      </div>
                      <div>
                        <p className="text-lg font-bold mt-6">
                          {product.quantity}
                        </p>
                      </div>
                      <div className="bg-green-500 text-white rounded-full mt-6 w-8 text-center items-center justify-center font-bold text-xl">
                        <ManageProductQuantityInCartButton
                          onClick={() => onIncreaseButtonClick(product)}
                        >
                          +
                        </ManageProductQuantityInCartButton>
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-bold">
                        R$ {productBundlePrice(product)}
                      </p>
                    </div>
                    <div className="bg-red-500 text-white rounded-full px-2 py-1 w-[5.2rem]">
                      <ManageProductQuantityInCartButton
                        onClick={() => onRemoveProductClick(product)}
                      >
                        Remover
                      </ManageProductQuantityInCartButton>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <p className="text-lg font-bold">Total: R$ {totalOrderPrice}</p>
          <ClearCartButton onClick={() => onClearCartClick()} />
          <PlaceOrderButton onClick={onPlaceOrderClick} />
        </div>
      )}
    </div>
  );
};
