import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Provider/AuthProvider";

const AdminLogin = () => {
  const [adminData, setAdminData] = useState({
    admin_email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { admin_login } = useAuth();
  const location = useLocation();

  const to = location?.state?.from?.pathname;
  //console.log(location);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setAdminData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    if (!adminData.admin_email || !adminData.password) {
      toast.error("All fields are required.", {
        duration: 1500,
      });
      return false;
    }

    if (!/^\S+@\S+\.\S+$/.test(adminData.admin_email)) {
      toast.error("Invalid email format.", { duration: 1500 });
      return false;
    }

    if (adminData.password.length < 6) {
      toast.error("password must be at least 6 characters", {
        duration: 1500,
      });
      return false;
    }
    return true;
  };

  // handle login button
  const adminLogin = async (e) => {
    e.preventDefault();
    //
    if (!validate()) {
      return;
    }

    try {
      const login_response = await axios.post(
        "http://localhost:5500/adminlogin",
        adminData
      );

      if (login_response) {
        const adminLog = login_response.config.data;
        admin_login(adminLog);
        //console.log(login_response.config.data)

        // store data in local storage
        localStorage.setItem("admin", JSON.stringify(adminLog));

        console.log("response", login_response.data.message);

        navigate("/admin");
        toast.success(`${login_response.data.message}`, { duration: 1500 });
      }
    } catch (error) {
      console.error("error", error);
      toast.error("Sign In Error", { duration: 1500 });
    }

    setAdminData({
      admin_email: "",
      admin_name: "",
      password: "",
    });
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="border rounded-md w-96 mt-9 p-5 shadow-md ">
        <h1 className="text-center text-2xl font-bold text-sky-500 mb-5">
          Admin Login
        </h1>
        <p className="text-xl leading-10 flex items-center">
          <HiOutlineMail />
          Email
        </p>
        <input
          type="email"
          name="admin_email"
          value={adminData.admin_email}
          onChange={handleOnChange}
          placeholder="Email"
          className="border rounded w-full py-2 ps-2 mb-3 outline-none"
        />
        <p className="text-xl leading-10 flex items-center">
          <RiLockPasswordLine />
          Password
        </p>
        <input
          type="password"
          name="password"
          value={adminData.password}
          onChange={handleOnChange}
          placeholder="Password"
          className="border rounded w-full py-2 ps-2 outline-none mb-6"
        />
        <button
          onClick={adminLogin}
          className="bg-sky-500 w-full  py-3 rounded text-white font-semibold text-xl"
        >
          Login
        </button>
        <div className="mt-3 text-base">
          <p>
            Don't Have an Account?
            <NavLink
              to="/admin-register"
              className="text-red-700 font-semibold"
            >
              Register
            </NavLink>
          </p>
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

export default AdminLogin;
