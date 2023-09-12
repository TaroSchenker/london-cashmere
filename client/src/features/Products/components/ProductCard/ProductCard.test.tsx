import React from "react";
import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";
import "@testing-library/jest-dom";
import { IProduct } from "../../../../types";

describe("ProductCard", () => {
  const mockProduct: IProduct = {
    _id: "0001",
    name: "Test Product",
    description: "Test product description",
    imageUrl: "https://test.com/image.jpg",
    size: ["M", "L", "XL"],
    color: ["#FF0000", "#00FF00"],
    price: 29.99,
    stockCount: 5,
  };

  test("renders product name and description", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
  });

  test("displays product image with correct alt attribute", () => {
    render(<ProductCard product={mockProduct} />);
    const img = screen.getByAltText(mockProduct.name) as HTMLImageElement;
    expect(img.src).toBe(mockProduct.imageUrl);
  });

  test("shows 'Out of Stock' when stockCount is 0", () => {
    const outOfStockProduct = { ...mockProduct, stockCount: 0 };
    render(<ProductCard product={outOfStockProduct} />);
    expect(screen.getByText("Out of Stock")).toBeInTheDocument();
  });

  test("disables 'Add to Cart' button when product is out of stock", () => {
    const outOfStockProduct = { ...mockProduct, stockCount: 0 };
    render(<ProductCard product={outOfStockProduct} />);
    const btn = screen.getByText("Add to Cart");
    expect(btn).toBeDisabled();
  });

  //   test("displays correct sizes and colors", () => {
  //     render(<ProductCard product={mockProduct} />);
  //     expect(
  //       screen.getByText(`Sizes: ${mockProduct.size.join(", ")}`),
  //     ).toBeInTheDocument();
  //     mockProduct.color.forEach((c) => {
  //       const colorSpan = screen.getByStyle({ backgroundColor: c });
  //       expect(colorSpan).toBeInTheDocument();
  //     });
  //   });

  test("displays the price correctly", () => {
    render(<ProductCard product={mockProduct} />);
    expect(
      screen.getByText(`£${mockProduct.price.toFixed(2)}`),
    ).toBeInTheDocument();
  });
});
