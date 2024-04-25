import React from "react";
import { useAuth } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const UsersPrivateRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (user) {
    return children;
  }

  if (!user) {
    toast.error("Please Log-in first!!!!!", { duration: 1500 });
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }
};

export default UsersPrivateRoute;
