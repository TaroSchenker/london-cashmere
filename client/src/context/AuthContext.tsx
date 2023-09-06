/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useContext, useState, ReactNode } from "react";

interface User {
  id: number;
  name: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<User | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>({
    id: 1,
    name: "Test User",
  }); // default for testing

  // const login = () => {
  //   setCurrentUser({ id: 1, name: "Test User" }); // Simulated login for now
  // };

  // const logout = () => {
  //   setCurrentUser(null);
  // };

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const currentUser = useContext(AuthContext);
  if (currentUser === null) {
    throw new Error(
      "useAuth must be used within an AuthProvider that sets a user.",
    );
  }
  return currentUser;
};
