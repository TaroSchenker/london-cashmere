import { render, screen } from "@testing-library/react";
import OrderItem from "./OrderItem"; // Adjust path if necessary
import "@testing-library/jest-dom";
import { ICartItem } from "../../../context/CartContext";

describe("OrderItem", () => {
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
  beforeEach(() => {
    render(<OrderItem product={mockCartItem} />);
  });

  test("should render the product image correctly", () => {
    const productImage = screen.getByRole("img");
    expect(productImage).toHaveAttribute("src", mockProduct.imageUrl);
  });

  test("should have alt text matching product name", () => {
    const productImage = screen.getByRole("img");
    expect(productImage).toHaveAttribute("alt", mockProduct.name);
  });

  test("should render the product name correctly", () => {
    const productName = screen.getByText(
      new RegExp(mockCartItem.product.name, "i"),
    );
    expect(productName).toBeInTheDocument();
  });

  test("should display the product quantity correctly", () => {
    const regex = new RegExp(`\\(x\\s*${mockProduct.quantity}\\s*\\)`, "i");
    const productQuantity = screen.getByText(regex);
    expect(productQuantity).toBeInTheDocument();
  });

  test("should display the computed price correctly", () => {
    const computedPrice = mockProduct.price * mockProduct.quantity;
    const priceDisplay = screen.getByText(`£${computedPrice}`);
    expect(priceDisplay).toBeInTheDocument();
  });
});
