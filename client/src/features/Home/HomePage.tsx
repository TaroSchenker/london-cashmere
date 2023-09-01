import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../common/layout/Footer";
import Header from "../../common/layout/Header";
import Sidebar from "../../common/layout/Sidebar";

const HomePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 768 && sidebarOpen) {
      // If the screen is bigger than 768 pixels (indicating a non-mobile view) and the sidebar is open, close it.
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [sidebarOpen]);

  return (
    <div className="flex min-h-screen bg-neutral-lightest">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex flex-col flex-1">
        <Header setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
        <div className="flex-1 overflow-y-auto p-medium">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
