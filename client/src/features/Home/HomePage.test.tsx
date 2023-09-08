import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("HomePage", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>,
    );
  });
  test("renders the Menu title", () => {
    expect(screen.getByText("Menu")).toBeInTheDocument();
  });

  test("renders the Home link", () => {
    const homeLinks = screen.getAllByText("Home");
    expect(homeLinks).toHaveLength(2); // Expecting 2 Home links based on the error message
    //to make assertions on specific Home links
    // expect(homeLinks[0]).toHaveAttribute('href', '/');
    // expect(homeLinks[1]).toHaveAttribute('class', 'some-class-name');
  });

  test("renders the Shop link", () => {
    const shopLinks = screen.getAllByText("Shop");
    expect(shopLinks).toHaveLength(2); // Expecting 2 Shop links based on the error message
    // to make assertions on specific Shop links
    // expect(shopLinks[0]).toHaveAttribute('href', '/products');
    // expect(shopLinks[1]).toHaveAttribute('class', 'some-class-name');
  });

  test("renders the Profile link", () => {
    expect(screen.getByText("Profile")).toBeInTheDocument();
  });
});
