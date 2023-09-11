/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { OrderStatus } from "./../../types/index"; // Point to your models file
import ProductListHeader from "../../common/layout/ProductListHeader";
import { useAuth } from "../../context/AuthContext";

// interface UserProfileProps {
//   user: IUser;
//   orderHistory: IOrder[];
// }
// const user = {
//   name: "John Doe",
//   email: "john.doe@example.com",
//   password: "password123",
//   address: "123 Main St",
// };

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
      },
    ],
    totalAmount: 100,
    status: OrderStatus.PENDING,
    paymentId: "samplePaymentId",
  },
];
const UserProfile: React.FC = () => {
  const { currentUser: user } = useAuth();
  console.log("user", user);
  if (!user) {
    return null;
  }
  return (
    <div className="min-h-screen bg-neutral-lightest">
      {/* Header */}
      <ProductListHeader />

      {/* User Information */}
      <div className="p-4 md:p-8">
        <h2 className="text-2xl mb-4 font-semibold">User Details</h2>
        <p>
          <span className="font-semibold">Name:</span> {user.name}
        </p>
        {/* <p>
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        <p>
          <span className="font-semibold">Address:</span> {user.address}
        </p> */}
      </div>

      {/* Order History */}
      <div className="p-4 md:p-8 mt-6 bg-white rounded">
        <h2 className="text-2xl mb-4 font-semibold">Order History</h2>
        <ul>
          {orderHistory.map((order: any) => (
            <li key={order} className="mb-4 border-b pb-4">
              <p>
                <span className="font-semibold">Status:</span>{" "}
                {OrderStatus.SHIPPED}
              </p>
              <p>
                <span className="font-semibold">Total Amount:</span> $
                {order.totalAmount.toFixed(2)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
