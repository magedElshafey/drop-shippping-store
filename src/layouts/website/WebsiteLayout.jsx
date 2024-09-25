import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import Meta from "../../components/common/seo/Meta";
const WebsiteLayout = () => {
  return (
    <div>
      <Meta />
      <Navbar />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default WebsiteLayout;
