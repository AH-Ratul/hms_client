import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { admin } = useAuth();
  const location = useLocation();

  if (admin) {
    return children;
  }

  if (!admin) {
    return (
      <Navigate
        to="/admin-login" // Specify the path to navigate to
        state={{ from: location }} // Pass the state object
        replace
      />
    );
  }
  return null;
};

export default PrivateRoute;
