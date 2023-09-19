import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { customRender } from "../../../../__test__/helpers/renderWithProvider";
import DesktopIcons from "./DesktopIcons";

describe("DesktopIcons", () => {
  const setCartSidebarOpenMock = jest.fn();

  const renderComponent = (cartItemCount: number = 0) => {
    customRender(<DesktopIcons setCartSidebarOpen={setCartSidebarOpenMock} />, {
      withAuth: false,
      withRouter: true,
      withCart: true,
      cartItems: Array(cartItemCount).fill({
        product: {
          _id: "test-id",
          name: "Test Product",
          description: "Description",
          imageUrl: "https://test.com/image.jpg",
          size: [],
          color: [],
          price: 0,
          stockCount: 0,
        },
        quantity: 1,
      }),
    });
  };

  test("renders search icon and user icon", () => {
    renderComponent();

    expect(screen.getByLabelText("Navigate to home")).toBeInTheDocument();
    expect(screen.getByLabelText("Toggle cart")).toBeInTheDocument();
    expect(screen.getByLabelText("User authentication")).toBeInTheDocument();
  });

  test("does not show cart count when it's 0", () => {
    renderComponent();
    const cartCount = screen.queryByText(/0/);
    expect(cartCount).not.toBeInTheDocument();
  });

  test("shows correct cart count", () => {
    renderComponent(5);
    const cartCount = screen.getByText(/5/);
    expect(cartCount).toBeInTheDocument();
  });
});
