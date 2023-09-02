import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
  setCartSidebarOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen, setCartSidebarOpen }) => {
  const navigate = useNavigate();
  return (
    <header className="bg-background text-primary py-4">
      <div className="container mx-auto flex justify-between items-center">
        <nav className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            // onMouseEnter={() => navigate("/")}
            className={({ isActive }) =>
              isActive ? "text-neutral-dark border-b-2 border-neutral-dark" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            // onMouseEnter={() => navigate("/products")}
            className={({ isActive }) =>
              isActive ? "text-neutral-dark border-b-2 border-neutral-dark" : ""
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/about"
            // onMouseEnter={() => navigate("/about")}
            className={({ isActive }) =>
              isActive ? "text-neutral-dark border-b-2 border-neutral-dark" : ""
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            // onMouseEnter={() => navigate("/contact")}
            className={({ isActive }) =>
              isActive ? "text-neutral-dark border-b-2 border-neutral-dark" : ""
            }
          >
            Contact
          </NavLink>
        </nav>

        <NavLink
            to="/"
       
          className="text-4xl font-bold text-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <h1 className="text-2xl">
          Pam's Cashmere Boutique
        </h1>
        </NavLink>

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
          <button onClick={() => setCartSidebarOpen((prevState) => !prevState)}>
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="text-xl hover:text-secondary-color"
            />
          </button>
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
        className="text-4xl p-3 hover:bg-neutral-light rounded flex items-center justify-center leading-none mt-[-10px]"
    >
        ≡
    </button>
</div>
      </div>
    </header>
  );
};

export default Header;
