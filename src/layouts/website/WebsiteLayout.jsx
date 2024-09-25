import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
const WebsiteLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default WebsiteLayout;
