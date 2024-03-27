"use client";

import { OrderType } from "@/types/OrderType";
import { useState } from "react";

export const AdminOrderList = () => {
  const [ordersList, setOrdersList] = useState([] as OrderType[]);

  const getAllOrders = async () => {
    try {
      const response = await fetch(`/api/getAllOrders`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const orders = await response.json();
      console.log(orders);
      return orders;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const groupOrdersByPhoneNumber = (orders: OrderType[]) => {
    return orders.reduce((acc: { [key: string]: OrderType[] }, order) => {
      const phoneNumber = order.phone;
      if (!acc[phoneNumber]) {
        acc[phoneNumber] = [];
      }
      acc[phoneNumber].push(order);
      return acc;
    }, {});
  };

  const test = async () => {
    try {
      await getAllOrders().then((orders) => {
        const groupedOrders = groupOrdersByPhoneNumber(orders);
        console.log(groupedOrders);
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>Admin Order List</h1>
      <button onClick={test}>GET ORDERS LIST</button>
    </div>
  );
};
