import React from "react";
import { render, screen } from "@testing-library/react";
import SaleBanner from "./SaleBanner";
import "@testing-library/jest-dom";

describe("SaleBanner", () => {
  test("renders without crashing", () => {
    render(<SaleBanner />);
    const bannerElement = screen.getByText(/Every piece in 'The Collection'/i);
    expect(bannerElement).toBeInTheDocument();
  });

  test("displays the correct content", () => {
    render(<SaleBanner />);
    const content =
      "Every piece in 'The Collection' is crafted with dedication to detail and a commitment to excellence. Experience the pinnacle of luxury with our curated selections.";
    expect(screen.getByText(content)).toBeInTheDocument();
  });
});
