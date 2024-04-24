import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext("");

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(() => {
    const storedAdmin = localStorage.getItem("admin");
    return storedAdmin ? JSON.parse(storedAdmin) : null;
  });

  // state management for user
  const [user, setUser] = useState(() => {
    const storedAdmin = localStorage.getItem("users");
    return storedAdmin ? JSON.parse(storedAdmin) : null;
  });

  const admin_login = (admindata) => {
    setAdmin(admindata);
  };

  const userlogin = (userData) => {
    setUser(userData);
  };

  useEffect(() => {
    if (admin) {
      localStorage.setItem("admin", JSON.stringify(admin));
    } else {
      localStorage.removeItem("admin");
    }
  }, [admin]); // Include admin as a dependency

  useEffect(() => {
    if (user) {
      localStorage.setItem("users", JSON.stringify(user));
    } else {
      localStorage.removeItem("users");
    }
  }, [user]);

  // handle logout
  const adminLogout = () => {
    setAdmin(null);
    localStorage.removeItem("admin");
  };

  // handle user logout
  const userlogout = () => {
    setUser(null);
    localStorage.removeItem('users');
  }

  const AuthInfo = { admin, admin_login, adminLogout, user, userlogin, userlogout };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
