// CheckoutPage.tsx
import React from "react";
import CheckoutForm from "./components/CheckoutForm";
import OrderSummary from "./components/OrderSummary";
import { useCart } from "../../hooks/useCart";

const CheckoutPage: React.FC = () => {
  const { cart } = useCart();

  return (
    <div className="p-12 bg-background-color font-serif">
      <h2 className="text-5xl mb-16 font-bold text-neutral-dark">Checkout</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <OrderSummary cart={cart} />
        <CheckoutForm />
      </div>
    </div>
  );
};

export default CheckoutPage;
