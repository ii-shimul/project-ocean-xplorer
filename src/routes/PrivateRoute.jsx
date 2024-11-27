import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()
  if (loading) {
    return (
      <div
        className="flex justify-center items-center"
        style={{ minHeight: "calc(100vh - 376.5px)" }}
      >
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
  if (user && user.email) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;
