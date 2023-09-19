import React from "react";
import { screen } from "@testing-library/react";
import CartTotal from "./CartTotal"; // Adjust the path as needed
import "@testing-library/jest-dom";
import { customRender } from "../../../../__test__/helpers/renderWithProvider";

describe("CartTotal", () => {
  const mockTotalAmount = 150;
  const onClose = jest.fn();

  beforeEach(() => {
    customRender(
      <CartTotal totalAmount={mockTotalAmount} onClose={onClose} />,
      {
        withAuth: false,
        withRouter: true,
        withCart: false,
      },
    );
  });

  test("renders total amount correctly", () => {
    const totalAmountText = screen.getByText(`Total: £${mockTotalAmount}`);
    expect(totalAmountText).toBeInTheDocument();
  });

  test("Checkout link redirects to /checkout", () => {
    const checkoutLink = screen.getByText("Checkout");
    expect(checkoutLink).toHaveAttribute("href", "/checkout");
  });
});
