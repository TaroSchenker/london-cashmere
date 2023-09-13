import HomePage from "./HomePage";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { customRender } from "../../__test__/helpers/renderWithProvider";

describe("HomePage", () => {
  beforeEach(() => {
    customRender(<HomePage />, {
      withAuth: true,
      withRouter: true,
      withCart: true,
    });
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
