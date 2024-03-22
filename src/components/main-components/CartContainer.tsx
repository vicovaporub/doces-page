"use client";
import { useState } from "react";
import { CartButton } from "../buttons/CartButton";
import { useAppSelector } from "@/redux/store";
import { ClearCartButton } from "../buttons/ClearCartButton";
import { useDispatch } from "react-redux";
import { addToCart, clearCart } from "@/redux/features/cartSlice";
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
    dispatch(addToCart(product));
  };

  const onDecreaseButtonClick = (product: ProductType) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <CartButton onClick={onCartButtonClick} />
      {!isCartContainerHidden && (
        <div className="fixed top-12 right-1 h-[80vh] w-[40vh] bg-white p-1 bg-opacity-90 overflow-auto">
          <ul>
            {products.map((product, index) => {
              return (
                <li className="relative" key={index}>
                  <div
                    className="border border-gray-900 rounded-xl w-[8rem] grid 
                  items-center justify-center p-1 text-center m-1"
                  >
                    <h1 className="capitalize">{product.name}</h1>
                    <Image
                      className="rounded-full object-cover object-center w-24 h-24"
                      src={product.image}
                      alt={product.name}
                    />
                    <h2>R$ {product.price.toFixed(2)}</h2>
                    <p>Quantidade: {product.quantity}</p>
                    <p>Preço: R$ {productBundlePrice(product)}</p>
                  </div>
                  <ManageProductQuantityInCartButton
                    onClick={() => onIncreaseButtonClick(product)}
                  >
                    +
                  </ManageProductQuantityInCartButton>
                  <ManageProductQuantityInCartButton
                    onClick={() => onIncreaseButtonClick(product)}
                  >
                    -
                  </ManageProductQuantityInCartButton>
                </li>
              );
            })}
          </ul>
          <p>Total: R$ {totalOrderPrice}</p>
          <ClearCartButton onClick={() => onClearCartClick()} />
          <PlaceOrderButton onClick={onPlaceOrderClick} />
        </div>
      )}
    </div>
  );
};
