import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch, faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="bg-primary  text-background py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Cashmere Store</h1>
        <nav className="hidden md:flex space-x-4">
          <NavLink to="/" activeClassName="text-secondary-color" exact>
            Home
          </NavLink>
          <NavLink to="/products" activeClassName="text-secondary-color">
            Shop
          </NavLink>
          <NavLink to="/about" activeClassName="text-secondary-color">
            About
          </NavLink>
          <NavLink to="/contact" activeClassName="text-secondary-color">
            Contact
          </NavLink>
          {/* Icons */}
          <NavLink to="/search">
            <FontAwesomeIcon icon={faSearch} className="text-lg" />
          </NavLink>
          <NavLink to="/favorites">
            <FontAwesomeIcon icon={faHeart} className="text-lg" />
          </NavLink>
          <NavLink to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} className="text-lg" />
          </NavLink>
          <NavLink to="/user/auth">
            <FontAwesomeIcon icon={faUser} className="text-lg" />
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
