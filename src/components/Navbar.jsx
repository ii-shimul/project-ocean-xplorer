import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/logo.png";
import { AuthContext } from "../provider/AuthProvider";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "../../src/index.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/updateProfile"}>Update Profile</NavLink>
      </li>
      <li>
        <NavLink to={"/userProfile"}>Your Profile</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-black bg-opacity-5 z-40">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white/30 backdrop-blur-md rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl max-sm:btn-sm">
          {" "}
          <img className="h-7" src={logo} alt="" /> OceanXplorer
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end space-x-2">
        {user && user.photoURL ? (
          <Tippy content={user.displayName} placement="bottom">
            <div className="avatar online cursor-pointer">
              <div className="w-12 max-sm:w-8 rounded-full">
                <img alt="user image" src={user.photoURL} />
              </div>
            </div>
          </Tippy>
        ) : user ? (
          <Tippy content={user.displayName} placement="bottom">
            <div className="online cursor-pointer">
              <div className="w-12 max-sm:w-8 rounded-full">
                <img
                  alt="user image"
                  src="https://img.icons8.com/?size=100&id=kDoeg22e5jUY&format=png&color=000000"
                />
              </div>
            </div>
          </Tippy>
        ) : (
          <Tippy content={"You are not logged in."} placement="bottom">
            <div className="online cursor-pointer">
              <div className="w-12 max-sm:w-8 rounded-full">
                <img
                  alt="user image"
                  src="https://img.icons8.com/?size=100&id=kDoeg22e5jUY&format=png&color=000000"
                />
              </div>
            </div>
          </Tippy>
        )}
        {user ? (
          <button
            onClick={logOut}
            className="btn btn-active btn-neutral max-sm:btn-sm"
          >
            LogOut
          </button>
        ) : (
          <div className="space-x-2">
            <Link
              to={"/login"}
              className="btn btn-active btn-neutral max-sm:btn-sm"
            >
              LogIn
            </Link>
            <Link
              to={"/register"}
              className="btn btn-active btn-neutral max-sm:btn-sm max-md:hidden"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
