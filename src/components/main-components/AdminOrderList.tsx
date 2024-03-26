"use client";

//TODO - A PAGINA INTEIRA
import { useState } from "react";

export const AdminOrderList = () => {
  /*  const [allOrders, setAllOrders] = useState([]);
  const [groupedOrders, setGroupedOrders] = useState({});

  const getAllOrders = async () => {
    try {
      const response = await fetch(`/api/getAllOrders`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      setAllOrders(data);
      const groupingOrders = groupOrdersByPhone(data);
      setGroupedOrders(groupingOrders);
      console.log(groupedOrders);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const groupOrdersByPhone = (orders: any) => {
    const groupedOrders: { [key: string]: any[] } = {};

    orders.forEach((order: any) => {
      const phone = order.phone;

      if (groupedOrders[phone]) {
        groupedOrders[phone].push(order);
      } else {
        groupedOrders[phone] = [order];
      }
    });

    return groupedOrders;
  };
 */
  return (
    <div>
      <h1>Admin Order List</h1>
      <button onClick={() => console.log("click")}>GET</button>
    </div>
  );
};
