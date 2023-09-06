import React from "react";
import Logo from "../components/Logo/Logo";
import DesktopNav from "./DesktopNav";
import DesktopIcons from "../components/Icons/DesktopIcons/DesktopIcons";
import MobileIcons from "../components/Icons/MobileIcons/MobileIcons";

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
    <div className="bg-background text-primary md:py-4">
      <div className="container mx-auto px-4 md:flex md:justify-around md:items-center">
        <Logo />
        <DesktopNav />
        <DesktopIcons setCartSidebarOpen={setCartSidebarOpen} />
        <MobileIcons
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          setCartSidebarOpen={setCartSidebarOpen}
        />
      </div>
    </div>
  );
};

export default Header;
