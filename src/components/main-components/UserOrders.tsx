"use client";
import { useAppSelector } from "@/redux/store";
import { OrderType } from "@/types/OrderType";
import { useEffect, useState } from "react";

export const UserOrders = () => {
  const user = useAppSelector((state) => state.authReducer.value);
  const [userOrders, setUserOrders] = useState([] as OrderType[]);

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
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getUserOrders();
  });

  return (
    <>
      <div className="flex flex-col gap-2">
        <h1>Hello {user.username}, here are your orders:</h1>
        <ul>
          {userOrders
            .map((order) => (
              <li className="border border-gray-900" key={order._id}>
                <ol>
                  {order.order.map((product) => (
                    <li key={product.name}>
                      <ol>
                        <li>Produto: {product.name}</li>
                        <li>Quantidade: {product.quantity}</li>
                      </ol>
                    </li>
                  ))}
                  <li>Total: {order.total}</li>
                </ol>
              </li>
            ))
            .reverse()}
        </ul>
      </div>
    </>
  );
};
