import { useCallback } from "react";
import { useCart } from "../hooks/useCart";
import { IProduct } from "../types";

export const useAddToCart = (product: IProduct) => {
  const { addToCart } = useCart();

  const memoizedAddToCart = useCallback(() => {
    addToCart(product, 0);
  }, [product, addToCart]);

  return memoizedAddToCart;
};
