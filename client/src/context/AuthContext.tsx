import React, { createContext, useContext, useState, ReactNode } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<{
  currentUser: User | null;
  register: (data: RegisterData) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
} | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const register = async (data: RegisterData) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/users/register",
        data,
      );
      // You can set the current user here if the response contains user details.
      setCurrentUser(response.data.user);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/users/login",
        {
          email,
          password,
        },
      );
      // Assuming the response contains a user object and JWT token.
      setCurrentUser(response.data.user);
      localStorage.setItem("token", response.data.token); // Storing the JWT token in localStorage.
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, register, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }
  return context;
};

interface RegisterData {
  name: string;
  email: string;
  address: string;
  password: string;
  role?: string;
}
