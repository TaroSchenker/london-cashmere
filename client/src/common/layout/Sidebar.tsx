import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-primary-color text-text-color w-64 h-screen sticky top-0">
      <div className="flex flex-col justify-between h-full p-medium">
        <div>
          <h2 className="font-bold text-2xl mb-medium">Cashmere Store</h2>
          <nav>
            <ul>
              <li className="mb-small">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    isActive ? "text-text-color hover:text-secondary-color block active" : "text-text-color hover:text-secondary-color block"
                  }
                  end
                >
                  Home
                </NavLink>
              </li>
              <li className="mb-small">
                <NavLink 
                  to="/products" 
                  className={({ isActive }) => 
                    isActive ? "text-text-color hover:text-secondary-color block active" : "text-text-color hover:text-secondary-color block"
                  }
                >
                  Shop
                </NavLink>
              </li>
              <li className="mb-small">
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => 
                    isActive ? "text-text-color hover:text-secondary-color block active" : "text-text-color hover:text-secondary-color block"
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="mb-small">
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => 
                    isActive ? "text-text-color hover:text-secondary-color block active" : "text-text-color hover:text-secondary-color block"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <p className="text-text-color text-sm">&copy; {new Date().getFullYear()} Cashmere Store. All rights reserved.</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
