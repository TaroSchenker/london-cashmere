import React, { createContext, useState } from "react";
import { IProduct } from "../types/index";

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

interface CartProviderProps {
  children: React.ReactNode;
  initialValue?: ICartItem[];
}
interface CartContextProps {
  cart: ICartItem[];
  addToCart: (product: IProduct, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, newQuantity: number) => void;
  clearCart: () => void;
  cartItemCount: number;
}

export const CartContext = createContext<CartContextProps | undefined>(
  undefined,
);

export const CartProvider: React.FC<CartProviderProps> = ({
  children,
  initialValue = [],
}) => {
  const [cart, setCart] = useState<ICartItem[]>(initialValue);

  const addToCart = (product: IProduct, quantity: number) => {
    setCart([...cart, { product, quantity }]);
  };

  const removeFromCart = (productId: string) => {
    setCart(cart.filter((item) => item.product._id !== productId));
  };

  const updateQuantity = (productId: string, newQuantity: number) => {
    setCart(
      cart.map((item) =>
        item.product._id === productId
          ? { ...item, quantity: newQuantity }
          : item,
      ),
    );
  };

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
