import React from "react";
import { useAuth } from "../../../hooks/useAuth"; // Adjust the path if necessary
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Link } from "react-router-dom";

interface UserStatusProps {
  setCartSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserStatus: React.FC<UserStatusProps> = ({ setCartSidebarOpen }) => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
    setCartSidebarOpen(false); // Assuming you want to close the cart sidebar on logout
  };

  return (
    <div className="">
      {currentUser ? (
        <>
          <span>Welcome, {currentUser.name}</span>
          <button className="ml-4" onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
          </button>
        </>
      ) : (
        <Link to="/user/auth">
          <span>Login</span>
        </Link>
      )}
    </div>
  );
};

export default UserStatus;
