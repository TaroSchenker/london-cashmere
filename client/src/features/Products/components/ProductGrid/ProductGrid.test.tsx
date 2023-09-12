import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ProductGrid from "./ProductGrid";
import "@testing-library/jest-dom";

describe("ProductGrid", () => {
  const mockProducts = [
    {
      _id: "1",
      name: "Product 1",
      description: "Description 1",
      imageUrl: "https://test.com/image1.jpg",
      size: ["M"],
      color: ["#FF0000"],
      price: 19.99,
      stockCount: 5,
    },
    {
      _id: "2",
      name: "Product 2",
      description: "Description 2",
      imageUrl: "https://test.com/image2.jpg",
      size: ["L"],
      color: ["#00FF00"],
      price: 29.99,
      stockCount: 3,
    },
  ];

  test("renders without crashing", () => {
    render(
      <BrowserRouter>
        <ProductGrid products={mockProducts} />
      </BrowserRouter>,
    );
    expect(screen.getByRole("grid")).toBeInTheDocument();
  });

  test("renders the correct number of products", () => {
    render(
      <BrowserRouter>
        <ProductGrid products={mockProducts} />
      </BrowserRouter>,
    );
    const productCards = screen.getAllByRole("link");
    expect(productCards).toHaveLength(mockProducts.length);
  });

  test("each product has the correct link", () => {
    render(
      <BrowserRouter>
        <ProductGrid products={mockProducts} />
      </BrowserRouter>,
    );
    mockProducts.forEach((product) => {
      const productLink = screen.getByRole("link", {
        name: new RegExp(`^${product.name}`, "i"),
      });
      expect(productLink).toHaveAttribute("href", `/products/${product._id}`);
    });
  });
});
