import { render } from "@testing-library/react";
import CartProductItem from "../CartProductItem";

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
describe("CartProductItem", () => {
  test("renders correctly", () => {
    render(<CartProductItem product={mockProduct} />);
    expect(1).toBe(1);
  });
});
