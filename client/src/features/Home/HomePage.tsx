import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../common/layout/Footer";
import Header from "../../common/layout/Header";
import Sidebar from "../../common/layout/Sidebar";

const HomePage = () => {
  return (
    <>
      <div className="flex min-h-screen bg-neutral-lightest">
        {/* Sidebar: Fixed width */}
        <Sidebar className="w-64" />

        {/* Main content: Flex to take available space */}
        <div className="flex flex-col flex-1">
          <Header />
          <div className="flex-1 overflow-y-auto p-medium">
            <Outlet />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;
