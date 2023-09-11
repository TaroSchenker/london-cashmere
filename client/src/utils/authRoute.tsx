/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

interface AuthRouteProps {
  children: React.ReactNode;
}

const AuthRoute: React.FC<AuthRouteProps> = ({ children }) => {
  const currentUser = useAuth();

  if (!currentUser) {
    return <Navigate to="/user/auth" />;
  }

  return <>{children}</>;
};

export default AuthRoute;
