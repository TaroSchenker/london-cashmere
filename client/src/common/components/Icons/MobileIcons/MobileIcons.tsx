import {
  faBars,
  faHeart,
  faHome,
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useNavigate } from "react-router-dom";

interface MobileIconsProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCartSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileIcons: React.FC<MobileIconsProps> = ({
  sidebarOpen,
  setSidebarOpen,
  setCartSidebarOpen,
}) => {
  const navigate = useNavigate();
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-background py-0 pr-10 flex justify-between items-center z-50">
      <div className="flex space-x-14 items-center pl-2">
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
      </div>
    </div>
  );
};
export default MobileIcons;
