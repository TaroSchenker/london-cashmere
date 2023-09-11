import { getAllProducts, getProductById } from "../api/products";
import { LoaderFunctionArgs } from "react-router-dom";
export const useProductsLoader = async () => {
  try {
    const products = await getAllProducts();
    console.log("Loader test", products);
    return { products };
  } catch (e) {
    console.log("use product loader error:", e);
  }
};

export const useProductByIdLoader = async ({ params }: LoaderFunctionArgs) => {
  try {
    if (!params.id) throw new Error("No product ID provided");
    const product = await getProductById(params.id);
    console.log("product", product);
    return { product };
  } catch (e) {
    throw new Error("use proudct loader error ");
  }
};
