import { getAllProducts } from "../api/products";

export const useProductsLoader = async () => {
  try {
    const products = await getAllProducts();
    console.log("Loader test", products);
    return { products };
  } catch (e) {
    console.log("use product loader error:", e);
  }
};
