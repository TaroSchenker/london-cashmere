import React from "react";
import { NavLink } from "react-router-dom";

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
      className={`fixed top-0 left-0 w-full h-full bg-black opacity-50 md:hidden`}
    ></div>}


      {/* Sidebar */}
      <aside
        className={`bg-white text-primary transform top-0 left-0 w-1/2 h-full fixed 
                    transition-transform duration-300 ease-in-out z-10
                    ${isOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
      >
        <div className="flex flex-col justify-between h-full p-medium">
          <div>
            <h2 className="font-bold text-2xl mb-medium text-primary">Cashmere Store</h2>
            <nav>
              <ul>
                {[
                  { path: "/", name: "Home" },
                  { path: "/products", name: "Shop" },
                  { path: "/about", name: "About" },
                  { path: "/contact", name: "Contact" }
                ].map(link => (
                  <li key={link.path} className="mb-small">
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        isActive
                          ? "text-primary hover:text-secondary block active"
                          : "text-primary hover:text-secondary block"
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
            <p className="text-primary text-sm">
              &copy; {new Date().getFullYear()} Cashmere Store. All rights
              reserved.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
