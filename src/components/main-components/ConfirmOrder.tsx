"use client";
import { useAppSelector } from "@/redux/store";
import { ProductType } from "@/types/ProductType";
import Image from "next/image";
import { PlaceOrderButton } from "../buttons/PlaceOrderButton";
import { BackToCartButton } from "../buttons/BackToCartButton";
import { OrderType } from "@/types/OrderType";

export const ConfirmOrder = ({
  setIsCheckoutVisible,
}: {
  setIsCheckoutVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const cartList = useAppSelector((state) => state.cartReducer.products);

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
    <div className="border border-gray-900 p-2 rounded-xl">
      <h1>Aqui estão todos os produtos que você adicionou ao carrinho!</h1>
      {cartList.map((product, index) => {
        return (
          <div key={index}>
            <div className="flex items-center mb-6 mt-8">
              <Image
                className="rounded-full object-cover object-center w-12 h-12"
                src={product.image}
                alt={product.name}
                width={100}
                height={100}
              />
              <div className="flex ml-4 flex-col ">
                <h1 className="font-bold capitalize text-center">
                  {product.name}
                </h1>
                <h1>Quantidade: {product.quantity}</h1>
                <h1>Preço: R${productBundlePrice(product)}</h1>
              </div>
            </div>
          </div>
        );
      })}
      <h1>TOTAL: R${orderPrice.toFixed(2)}</h1>
      <BackToCartButton onClick={onBackToCartButton} />
      <PlaceOrderButton onClick={() => onPlaceOrderClick(order)} />
    </div>
  );
};
