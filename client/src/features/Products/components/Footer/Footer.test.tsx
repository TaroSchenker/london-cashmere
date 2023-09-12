import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";
import "@testing-library/jest-dom";

describe("Footer", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
  });

  test("renders without crashing", () => {
    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();
  });

  test("renders the 'Customer Service' link", () => {
    const link = screen.getByText("Customer Service");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });

  test("renders the 'FAQ' link", () => {
    const link = screen.getByText("FAQ");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });

  test("renders the 'Return Policy' link", () => {
    const link = screen.getByText("Return Policy");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });
});
