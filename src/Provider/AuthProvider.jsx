import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext("");

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  // state management for admin
  const [admin, setAdmin] = useState(() => {
    const storedAdmin = localStorage.getItem("admin");
    return storedAdmin ? JSON.parse(storedAdmin) : null;
  });

  // state management for user
  const [user, setUser] = useState(() => {
    const storedAdmin = localStorage.getItem("users");
    return storedAdmin ? JSON.parse(storedAdmin) : null;
  });

  // handle admin login
  const admin_login = (admindata) => {
    setAdmin(admindata);
  };

  useEffect(() => {
    if (admin) {
      localStorage.setItem("admin", JSON.stringify(admin));
    } else {
      localStorage.removeItem("admin");
    }
  }, [admin]); // Include admin as a dependency

  // handle user login
  const userlogin = (userData) => {
    setUser(userData);
  };

  useEffect(() => {
    if (user) {
      localStorage.setItem("users", JSON.stringify(user));
    } else {
      localStorage.removeItem("users");
    }
  }, [user]); // include users as a dependency

  // handle admin-logout
  const adminLogout = () => {
    setAdmin(null);
    localStorage.removeItem("admin");
  };

  // handle user-logout
  const userlogout = () => {
    setUser(null);
    localStorage.removeItem("users");
  };

  const AuthInfo = {
    admin,
    admin_login,
    adminLogout,
    user,
    userlogin,
    userlogout,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
