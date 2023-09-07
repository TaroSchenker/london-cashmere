/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { IProduct } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import CartTotal from "./components/CartTotal/CartTotal";
import CartProductItem from "./components/CartProductItem/CartProductItem";
import { dummyCartData } from "./dummyCartData";

export interface CartProduct extends IProduct {
  quantity: number;
}

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartPage: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const [cartProducts, setCartProducts] =
    useState<CartProduct[]>(dummyCartData);

  const totalAmount = cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );
  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-20 md:hidden"
        ></div>
      )}
      <aside
        className={`bg-white transform top-0 right-0 w-80 h-full fixed shadow-lg
                            transition-transform duration-300 ease-in-out z-30 
                            ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full py-6 px-5 pb-16">
          <button
            onClick={onClose}
            className="self-end bg-transparent p-2 rounded-full hover:bg-gray-200 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
          <div className="flex-grow overflow-y-auto mb-4">
            <ul>
              {cartProducts.map((product, index) => (
                <CartProductItem key={index} product={product} />
              ))}
            </ul>
          </div>
          <CartTotal totalAmount={totalAmount} />
        </div>
      </aside>
    </>
  );
};

export default CartPage;
