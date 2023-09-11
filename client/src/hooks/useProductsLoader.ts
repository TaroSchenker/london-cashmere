import { getAllProducts } from "../api/products";

export const useProductsLoader = async () => {
  const products = await getAllProducts();
  console.log("Loader test", products);
  return { products };
};
