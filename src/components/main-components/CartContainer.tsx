"use client";
import { useState } from "react";
import { CartButton } from "../sub-components/CartButton";
import { useAppSelector } from "@/redux/store";
import { ClearCartButton } from "../sub-components/ClearCartButton";
import { useDispatch } from "react-redux";
import { clearCart } from "@/redux/features/cartSlice";
import Image from "next/image";
import { PlaceOrderButton } from "../sub-components/PlaceOrderButton";

export const CartContainer = () => {
  const [isCartContainerHidden, setIsCartContainerHidden] = useState(true);

  const dispatch = useDispatch();

  const items = useAppSelector((state) => state.cartReducer.items);

  const onCartButtonClick = () => {
    setIsCartContainerHidden(!isCartContainerHidden);
  };

  const onClearCartClick = () => {
    dispatch(clearCart());
  };

  const onPlaceOrderClick = () => {
    console.log("Place order");
  };

  return (
    <div>
      <CartButton onClick={onCartButtonClick} />
      {!isCartContainerHidden && (
        <div className="fixed top-12 right-1 h-[80vh] w-[40vh] bg-white p-1 bg-opacity-90 overflow-auto">
          <ul>
            {items.map((item, index) => {
              return (
                <li className="relative" key={index}>
                  <div
                    className="border border-gray-900 rounded-xl w-[8rem] grid 
                  items-center justify-center p-1 text-center m-1"
                  >
                    <h1 className="capitalize">{item.name}</h1>
                    <Image
                      className="rounded-full object-cover object-center w-24 h-24"
                      src={item.image}
                      alt={item.name}
                    />
                    <h2>R$ {item.price.toFixed(2)}</h2>
                  </div>
                </li>
              );
            })}
          </ul>
          <ClearCartButton onClick={() => onClearCartClick()} />
          <PlaceOrderButton onClick={onPlaceOrderClick} />
        </div>
      )}
    </div>
  );
};
