import { screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import * as AuthHooks from "../../hooks/useAuth"; // Adjust the path
import CartPage from "./CartPage";
// eslint-disable-next-line import/no-extraneous-dependencies
import mockAxios from "jest-mock-axios";
import "@testing-library/jest-dom";
import { customRender } from "../../__test__/helpers/renderWithProvider";

describe("CartPage", () => {
  const mockOnClose = jest.fn();
  const mockUser = {
    _id: "1",
    name: "Test User",
    email: "test@mail.com",
    password: "test",
    address: "test address",
  };

  const mockAuthValue = {
    currentUser: mockUser,
    register: jest.fn(),
    login: jest.fn(),
    logout: jest.fn(),
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
    jest.clearAllMocks();
  });

  // Restore the mock after the tests
  afterAll(() => {
    jest.restoreAllMocks();
  });

  test("should render the cart sidebar when isOpen is true", () => {
    customRender(<CartPage {...defaultProps} />, {
      withAuth: true,
      withRouter: true,
      withCart: true,
    });
    const cartSideBar = screen.getByRole("complementary");
    expect(cartSideBar).toBeInTheDocument();
    expect(cartSideBar).toHaveClass("translate-x-0"); // Ensure the sidebar is visible
  });

  test("should not render the cart sidebar when isOpen is false", () => {
    customRender(<CartPage {...closedProps} />, {
      withAuth: true,
      withRouter: true,
      withCart: true,
    });
    const cartSideBar = screen.queryByRole("complementary");
    expect(cartSideBar).not.toBeInTheDocument();
  });

  test("should render the close button", () => {
    customRender(<CartPage {...defaultProps} />, {
      withAuth: true,
      withRouter: true,
      withCart: true,
    });
    const closeButton = screen.getByRole("button");
    expect(closeButton).toBeInTheDocument();
  });

  test("should render the cart products", () => {
    customRender(<CartPage {...defaultProps} />, {
      withAuth: true,
      withRouter: true,
      withCart: true,
    });
    const cartProducts = screen.getAllByRole("listitem");
    expect(cartProducts.length).toBeGreaterThan(0); // Ensure there are cart products
  });
  test("should close the cart when clicking outside", async () => {
    customRender(<CartPage {...defaultProps} />, {
      withAuth: true,
      withRouter: true,
      withCart: true,
    });

    // Simulate a click on the outer div
    const background = screen.getByTestId("background-overlay");
    userEvent.click(background);
    await waitFor(() => expect(mockOnClose).toHaveBeenCalledTimes(1));
  });

  test("should not close the cart when clicking inside", () => {
    customRender(<CartPage {...defaultProps} />, {
      withAuth: true,
      withRouter: true,
      withCart: true,
    });

    // Simulate a click on the cart
    const cartSideBar = screen.getByRole("complementary");
    userEvent.click(cartSideBar);

    expect(mockOnClose).not.toHaveBeenCalled();
  });
});
