import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import { screen, render } from "@testing-library/react";

describe("HomePage", () => {
  test("should render", () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    expect(true).toBeTruthy();
  });
});
