import React, { createContext, useContext, useState, ReactNode } from "react";
import axios from "axios";
import { IUser } from "../types";

interface AuthProviderProps {
  children: ReactNode;
}

interface RegisterData {
  name: string;
  email: string;
  address: string;
  password: string;
  role?: string;
}
export const AuthContext = createContext<{
  currentUser: IUser | null;
  register: (data: RegisterData) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
} | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);

  console.log("currentUser", currentUser);
  const register = async (data: RegisterData) => {
    try {
      const response = await axios.post(
        "https://london-cashmere-server.onrender.com/api",
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
      setCurrentUser(response.data.user);
      localStorage.setItem("token", response.data.token); // Storing the JWT token in localStorage.
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const logout = () => {
    // Remove the JWT token from localStorage
    localStorage.removeItem("token");

    // Set the current user to null
    setCurrentUser(null);

    // call the backend API logout endpoint once it's ready, if it's needed.
    // axios.post("http://localhost:3001/api/users/logout");
  };

  return (
    <AuthContext.Provider value={{ currentUser, register, login, logout }}>
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
