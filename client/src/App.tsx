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
            element: <ProductListPage />,
          },
          {
            path: ":id",
            loader: useProductByIdLoader,
            element: <ProductDetailPage />,
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
            element: <AuthRoute />, // wrap this around your user routes
            children: [
              {
                element: <UserProfilePage />,
              },
            ],
          },
          {
            path: "register",
            element: <SignUpPage />,
          },
          {
            path: "auth",
            element: <UserAuth />,
          },
        ],
      },
      {
        path: "admin",
        // element: <AuthRoute />,
        children: [{ path: "", element: <AdminDashboard /> }],
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
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
    <AuthProvider>
      <RouterProvider router={router} fallbackElement={<LoadingSpinner />} />
    </AuthProvider>
  );
};

export default App;
