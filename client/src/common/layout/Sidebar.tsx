import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faShoppingBag, faInfoCircle, faEnvelope } from "@fortawesome/free-solid-svg-icons";

interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SideBarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Dimmed background */}
      {isOpen && <div 
        onClick={onClose}
        className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-20 md:hidden"
      ></div>}

      {/* Sidebar */}
      <aside
        className={`bg-background text-primary transform top-0 left-0 w-3/4 h-full fixed 
                    transition-transform duration-300 ease-in-out z-30 
                    ${isOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
      >
        <div className="flex flex-col justify-between h-full py-6 px-5">
          <div>
            <h2 className="font-bold text-2xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Menu
            </h2>
            <nav>
              <ul>
                {[
                  { path: "/", name: "Home", icon: faHome },
                  { path: "/products", name: "Shop", icon: faShoppingBag },
                  { path: "/about", name: "About", icon: faInfoCircle },
                  { path: "/contact", name: "Contact", icon: faEnvelope }
                ].map(link => (
                  <li key={link.path} className="mb-4 flex items-center space-x-3">
                  <FontAwesomeIcon icon={link.icon} className="text-lg text-primary" />
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => 
                      isActive ? "text-primary font-bold hover:text-secondary transition-colors" : "text-primary hover:text-secondary transition-colors"
                    }
                    onClick={onClose}
                  >
                    {link.name}
                  </NavLink>
                </li>
                ))}
              </ul>
            </nav>
          </div>
          <div>
            <p className="text-primary text-sm" style={{ fontFamily: "'Roboto', sans-serif" }}>
              &copy; {new Date().getFullYear()} Cashmere Store. All rights reserved.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
