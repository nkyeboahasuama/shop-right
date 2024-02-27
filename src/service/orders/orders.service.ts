import axios from "axios";
import { IOrder } from "../../core/interface";

const ORDER_API = "http://localhost:3001/api/order";

const createOrder = async (newOrder: IOrder) => {
  try {
    const response = await axios.post(`${ORDER_API}/create`, newOrder);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const editOrder = async (updatedOrder: IOrder, id: string) => {
  try {
    const response = await axios.patch(
      `${ORDER_API}/:${id}/edit`,
      updatedOrder
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

// const deleteOrder = async () => {
//   try {
//     const response = await axios.delete(`${ORDER_API}/delete`);
//     console.log(response);
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };

const getUserOrders = () => {
  // get data from api
  // return data
};

export const orderService = {
  createOrder,
  editOrder,
  // deleteOrder,
  getUserOrders,
};
