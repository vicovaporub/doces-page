"use client";
import { OrderType } from "@/types/OrderType";
import { useState } from "react";

const getAllOrders = async () => {
  try {
    const response = await fetch(`/api/getAllOrders`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const AdminOrderList = () => {
  const [orders, setOrders] = useState<OrderType[]>([]);

  const handleGetAllOrders = async () => {
    const data = await getAllOrders();
    setOrders(data);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleGetAllOrders}
      >
        Carregar Pedidos
      </button>
      <div className="mt-4">
        {orders
          .map((order) => (
            <div
              key={order._id}
              className="border border-gray-300 rounded-lg p-4 mb-4"
            >
              <div className="flex justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">{order.username}</h3>
                  <p className="mb-1">{order.phone}</p>
                </div>
              </div>
              <div className="flex gap-10 items-center mt-8">
                <ul className="flex-1">
                  {order.order.map((item, index) => (
                    <li
                      key={item.name}
                      className={
                        index < order.order.length - 1
                          ? "border-b border-gray-300"
                          : ""
                      }
                    >
                      <p className="font-bold capitalize">{item.name}</p>
                      <p>Preço: R${item.price}</p>
                      <p>Quantidade: {item.quantity}</p>
                    </li>
                  ))}
                </ul>
                <div>
                  <p className="mb-1">Date: {order.date}</p>
                  <p className="mb-1 font-bold">Total: R${order.total}</p>
                  <p className="mb-1">
                    Status:{" "}
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
            </div>
          ))
          .reverse()}
      </div>
    </div>
  );
};
