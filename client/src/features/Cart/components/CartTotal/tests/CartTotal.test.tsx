import { render } from "@testing-library/react";
import CartTotal from "../CartTotal";
import { BrowserRouter } from "react-router-dom";

describe("CartTotal", () => {
  test("renders correctly", () => {
    render(<CartTotal totalAmount={100} />, { wrapper: BrowserRouter });
    // render(<CartTotal totalAmount={100} />);
    expect(1).toBe(1);
  });
});
