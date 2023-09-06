import { NavLink } from "react-router-dom";

const Logo = () => (
  <div className="text-center mt-4">
    <NavLink to="/">
      <h1
        style={{ fontFamily: "'Oswald', sans-serif" }}
        className="text-2xl text-gray-800"
      >
        PAM&apos;S
      </h1>
      <span
        style={{ fontFamily: "'Dancing Script', cursive" }}
        className="text-xl text-gray-600"
      >
        Cashmere Boutique
      </span>
    </NavLink>
  </div>
);

export default Logo;
