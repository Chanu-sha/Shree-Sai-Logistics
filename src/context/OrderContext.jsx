import React, { createContext, useContext, useState, useEffect } from "react";
import { getAllOrders, deleteOrder as apiDeleteOrder } from "../api/orderApi";

const OrderContext = createContext();

export const useOrders = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const data = await getAllOrders();
      setOrders(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setLoading(false);
    }
  };
const deleteOrder = async (consignmentNo) => {
  try {
    await apiDeleteOrder(consignmentNo);
    setOrders((prevOrders) =>
      prevOrders.filter((order) => order.consignmentNo !== consignmentNo)
    );
  } catch (error) {
    console.error("Error deleting order:", error);
  }
};


  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <OrderContext.Provider
      value={{ orders, fetchOrders, loading, deleteOrder }}
    >
      {children}
    </OrderContext.Provider>
  );
};
