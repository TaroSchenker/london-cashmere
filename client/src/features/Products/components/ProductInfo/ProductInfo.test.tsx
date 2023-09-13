import React from "react";
import { screen } from "@testing-library/react";
import ProductInfo from "./ProductInfo"; // Adjust the import as per your directory structure
import { IProduct } from "../../../../types";
import "@testing-library/jest-dom";
import { customRender } from "../../../../__test__/helpers/renderWithProvider";

describe("ProductInfo", () => {
  const mockProduct: IProduct = {
    _id: "1",
    name: "Test Product",
    description: "This is a test product",
    price: 19.99,
    size: ["S", "M", "L"],
    color: ["#FF0000", "#00FF00"],
    imageUrl: "test.com",
    stockCount: 5,
  };

  beforeEach(() => {
    customRender(<ProductInfo product={mockProduct} />, {
      withRouter: false,
      withAuth: false,
      withCart: true,
    });
  });

  test("renders product name", () => {
    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
  });

  test("renders product description", () => {
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
  });

  test("renders product price", () => {
    expect(
      screen.getByText(`£${mockProduct.price.toFixed(2)}`),
    ).toBeInTheDocument();
  });

  test("renders sizes", () => {
    expect(
      screen.getByText(`Sizes: ${mockProduct.size.join(", ")}`),
    ).toBeInTheDocument();
  });

  //   test("renders colors", () => {
  //     const colorElements = screen.getAllByRole("presentation");
  //     expect(colorElements).toHaveLength(mockProduct.color.length);
  //   });

  test("Add to Cart button is enabled", () => {
    const button = screen.getByRole("button", { name: /add to cart/i });
    expect(button).toBeEnabled();
  });

  test("renders care instructions", () => {
    expect(
      screen.getByText(/Care Instructions: Hand wash only./i),
    ).toBeInTheDocument();
  });
});
