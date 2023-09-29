import React from "react";
import { ICartItem } from "../../../../context/CartContext";

interface CartProductItemProps {
  product: ICartItem;
}

const CartProductItem: React.FC<CartProductItemProps> = ({ product }) => {
  return (
    <div className=" flex space-x-4 items-start">
      <img
        src={product.product.imageUrl}
        alt={product.product.name}
        className="w-24 h-24 object-cover"
      />
      <div className="flex-grow">
        <h3 className="text-lg font-semibold mb-1">{product.product.name}</h3>
        <p className="text-gray-600 text-sm mb-2">
          {product.product.description}
        </p>{" "}
        <span className="text-sm">Price: £{product.product.price}</span>
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <span className="text-sm">Quantity: {product.quantity}</span>
          </div>

          <div>
            <span className="text-sm font-semibold">
              Total: £{product.product.price * product.quantity}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProductItem;
