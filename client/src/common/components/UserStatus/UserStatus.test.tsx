import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import * as AuthHooks from "../../../hooks/useAuth"; // Adjust the path if necessary
import UserStatus from "./UserStatus";
import "@testing-library/jest-dom";
import { AuthProvider } from "../../../context/AuthContext";

describe("UserStatus", () => {
  const mockSetCartSidebarOpen = jest.fn();

  const mockUser = {
    _id: "1",
    name: "Test User",
    email: "test@mail.com",
    password: "test",
    address: "test address",
  };
  const mockAuthValueLoggedIn = {
    currentUser: mockUser,
    register: jest.fn(),
    login: jest.fn(),
    logout: jest.fn(),
  };

  const mockAuthValueLoggedOut = {
    currentUser: null,
    register: jest.fn(),
    login: jest.fn(),
    logout: jest.fn(),
  };

  afterEach(() => {
    // Clear all mocks after each test
    jest.clearAllMocks();
  });

  test("renders the welcome message and logout button for a logged-in user", () => {
    // Mock the useAuth hook for a logged-in user
    jest.spyOn(AuthHooks, "useAuth").mockReturnValue(mockAuthValueLoggedIn);

    render(
      <BrowserRouter>
        <AuthProvider>
          <UserStatus setCartSidebarOpen={mockSetCartSidebarOpen} />
        </AuthProvider>
      </BrowserRouter>,
    );

    expect(screen.getByText("Welcome, Test User")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });

  test("renders the login link for a logged-out user", () => {
    // Mock the useAuth hook for a logged-out user
    jest.spyOn(AuthHooks, "useAuth").mockReturnValue(mockAuthValueLoggedOut);

    render(
      <BrowserRouter>
        <AuthProvider>
          <UserStatus setCartSidebarOpen={mockSetCartSidebarOpen} />
        </AuthProvider>
      </BrowserRouter>,
    );

    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.queryByText("Logout")).not.toBeInTheDocument();
  });
});
