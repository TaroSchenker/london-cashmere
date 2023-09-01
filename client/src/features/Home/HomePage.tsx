import React from "react";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default HomePage;
