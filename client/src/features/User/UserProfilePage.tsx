/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { OrderStatus } from "./../../types/index";
import ProductListHeader from "../../common/layout/ProductListHeader";
import { useAuth } from "../../context/AuthContext";

const orderHistory = [
  {
    customerDetails: {
      name: "Sample Customer",
      email: "sample@example.com",
      address: "123 Sample St",
    },
    orderedProducts: [
      {
        productId: "1",
        quantity: 1,
        productName: "Cashmere Sweater",
        productPrice: 100,
      },
      {
        productId: "2",
        quantity: 2,
        productName: "Cashmere Scarf",
        productPrice: 50,
      },
    ],
    totalAmount: 200,
    status: OrderStatus.PENDING,
    paymentId: "samplePaymentId",
  },
];

const UserProfile: React.FC = () => {
  const { currentUser: user } = useAuth();

  if (!user) {
    return null;
  }

  console.log("user", user);
  return (
    <div className="min-h-screen bg-neutral-lightest">
      <ProductListHeader />

      {/* User Profile Image & Name */}
      <div className="flex items-center justify-center p-4 md:p-8 mt-4 bg-white rounded shadow">
        <img
          src="https://images.unsplash.com/photo-1529218164294-0d21b06ea831?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2788&q=80"
          alt="User Profile"
          className="w-16 h-16 rounded-full border mr-4"
        />
        <h2 className="text-2xl font-semibold">{user.name}</h2>
      </div>

      {/* Main Content - Two columns on desktop */}
      <div className="md:flex md:space-x-6 p-4 md:p-8">
        {/* Left Column - User Info */}
        <div className="md:w-1/2 bg-white p-4 rounded shadow mb-6 md:mb-0">
          <h2 className="text-2xl mb-4 font-semibold">User Details</h2>
          <p>
            <span className="font-semibold">Name:</span> {user.name}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {user.email}
          </p>
          <p>
            <span className="font-semibold">Address:</span> {user.address}
          </p>
        </div>
        <div className="md:w-1/2 space-y-6">
          {/* Order History */}
          <div className="p-4 md:p-8 mt-6 bg-white rounded shadow">
            <h2 className="text-2xl mb-4 font-semibold">Order History</h2>
            <ul>
              {orderHistory.map((order, index) => (
                <li key={index} className="mb-6 border-b pb-4">
                  <p>
                    <span className="font-semibold">Order ID:</span>{" "}
                    {order.paymentId}
                  </p>
                  <p>
                    <span className="font-semibold">Status:</span>{" "}
                    {order.status}
                  </p>
                  <p>
                    <span className="font-semibold">Total Amount:</span> $
                    {order.totalAmount.toFixed(2)}
                  </p>
                  <ul className="mt-2">
                    {order.orderedProducts.map((product, pIndex) => (
                      <li key={pIndex} className="flex justify-between mt-2">
                        <span>
                          {product.productName} (x{product.quantity})
                        </span>
                        <span>
                          $
                          {(product.productPrice * product.quantity).toFixed(2)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          {/* Wishlist or Favorites */}
          <div className="p-4 md:p-8 mt-6 bg-white rounded shadow">
            <h2 className="text-2xl mb-4 font-semibold">Your Favorites</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Mock Favorites List */}
              {["Product 1"].map((product, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src="https://assets.hermes.com/is/image/hermesproduct/casaque-love-story-muffler--254043S%2001-worn-1-0-0-800-800_g.jpg"
                    alt={product}
                    className="w-32 h-32 object-cover rounded"
                  />
                  <span className="mt-2">{product}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Loyalty Points */}
        <div className="p-4 md:p-8 mt-6 bg-white rounded shadow">
          <h2 className="text-2xl mb-4 font-semibold">Loyalty Points</h2>
          <p>
            You have <span className="font-semibold">1,500</span> points.
          </p>
          <p className="mt-2">
            Redeem points to get exclusive offers and discounts!
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
