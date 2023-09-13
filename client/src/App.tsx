import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Features
import HomePage from "./features/Home/HomePage";
import ProductListPage from "./features/Products/ProductListPage";
import ProductDetailPage from "./features/Products/ProductDetailPage";
import UserProfilePage from "./features/User/UserProfilePage";
import UserAuth from "./features/User/UserAuth";
import AdminDashboard from "./features/Admin/AdminDashboard";
import CheckoutPage from "./features/Checkout/CheckoutPage";

import LoadingSpinner from "./common/components/LoadingSpinner/LoadingSpinner";
import SignUpPage from "./features/User/SignupPage";
import Landing from "./common/layout/Landing";
import AuthRoute from "./utils/authRoute";
import { AuthProvider } from "./context/AuthContext";
import CashmereInfo from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage";
import StoryPage from "./pages/StoryPage";
import {
  useProductByIdLoader,
  useProductsLoader,
} from "./hooks/useProductsLoader";
import ErrorBoundary from "./common/components/ErrorBoundry/ErrorBoundary";
import { CartProvider } from "./context/CartContext";

const routes = [
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        index: true, // The index route for '/'
        element: <Landing />,
        loader: useProductsLoader,
      },

      {
        path: "products",
        children: [
          {
            index: true,
            loader: useProductsLoader,
            element: (
              <ErrorBoundary>
                <ProductListPage />
              </ErrorBoundary>
            ),
          },
          {
            path: ":id",
            element: (
              <ErrorBoundary>
                <ProductDetailPage />
              </ErrorBoundary>
            ),
            loader: useProductByIdLoader,
          },
        ],
      },
      {
        path: "story",
        element: <StoryPage />,
      },
      {
        path: "user",
        // element: <AuthRoute />, // wrap this around your user routes
        children: [
          {
            path: "profile",
            element: (
              <ErrorBoundary>
                <AuthRoute>
                  <UserProfilePage />
                </AuthRoute>
              </ErrorBoundary>
            ), // wrap this around your user routes
          },
          {
            path: "register",
            element: (
              <ErrorBoundary>
                <SignUpPage />
              </ErrorBoundary>
            ),
          },
          {
            path: "auth",
            element: (
              <ErrorBoundary>
                <UserAuth />
              </ErrorBoundary>
            ),
          },
        ],
      },
      {
        path: "admin",
        // element: <AuthRoute />,
        children: [
          {
            path: "",
            element: (
              <ErrorBoundary>
                <AdminDashboard />
              </ErrorBoundary>
            ),
          },
        ],
      },
      {
        path: "checkout",
        element: (
          <ErrorBoundary>
            <CheckoutPage />
          </ErrorBoundary>
        ),
      },
      {
        path: "about",
        element: <CashmereInfo />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <CartProvider>
          <RouterProvider
            router={router}
            fallbackElement={<LoadingSpinner />}
          />
        </CartProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
};

export default App;
