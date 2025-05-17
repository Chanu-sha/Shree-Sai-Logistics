import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_MAIN_URL;

export const getAllOrders = async () => {
  const res = await axios.get(API_URL + "/");
  return res.data;
};

export const getOrderCounts = async () => {
  const res = await axios.get(API_URL + "/counts");
  return res.data;
};

export const addOrder = async (formData) => {
  const res = await axios.post(API_URL + "/add", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

export const updateOrder = async (orderId, formData) => {
  const res = await axios.put(`${API_URL}/update/${orderId}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

export const deleteOrder = async (consignmentNo) => {
  const res = await axios.delete(`${API_URL}/delete/${consignmentNo}`);
  return res.data;
};

export const getOrderByConsignmentNo = async (consignmentNo) => {
  const res = await axios.get(`${API_URL}/track/${consignmentNo}`);
  return res.data;
};
