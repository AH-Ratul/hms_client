import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const AdminSignup = () => {
  const [adminData, setAdminData] = useState({
    admin_name: "",
    admin_email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setAdminData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    if (
      !adminData.admin_name ||
      !adminData.admin_email ||
      !adminData.password
    ) {
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

  const handleRegister = async (e) => {
    e.preventDefault();

    // validate befor submit
    if (!validate()) {
      return;
    }

    // send data to server
    try {
      const response = await axios.post(
        "http://localhost:5500/adminsignup",
        adminData
      );
      console.log("response", response.data);
      toast.success("Registration Successfull", { duration: 1500 });
    } catch (error) {
      console.error("Error", error);
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
          Admin Register
        </h1>
        <p className="text-xl leading-10 flex items-center">
          <CiUser />
          Name
        </p>
        <input
          type="text"
          name="admin_name"
          value={adminData.admin_name}
          onChange={handleOnChange}
          placeholder="Name"
          className="border rounded w-full py-2 ps-2 mb-3 outline-none"
        />
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
          onClick={handleRegister}
          className="bg-sky-500 w-full  py-3 rounded text-white font-semibold text-xl"
        >
          Register
        </button>
        <div className="mt-3 text-base">
          <p>
            Already Have an Account?
            <NavLink to="/admin-login" className="text-red-700 font-semibold">
              Login
            </NavLink>
          </p>
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

export default AdminSignup;
