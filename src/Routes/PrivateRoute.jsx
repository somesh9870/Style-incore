import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let isAuth = localStorage.getItem("isAuth");
  isAuth = Boolean(isAuth);

  if (!isAuth) {
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default PrivateRoute;
