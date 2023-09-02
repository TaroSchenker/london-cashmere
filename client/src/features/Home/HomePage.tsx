import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../common/layout/Footer";
import Header from "../../common/layout/Header";
import Sidebar from "../../common/layout/Sidebar";
import CartPage from "../Cart/CartPage";

const HomePage = () => {
  const [navSidebarOpen, setNavSidebarOpen] = useState(false);
  const [cartSidebarOpen, setCartSidebarOpen] = useState(false); // State for cart sidebar

  const handleResize = () => {
      if (window.innerWidth > 768 && (navSidebarOpen || cartSidebarOpen)) {
          // If the screen is bigger than 768 pixels and any sidebar is open, close them.
          setNavSidebarOpen(false);
          setCartSidebarOpen(false);
      }
  };

  useEffect(() => {
    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [navSidebarOpen]);
  return (
    <div className="flex min-h-screen bg-neutral-lightest">
        <Sidebar isOpen={navSidebarOpen} onClose={() => setNavSidebarOpen(false)} />
        <CartPage isOpen={cartSidebarOpen} onClose={() => setCartSidebarOpen(false)} />
        <div className="flex flex-col flex-1">
            <Header setSidebarOpen={setNavSidebarOpen} sidebarOpen={navSidebarOpen} setCartSidebarOpen={setCartSidebarOpen} />
            <div className="flex-1 overflow-y-auto">
                <Outlet />
            </div>
            <Footer />
        </div>
    </div>
);
};

export default HomePage;
