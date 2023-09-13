import CartProductItem from "./CartProductItem";

import "@testing-library/jest-dom";
import { customRender } from "../../../../__test__/helpers/renderWithProvider";
import { screen } from "@testing-library/react";
import { ICartItem } from "../../../../context/CartContext";

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

const mockCartItem = {
  product: mockProduct,
  quantity: 2,
};

describe("CartProductItem", () => {
  test("renders correctly", () => {
    customRender(<CartProductItem product={mockCartItem} />, {
      withAuth: false,
      withRouter: true,
      withCart: true,
    });
    const productImage = document.querySelector("img");
    console.log("productImage", productImage);
    expect(productImage).toHaveAttribute("src", mockProduct.imageUrl);
  });

  test("renders product price correctly", () => {
    customRender(<CartProductItem product={mockCartItem} />, {
      withAuth: false,
      withRouter: true,
      withCart: true,
    });

    const productPrice = screen.getByText(
      new RegExp(`Price: £${mockProduct.price}`),
    );
    expect(productPrice).toBeInTheDocument();
  });

  test("renders product quantity correctly", () => {
    customRender(<CartProductItem product={mockCartItem} />, {
      withAuth: false,
      withRouter: true,
      withCart: true,
    });

    const productQuantity = screen.getByText(
      new RegExp(`Quantity: ${mockCartItem.quantity}`),
    );
    expect(productQuantity).toBeInTheDocument();
  });

  test("renders product name correctly", () => {
    customRender(<CartProductItem product={mockCartItem} />);
    const productName = screen.getByText(mockProduct.name);
    expect(productName).toBeInTheDocument();
  });

  test("renders product description correctly", () => {
    customRender(<CartProductItem product={mockCartItem} />);
    const productDescription = screen.getByText(mockProduct.description);
    expect(productDescription).toBeInTheDocument();
  });

  test("has correct alt attribute for product image", () => {
    customRender(<CartProductItem product={mockCartItem} />);
    const productImage = screen.getByAltText(mockProduct.name);
    expect(productImage).toBeInTheDocument();
  });

  test("calculates and renders total price correctly", () => {
    customRender(<CartProductItem product={mockCartItem} />);
    const totalPrice = mockProduct.price * mockCartItem.quantity;
    const displayedTotalPrice = screen.getByText(
      new RegExp(`Total: £${totalPrice}`),
    );
    expect(displayedTotalPrice).toBeInTheDocument();
  });

  test("renders without crashing even if some properties are missing", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const incompleteProduct: Partial<typeof mockProduct> = {
      ...mockProduct,
      description: undefined,
    };
    const incompleteCartItem = {
      product: incompleteProduct,
      quantity: 2,
    };
    customRender(<CartProductItem product={incompleteCartItem as ICartItem} />);
    const productName = screen.getByText(mockProduct.name);
    expect(productName).toBeInTheDocument();
  });
});
