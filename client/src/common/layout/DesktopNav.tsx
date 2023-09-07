import { NavLink } from "react-router-dom";

const DesktopNav = () => (
  <nav className="hidden md:flex space-x-8">
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive ? "text-neutral-dark border-b-2 border-neutral-dark" : ""
      }
    >
      Home
    </NavLink>
    <NavLink
      to="/products"
      className={({ isActive }) =>
        isActive ? "text-neutral-dark border-b-2 border-neutral-dark" : ""
      }
    >
      Shop
    </NavLink>
    <NavLink
      to="/about"
      className={({ isActive }) =>
        isActive ? "text-neutral-dark border-b-2 border-neutral-dark" : ""
      }
    >
      About
    </NavLink>
    <NavLink
      to="/contact"
      className={({ isActive }) =>
        isActive ? "text-neutral-dark border-b-2 border-neutral-dark" : ""
      }
    >
      Contact
    </NavLink>
  </nav>
);

export default DesktopNav;
