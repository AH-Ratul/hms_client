import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateSignUp = () => {
    if (!formData.username || !formData.email || !formData.password) {
      toast.error("All fields are required.", {
        duration: 1000,
      });
      return false;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast.error("Invalid email format.", { duration: 1000 });
      return false;
    }

    if (formData.password.length < 6) {
      toast.error("password must be at least 6 characters", {
        duration: 1000,
      });
      return false;
    }
    return true;
  };

  const handleSingUp = (e) => {
    e.preventDefault();

    if (!validateSignUp()) {
      return;
    }

    try {
      const user_login = axios.post(
        "http://localhost:5500/userSignup",
        formData
      );
      console.log("user response", user_login.data);
      toast.success("User Registration successfull", { duration: 1500 });
    } catch (error) {
      console.error(error);
    }

    // clear all fields
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="p-5 w- overflow-auto  no-scrollbar">
        <div className="mt-12 pl-20 ">
          <h1 className="text-2xl font-Singleday text-teal-600 font-bold">
            Paradise Inn
          </h1>
          <h1 className="text-3xl font-bold text-black/70 mt-8 mb-5">
            Welcome to Paradise Inn
          </h1>
          <p className="text-lg text-black/60">
            Please Register for your Account
          </p>
          <div className="mt-9 flex flex-col">
            <p className="font-semibold tex-lg">Username</p>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="border py-3 ps-3 outline-none w-96 mt-2 mb-5 rounded"
            />
            <p className="font-semibold tex-lg">Email</p>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="border py-3 ps-3 outline-none w-96 mt-2 mb-5 rounded"
            />
            <p className="font-semibold tex-lg">Password</p>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="border py-3 ps-3 outline-none w-96 mt-2 mb-5 rounded"
            />
            <button
              onClick={handleSingUp}
              className="py-4 mt-4 bg-teal-700 hover:bg-teal-600 w-96 rounded text-white/90 font-semibold "
            >
              Sign Up
            </button>
          </div>
          <p className="font-bold mt-7 mb-20 text-center w-96 text-black/60">
            Already Have an Account?
            <NavLink to="/sign-in" className="text-teal-700">
              {" "}
              Signin
            </NavLink>
          </p>
        </div>
      </div>
      <div className="">
        <img
          src="../../../public//img/bg-6.jpg"
          alt=""
          className="h-full absolute w-[50%]"
        />
      </div>
      <Toaster position="top-center" />
    </div>
  );
};

export default Signup;
