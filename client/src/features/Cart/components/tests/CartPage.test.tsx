import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import * as AuthHooks from "../../../../hooks/useAuth"; // Adjust the path
import CartPage from "../../CartPage";

describe("CartPage", () => {
  const mockOnClose = jest.fn();
  const mockUser = { id: 1, name: "Test User" };

  const defaultProps = {
    isOpen: true,
    onClose: mockOnClose,
  };

  // Mock the useAuth hook before your tests
  jest.spyOn(AuthHooks, "useAuth").mockReturnValue(mockUser);

  it("should render the cart sidebar when isOpen is true", () => {
    render(
      <BrowserRouter>
        <CartPage {...defaultProps} />
      </BrowserRouter>,
    );
    const sidebar = screen.getByRole("complementary");
    expect(sidebar).toBeInTheDocument();
  });

  // ... rest of your tests

  // Restore the mock after the tests
  afterAll(() => {
    jest.restoreAllMocks();
  });
});
