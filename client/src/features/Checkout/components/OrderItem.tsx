import { ICartItem } from "../../../context/CartContext";

const OrderItem: React.FC<{ product: ICartItem }> = ({ product }) => (
  <li className="mb-6 flex justify-between text-neutral-dark border-b border-gray-200 pb-4">
    <img
      src={product.product.imageUrl}
      alt={product.product.name}
      className="w-20 h-20 object-cover mr-4"
    />
    <span className="text-lg flex-grow">
      {product.product.name} (x{product.quantity})
    </span>
    <span className="font-bold text-xl">
      £{product.product.price * product.quantity}
    </span>
  </li>
);

export default OrderItem;
