"use client";
import { useAppSelector } from "@/redux/store";
import { ProductType } from "@/types/ProductType";
import Image from "next/image";
import { PlaceOrderButton } from "../buttons/PlaceOrderButton";
import { BackToCartButton } from "../buttons/BackToCartButton";
import { OrderType } from "@/types/OrderType";
import { useDispatch } from "react-redux";
import { clearCart } from "@/redux/features/cartSlice";

export const Checkout = ({
  setIsCheckoutVisible,
}: {
  setIsCheckoutVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const cartList = useAppSelector((state) => state.cartReducer.products);
  const dispatch = useDispatch();

  const productBundlePrice = (product: ProductType) => {
    return (product.price * (product.quantity || 0)).toFixed(2);
  };

  const orderPrice = cartList.reduce(
    (total, product) => total + product.price * (product.quantity || 0),
    0
  );

  const order = useAppSelector((state) => state.orderReducer.order);

  const onPlaceOrderClick = async (order: OrderType) => {
    try {
      const response = await fetch("/api/placeOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      if (response.status === 200) {
        console.log("Pedido realizado com sucesso!");
        setIsCheckoutVisible(false);
        dispatch(clearCart());
        window.location.href = "/user-orders?orderPlaced=true";
      } else {
        console.log("Erro ao realizar pedido!");
      }
    } catch (error) {
      console.error("Erro ao realizar pedido:", error);
    }
  };

  const onBackToCartButton = () => {
    setIsCheckoutVisible(false);
  };

  return (
    <div className="rounded-xl sm:p-2 p-1">
      <h1 className="text-lg font-bold mb-4  text-center">Resumo do Pedido</h1>
      <div className="border-b border-gray-300 my-2 "></div>
      {cartList.map((product, index) => {
        return (
          <div
            key={index}
            className="flex items-center sm:py-2 py-1 border-gray-200"
          >
            <Image
              className="rounded-full object-cover object-center w-12 h-12"
              src={product.image}
              alt={product.name}
              width={48}
              height={48}
            />
            <div className="flex flex-col ml-2">
              <h1 className="font-bold text-sm capitalize">{product.name}</h1>
              <p>Qtd: {product.quantity}</p>
              <p>R${productBundlePrice(product)}</p>
            </div>
          </div>
        );
      })}
      <h1 className="font-bold sm:mt-8 mt-4 border border-gray-700 rounded-xl px-4 py-2 text-center w-fit  mx-auto">
        Total: R${orderPrice.toFixed(2)}
      </h1>
      <div className="flex sm:mt-4 sm:mb-0 mb-2">
        <BackToCartButton onClick={onBackToCartButton} />
        <PlaceOrderButton onClick={() => onPlaceOrderClick(order)} />
      </div>
    </div>
  );
};
