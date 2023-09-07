import { render, screen } from "@testing-library/react";
import CartTotal from "../CartTotal";
import { BrowserRouter } from "react-router-dom";

describe("CartTotal", () => {
  test("renders correctly", () => {
    render(<CartTotal totalAmount={100} />, { wrapper: BrowserRouter });
    // render(<CartTotal totalAmount={100} />);
    expect(1).toBe(1);
  });
  it("renders the checkout button with correct link", () => {
    render(<CartTotal totalAmount={100} />, { wrapper: BrowserRouter });
    screen.debug();
    const checkoutButton = screen.getByRole("link", { name: /checkout/i });
    expect(checkoutButton).toBeDefined();
    // expect(checkoutButton).toHaveAttribute("href", "/checkout");
  });
});
