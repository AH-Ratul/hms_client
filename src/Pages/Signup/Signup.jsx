import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    dateOfBirth: "",
    gender: "",
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
    if (
      !formData.username ||
      !formData.dateOfBirth ||
      !formData.gender ||
      !formData.email ||
      !formData.password
    ) {
      toast.error("All fields are required.", {
        duration: 1500,
      });
      return false;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast.error("Invalid email format.", { duration: 1500 });
      return false;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters", {
        duration: 1500,
      });
      return false;
    }
    return true;
  };

  const handleSingUp = async (e) => {
    e.preventDefault();

    // validate before submission
    if (!validateSignUp()) {
      return;
    }

    try {
      const user_register = await axios.post(
        "http://localhost:5500/userSignup",
        formData
      );

      console.log( user_register);
      toast.success(`${user_register.data.message}`, { duration: 1500 });
    } catch (error) {
      console.error(error);
      toast.error("Error Occured", { duration: 1500 });
    }

    // clear all fields
    setFormData({
      username: "",
      dateOfBirth: "",
      gender: "",
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
            <p className="font-semibold tex-lg">Fullname</p>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="border py-3 ps-3 outline-none w-96 mt-2 mb-5 rounded"
            />

            <p className="font-semibold tex-lg">Date of Birth</p>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              className="border py-3 ps-3 pe-2 outline-none w-96 mt-2 mb-5 rounded"
            />

            <p className="font-semibold tex-lg">Gender</p>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="border py-3 ps-3 outline-none w-96 mt-2 mb-5 rounded "
            >
              <option value="" className="bg-gray-200 p-4">
                Select an option
              </option>
              <option value="Male" className="bg-blue-200 p-2">
                Male
              </option>
              <option value="Female" className="bg-pink-50">
                Female
              </option>
            </select>

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
            <NavLink to="/sign-in" className="text-teal-700 hover:underline">
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
