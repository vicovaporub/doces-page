"use client";
import { PlaceOrderButton } from "@/components/buttons/PlaceOrderButton";
import { clearCart } from "@/redux/features/cartSlice";
import { useAppSelector } from "@/redux/store";
import { OrderType } from "@/types/OrderType";
import { ProductType } from "@/types/ProductType";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Checkout() {
  const cartList = useAppSelector((state) => state.cartReducer.products);
  const order = useAppSelector((state) => state.orderReducer.order);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const productBundlePrice = (product: ProductType) => {
    return (product.price * (product.quantity || 0)).toFixed(2);
  };

  const orderPrice = cartList.reduce(
    (total, product) => total + product.price * (product.quantity || 0),
    0
  );

  const postOrderToDatabase = async (order: OrderType) => {
    try {
      setLoading(true);
      const response = await fetch("/api/placeOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      if (response.status === 200) {
        console.log("Pedido realizado com sucesso!");
        router.push("/user-orders?orderPlaced=true");
      } else {
        console.log("Erro ao realizar pedido!");
      }
    } catch (error) {
      console.error("Erro ao realizar pedido:", error);
    } finally {
      setLoading(false);
    }
  };

  const onPlaceOrderClick = async () => {
    await postOrderToDatabase(order);
    dispatch(clearCart());
  };

  return (
    <div className="flex justify-center h-[90vh] mt-10">
      <div className="rounded-xl sm:p-2 p-1 sm:w-full max-w-md">
        <h1 className="text-lg font-bold mb-4 text-center">Resumo do Pedido</h1>
        <div className="border-b border-gray-300 my-2"></div>
        {cartList.length === 0 ? (
          <p className="text-center">Seu carrinho está vazio.</p>
        ) : (
          cartList.map((product, index) => (
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
          ))
        )}
        {cartList.length > 0 && (
          <>
            <h1 className="font-bold sm:mt-8 mt-4  rounded-xl px-4 py-2 text-center text-xl w-fit mx-auto">
              Total do Pedido: R${orderPrice.toFixed(2)}
            </h1>
            <div className="flex sm:mt-4 sm:mb-0 mb-2 justify-center">
              {loading ? (
                <p>Processando pedido...</p>
              ) : (
                <PlaceOrderButton onClick={onPlaceOrderClick} />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
