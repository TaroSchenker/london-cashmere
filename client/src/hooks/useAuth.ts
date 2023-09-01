import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
    const currentUser = useContext(AuthContext);
    if (currentUser === null) {
      throw new Error("useAuth must be used within an AuthProvider that sets a user.");
    }
    return currentUser;
  };
  