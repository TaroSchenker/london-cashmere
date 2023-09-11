import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import * as AuthHooks from "../../hooks/useAuth"; // Adjust the path
import CartPage from "./CartPage";
// eslint-disable-next-line import/no-extraneous-dependencies
import mockAxios from "jest-mock-axios";
import "@testing-library/jest-dom";

describe("CartPage", () => {
  const mockOnClose = jest.fn();
  const mockUser = {
    id: 1,
    name: "Test User",
    email: "test@mail.com",
    password: "test",
  };

  const mockAuthValue = {
    currentUser: mockUser,
    register: jest.fn(),
    login: jest.fn(),
  };

  const defaultProps = {
    isOpen: true,
    onClose: mockOnClose,
  };

  const closedProps = {
    isOpen: false,
    onClose: mockOnClose,
  };

  // Mock the useAuth hook before your tests
  jest.spyOn(AuthHooks, "useAuth").mockReturnValue(mockAuthValue);

  afterEach(() => {
    mockAxios.reset();
  });

  // Restore the mock after the tests
  afterAll(() => {
    jest.restoreAllMocks();
  });

  test("should render the cart sidebar when isOpen is true", () => {
    render(
      <BrowserRouter>
        <CartPage {...defaultProps} />
      </BrowserRouter>,
    );
    const cartSideBar = screen.getByRole("complementary");
    expect(cartSideBar).toBeInTheDocument();
    expect(cartSideBar).toHaveClass("translate-x-0"); // Ensure the sidebar is visible
  });

  test("should not render the cart sidebar when isOpen is false", () => {
    render(
      <BrowserRouter>
        <CartPage {...closedProps} />
      </BrowserRouter>,
    );
    const cartSideBar = screen.getByRole("complementary");
    expect(cartSideBar).toHaveClass("translate-x-full"); // Ensure the sidebar is hidden
  });

  test("should render the close button", () => {
    render(
      <BrowserRouter>
        <CartPage {...defaultProps} />
      </BrowserRouter>,
    );
    const closeButton = screen.getByRole("button");
    expect(closeButton).toBeInTheDocument();
  });

  test("should render the cart products", () => {
    render(
      <BrowserRouter>
        <CartPage {...defaultProps} />
      </BrowserRouter>,
    );
    const cartProducts = screen.getAllByRole("listitem");
    expect(cartProducts.length).toBeGreaterThan(0); // Ensure there are cart products
  });
});
