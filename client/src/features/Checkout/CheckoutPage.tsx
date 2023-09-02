import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCreditCard, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { IProduct } from '../../types';
import cashmere from '../../common/assets/images/cashmere.jpg';

interface CartProduct extends IProduct {
    quantity: number;
}

const CheckoutPage: React.FC = () => {
    const [cartProducts, setCartProducts] = useState<CartProduct[]>([{
      _id: 'product1',
      name: 'Example Product 1',
      description: 'A great product',
      price: 100,
      size: ['S', 'M', 'L'],
      color: ['Red', 'Blue'],
      imageUrl: cashmere,
      stockCount: 10,
      quantity: 2,
  }]);

    const totalAmount = cartProducts.reduce((total, product) => total + product.price * product.quantity, 0);

    return (
        <div className="p-8 bg-background-color">

            <h2 className="text-3xl mb-8 font-semibold">Checkout</h2>

            {/* Order Summary */}
            <div className="mb-8 p-6 border rounded-lg shadow-md bg-white">
                <div className="flex items-center mb-4">
                    <FontAwesomeIcon icon={faShoppingBag} className="mr-2 text-2xl"/>
                    <h3 className="text-xl font-semibold">Order Summary</h3>
                </div>
                <ul>
                    {cartProducts!.map(product => (
                        <li key={product._id} className="mb-2 flex justify-between">
                            <span>{product.name} (x{product.quantity})</span>
                            <span className="font-semibold">£{product.price * product.quantity}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-4 border-t pt-4">
                    <span className="text-lg font-bold">Total Amount: £{totalAmount}</span>
                </div>
            </div>

            {/* Customer Information */}
            <div className="mb-8 p-6 border rounded-lg shadow-md bg-white">
                <div className="flex items-center mb-4">
                    <FontAwesomeIcon icon={faUser} className="mr-2 text-2xl"/>
                    <h3 className="text-xl font-semibold">Customer Information</h3>
                </div>
                <form>
                    {/* ... (Rest of the form inputs, now with refined classes for styling) */}
                </form>
            </div>

            {/* Payment Section */}
            <div className="mb-8 p-6 border rounded-lg shadow-md bg-white">
                <div className="flex items-center mb-4">
                    <FontAwesomeIcon icon={faCreditCard} className="mr-2 text-2xl"/>
                    <h3 className="text-xl font-semibold">Payment</h3>
                </div>
                <button className="bg-gradient-to-r from-primary-dark to-primary-light text-white px-6 py-2 rounded shadow hover:shadow-md transition">
                    Pay with PayPal
                </button>
            </div>
        </div>
    );
};

export default CheckoutPage;
