import React from "react";
import { Navigate } from "react-router-dom";

const IsAdmin = ({ user, children, isRoute }) => {
  return user?.role === "ADMIN" ? children : isRoute ? <Navigate to={user?.token ? "/" : "/not-found"} /> : null;
};

export default IsAdmin;
