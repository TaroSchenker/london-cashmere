import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../../context/AuthContext";
import { CartProvider } from "../../context/CartContext";

interface CustomRenderOptions extends RenderOptions {
  withRouter?: boolean;
  withAuth?: boolean;
  withCart?: boolean;
}

const customRender = (
  ui: React.ReactElement,
  options: CustomRenderOptions = {},
): RenderResult => {
  const {
    withRouter = false,
    withAuth = false,
    withCart = false,
    ...restOptions
  } = options;

  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    let content = children;

    if (withRouter) {
      content = <BrowserRouter>{content}</BrowserRouter>;
    }

    if (withAuth) {
      content = <AuthProvider>{content}</AuthProvider>;
    }

    if (withCart) {
      content = <CartProvider>{content}</CartProvider>;
    }

    return <>{content}</>;
  };

  return render(ui, { wrapper: Wrapper, ...restOptions });
};

export { customRender };
