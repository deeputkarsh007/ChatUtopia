import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateComponent = () => {
  //   const auth = localStorage.user;
  const auth = false;
  return auth ? <Outlet /> : <Navigate to="/home" />;
};

export default PrivateComponent;
