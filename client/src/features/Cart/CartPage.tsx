import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import CartTotal from "./components/CartTotal/CartTotal";
import CartProductItem from "./components/CartProductItem/CartProductItem";
import { useCart } from "../../hooks/useCart"; // Make sure to provide the correct path
import { ICartItem } from "../../context/CartContext";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartPage: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart } = useCart();

  const totalAmount = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
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
          <div className="flex-grow overflow-y-auto mb-4" role="listitem">
            <ul>
              {cart.map((item: ICartItem, index: number) => (
                <li
                  key={item.product._id + index}
                  className="mb-5 border-b border-red-800"
                >
                  {/* Product Details */}
                  <div className="flex items-center mb-2">
                    <CartProductItem product={item} />
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.product._id)}
                    className="pb-4 text-xs hover:underline"
                  >
                    Remove item from cart
                  </button>
                </li>
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
