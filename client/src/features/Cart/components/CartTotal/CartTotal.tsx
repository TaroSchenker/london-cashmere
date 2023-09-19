import { Link } from "react-router-dom";

interface CartTotalProps {
  totalAmount: number;
  onClose: () => void;
}

const CartTotal: React.FC<CartTotalProps> = ({ totalAmount, onClose }) => {
  return (
    <div className="border-t pt-4 mt-auto">
      <div className="flex justify-between mb-4">
        <span className="text-xl font-bold">Total: £{totalAmount}</span>
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
