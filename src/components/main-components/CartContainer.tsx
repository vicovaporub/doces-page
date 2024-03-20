"use client";
import { useState } from "react";
import { CartButton } from "../sub-components/CartButton";

export const CartContainer = () => {
  const [isCartContainerHidden, setIsCartContainerHidden] = useState(true);
  const handleCartClick = () => {
    setIsCartContainerHidden(!isCartContainerHidden);
  };
  return (
    <div>
      <CartButton onClick={handleCartClick} />
      {!isCartContainerHidden && (
        <div className="fixed top-12 right-1 h-[80vh] w-[40vh] bg-white p-1 bg-opacity-90">
          <h1>Cart Container</h1>
        </div>
      )}
    </div>
  );
};
