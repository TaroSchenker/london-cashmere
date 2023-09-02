import React, { useState } from 'react';
import { IProduct } from '../../types';
import cashmere from '../../common/assets/images/cashmere.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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
            _id: 'product1',
            name: 'Example Product 1',
            description: 'A great product',
            price: 100,
            size: ['S', 'M', 'L'],
            color: ['Red', 'Blue'],
            imageUrl: cashmere,
            stockCount: 10,
            quantity: 2,
        },
        {
            _id: 'product1',
            name: 'Example Product 1',
            description: 'A great product',
            price: 100,
            size: ['S', 'M', 'L'],
            color: ['Red', 'Blue'],
            imageUrl: cashmere,
            stockCount: 10,
            quantity: 2,
        },
        {
            _id: 'product1',
            name: 'Example Product 1',
            description: 'A great product',
            price: 100,
            size: ['S', 'M', 'L'],
            color: ['Red', 'Blue'],
            imageUrl: cashmere,
            stockCount: 10,
            quantity: 2,
        },
        {
            _id: 'product1',
            name: 'Example Product 1',
            description: 'A great product',
            price: 100,
            size: ['S', 'M', 'L'],
            color: ['Red', 'Blue'],
            imageUrl: cashmere,
            stockCount: 10,
            quantity: 2,
        },
        // ... more products
    ]);

    const totalAmount = cartProducts.reduce((total, product) => total + product.price * product.quantity, 0);
    return (
        <aside 
        className={`bg-white transform top-0 right-0 w-80 h-full fixed shadow-lg
                    transition-transform duration-300 ease-in-out z-30 
                    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
        <div className="flex flex-col h-full py-6 px-5">
            <button onClick={onClose} className="self-end bg-transparent p-2 rounded-full hover:bg-gray-200 transition-colors duration-300">
                <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
                <div className="flex-grow overflow-y-auto">
                    <ul>
                        {cartProducts.map(product => (
                            <li key={product._id} className="mb-4 border p-4 rounded-lg flex space-x-4">
                                <img src={product.imageUrl} alt={product.name} className="w-24 h-24 object-cover" />
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold">{product.name}</h3>
                                    <p className="text-gray-600">{product.description}</p>
                                    <span>Quantity: {product.quantity}</span>
                                    <span>Price: £{product.price}</span>
                                    <span>Total: £{product.price * product.quantity}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-8 flex items-center justify-between">
                    <span className="text-xl font-bold">£{totalAmount}</span>
                    <button className="bg-black text-white py-2 px-6 rounded-lg hover:border-black hover:bg-transparent hover:text-black border border-transparent transition-colors duration-300 font-medium text-xl">
                        Checkout
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default CartPage;
