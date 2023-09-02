import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSearch,
  faHeart,
  faShoppingCart,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
  const navigate = useNavigate();

  return (
    <div className="bg-background text-primary md:py-4">
      <div className="container mx-auto px-4 md:flex md:justify-between md:items-center">
        {/* Mobile Brand */}
        <div
          className="text-4xl font-bold text-center mt-4 md:hidden"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <NavLink to="/">
            <h1 className="text-2xl">Pam's Cashmere Boutique</h1>
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {/* Existing desktop navigation links... */}
          {/* ... keep your NavLinks here ... */}
        </nav>

        {/* Desktop Brand */}
        <div className="hidden md:block">
          <NavLink
            to="/"
            className="text-4xl font-bold text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <h1 className="text-2xl">Pam's Cashmere Boutique</h1>
          </NavLink>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/">
            <FontAwesomeIcon
              icon={faHome}
              className="text-xl hover:text-secondary-color"
            />
          </NavLink>
          <button onClick={() => navigate("/search")}>
            <FontAwesomeIcon
              icon={faSearch}
              className="text-xl hover:text-secondary-color"
            />
          </button>
          <NavLink to="/favorites">
            <FontAwesomeIcon
              icon={faHeart}
              className="text-xl hover:text-secondary-color"
            />
          </NavLink>
          <button onClick={() => setCartSidebarOpen((prev) => !prev)}>
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
          {/* Uncomment this section if you decide to add notifications in the future.
          <NavLink to="/notifications">
            <FontAwesomeIcon
              icon={faBell}
              className="text-xl hover:text-secondary-color"
            />
          </NavLink>
          */}
        </div>

        {/* Mobile Icons */}
        <div className="fixed bottom-0 left-0 right-0 md:hidden bg-background py-0 pr-10 flex justify-between items-center z-50">
        
          <div className="flex space-x-14 items-center pl-2">
            {" "}
            {/* Added items-center */}
              <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-3 hover:bg-neutral-light rounded "
          >
            <FontAwesomeIcon
              icon={faBars}
              className="text-xl hover:text-secondary-color"
            />
          </button>
            <NavLink to="/">
              <FontAwesomeIcon
                icon={faHome}
                className="text-xl hover:text-secondary-color"
              />
            </NavLink>
            <button onClick={() => navigate("/")}>
              <FontAwesomeIcon
                icon={faSearch}
                className="text-xl hover:text-secondary-color"
              />
            </button>
            <NavLink to="/">
              <FontAwesomeIcon
                icon={faHeart}
                className="text-xl hover:text-secondary-color"
              />
            </NavLink>
            <button onClick={() => setCartSidebarOpen((prev) => !prev)}>
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
            {/* Uncomment if you decide to add notifications in the future.
            <NavLink to="/notifications">
              <FontAwesomeIcon
                icon={faBell}
                className="text-xl hover:text-secondary-color"
              />
            </NavLink>
            */}
          </div>
        </div>
      </div>
     </div>
  );
};

export default Header;
