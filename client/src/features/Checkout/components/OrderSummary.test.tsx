import { render, screen } from "@testing-library/react";
import OrderSummary from "./OrderSummary";
import "@testing-library/jest-dom";
import { ICartItem } from "../../../context/CartContext";

describe("OrderSummary", () => {
  const mockProduct = {
    _id: "product1",
    name: "Example Product 1",
    description: "A great product",
    price: 100,
    size: ["S", "M", "L"],
    color: ["Red", "Blue"],
    imageUrl: "google.com",
    stockCount: 10,
    quantity: 2,
  };

  const mockCartItem: ICartItem = {
    product: mockProduct,
    quantity: 2,
  };

  const mockCart: ICartItem[] = [mockCartItem, mockCartItem];

  beforeEach(() => {
    render(<OrderSummary cart={mockCart} />);
  });

  test("should render the Order Summary header", () => {
    const header = screen.getByText("Order Summary");
    expect(header).toBeInTheDocument();
  });

  test("should render OrderItem for each item in the cart", () => {
    const orderItems = screen.getAllByText(/Product/);
    expect(orderItems.length).toEqual(mockCart.length);
  });

  test("should display the correct total amount", () => {
    const totalAmount = mockCart.reduce(
      (total, cartItem) => total + cartItem.product.price * cartItem.quantity,
      0,
    );
    const displayedAmount = screen.getByText(`Total Amount: £${totalAmount}`);
    expect(displayedAmount).toBeInTheDocument();
  });
});
