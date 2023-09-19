import React from "react";
import { screen } from "@testing-library/react";
import ProductGrid from "./ProductGrid";
import "@testing-library/jest-dom";
import { customRender } from "../../../../__test__/helpers/renderWithProvider";

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

describe("ProductGrid", () => {
  beforeEach(() => {
    customRender(<ProductGrid products={mockProducts} />, {
      withAuth: false,
      withRouter: true,
      withCart: true,
    });
  });

  test("renders without crashing", () => {
    expect(screen.getByRole("grid")).toBeInTheDocument();
  });

  // test("renders the correct number of products", () => {
  //   const productCards = screen.getAllByRole("link");
  //   expect(productCards).toHaveLength(mockProducts.length);
  // });

  // test("each product has the correct link", () => {
  //   mockProducts.forEach((product) => {
  //     const productLink = screen.getByRole("link", {
  //       name: new RegExp(`^${product.name}`, "i"),
  //     });
  //     expect(productLink).toHaveAttribute("href", `/products/${product._id}`);
  //   });
  // });
});
