"use client";
import { useAppSelector } from "@/redux/store";
import { OrderType } from "@/types/OrderType";
import { useEffect, useState } from "react";

export const UserOrders = () => {
  const user = useAppSelector((state) => state.authReducer.value);
  const [userOrders, setUserOrders] = useState([] as OrderType[]);
  const [isNewOrderPlaced, setIsNewOrderPlaced] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [displayedOrders, setDisplayedOrders] = useState([] as OrderType[]);

  useEffect(() => {
    const getUserOrders = async () => {
      try {
        const response = await fetch(`/api/getUserOrders?phone=${user.phone}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setUserOrders(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setIsLoading(false);
      }
    };

    getUserOrders();
    if (window.location.href.includes("?orderPlaced=true")) {
      setIsNewOrderPlaced(true);
    }
  }, [user.phone]);

  useEffect(() => {
    if (!isLoading) {
      const interval = setInterval(() => {
        if (userOrders.length > displayedOrders.length) {
          setDisplayedOrders((prevDisplayedOrders) => [
            ...prevDisplayedOrders,
            userOrders[prevDisplayedOrders.length],
          ]);
        } else {
          clearInterval(interval);
        }
      }, 200);
      return () => clearInterval(interval);
    }
  }, [isLoading, userOrders, displayedOrders.length]);

  return (
    <>
      {user.isLogged === false ? (
        <div className="max-w-4xl mx-auto min-h-[90vh] p-4">
          <h1 className="text-2xl font-bold mt-4 mb-4 text-center">
            É necessário fazer o login para ver seus pedidos!
          </h1>
        </div>
      ) : (
        <div className="sm:max-w-4xl sm:mx-auto sm:min-h-[100vh] p-4">
          {isNewOrderPlaced && (
            <h1 className="text-green-500 mb-4 text-center">
              Pedido realizado com sucesso! Confira abaixo seus pedidos:
            </h1>
          )}
          <h1 className="text-2xl font-bold mt-4 mb-4 text-center">
            Olá {user.username}, aqui estão seus pedidos:
          </h1>
          {isLoading && <div className="text-center">Carregando...</div>}
          <div className="flex flex-col gap-4 mt-8">
            {displayedOrders
              .map((order) => (
                <div
                  className="border border-gray-300 rounded-lg p-4 flex flex-wrap items-center"
                  key={order._id}
                >
                  <div className="flex-1 pr-4">
                    {order.order.map((product, index) => (
                      <div key={product.name} className="">
                        <p className="font-bold capitalize mb-1">
                          {product.name}
                        </p>
                        <p>Quantidade: {product.quantity}</p>
                        {index !== order.order.length - 1 && (
                          <div className="border-b border-gray-300 my-2 "></div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-4 p-4 items-start ">
                    <p className="text-center sm:text-left">
                      <span className="font-bold">Data:</span> {order.date}
                    </p>
                    <p className="text-center sm:text-left">
                      <span className="font-bold">Total:</span> R${order.total}
                    </p>
                    <p className="text-center sm:text-left">
                      <span className="font-bold">Status: </span>
                      <span
                        className={
                          order.status === "pending"
                            ? "text-yellow-500"
                            : order.status === "confirmed"
                            ? "text-green-500"
                            : "text-red-500"
                        }
                      >
                        {order.status === "pending"
                          ? "A confirmar"
                          : order.status === "confirmed"
                          ? "Confirmado"
                          : "Cancelado"}
                      </span>
                    </p>
                  </div>
                </div>
              ))
              .reverse()}
          </div>
        </div>
      )}
    </>
  );
};
