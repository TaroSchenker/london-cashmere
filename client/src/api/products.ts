import { IProduct } from "../types";
import { handleErrors } from "../utils/handleApiErrors";
import { instance } from "./instance";

export const getAllProducts = async (): Promise<IProduct[]> => {
  const { error, data } = await handleErrors(
    instance.get<IProduct[]>("/products"),
  );
  if (error) {
    throw new Error(error.message);
  }
  return data?.data as IProduct[];
};

export const getProductById = async (id: string): Promise<IProduct> => {
  const { error, data } = await handleErrors(
    instance.get<IProduct>(`/products/${id}`),
  );
  if (error) {
    throw new Error(error.message);
  }
  return data?.data as IProduct;
};

export const createProduct = async (product: IProduct): Promise<IProduct> => {
  const { error, data } = await handleErrors(
    instance.post<IProduct>("/products", product),
  );
  if (error) {
    throw new Error(error.message);
  }
  return data?.data as IProduct;
};

export const updateProduct = async (product: IProduct): Promise<IProduct> => {
  const { error, data } = await handleErrors(
    instance.put<IProduct>(`/products/${product._id}`, product),
  );
  if (error) {
    throw new Error(error.message);
  }
  return data?.data as IProduct;
};

export const deleteProduct = async (id: string): Promise<IProduct> => {
  const { error, data } = await handleErrors(
    instance.delete<IProduct>(`/products/${id}`),
  );
  if (error) {
    throw new Error(error.message);
  }
  return data?.data as IProduct;
};
