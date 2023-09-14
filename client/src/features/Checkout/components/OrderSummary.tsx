// OrderSummary.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { ICartItem } from "../../../context/CartContext";
import OrderItem from "./OrderItem";

interface OrderSummaryProps {
  cart: ICartItem[];
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ cart }) => {
  const totalAmount = cart.reduce(
    (total, cartItem) => total + cartItem.product.price * cartItem.quantity,
    0,
  );

  return (
    <div className="p-8 border-2 border-gray-300 rounded-lg bg-white">
      <div className="flex items-center mb-8">
        <FontAwesomeIcon
          icon={faShoppingBag}
          className="mr-4 text-3xl text-neutral-dark"
        />
        <h3 className="text-3xl font-bold">Order Summary</h3>
      </div>
      <ul>
        {cart.map((product) => (
          <OrderItem product={product} key={product.product._id} />
        ))}
      </ul>
      <div className="mt-8 border-t border-gray-200 pt-8">
        <span className="text-3xl font-extrabold">
          Total Amount: £{totalAmount}
        </span>
      </div>
    </div>
  );
};

export default OrderSummary;
