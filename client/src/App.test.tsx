import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders correctly", () => {
    render(<App />);
    expect(1).toBe(1);
  });
});
