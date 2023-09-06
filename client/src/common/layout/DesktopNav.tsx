import { NavLink } from "react-router-dom";

const DesktopNav = () => (
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
);

export default DesktopNav;
