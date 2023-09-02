import * as React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// Features
import HomePage from "./features/Home/HomePage";
import ProductListPage from "./features/Products/ProductListPage";
import ProductDetailPage from "./features/Products/ProductDetailPage";
import CartPage from "./features/Cart/CartPage";
import UserProfilePage from "./features/User/UserProfilePage";
import UserAuth from "./features/User/UserAuth";
import AdminDashboard from "./features/Admin/AdminDashboard";
import CheckoutPage from "./features/Checkout/CheckoutPage";

// Assuming you have a header and footer in the common layout
import Header from "./common/layout/Header";
import Footer from "./common/layout/Footer";
import LoadingSpinner from "./common/components/LoadingSpinner/LoadingSpinner";
import Sidebar from "./common/layout/Sidebar";
import SignUpPage from "./features/User/SignupPage";
import Landing from "./common/layout/Landing";
import AuthRoute from "./utils/authRoute";
import { AuthProvider } from "./context/AuthContext";

const routes = [
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        index: true, // The index route for '/'
        element: <Landing />,
      },
      {
        path: "products",
        children: [
          {
            index: true, 
            element: <ProductListPage />,
          },
          {
            path: ":id",
            element: <ProductDetailPage />,
          },
        ],
      },
      {
        path: "cart",
        element: <CartPage />,
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

// features/Products/productLoaders.ts
// export const productDetailLoader = ({ params }) => {
//   // You'd typically make an API call here using the params from the route.
//   // For this example, I'll return mock data.

//   const productId = params.id;

//   return fetch(`/api/products/${productId}`)
//     .then(response => response.json());
// }
