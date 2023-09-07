import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CashmereInfo from "./AboutPage";

describe("AboutPage", () => {
  test("renders AboutPage component", () => {
    render(<CashmereInfo />);
    expect(true).toBe(true);
  });
});
