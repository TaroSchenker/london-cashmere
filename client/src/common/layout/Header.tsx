import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSearch,
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="bg-primary text-background py-4">
      <div className="container mx-auto flex justify-between items-center">
        <nav className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-neutral-light border-b-2 border-white" : ""
            }
            exact
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-neutral-light border-b-2 border-white" : ""
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-neutral-light border-b-2 border-white" : ""
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-neutral-light border-b-2 border-white" : ""
            }
          >
            Contact
          </NavLink>
        </nav>

        <h1
          className="text-4xl font-bold text-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Pam's Boutique Cashmere
        </h1>

        <div className="flex space-x-6">
          <NavLink to="/search">
            <FontAwesomeIcon
              icon={faSearch}
              className="text-xl hover:text-secondary-color"
            />
          </NavLink>
          <NavLink to="/favorites">
            <FontAwesomeIcon
              icon={faHeart}
              className="text-xl hover:text-secondary-color"
            />
          </NavLink>
          <NavLink to="/cart">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="text-xl hover:text-secondary-color"
            />
          </NavLink>
          <NavLink to="/user/auth">
            <FontAwesomeIcon
              icon={faUser}
              className="text-xl hover:text-secondary-color"
            />
          </NavLink>
        </div>

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
