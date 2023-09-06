/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { IProduct } from "../../types";
import cashmere from "../../common/assets/images/cashmere.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface CartProduct extends IProduct {
  quantity: number;
}

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartPage: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([
    // Example products, you'd fetch these from your actual cart state or API
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
    // ... more products
  ]);

  const totalAmount = cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );
  return (
    <>
      {/* Dimmed background */}
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
          {" "}
          {/* Added padding at the bottom */}
          <button
            onClick={onClose}
            className="self-end bg-transparent p-2 rounded-full hover:bg-gray-200 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
          <div className="flex-grow overflow-y-auto mb-4">
            <ul>
              {cartProducts.map((product, index) => (
                <li
                  key={index}
                  className="mb-6 border-b pb-4 flex space-x-4 items-start"
                >
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-24 h-24 object-cover"
                  />
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold mb-1">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="space-y-1">
                        <span className="text-sm">
                          Quantity: {product.quantity}
                        </span>
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
              ))}
            </ul>
          </div>
          <div className="border-t pt-4 mt-auto">
            <div className="flex justify-between mb-4">
              <span className="text-xl font-bold">Total: £{totalAmount}</span>
            </div>
            <Link
              to="/checkout"
              className="w-full bg-black text-white py-2 px-6 rounded-lg hover:border-black hover:bg-transparent hover:text-black border border-transparent transition-colors duration-300 font-medium text-xl"
            >
              Checkout
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default CartPage;
