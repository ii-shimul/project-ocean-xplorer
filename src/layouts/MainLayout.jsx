import React, { useEffect } from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import "animate.css";
import Headroom from "react-headroom";

const MainLayout = () => {
  // dynamic titles
  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Home | OceanXplorer";
        break;
      case "/login":
        document.title = "Login | OceanXplorer";
        break;
      case "/register":
        document.title = "Register | OceanXplorer";
        break;
      case "/userProfile":
        document.title = "User Profile | OceanXplorer";
        break;
      case "/updateProfile":
        document.title = "Update Profile | OceanXplorer";
        break;
      case "/resetPass":
        document.title = "Reset Password | OceanXplorer";
        break;
      default:
        document.title = "OceanXplorer";
    }
  }, [location]);
  return (
    <>
      <ScrollRestoration></ScrollRestoration>
      {location.pathname === "/" ? (
        <div>
          <div className="max-h-screen max-sm:max-h-[290px]">
            <Banner></Banner>
          </div>
          <div className="absolute top-0 w-full text-white z-40">
            <Headroom>
              <Navbar></Navbar>
            </Headroom>
          </div>
        </div>
      ) : (
        <Headroom>
          <Navbar></Navbar>
        </Headroom>
      )}
      <div style={{ minHeight: "calc(100vh - 376.5px)" }}>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
