import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer/Footer";

const Main = () => {
  //#ffffff
  return (
    <div className="font-Poppins ">
      <Header />
      <Outlet />
      <Toaster />
      <Footer />
    </div>
  );
};

export default Main;
