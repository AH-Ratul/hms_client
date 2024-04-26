import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../Provider/AuthProvider";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { userlogin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate()

  const to = location?.state?.from?.pathname || '/';
  //console.log(location)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // form validation
  const validateLogin = () => {
    if (!formData.email || !formData.password) {
      toast.error("Email and Password are required.", {
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

  const handleSingIn = async(e) => {
    e.preventDefault();

    // validate before submission
    if (!validateLogin()) {
      return;
    }

    try {
      const login_response = await axios.post(
        "http://localhost:5500/userLogin",
        formData
      );

      if (login_response) {
        const userLog = login_response.config.data;
        //console.log(userLog);
        //console.log(login_response);
        userlogin(userLog);

        localStorage.setItem("users", userLog);

        //console.log("response", login_response.data.message);
        toast.success(`${login_response.data.message}`, { duration: 1500 });
        navigate(to);
      }
    } catch (error) {
      console.error(error);
      toast.error(`${login_response.data.error}`, { duration: 1500 });
    }

    // clear all fields
    setFormData({
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
            Welcome Back
          </h1>
          <p className="text-base text-black/60">Please Sign in your Account</p>
          <div className="mt-9 flex flex-col">
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
              onClick={handleSingIn}
              className="py-4 mt-4 bg-teal-700 hover:bg-teal-600 w-96 rounded text-white/90 font-semibold "
            >
              Sign In
            </button>
          </div>
          <p className="font-bold mt-7 mb-20 text-center w-96 text-black/60">
            Don't have an account?
            <NavLink to="/sign-up" className="text-teal-700">
              {" "}
              Signup
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

export default Signin;
