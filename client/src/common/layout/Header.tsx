import React from "react";
import Logo from "../components/Logo/Logo";
import DesktopNav from "./DesktopNav";
import DesktopIcons from "../components/Icons/DesktopIcons/DesktopIcons";
import MobileIcons from "../components/Icons/MobileIcons/MobileIcons";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import UserStatus from "../components/UserStatus/UserStatus";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
// // Use it in a click handler for a logout button, for example:

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCartSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({
  sidebarOpen,
  setSidebarOpen,
  setCartSidebarOpen,
}) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <div className="bg-background text-primary md:py-2">
      <div className="container mx-auto px-4">
        {/* Upper Row for UserStatus */}
        <div className="flex justify-end mb-0">
          <UserStatus />{" "}
        </div>
        {/* Bottom Row for Logo, Navigation, and Icons */}
        <div className="flex justify-between items-center">
          <Logo />
          {/* Centered DesktopNav */}
          <DesktopNav />

          {/* Icons Group */}
          <div className="flex space-x-4 items-center">
            <DesktopIcons setCartSidebarOpen={setCartSidebarOpen} />
            <MobileIcons
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
              setCartSidebarOpen={setCartSidebarOpen}
            />
            <button onClick={handleLogout}>
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
