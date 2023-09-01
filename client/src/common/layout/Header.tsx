import React from "react";
import { NavLink } from "react-router-dom";

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="bg-primary-color text-background-color py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Cashmere Store</h1>
        <nav className="hidden md:flex">
          <NavLink 
            to="/" 
            className="mr-4" 
            activeClassName="text-secondary-color"
            exact
          >
            Home
          </NavLink>
          <NavLink 
            to="/products" 
            className="mr-4" 
            activeClassName="text-secondary-color"
          >
            Shop
          </NavLink>
          <NavLink 
            to="/about" 
            className="mr-4" 
            activeClassName="text-secondary-color"
          >
            About
          </NavLink>
          <NavLink 
            to="/contact" 
            className="mr-4" 
            activeClassName="text-secondary-color"
          >
            Contact
          </NavLink>
        </nav>
        <div className="flex md:hidden items-center">
          <button 
            onClick={() => {
              setSidebarOpen(!sidebarOpen);
            }}
            className="text-2xl p-3 hover:bg-neutral-light rounded"
          >
            ≡
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
