import React from "react";
import Logo from "../components/Logo/Logo";
import DesktopNav from "./DesktopNav";
import DesktopIcons from "../components/Icons/DesktopIcons/DesktopIcons";
import MobileIcons from "../components/Icons/MobileIcons/MobileIcons";
import UserStatus from "../components/UserStatus/UserStatus";

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
  return (
    <div className="bg-background text-primary md:py-2">
      <div className="container mx-auto px-4">
        {/* Upper Row for UserStatus */}
        <div className="flex justify-end mb-0">
          <UserStatus setCartSidebarOpen={setCartSidebarOpen} />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
