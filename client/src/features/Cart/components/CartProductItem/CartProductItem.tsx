import React from "react";
import { CartProduct } from "../../CartPage";

interface CartProductItemProps {
  product: CartProduct;
}

const CartProductItem: React.FC<CartProductItemProps> = ({ product }) => {
  return (
    <li className="mb-6 border-b pb-4 flex space-x-4 items-start">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-24 h-24 object-cover"
      />
      <div className="flex-grow">
        <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <span className="text-sm">Quantity: {product.quantity}</span>
            <span className="text-sm">Price: £{product.price}</span>
          </div>
          <div>
            <span className="text-sm font-semibold">
              Total: £{product.price * product.quantity}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartProductItem;
