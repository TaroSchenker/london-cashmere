import { IOrder } from "../types";
import { handleErrors } from "../utils/handleApiErrors";
import { instance } from "./instance";

export const getAllOrders = async () => {
  const { error, data } = await handleErrors(instance.get<IOrder[]>("/orders"));
  if (error) {
    throw new Error(error.message);
  }
  return data?.data as IOrder[];
};

export const getOrderById = async (id: string) => {
  const { error, data } = await handleErrors(
    instance.get<IOrder>(`/orders/${id}`),
  );
  if (error) {
    throw new Error(error.message);
  }
  return data?.data as IOrder;
};

export const createOrder = async (order: IOrder) => {
  const { error, data } = await handleErrors(
    instance.post<IOrder>("/orders", order),
  );
  if (error) {
    throw new Error(error.message);
  }
  return data?.data as IOrder;
};

export const updateOrder = async (order: IOrder) => {
  const { error, data } = await handleErrors(
    instance.put<IOrder>(`/orders/${order._id}`, order),
  );
  if (error) {
    throw new Error(error.message);
  }
  return data?.data as IOrder;
};
