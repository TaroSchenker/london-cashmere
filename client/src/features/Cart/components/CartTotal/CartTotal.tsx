import { Link } from "react-router-dom";

interface CartTotalProps {
  totalAmount: number;
  onClose: () => void;
}

const CartTotal: React.FC<CartTotalProps> = ({ totalAmount, onClose }) => {
  const discountedAmount = totalAmount * 0.8;

  if (totalAmount <= 0) {
    return (
      <div className="border-t pt-4 mt-auto text-center">
        <span className="text-xl font-bold">Your cart is empty.</span>
      </div>
    );
  }

  return (
    <div className="border-t pt-4 mt-auto">
      <div className="flex justify-between mb-4">
        <span className="text-xl font-bold line-through text-gray-500">
          £{totalAmount.toFixed(2)}
        </span>
        <span className="text-xl font-bold">
          £{discountedAmount.toFixed(2)} (20% off)
        </span>
      </div>
      <Link
        to="/checkout"
        onClick={onClose}
        className="w-full bg-black text-white py-2 px-6 rounded-lg hover:border-black hover:bg-transparent hover:text-black border border-transparent transition-colors duration-300 font-medium text-xl"
      >
        Checkout
      </Link>
    </div>
  );
};

export default CartTotal;
