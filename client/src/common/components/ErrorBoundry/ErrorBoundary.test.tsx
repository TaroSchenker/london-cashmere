import React from "react";
import { render, screen } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundary";
import "@testing-library/jest-dom";

// A component that will throw an error to test the ErrorBoundary
const ErrorComponent = () => {
  throw new Error("Test error");
};

describe("ErrorBoundary", () => {
  // Suppress console errors for tests to keep the test output clean
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  // Restore console errors after tests
  afterAll(() => {
    (console.error as jest.Mock).mockRestore();
  });

  test("renders children correctly when there's no error", () => {
    render(
      <ErrorBoundary>
        <div>Test Child Component</div>
      </ErrorBoundary>,
    );
    expect(screen.getByText("Test Child Component")).toBeInTheDocument();
  });

  test("renders fallback UI when child throws an error", () => {
    render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>,
    );
    expect(screen.getByText("Something went wrong.")).toBeInTheDocument();
  });

  test("calls componentDidCatch with error info when an error occurs", () => {
    const componentDidCatchSpy = jest.spyOn(
      ErrorBoundary.prototype,
      "componentDidCatch",
    );
    render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>,
    );
    expect(componentDidCatchSpy).toHaveBeenCalledWith(
      new Error("Test error"),
      expect.any(Object),
    );
  });
});
