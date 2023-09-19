import {
  // faBell,
  // faHeart,
  // faHome,
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../../../../hooks/useCart";

interface DesktopIconProps {
  setCartSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DesktopIcons: React.FC<DesktopIconProps> = ({ setCartSidebarOpen }) => {
  const navigate = useNavigate();
  const { cartItemCount } = useCart();

  return (
    <div className="hidden md:flex space-x-6">
      <button onClick={() => navigate("/")} aria-label="Navigate to home">
        <FontAwesomeIcon
          icon={faSearch}
          className="text-xl hover:text-secondary-color"
          aria-hidden="true"
        />
      </button>

      <button
        onClick={() => setCartSidebarOpen((prev) => !prev)}
        className="relative"
        aria-label="Toggle cart"
      >
        <FontAwesomeIcon
          icon={faShoppingCart}
          className="text-xl hover:text-secondary-color"
          aria-hidden="true"
        />
        {cartItemCount > 0 && (
          <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full text-white text-xs px-2 py-0.5">
            {cartItemCount}
          </span>
        )}
      </button>

      <NavLink to="/user/auth" aria-label="User authentication">
        <FontAwesomeIcon
          icon={faUser}
          className="text-xl hover:text-secondary-color"
          aria-hidden="true"
        />
      </NavLink>
    </div>
  );
};

export default DesktopIcons;
