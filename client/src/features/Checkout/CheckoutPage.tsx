/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCreditCard,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { IProduct } from "../../types";
import cashmere from "../../common/assets/images/cashmere.jpg";

interface CartProduct extends IProduct {
  quantity: number;
}

const CheckoutPage: React.FC = () => {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([
    {
      _id: "product1",
      name: "Example Product 1",
      description: "A great product",
      price: 100,
      size: ["S", "M", "L"],
      color: ["Red", "Blue"],
      imageUrl: cashmere,
      stockCount: 10,
      quantity: 2,
    },
  ]);

  const totalAmount = cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );

  return (
    <div className="p-8 bg-background-color font-serif">
      <h2 className="text-4xl mb-12 font-semibold text-neutral-dark">
        Checkout
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          {/* Customer Information */}
          <div className="mb-8 p-8 border border-gray-200 rounded-lg bg-white">
            <div className="flex items-center mb-6">
              <FontAwesomeIcon
                icon={faUser}
                className="mr-4 text-2xl text-neutral-dark"
              />
              <h3 className="text-2xl font-bold">Customer Information</h3>
            </div>
            <form>
              {/* Replace with your form inputs */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  className="mt-1 p-2 w-full border rounded-md"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  className="mt-1 p-2 w-full border rounded-md"
                  type="email"
                />
              </div>
              {/* ... Other form inputs ... */}
            </form>
          </div>

          {/* Payment Section */}
          <div className="p-8 border border-gray-200 rounded-lg bg-white">
            <div className="flex items-center mb-6">
              <FontAwesomeIcon
                icon={faCreditCard}
                className="mr-4 text-2xl text-neutral-dark"
              />
              <h3 className="text-2xl font-bold">Payment</h3>
            </div>
            <button className="bg-black text-white px-8 py-3 rounded-full shadow hover:bg-gray-800">
              Pay with PayPal
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div>
          {/* Order Summary */}
          <div className="p-8 border border-gray-200 rounded-lg bg-white">
            <div className="flex items-center mb-6">
              <FontAwesomeIcon
                icon={faShoppingBag}
                className="mr-4 text-2xl text-neutral-dark"
              />
              <h3 className="text-2xl font-bold">Order Summary</h3>
            </div>
            <ul>
              {cartProducts!.map((product) => (
                <li
                  key={product._id}
                  className="mb-4 flex justify-between text-neutral-dark"
                >
                  <span className="text-lg">
                    {product.name} (x{product.quantity})
                  </span>
                  <span className="font-bold text-xl">
                    £{product.price * product.quantity}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-gray-200 pt-8">
              <span className="text-2xl font-extrabold">
                Total Amount: £{totalAmount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
