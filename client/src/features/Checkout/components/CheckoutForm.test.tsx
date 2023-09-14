import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CheckoutForm from "./CheckoutForm";

describe("CheckoutForm", () => {
  beforeEach(() => {
    render(<CheckoutForm />);
  });

  test("should render the Customer Information section", () => {
    const customerInfoSection = screen.getByText("Customer Information");
    expect(customerInfoSection).toBeInTheDocument();
  });

  test("should render the Payment section", () => {
    const paymentSection = screen.getByText("Payment");
    expect(paymentSection).toBeInTheDocument();
  });

  test("should render input fields for Name, Email, Address, Product, Size, Color, and Quantity", () => {
    const nameInput = screen.getByPlaceholderText("Enter your name");
    const emailInput = screen.getByPlaceholderText("Enter your email");
    const addressInput = screen.getByPlaceholderText("Enter your address");
    const productSelect = screen.getByText("Product");
    const sizeSelect = screen.getByText("Size");
    const colorSelect = screen.getByText("Color");
    const quantityInput = screen.getByPlaceholderText("Enter quantity");

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(addressInput).toBeInTheDocument();
    expect(productSelect).toBeInTheDocument();
    expect(sizeSelect).toBeInTheDocument();
    expect(colorSelect).toBeInTheDocument();
    expect(quantityInput).toBeInTheDocument();
  });

  test("should render the Save Information and Continue button", () => {
    const saveButton = screen.getByText("Save Information and Continue");
    expect(saveButton).toBeInTheDocument();
  });

  test("should render the Pay with PayPal button", () => {
    const paypalButton = screen.getByText("Pay with PayPal");
    expect(paypalButton).toBeInTheDocument();
  });
});
