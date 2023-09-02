import React, { useState } from 'react';
import { IProduct } from '../../types';
import cashmere from '../../common/assets/images/cashmere.jpg';
interface CartProduct extends IProduct {
    quantity: number;
}

const CartPage: React.FC = () => {
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
        // ... more products
    ]);

    const totalAmount = cartProducts.reduce((total, product) => total + product.price * product.quantity, 0);

    return (
        <div className="p-8 bg-background-color">
            <h2 className="text-2xl mb-6">Your Cart</h2>
            
            <ul>
                {cartProducts.map(product => (
                    <li key={product._id} className="mb-4 border p-4 rounded-lg">
                        <img src={product.imageUrl} alt={product.name} className="w-24 h-24 object-cover mr-4" />
                        <div>
                            <h3 className="text-xl">{product.name}</h3>
                            <p>{product.description}</p>
                            <span className="block mt-2">Quantity: {product.quantity}</span>
                            <span className="block mt-2">Price: £{product.price}</span>
                            <span className="block mt-2">Total: £{product.price * product.quantity}</span>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="mt-8">
                <span className="text-xl font-bold">Total Amount: £{totalAmount}</span>
                <button className="ml-4 bg-primary-color text-background-color px-6 py-2 rounded">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};

export default CartPage;
