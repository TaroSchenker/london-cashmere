interface DesktopIconProps {
  setCartSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const DesktopIcons: React.FC<DesktopIconProps> = () => (
  <div className="hidden md:flex space-x-6">
    {/* <NavLink to="/">
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
          </NavLink> */}
    {/* Uncomment this section if you decide to add notifications in the future.
          <NavLink to="/notifications">
            <FontAwesomeIcon
              icon={faBell}
              className="text-xl hover:text-secondary-color"
            />
          </NavLink>
          */}
  </div>
);

export default DesktopIcons;
